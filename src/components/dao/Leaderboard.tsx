import { useState, useEffect } from 'react';
import { Box, TableContainer, Table, Thead, Tbody, Th, Tr, Td, Text, useColorModeValue } from '@chakra-ui/react';
import { ethers } from 'ethers';
import { useBalance } from '../../hooks/useBalance';
import { shortenAddress } from '../../lib/helpers';

export default function Leaderboard({ dao }: { dao: any }) {
  const { getBalanceOf } = useBalance();
  const [balances, setBalances] = useState<any>(['0', '0', '0', '0', '0']);

  const fetchBalanceOf = async (accounts: string[]) => {
    while (true) {
      var new_bals = balances;
      for (var i = 0; i < accounts.length; i++) {
        const bal = await getBalanceOf(accounts[i]);
        new_bals[i] = ethers.utils.formatEther(bal);
      }
      setBalances(new_bals);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  };

  useEffect(() => {
    (async () => {
      await fetchBalanceOf(accounts);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accounts]);

  return (
    <Box
      px={4}
      py={8}
      rounded='xl'
      shadow='sm'
      borderWidth='1px'
      textAlign='center'
      w='full'
      borderColor={useColorModeValue('gray.300', 'gray.700')}
      _hover={{ borderColor: useColorModeValue('gray.400', 'gray.600') }}
      transition='all 0.1s ease-in-out'
    >
      <Text fontSize='xl' fontWeight='bold'>
        Leaderboard
      </Text>

      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>User</Th>
              <Th isNumeric>Points</Th>
            </Tr>
          </Thead>
          <Tbody>
            {accounts.map((user, idx) => (
              <Tr key={idx}>
                <Td>{shortenAddress(user)}</Td>
                <Td isNumeric>{balances[idx]}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

const accounts = [
  '0x326ba6f8acb954c476123def8b81b4c20063c97c',
  '0x141e70fe74997664fffb4d46dd7e2bff9faf9f75',
  '0x2101694f8df53e0d13b99fc229244bf675b4a5d3',
  '0xcdb10378eb2cf2811448e1e51b37edb893ba85fc',
  '0x6d1982cf26e93cbcac3867df54334fbbfca69592',
];
