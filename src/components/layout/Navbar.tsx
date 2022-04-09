import { Link } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/react';
import { CrownSimple } from 'phosphor-react';
import config from '../../app.config';

import Connect from '../Connect';
import ColorModeSwitcher from '../ColorModeSwitcher';

export default function Navbar() {
  return (
    <Flex w='full' py={4} alignItems='center' justifyContent='space-between'>
      <Link to='/'>
        <Flex alignItems='center'>
          <CrownSimple size={32} weight='duotone' />
          <Text ml={1} fontSize='xl' fontWeight='medium' letterSpacing={1}>
            {config.appName}
          </Text>
        </Flex>
      </Link>
      <div>
        <ColorModeSwitcher mr={2} />
        <Connect colorScheme='blue'>Connect Wallet</Connect>
      </div>
    </Flex>
  );
}
