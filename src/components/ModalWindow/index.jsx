import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

export default function ModalWindow(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className={props.btnStyle} variant="primary" onClick={handleShow}>
        {props.btnImg}
        {props.btnName}
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
      </Modal>
    </>
  );
}
