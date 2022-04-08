import { SimpleGrid } from '@chakra-ui/react';
import DaoCard from './DaoCard';

export default function DaoList() {
  return (
    <SimpleGrid minChildWidth='200px' spacing='1.5rem'>
      {list.map(dao => (
        <DaoCard key={dao.id} dao={dao} />
      ))}
    </SimpleGrid>
  );
}

const list = [
  {
    id: 1,
    name: 'ENS',
    members: 12000,
    image:
      'https://464911102-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/collections%2F2TjMAeHSzwlQgcOdL48E%2Ficon%2FKWP0gk2C6bdRPliWIA6o%2Fens%20transparent%20background.png?alt=media&token=bd28b063-5a75-4971-890c-97becea09076',
  },
  {
    id: 2,
    name: 'Maker',
    members: 15000,
    image: 'https://www.pngall.com/wp-content/uploads/10/Maker-Crypto-Logo-PNG-Pic.png',
  },
  {
    id: 3,
    name: 'Uniswap',
    members: 10000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Uniswap_Logo.svg/1026px-Uniswap_Logo.svg.png',
  },
  {
    id: 4,
    name: 'Kyber',
    members: 5000,
    image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/9444.png',
  },
  {
    id: 5,
    name: 'Oasis',
    members: 31000,
    image: 'https://cryptologos.cc/logos/oasis-network-rose-logo.png',
  },
  {
    id: 6,
    name: 'Compound',
    members: 10000,
    image: 'https://cryptologos.cc/logos/compound-comp-logo.png',
  },
  {
    id: 7,
    name: 'Dydx',
    members: 10000,
    image: 'https://getcrypto.info/images/logos/dydx.png',
  },
  {
    id: 8,
    name: 'Balancer',
    members: 80000,
    image: 'https://cryptologos.cc/logos/balancer-bal-logo.png',
  },
  {
    id: 9,
    name: 'Sushi',
    members: 40000,
    image: 'https://cryptologos.cc/logos/sushiswap-sushi-logo.png',
  },
];
