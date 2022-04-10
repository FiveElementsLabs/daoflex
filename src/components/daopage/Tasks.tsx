import { Box, Checkbox, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import actions from '../../context/actions';
import { useSharedState } from '../../context/store';
import { useLoading } from '../../hooks/useLoading';

export default function Tasks({ dao }: { dao: any }) {
  const [{ task_lists }] = useSharedState();

  const borderColor = useColorModeValue('gray.300', 'gray.700');
  const hoverBorderColor = useColorModeValue('gray.400', 'gray.600');

  return (
    <>
      {task_lists && (
        <Box
          px={4}
          pt={8}
          pb={2}
          rounded='xl'
          shadow='sm'
          borderWidth='1px'
          textAlign='center'
          w='full'
          borderColor={borderColor}
          _hover={{ borderColor: hoverBorderColor }}
          transition='all 0.1s ease-in-out'
        >
          <Text fontSize='xl' fontWeight='bold' mb={4}>
            Tasks available
          </Text>

          {task_lists[dao.id].map((task: any) => (
            <Task key={task.id} task={task} />
          ))}
        </Box>
      )}
    </>
  );
}

function Task({ task }: { task: any }) {
  const [, dispatch] = useSharedState();
  const { loading } = useLoading();

  const completeTask = async (id: number) => {
    await loading(5);
    dispatch({
      type: actions.COMPLETE_TASK,
      payload: { id, reward: task.reward },
    });
  };

  return (
    <Box
      p={2}
      textAlign='left'
      mb={2}
      border='1px'
      rounded='lg'
      borderColor={useColorModeValue('gray.300', 'gray.700')}
    >
      <HStack spacing={4} alignItems='center' justifyContent='space-between'>
        <HStack spacing={2} alignItems='center' mb={1}>
          <Text fontSize='3xl' fontWeight='bold' opacity='0.8'>
            {task.id}:
          </Text>
          <Box>
            <Text fontSize='lg' mt='8px'>
              {task.title}
            </Text>
          </Box>
        </HStack>

        <Checkbox
          onChange={async () => await completeTask(task.id)}
          pr={2}
          colorScheme='green'
          size='lg'
          style={{ transform: 'scale(1.5)' }}
        />
      </HStack>
    </Box>
  );
}
