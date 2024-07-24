import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalAxios from "../../../GlobalAxios/GlobalAxios";
import { PropagateLoader } from "react-spinners";

const CareerForm = () => {
  const [careerData, setCareerData] = useState({
    full_name: "",
    email: "",
    mobile_number: "",
    apply_for: "",
    file: null,
  });

  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        let response = await GlobalAxios.get("/user/career_options");
        if (response.data.status === "success") {
          setRoles(response.data.data);
        } else {
          console.log("Failed to fetch roles");
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchRoles();
  }, []);

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
    setLoading(true);
    const formData = new FormData();
    formData.append("full_name", careerData.full_name);
    formData.append("email", careerData.email);
    formData.append("mobile_number", careerData.mobile_number);
    formData.append("apply_for", careerData.apply_for);
    formData.append("file", careerData.file);

    try {
      let response = await GlobalAxios.post("/user/career", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      // console.log("Form Data", careerData);
      return;
      toast.success("Your Application Has Been Submitted Successfully!");
      setCareerData({
        full_name: "",
        email: "",
        mobile_number: "",
        apply_for: "",
        file: null,
      });
      document.getElementById("file").value = null;
    } catch (e) {
      // console.log(e);
      toast.error("Failed to submit your application. Please try again.");
    } finally {
      setLoading(false);
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
              name="full_name"
              onChange={handleChange}
              type="text"
              id="text"
              required
              value={careerData.full_name}
              className="cclick p-4 border border-black text-black md:w-1/2 w-full"
              placeholder="Full Name"
            />
            <input
              type="tel"
              onChange={handleChange}
              id="phone"
              name="mobile_number"
              placeholder="9800000080"
              pattern="[0-9]{10}"
              value={careerData.mobile_number}
              className="cclick p-4 border border-black md:w-1/2 w-full"
              required
            />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-10">
            <input
              type="email"
              onChange={handleChange}
              id="email"
              name="email"
              required
              value={careerData.email}
              className="cclick p-4 border border-black text-black md:w-1/2 w-full"
              placeholder="Email"
            />
            <select
              onChange={handleChange}
              id="text"
              name="apply_for"
              required
              value={careerData.apply_for}
              className="cclick p-4 border border-black md:w-1/2 w-full"
            >
              <option value="">Apply For ..?</option>
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
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
          {loading ? (
            <PropagateLoader color="#1136FF" />
          ) : (
            <div className="capitalize bg-yellow-400 flex items-center justify-between px-6 py-3 gap-2 pb-shadow cursor-pointer">
              <button type="submit">
                <span>Apply Now</span>
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default CareerForm;
