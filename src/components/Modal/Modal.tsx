import { useRef, useState } from "react";
import "./Modal.css";

import ModalInput from "./ModalInput";
import emailjs from "@emailjs/browser";

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  const emailRef = useRef<HTMLInputElement>(null);
  const topicRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [isSended, setIsSended] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !topicRef.current?.value.trim() ||
      !emailRef.current?.value.trim() ||
      !messageRef.current?.value.trim()
    ) {
      setIsError(true);
      return;
    }

    setIsError(false);
    setIsSended(true);

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
      .then(() => {
        console.log("SUCCESS!");
      })
      .catch((error) => {
        console.log("FAILED...", error.text);
      });
  };

  return (
    <div className="w-screen min-h-screen z-50 absolute top-0 left-0 bg-black/60 flex justify-center items-center">
      {!isSended ? (
        <form className="bg-white max-h-[80%] rounded-xl px-5 min-w-[85%] lg:min-w-[40%] md:py-2">
          <h1 className="text-2xl font-bold mb-1 mt-1">Contact</h1>
          <p className={isError ? "text-red-600 block mb-2 md:mb-3" : "hidden"}>
            You didn't fill in the required inputs!
          </p>
          <ModalInput
            text="Your mail"
            ref={emailRef}
            name="email"
            type="email"
            placeholder="Email"
          />
          <ModalInput
            text="Topic"
            type="text"
            name="title"
            placeholder="Topic"
            ref={topicRef}
          />
          <ModalInput
            text="Your message"
            isTextArea={true}
            name="message"
            placeholder="Hey, I am interested in your services"
            ref={messageRef}
          />
          <p className="flex gap-x-4 justify-end pb-3 mt-1 md:mt-2 lg:mt-5">
            <button
              className="bg-primary text-white px-4 py-2 rounded-lg"
              type="submit"
              onClick={sendEmail}
            >
              Send
            </button>
            <button className="text-primary px-4 py-2" onClick={onClose}>
              Exit
            </button>
          </p>
        </form>
      ) : (
        <div className="text-center bg-white rounded-xl w-60 h-35 flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold mb-1">Your mail was sent</h2>
          <p className="text-base text-gray-400 mb-2 ">
            Thanks for contacting me!
          </p>
          <button className="text-primary px-4 py-2" onClick={onClose}>
            Exit
          </button>
        </div>
      )}
    </div>
  );
}
