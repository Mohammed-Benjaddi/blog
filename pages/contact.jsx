/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Container from "../components/Elements/Container";
import SentSuccesfully from "../components/Elements/SentSuccesfully";
import Image from "next/image";
import Head from "next/head";

const contact = () => {
  const [userMessage, setUserMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoadingBtn(true);
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setMessageSent(true);
          setLoadingBtn(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Head>
        <title>The Programmer's Palette | Contact</title>
      </Head>
      {messageSent && (
        <>
          <SentSuccesfully hide={setMessageSent} />
        </>
      )}
      {/* <SentSuccesfully />
      <Backdrop /> */}
      <div className="dark:text-white bg-white dark:bg-slate-800 transition">
        <Container className={"w-full flex justify-center"}>
          <div className="w-10/12 md:w-4/5 lg:w-2/3 lg:max-w-4xl h-[calc(100vh-193px)] md:h-[calc(100vh-145px)] flex flex-col justify-center items-center">
            <div className="w-full lg:w-9/12 flex justify-evenly text-4xl font-semibold">
              <h1 className="w-full">Love to hear from you</h1>
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full lg:w-9/12 h-2/3 flex flex-col justify-evenly items-center relative"
            >
              <div className="relative w-full">
                <input
                  type="text"
                  id="user_name"
                  value={userMessage.name}
                  name="from_name"
                  onChange={(e) =>
                    setUserMessage({ ...userMessage, name: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-black dark:border-white py-1 focus:outline-none focus:border-sky-500 dark:focus:border-sky-400 focus:border-b-2 transition-colors peer"
                />
                <label
                  htmlFor="user_name"
                  className={`absolute left-0 ${
                    userMessage.name.length ? "-top-4 text-xs" : "top-1"
                  } text-gray-600 dark:text-white cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-sky-500 dark:focus:border-sky-400 transition-all`}
                >
                  Name
                </label>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  id="user_email"
                  name="user_email"
                  value={userMessage.email}
                  onChange={(e) =>
                    setUserMessage({ ...userMessage, email: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-black dark:border-white py-1 focus:outline-none focus:border-sky-500 dark:focus:border-sky-400 focus:border-b-2 transition-colors peer"
                />
                <label
                  htmlFor="user_email"
                  className={`absolute left-0 ${
                    userMessage.email.length ? "-top-4 text-xs" : "top-1"
                  } text-gray-600 dark:text-white cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-sky-500 dark:focus:border-sky-400 transition-all`}
                >
                  Email
                </label>
              </div>
              <div className="relative w-full">
                <textarea
                  type="text"
                  id="user_message"
                  rows={3}
                  name="message"
                  value={userMessage.message}
                  onChange={(e) =>
                    setUserMessage({ ...userMessage, message: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-black dark:border-white py-1 focus:outline-none focus:border-sky-500 dark:focus:border-sky-400 focus:border-b-2 transition-colors peer"
                ></textarea>
                <label
                  htmlFor="user_message"
                  className={`absolute left-0 ${
                    userMessage.message.length ? "-top-4 text-xs" : "top-1"
                  } text-gray-600 dark:text-white cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-sky-500 dark:focus:border-sky-400 transition-all`}
                >
                  Message
                </label>
              </div>
              {/* <button type="submit" className="self-start bg-slate-500 text-white cursor-pointer hover:bg-slate-300 hover:text-black transition text-lg rounded-sm py-2 px-5">
              Send
            </button> */}
              <button
                type="submit"
                className={`w-20 h-11 flex justify-center items-center relative self-start text-center bg-sky-500 text-white dark:bg-green-500 dark:text-black dark:hover:bg-green-600 hover:bg-sky-600 dark:hover:text-white cursor-pointer transition text-lg rounded-sm ${
                  loadingBtn ? "pointer-events-none" : ""
                }`}
              >
                {loadingBtn ? (
                  <Image
                    src={"/loading-spin.svg"}
                    width={25}
                    height={25}
                    alt="loading"
                    className="animate-spin"
                  />
                ) : (
                  "Send"
                )}
              </button>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default contact;
