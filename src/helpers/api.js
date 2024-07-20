const jobAdd = async (newJob) => {
  const res = await fetch("http://localhost:3000/job", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJob),
  });
  return res.json();
};

const companyAdd = async (newCompany) => {
  const res = await fetch("http://localhost:3000/company", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCompany),
  });
  return res.json();
};

const getJob = async () => {
  const res = await fetch("http://localhost:3000/job");
  return res.json();
};

const getCompany = async () => {
  const res = await fetch("http://localhost:3000/company");
  return res.json();
};
export { companyAdd, jobAdd, getCompany, getJob };
