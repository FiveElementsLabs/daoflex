// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

import {ISuperfluid, ISuperToken, ISuperApp, ISuperAgreement, ContextDefinitions, SuperAppDefinitions} from '@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol';

import {IConstantFlowAgreementV1} from '@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/IConstantFlowAgreementV1.sol';

import {SuperAppBase} from '@superfluid-finance/ethereum-contracts/contracts/apps/SuperAppBase.sol';

contract SuperApp is SuperAppBase {
    ISuperfluid private _host; // host: the user that subscribes to a DAO
    IConstantFlowAgreementV1 private _cfa; // the stored constant flow agreement class address
    ISuperToken private _acceptedToken; // accepted token: the dao token: DAIx
    address private _receiver; // receiver: the SuperApp contract

    constructor(
        ISuperfluid host,
        IConstantFlowAgreementV1 cfa,
        ISuperToken acceptedToken,
        address receiver
    ) {
        require(address(host) != address(0), 'host is zero address');
        require(address(cfa) != address(0), 'cfa is zero address');
        require(address(acceptedToken) != address(0), 'acceptedToken is zero address');
        require(address(receiver) != address(0), 'receiver is zero address');
        require(host.isApp(ISuperApp(receiver)), 'receiver is not an app');

        _host = host;
        _cfa = cfa;
        _acceptedToken = acceptedToken;
        _receiver = receiver;

        uint256 configWord = SuperAppDefinitions.APP_LEVEL_FINAL |
            SuperAppDefinitions.BEFORE_AGREEMENT_CREATED_NOOP |
            SuperAppDefinitions.BEFORE_AGREEMENT_UPDATED_NOOP |
            SuperAppDefinitions.BEFORE_AGREEMENT_TERMINATED_NOOP;

        _host.registerApp(configWord);
    }

    /// @dev If a new stream is opened, or an existing one is opened
    function _updateOutflow(bytes calldata ctx) private returns (bytes memory newCtx) {
        newCtx = ctx;
        // @dev This will give me the new flowRate, as it is called in after callbacks
        int96 netFlowRate = _cfa.getNetFlow(_acceptedToken, address(this));
        (, int96 outFlowRate, , ) = _cfa.getFlow(_acceptedToken, address(this), _receiver); // CHECK: unclear what happens if flow doesn't exist.
        int96 inFlowRate = netFlowRate + outFlowRate;

        // @dev If inFlowRate === 0, then delete existing flow.
        if (inFlowRate == int96(0)) {
            // @dev if inFlowRate is zero, delete outflow.
            (newCtx, ) = _host.callAgreementWithContext(
                _cfa,
                abi.encodeWithSelector(
                    _cfa.deleteFlow.selector,
                    _acceptedToken,
                    address(this),
                    _receiver,
                    new bytes(0) // placeholder
                ),
                '0x',
                newCtx
            );
        } else if (outFlowRate != int96(0)) {
            (newCtx, ) = _host.callAgreementWithContext(
                _cfa,
                abi.encodeWithSelector(
                    _cfa.updateFlow.selector,
                    _acceptedToken,
                    _receiver,
                    inFlowRate,
                    new bytes(0) // placeholder
                ),
                '0x',
                newCtx
            );
        } else {
            // @dev If there is no existing outflow, then create new flow to equal inflow
            (newCtx, ) = _host.callAgreementWithContext(
                _cfa,
                abi.encodeWithSelector(
                    _cfa.createFlow.selector,
                    _acceptedToken,
                    _receiver,
                    inFlowRate,
                    new bytes(0) // placeholder
                ),
                '0x',
                newCtx
            );
        }
    }

    function afterAgreementCreated(
        ISuperToken _superToken,
        address _agreementClass,
        bytes32, // _agreementId,
        bytes calldata, /*_agreementData*/
        bytes calldata, // _cbdata,
        bytes calldata _ctx
    ) external override onlyExpected(_superToken, _agreementClass) onlyHost returns (bytes memory newCtx) {
        return _updateOutflow(_ctx);
    }

    function afterAgreementUpdated(
        ISuperToken _superToken,
        address _agreementClass,
        bytes32, //_agreementId,
        bytes calldata, //agreementData,
        bytes calldata, //_cbdata,
        bytes calldata _ctx
    ) external override onlyExpected(_superToken, _agreementClass) onlyHost returns (bytes memory newCtx) {
        return _updateOutflow(_ctx);
    }

    function _isSameToken(ISuperToken superToken) private view returns (bool) {
        return address(superToken) == address(_acceptedToken);
    }

    function _isCFAv1(address agreementClass) private view returns (bool) {
        return
            ISuperAgreement(agreementClass).agreementType() ==
            keccak256('org.superfluid-finance.agreements.ConstantFlowAgreement.v1');
    }

    modifier onlyHost() {
        require(msg.sender == address(_host), 'RedirectAll: support only one host');
        _;
    }

    modifier onlyExpected(ISuperToken superToken, address agreementClass) {
        require(_isSameToken(superToken), 'RedirectAll: not accepted token');
        require(_isCFAv1(agreementClass), 'RedirectAll: only CFAv1 supported');
        _;
    }
}
