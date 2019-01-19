import * as React from "react";

// Adding the "I" prefix is a convention to make it clear its' a custom interface
interface ICounterOutputProps {
  counter: number;
}

const counterOutput = (props: ICounterOutputProps) => {
  return <p style={{ textAlign: "center" }}>{props.counter}</p>;
};

export default counterOutput;
