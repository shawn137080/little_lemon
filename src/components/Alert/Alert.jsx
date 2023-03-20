import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogOverlay,
  } from "@chakra-ui/react";
  import { useAlertContext } from "../../context/AlertProvider";
  import { useRef } from "react";


  /**
   * This is a global component that uses context to display a global alert message.
   */
  export const Alert = () => {
    const { isOpen, type, message, onClose } = useAlertContext();
    const cancelRef = useRef();
    const isSuccess = type === "success"
  
    return (
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent py={4} backgroundColor={isSuccess ? '#81C784' : '#FF8A65'}>
            <AlertDialogBody fontSize="lg" fontWeight="bold">
              {isSuccess ? 'All good!' : 'Oops!'}
            </AlertDialogBody>
            <AlertDialogBody>{message}</AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    );
  }
  

  