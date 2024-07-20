import React from "react";
import { useQuery } from "react-query";
import { getCompany } from "../helpers/api";
import Card from "../components/Card";

const Companies = () => {
  const { data, isLoading, error } = useQuery("company", getCompany);
  if (isLoading) return <h2>Loading...</h2>;
  return <div className="mt-[30px] flex items-center justify-center flex-wrap gap-[30px]">{data && data.map((e) => <Card key={e.id} company={e} />)}</div>;
};

export default Companies;
