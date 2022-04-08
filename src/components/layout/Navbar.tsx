import { Flex, Text } from '@chakra-ui/react';
import config from '../../app.config';

import Connect from '../Connect';
import ColorModeSwitcher from '../ColorModeSwitcher';

export default function Navbar() {
  return (
    <Flex w='full' py={4} alignItems='center' justifyContent='space-between'>
      <Text fontSize='xl' fontWeight='medium'>
        {config.appName}
      </Text>
      <div>
        <ColorModeSwitcher mr={2} />
        <Connect colorScheme='blue'>Connect Wallet</Connect>
      </div>
    </Flex>
  );
}
