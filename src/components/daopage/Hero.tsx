import { Box, Text, useColorModeValue } from '@chakra-ui/react';

export default function Hero({ dao }: { dao: any }) {
  return (
    <>
      <Box>
        <Box className='hero' rounded='lg' border='1px' borderColor={useColorModeValue('gray.300', 'gray.700')}>
          <Text fontSize='3xl' fontWeight='bold' letterSpacing={1} opacity='0.95'>
            {dao.name} DAO
          </Text>
        </Box>

        <style>
          {`
        .hero {
          background-size: auto;
          background-repeat: repeat;
          background-position: center;
          height: 100px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
        }
        `}
        </style>
      </Box>
    </>
  );
}
