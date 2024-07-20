import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { companyAdd, getCompany, jobAdd } from "../helpers/api";
import { useMutation, useQuery, useQueryClient } from "react-query";

const Add = () => {
  const queryClient = useQueryClient();
  const [tab, setTab] = useState(0);
  const { register: registerJob, handleSubmit: handleSubmitJob, reset: resetJob } = useForm();
  const { register: registerCompany, handleSubmit: handleSubmitCompany, reset: resetCompany } = useForm();

  const { data: companies, isLoading, error } = useQuery("company", getCompany);

  const companyMutate = useMutation(companyAdd, {
    onSuccess: () => {
      queryClient.invalidateQueries("company");
    },
  });

  const jobMutate = useMutation(jobAdd, {
    onSuccess: () => {
      queryClient.invalidateQueries("job");
    },
  });

  const jobSubmit = (data) => {
    jobMutate.mutate(data);
    resetJob();
  };

  const companySubmit = (data) => {
    companyMutate.mutate(data);
    resetCompany();
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error loading data</h1>;

  return (
    <div className="flex flex-col items-center justify-center mt-[50px]">
      <div className="flex items-center mb-[15px] gap-5">
        <button className={`border-2 p-2 rounded-md ${tab === 0 ? "bg-black text-white" : ""}`} onClick={() => setTab(0)}>
          Job
        </button>
        <button className={`border-2 p-2 rounded-md ${tab === 1 ? "bg-black text-white" : ""}`} onClick={() => setTab(1)}>
          Company
        </button>
      </div>
      {tab === 0 ? (
        <form className="border p-4 flex items-center justify-center flex-col gap-4 w-[600px]" onSubmit={handleSubmitJob(jobSubmit)}>
          <h2 className="text-[20px] font-bold">Add Job</h2>
          <input type="text" placeholder="Job Title" className="border-2 p-[5px] rounded" {...registerJob("title", { required: true })} />
          <select className="border-2 p-[5px] rounded" {...registerJob("company", { required: true })}>
            <option value="">Select Company</option>
            {companies ? companies.map((e) => <option key={e.id} value={e.name}>{e.name}</option>) : "No data"}
          </select>
          <input type="number" placeholder="Salary" className="border-2 p-[5px] rounded" {...registerJob("salary", { required: true })} />
          <select className="border-2 p-[5px] rounded" {...registerJob("salary_type", { required: true })}>
            <option value="">Select Salary Type</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
            <option value="hourly">Hourly</option>
          </select>
          <textarea placeholder="Job Description" rows={7} className="border-2 w-full border-black p-[5px] rounded" {...registerJob("description", { required: true })}></textarea>
          <button type="submit" className="border-2 border-black p-2 rounded-md">Submit</button>
        </form>
      ) : (
        <form className="border p-4 flex items-center justify-center flex-col gap-4 w-[600px]" onSubmit={handleSubmitCompany(companySubmit)}>
          <h2 className="text-[20px] font-bold">Add Company</h2>
          <input type="text" placeholder="Company Name" className="border-2 p-[5px] rounded" {...registerCompany("name", { required: true })} />
          <input type="date" className="border-2 p-[5px] rounded" {...registerCompany("year", { required: true })} />
          <textarea rows={7} placeholder="Company Description" className="border-2 w-full border-black p-[5px] rounded" {...registerCompany("company_description", { required: true })}></textarea>
          <button type="submit" className="border-2 border-black p-2 rounded-md">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Add;
