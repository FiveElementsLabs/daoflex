import { useSharedState } from '../context/store';
import actions from '../context/actions';

export const useLoadData = () => {
  const [, dispatch] = useSharedState();

  const loadDaos = () => {
    dispatch({ type: actions.SET_DAO_LIST, payload: dao_list });
  };

  const loadTasks = () => {
    dispatch({ type: actions.SET_TASK_LISTS, payload: task_lists });
  };

  const loadData = () => {
    loadDaos();
    loadTasks();
  };

  return { loadData };
};

/*****************************************************************/
// Mock data

export const dao_list = [
  {
    id: 0,
    name: 'ENS',
    members: 12000,
    image:
      'https://464911102-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/collections%2F2TjMAeHSzwlQgcOdL48E%2Ficon%2FKWP0gk2C6bdRPliWIA6o%2Fens%20transparent%20background.png?alt=media&token=bd28b063-5a75-4971-890c-97becea09076',
  },
  {
    id: 1,
    name: 'Maker',
    members: 15000,
    image: 'https://www.pngall.com/wp-content/uploads/10/Maker-Crypto-Logo-PNG-Pic.png',
  },
  {
    id: 2,
    name: 'Uniswap',
    members: 10000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Uniswap_Logo.svg/1026px-Uniswap_Logo.svg.png',
  },
  {
    id: 3,
    name: 'Kyber',
    members: 5000,
    image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/9444.png',
  },
  {
    id: 4,
    name: 'Oasis',
    members: 31000,
    image: 'https://cryptologos.cc/logos/oasis-network-rose-logo.png',
  },
  {
    id: 5,
    name: 'Compound',
    members: 10000,
    image: 'https://cryptologos.cc/logos/compound-comp-logo.png',
  },
  {
    id: 6,
    name: 'Dydx',
    members: 10000,
    image: 'https://getcrypto.info/images/logos/dydx.png',
  },
  {
    id: 7,
    name: 'Balancer',
    members: 80000,
    image: 'https://cryptologos.cc/logos/balancer-bal-logo.png',
  },
  {
    id: 8,
    name: 'Sushi',
    members: 40000,
    image: 'https://cryptologos.cc/logos/sushiswap-sushi-logo.png',
  },
];

const task_lists = [
  [
    {
      id: 1,
      title: 'Like us on Twitter 🥰',
      link: 'https://twitter.com/ens_dao',
      status: 0,
      reward: 100,
    },
    {
      id: 2,
      title: 'Follow us on Instagram 📸',
      link: 'https://www.instagram.com/ens_dao/',
      status: 0,
      reward: 100,
    },
    {
      id: 3,
      title: 'Follow us on Medium 📖',
      link: 'https://medium.com/ens-dao',
      status: 0,
      reward: 50,
    },
    {
      id: 4,
      title: 'Star us on Github 💎',
      link: 'https://github.com/ens-dao',
      status: 0,
      reward: 200,
    },
  ],
  [
    {
      id: 1,
      title: 'Like us on Twitter 🥰',
      link: 'https://twitter.com/ens_dao',
      status: 0,
      reward: 100,
    },
    {
      id: 2,
      title: 'Follow us on Instagram 📸',
      link: 'https://www.instagram.com/ens_dao/',
      status: 0,
      reward: 100,
    },
    {
      id: 3,
      title: 'Follow us on Medium 📖',
      link: 'https://medium.com/ens-dao',
      status: 0,
      reward: 50,
    },
    {
      id: 4,
      title: 'Star us on Github 💎',
      link: 'https://github.com/ens-dao',
      status: 0,
      reward: 200,
    },
  ],
];
