import { useRef } from "react";
import "./Modal.css";

import ModalInput from "./ModalInput";
import emailjs from "@emailjs/browser";

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  const emailRef = useRef<HTMLFormElement>(null);
  const topicRef = useRef<HTMLFormElement>(null);
  const messageRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_nn3go0m",
        "template_4a1n14k",
        {
          title: topicRef.current!.value,
          message: messageRef.current!.value,
          email: emailRef.current!.value,
        },
        {
          publicKey: "WOZX1rmbs_We_U3Bv",
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Form Submitted")
          onClose()
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="w-screen min-h-screen z-50 absolute top-0 left-0 bg-black/60 flex justify-center items-center ">
      <form
        onSubmit={sendEmail}
        className="bg-white max-h-[80%] md:max-h-[90%] md:min-h-[80%] rounded-xl px-5 min-w-[85%] md:py-1 lg:min-w-[40%] lg:max-w-[70%] lg:max-h-[70%]"
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-1 mt-1 md:mt-2 md:mb-2 ">
          Contact
        </h1>
        <ModalInput
          text="Your mail"
          ref={emailRef as React.Ref<HTMLInputElement>}
          name="email"
          type="email"
          placeholder="Email"
        />
        <ModalInput
          text="Topic"
          type="text"
          name="title"
          placeholder="Topic"
          ref={topicRef as React.Ref<HTMLInputElement>}
        />
        <ModalInput
          text="Your message"
          isTextArea={true}
          name="message"
          placeholder="Hey I am interested in your services"
          ref={messageRef as React.Ref<HTMLTextAreaElement>}
        />
        <p className="flex gap-x-4 justify-end pb-2 md:mt-2">
          <button
            className="bg-primary text-white px-4 py-2 rounded-lg"
            type="submit"
          >
            Send
          </button>
          <button className=" text-primary px-4 py-2" onClick={onClose}>
            Exit
          </button>
        </p>
      </form>
    </div>
  );
}
