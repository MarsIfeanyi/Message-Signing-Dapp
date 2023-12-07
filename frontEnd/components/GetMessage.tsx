import React, { useState } from "react";
import { useContractRead } from "wagmi";
import { NameNumberABI, NameNumber_ADDRESS } from "../constants";

type Props = {};

const GetMessage = (props: Props) => {
  const {
    data: getMessageData,
    isError: isGettingMessageError,
    isLoading: isGettingMessage,
  } = useContractRead({
    address: NameNumber_ADDRESS,
    abi: NameNumberABI,
    functionName: "getMessage",
    watch: true,
    onSuccess(data) {
      console.log("Success", data);
    },
    onError(error) {
      console.log("Error", error);
    },
  });

  return (
    <div>
      <p>Message: {String(getMessageData)} </p>
      {isGettingMessageError && <p>Error getting Message...</p>}
      {isGettingMessage && <p>Getting Message....</p>}
    </div>
  );
};

export default GetMessage;
