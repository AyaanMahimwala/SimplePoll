import React, { useState, useRef } from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button
  } from "@chakra-ui/react"

export default function MyAlert(props) {
    const [isOpen, setIsOpen] = useState(props.isOpen)
    const uniqueLink = `${window.location.href}/poll/${props.link}`
    const onClose = () => {
        setIsOpen(false);
        props.finish();
    }

    const copy = () => {
      navigator.clipboard.writeText(uniqueLink);
    }
    const cancelRef = useRef()
    return (
        <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Poll Created!
            </AlertDialogHeader>

            <AlertDialogBody >
              {props.link === "" ? "Generating unique link!" : uniqueLink }
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button mx={2} ref={cancelRef} onClick={copy}>
                Copy
              </Button>
              <Button mx={2} onClick={onClose}>
                Done
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    )
}
