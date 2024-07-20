import React from "react";
import { useQuery } from "react-query";
import { getJob } from "../helpers/api";
import Card from "../components/Card";

const Home = () => {
  const { data, isLoading, error } = useQuery("job", getJob);
  

  return <div className="mt-[30px] flex items-center justify-center flex-wrap gap-[30px]">{data && data.map((e) => <Card job={e} />)}</div>;
};

export default Home;
