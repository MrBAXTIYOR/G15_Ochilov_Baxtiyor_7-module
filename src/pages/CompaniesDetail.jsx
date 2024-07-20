import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getJob } from "../helpers/api";
import Card from "../components/Card";
const CompaniesDetail = () => {
  const { name } = useParams();

  const { data, isLoading } = useQuery("job", getJob);
  if (isLoading) return <h2>Loading...</h2>;
  const filterData = data.filter((e) => e.company === name);

  return <div className="mt-[30px] flex items-center justify-center flex-wrap gap-[30px]">{filterData && filterData ? filterData.map((e) => <Card job={e} />) : <h1>Nodata</h1>}</div>;
};

export default CompaniesDetail;
