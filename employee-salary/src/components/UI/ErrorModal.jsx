import Button from "./Button";
import Card from "./Card";
import React from "react";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onConfirm}
      className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0 left-0"
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="error-modal">
      <Card className=" w-[30rem] p-0 z-20">
        <header className="bg-gray-950 p-4 rounded-xl">
          <h2 className="text-white text-center text-xl">{props.title}</h2>
        </header>
        <section className="p-4">{props.message}</section>
        <footer className=" p-1 flex justify-end">
          <Button btnclr="red-500" onClick={props.onConfirm}>
            <path
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              strokeWidth="1.5"
            ></path>
            <path d="M15.5 8.5L8.5 15.5" strokeWidth="1.5"></path>
            <path d="M8.5 8.5L15.5 15.5" strokeWidth="1.5"></path>
          </Button>
        </footer>
      </Card>
    </div>
  );
};

const ErrorModal = (props) => {
  const { onConfirm, error } = props;
  const { title, message } = error;
  return (
    <React.Fragment>
      {createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
