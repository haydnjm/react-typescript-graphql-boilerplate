import React from "react";
import { ApolloError } from "apollo-client";

interface Props {
  error: ApolloError
}

const Error = ({ error }: Props) => {
  return (
    <div>
      <h4>Error!</h4>
      <p>{error.message}</p>
    </div>
  );
};

export default Error;
