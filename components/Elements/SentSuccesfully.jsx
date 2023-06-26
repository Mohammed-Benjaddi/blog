import Image from "next/image";
import React from "react";
import Backdrop from "./Backdrop";

const SentSuccesfully = ({ hide }) => {
  return (
    <>
      <Backdrop hide={hide} />
      <div className="w-[600px] h-40 flex justify-evenly items-center text-xl z-100 rounded-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-100 border-slate-300 border-2 transition-all duration-1000 animate-show-msg">
        <div className="flex justify-center items-center">
          <Image
            src="/sent-succesfully.gif"
            alt="done"
            width={90}
            height={90}
            loading="eager"
          />
        </div>
        <div>
          <p>The message has been sent successfully</p>
          <button
            onClick={() => hide(false)}
            className="bg-slate-500 text-white cursor-pointer hover:bg-green-500 transition text-lg rounded-sm py-0.5 px-3 absolute left-1/2 bottom-3 -translate-x-1/2"
          >
            Done!
          </button>
        </div>
      </div>
    </>
  );
};

export default SentSuccesfully;
