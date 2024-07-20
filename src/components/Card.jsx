import React from "react";
import { Link } from "react-router-dom";

const Card = ({ job, company }) => {
  if (job !== undefined) {
    return (
      <Link to={`/job/${job.id}`}>
        <div className="border-2 border-gray-300 p-4 rounded-md shadow-md w-[300px]">
          <h3 className="text-xl font-semibold">{job.title}</h3>
          <p className="text-gray-700">
            <strong>Company:</strong> {job.company}
          </p>
          <p className="text-gray-700">
            <strong>Salary:</strong> ${job.salary}
          </p>
          <p className="text-gray-700">
            <strong>Salary Type:</strong> {job.salary_type}
          </p>
          <p className="text-gray-700">
            <strong>Description:</strong> {job.description}
          </p>
        </div>
      </Link>
    );
  }

  if (company !== undefined) {
    return (
      <Link to={`/companies/${company.name}`}>
            <div className="border-2 border-gray-300 p-4 rounded-md shadow-md w-[300px]">
        <h3 className="text-xl font-semibold">{company.name}</h3>

        <p className="text-gray-700">
          <strong>Year:</strong> ${company.year}
        </p>

        <p className="text-gray-700">
          <strong>Description:</strong> {company.company_description}
        </p>
      </div>
      </Link>

    );
  } else {
    return <h1>No Data</h1>;
  }
};

export default Card;
