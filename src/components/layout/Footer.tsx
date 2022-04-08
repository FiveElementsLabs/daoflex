import { Box, HStack, Link } from '@chakra-ui/react';
import config from '../../app.config';

export default function Footer() {
  const { socials } = config;
  return (
    <Box display='grid' placeItems='center' mt={12}>
      <HStack spacing={6}>
        <Link href={socials.github} target='_blank' rel='noopener noreferrer'>
          Code
        </Link>
        <Link href={socials.twitter} target='_blank' rel='noopener noreferrer'>
          Twitter
        </Link>
        <Link href={socials.discord} target='_blank' rel='noopener noreferrer'>
          Discord
        </Link>
      </HStack>
    </Box>
  );
}
