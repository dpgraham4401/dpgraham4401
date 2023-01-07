import React from "react";
import {
  Toast,
  ToastContainer,
  ToastContainerProps,
  ToastProps,
} from "react-bootstrap";

interface DpgToastProps extends ToastProps, ToastContainerProps {
  title?: string;
  show: boolean;
  setShow: () => void;
}

function DpgToast(props: DpgToastProps) {
  return (
    <ToastContainer
      className="my-3"
      position={props.position ? props.position : "top-center"}
    >
      <Toast
        delay={8000}
        autohide={props.autohide ? props.autohide : true}
        show={props.show}
        onClose={props.setShow}
      >
        <Toast.Header className="bg-primary">
          <strong className="me-auto text-white">{props.title}</strong>
        </Toast.Header>
        <Toast.Body>{props.children}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default DpgToast;
