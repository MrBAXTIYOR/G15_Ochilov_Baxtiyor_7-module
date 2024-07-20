import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getJob } from "../helpers/api";

const JobDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery("job", getJob);

  if (isLoading) return <h2>Loading...</h2>;
  return (
    <div>
      {data &&
        data.map((e) => {
          if (id === e.id) {
            return (
              <div className="flex w-full h-screen items-center justify-center">
                <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
                  <h2 class="text-2xl font-bold mb-2 text-gray-800">{e.title}</h2>
                  <p class="text-lg text-gray-600">
                    <strong>Company:</strong> {e.company}
                  </p>
                  <p class="text-lg text-gray-600">
                    <strong>Salary:</strong> {e.salary} <span class="text-sm text-gray-500">({e.salary_type})</span>
                  </p>
                  <p class="text-lg text-gray-600">{e.description}</p>
                </div>
              </div>
            );
          }
        })}
    </div>
  );
};

export default JobDetail;
