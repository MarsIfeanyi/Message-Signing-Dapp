import React from "react";
import { useContractRead } from "wagmi";
import { NameNumberABI, NameNumber_ADDRESS } from "../constants";

type Props = {};

const GetNumber = (props: Props) => {
  const {
    data: getNumberData,
    isError: isGettingNumberError,
    isLoading: isGettingNumber,
  } = useContractRead({
    address: NameNumber_ADDRESS,
    abi: NameNumberABI,
    functionName: "getNumber",
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
      <p>Number: {Number(getNumberData)} </p>
      {isGettingNumberError && <p>Error getting Number</p>}
      {isGettingNumber && <p>Getting Number....</p>}
    </div>
  );
};

export default GetNumber;
