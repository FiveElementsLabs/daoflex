import { useEffect, useRef } from 'react';
import {
  Spinner,
  AlertDialog,
  useDisclosure,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Box,
} from '@chakra-ui/react';
import { useSharedState } from '../context/store';

export default function LoadingState() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [{ loading }] = useSharedState();
  const cancelRef = useRef();

  useEffect(() => {
    if (loading) onOpen();
    else onClose();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <>
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef as any}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Please Wait...</AlertDialogHeader>
          <AlertDialogBody>
            <Box display='grid' placeContent='center' mb={6}>
              <Spinner size='xl' />
            </Box>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
