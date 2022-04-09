import { SimpleGrid } from '@chakra-ui/react';
import { useSharedState } from '../../context/store';

import DaoCard from './DaoCard';

export default function DaoList() {
  const [{ dao_list }] = useSharedState();

  return (
    <SimpleGrid minChildWidth='200px' spacing='1.5rem'>
      {dao_list?.map((dao: any) => (
        <DaoCard key={dao.id} dao={dao} />
      ))}
    </SimpleGrid>
  );
}
