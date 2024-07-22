import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalAxios from "../../GlobalAxios/GlobalAxios";
import { PropagateLoader } from "react-spinners";

const ServicesForm = () => {
  const { service } = useParams();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    mobile_number: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    formData.service = service;
    try {
      const response = await GlobalAxios.post("/user/services", formData);
      if (response.data.status === "success") {
        toast.success("Message sent successfully!");
        setFormData({
          full_name: "",
          email: "",
          mobile_number: "",
          message: "",
          service: "",
        });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
    <br />
    <br />
    <div className="flex flex-col items-center justify-center gap-5 py-10 px-4">
      <ToastContainer />
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl capitalize text-white font-bold bg-[#1136FF] text-center px-4 py-2 shadow-sm rounded">
          Services
        </span>
      </div>
      <p className="text-3xl text-center font-semibold capitalize">
        Contact Us for{" "}
        <span className="text-[#1136ff]">{service.split("-").join(" ")}</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-[60%] max-w-screen-lg mx-auto flex flex-col gap-5 py-5 rounded-md"
      >
        <div className="w-full flex flex-col md:flex-row gap-5">
          <input
            type="text"
            onChange={handleChange}
            id="name"
            name="full_name"
            value={formData.full_name}
            required
            className="p-4 border border-gray-300 text-black md:w-1/3 w-full rounded"
            placeholder="Full Name"
          />
          <input
            type="tel"
            onChange={handleChange}
            id="mobile"
            name="mobile_number"
            value={formData.mobile_number}
            required
            className="p-4 border border-gray-300 md:w-1/3 w-full rounded"
            placeholder="Phone Number"
          />
          <input
            type="email"
            onChange={handleChange}
            id="email"
            name="email"
            value={formData.email}
            required
            className="p-4 border border-gray-300 md:w-1/3 w-full rounded"
            placeholder="E-mail"
          />
        </div>
        <textarea
          name="message"
          onChange={handleChange}
          value={formData.message}
          placeholder="Write Message"
          className="w-full h-40 border border-gray-300 p-4 rounded"
        ></textarea>
        <div className="flex justify-center items-center gap-5 w-full">
          {loading ? (
            <PropagateLoader color="#1136FF" />
          ) : (
            <button
              type="submit"
              className="capitalize bg-yellow-400 flex items-center justify-between px-6 py-3 gap-2 shadow-sm rounded"
            >
              Send Us Message
              <span>
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 66 43"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <path
                      fill="#000"
                      d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                    ></path>
                    <path
                      fill="#000"
                      d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                    ></path>
                    <path
                      fill="#000"
                      d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                    ></path>
                  </g>
                </svg>
              </span>
            </button>
          )}
          </div>
      </form>
    </div>
    </>
  );
};

export default ServicesForm;
