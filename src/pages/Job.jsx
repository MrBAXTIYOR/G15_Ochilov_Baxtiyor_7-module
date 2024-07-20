import React from "react";
import Card from "../components/Card";
import { useQuery } from "react-query";
import { getJob } from "../helpers/api";

const Job = () => {
  const { data, isLoading, error } = useQuery("job", getJob);
  if (isLoading) return <h2>Loading...</h2>;
  return <div className="mt-[30px] flex items-center justify-center flex-wrap gap-[30px]">{data && data.map((e) => <Card key={e.id} job={e} />)}</div>;
};

export default Job;
