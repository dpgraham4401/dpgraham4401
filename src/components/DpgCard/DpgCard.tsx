import React from "react";
import { Card, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

interface DpgCardProps {
  title?: string;
  children?: any;
  message?: string;
}

function DpgCard({ children }: DpgCardProps) {
  return <Card className="m-3 border-0">{children}</Card>;
}

DpgCard.Header = function ({ title }: DpgCardProps) {
  return (
    <Card.Header className="bg-secondary text-light ">
      <div className="d-flex justify-content-start p-1 px-2">
        <div className="fw-bold h5 mb-0">{title}</div>
      </div>
    </Card.Header>
  );
};

DpgCard.Body = function ({ children }: DpgCardProps) {
  return (
    <Card.Body className="rounded-bottom">
      <Container className="py-2">{children}</Container>
    </Card.Body>
  );
};

DpgCard.Footer = function ({ children }: DpgCardProps) {
  return (
    <Card.Footer className="bg-light">
      <div className="d-flex justify-content-start gap-2">{children}</div>
    </Card.Footer>
  );
};

DpgCard.Spinner = function ({ message }: DpgCardProps) {
  return (
    <h1 className="d-flex justify-content-center bg-transparent py-3">
      <FontAwesomeIcon className="fa-spin text-muted" icon={faCircleNotch} />
      &nbsp;&nbsp;{message}
    </h1>
  );
};

export default DpgCard;
