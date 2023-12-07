import React, { useState } from "react";
import { useContractRead } from "wagmi";
import { NameNumberABI, NameNumber_ADDRESS } from "../constants";

type Props = {};

const GetName = (props: Props) => {
  const {
    data: getNameData,
    isError: isGettingNameError,
    isLoading: isGettingName,
  } = useContractRead({
    address: NameNumber_ADDRESS,
    abi: NameNumberABI,
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
      {isGettingNameError && <p>Error getting Name</p>}
      {isGettingName && <p>Getting Name....</p>}
    </div>
  );
};

export default GetName;
