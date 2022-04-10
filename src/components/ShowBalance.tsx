import { FC, ReactElement, useEffect, useState } from 'react';
import { ethers } from 'ethers';

const ANIMATION_MINIMUM_STEP_TIME = 100;

const FlowingBalance: FC<{
  balanceWei: any;
  timestamp: any;
  flowRateWei: string;
  format?: (flowingBalanceWei: string) => string;
}> = ({ balanceWei, timestamp, flowRateWei, format = x => x }): ReactElement => {
  const [formattedValue, setFormattedValue] = useState('');
  useEffect(() => {
    const balanceBigNumber = balanceWei;
    const flowRateBigNumber = ethers.BigNumber.from(flowRateWei);
    const balanceTimestampBigNumber = ethers.BigNumber.from(timestamp).mul(1000);

    let stopAnimation = false;
    let lastAnimationTimestamp: DOMHighResTimeStamp = 0;

    const animationStep = (currentAnimationTimestamp: DOMHighResTimeStamp) => {
      if (currentAnimationTimestamp - lastAnimationTimestamp > ANIMATION_MINIMUM_STEP_TIME) {
        if (stopAnimation) {
          return;
        }

        const currentTimestampBigNumber = ethers.BigNumber.from(new Date().getTime());

        setFormattedValue(
          format(
            balanceBigNumber
              .add(currentTimestampBigNumber.sub(balanceTimestampBigNumber).mul(flowRateBigNumber).div(1000))
              .toString()
          )
        );

        lastAnimationTimestamp = currentAnimationTimestamp;
      }
      window.requestAnimationFrame(animationStep);
    };

    window.requestAnimationFrame(animationStep);

    return () => {
      stopAnimation = true;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [balanceWei]);
  return <span>{formattedValue}</span>;
};

export default FlowingBalance;
