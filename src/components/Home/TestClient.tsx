import React, { useState, useCallback } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loading from "../../lego/Loading";
import Error from "../../lego/Error";

const TEST = gql`
  query test($param: Float!) {
    testQuery(param: $param)
  }
`;

interface Data {
  testQuery: number;
}

interface Variables {
  param: number;
}

const TestClient = () => {
  const [param, setParam] = useState(5);
  const [latch, setLatch] = useState(false);

  return (
    <Query<Data, Variables> query={TEST} variables={{ param }}>
      {({ data, loading, error, refetch }) => {
        if (loading) return <Loading />;
        if (error) return <Error error={error} />;
        if (!data) return <div>No data found!</div>;

        if (latch) {
          setLatch(false);
          setParam(param + data.testQuery);
        }

        const handlePress = () => {
          setLatch(true);
          refetch({ param });
        }

        return (
          <>
            <button onClick={handlePress}>Double</button>
            <div>{data.testQuery}</div>
          </>
        );
      }}
    </Query>
  );
};

export default TestClient;
