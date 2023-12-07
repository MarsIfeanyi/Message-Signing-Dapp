import React from "react";
import SetName from "./SetName";
import GetName from "./GetName";
import SetNumber from "./SetNumber";
import GetNumber from "./GetNumber";
import SendMessage from "./SendMessage";
import GetMessage from "./GetMessage";

type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      <h2 className="flex items-center justify-center text-3xl font-medium mt-6">
        Simple Wallet Connection and Message Signing Dapp
      </h2>

      <div className="flex flex-row mt-20 items-center justify-center gap-20 font-bold">
        <div className="flex-col space-y-10">
          <SendMessage />

          <GetMessage />
        </div>

        <div className="flex-col space-y-10">
          <SetName />

          <GetName />
        </div>

        <div className="flex-col space-y-10">
          <SetNumber />
          <GetNumber />
        </div>
      </div>
    </>
  );
};

export default Hero;
