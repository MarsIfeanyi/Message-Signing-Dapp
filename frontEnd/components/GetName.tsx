import React, { useState } from "react";
import { useContractRead } from "wagmi";
import { MessagingSigningABI, MessageSigning_ADDRESS } from "../constants";

type Props = {};

const GetName = (props: Props) => {
  const {
    data: getNameData,
    isError: isGettingNameError,
    isLoading: isGettingName,
  } = useContractRead({
    address: MessageSigning_ADDRESS,
    abi: MessagingSigningABI,
    functionName: "getName",
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
      <p>Name: {String(getNameData)} </p>
      {isGettingNameError && (
        <p>Error getting Name, Please Check if wallet is connected</p>
      )}
      {isGettingName && <p>Getting Name....</p>}
    </div>
  );
};

export default GetName;
