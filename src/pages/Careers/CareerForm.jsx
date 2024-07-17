import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalAxios from "../../../GlobalAxios/GlobalAxios";

const CareerForm = () => {
  const [careerData, setCareerData] = useState({
    name: "",
    email: "",
    mobile: "",
    applyFor: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setCareerData({ ...careerData, [name]: files[0] });
    } else {
      setCareerData({ ...careerData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", careerData.name);
    formData.append("email", careerData.email);
    formData.append("mobile", careerData.mobile);
    formData.append("applyFor", careerData.applyFor);
    formData.append("file", careerData.file);

    try {
      let response = await GlobalAxios.post("/career/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      console.log("Form Data", careerData);
      toast.success("Your Application Has Been Submitted Successfully!");
    } catch (e) {
      console.log(e);
      toast.error("Failed to submit your application. Please try again.");
    }
  };

  return (
    <div
      id="cForm"
      className="w-[85%] my-10 border border-black mx-auto bg-white flex flex-col items-center gap-10"
    >
      <ToastContainer />
      <div className="mt-16">
        <span className="text-xl capitalize text-white font-bold bg-[#1136FF] text-center px-2 py-2 a-shadow-sm rounded">
          Opportunity
        </span>
      </div>
      <p className="md:text-4xl text-2xl text-center">
        We are thrilled to have you join our team and
        <br /> look Forward to a successful and productive <br />
        working relationship.
      </p>
      <form onSubmit={handleSubmit} className="w-[100%]">
        <div className="w-[85%] mx-auto flex flex-col gap-10 ">
          <div className="w-full flex flex-col md:flex-row gap-10">
            <input
              name="name"
              onChange={handleChange}
              type="text"
              id="text"
              required
              className="cclick p-4 border border-black text-black md:w-1/2 w-full"
              placeholder="Full Name"
            />
            <input
              type="tel"
              onChange={handleChange}
              name="mobile"
              id="tel"
              required
              className="cclick p-4 border border-black md:w-1/2 w-full"
              placeholder="Phone Number"
            />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-10">
            <input
              type="email"
              onChange={handleChange}
              id="email"
              name="email"
              required
              className="cclick p-4 border border-black text-black md:w-1/2 w-full"
              placeholder="Email"
            />
            <select
              onChange={handleChange}
              id="text"
              name="applyFor"
              required
              className="cclick p-4 border border-black md:w-1/2 w-full"
            >
              <option value="">Apply For ..?</option>
              <option value="full-stack dev">Full-Stack Dev</option>
              <option value="front-end dev">Front-End Dev</option>
              <option value="php dev">PHP Dev</option>
              <option value="wordpress dev">WordPress Dev</option>
            </select>
          </div>
          <input
            type="file"
            name="file"
            id="file"
            required
            onChange={handleChange}
            className="border border-black p-3"
          />
        </div>
        <div className="flex justify-center items-center w-full my-10">
          <div className="capitalize bg-yellow-400 flex items-center justify-between px-6 py-3 gap-2 pb-shadow cursor-pointer">
            <button type="submit">
              <span>Apply Now</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CareerForm;