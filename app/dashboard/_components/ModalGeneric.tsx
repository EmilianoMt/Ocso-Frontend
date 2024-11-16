"use client";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Image,
  Button,
} from "@nextui-org/react";
import { ReactNode } from "react";

export default function ModalGeneric({
  children,
  icon,

}: {
  children: ReactNode;
  icon: ReactNode;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="primary" onPress={onOpen}>
        {icon}
      </Button>
      <Modal
        className="bg-orange-400"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <>
              <ModalBody>{children}</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}