import axios from "axios";
import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalAxios from "../../../GlobalAxios/GlobalAxios";

const Blogdata = () => {
  const [htmlFormData, sethtmlFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    image: null,
  });

  const [blogdata, setBlogData] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await GlobalAxios.get("/blogs");
        if (response.data.message === "success") {
          setBlogData(response.data.data);
          let newDescription = response.data.data.description.substring(0, 20);
          console.log(response.data.data);
        }
      } catch (error) {
        console.log(
          "Error fetching blog:",
          error.response ? error.response.data : error.message
        );
      }
    };
    fetchBlog();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    sethtmlFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDescriptionChange = (event, editor) => {
    const data = editor.getData();
    sethtmlFormData((prevData) => ({
      ...prevData,
      description: data,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    sethtmlFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new htmlFormData();
    data.append("title", htmlFormData.title);
    data.append("subtitle", htmlFormData.subtitle);
    data.append("description", htmlFormData.description);
    data.append("image", htmlFormData.image);

    try {
      const response = await GlobalAxios.post("/blogs/create", data, {
        headers: {
          "Content-Type": "multipart/htmlForm-data",
        },
      });
      if (response.data.message === "success") {
        toast.success("Blog submitted successfully!");
        window.location.reload();
      }
    } catch (error) {
      console.error(
        "Error submitting blog:",
        error.response ? error.response.data : error.message
      );
    }

    sethtmlFormData({
      title: "",
      subtitle: "",
      description: "",
      image: null,
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="py-16">
        <div className="blog flex flex-wrap justify-center items-center gap-4 rounded-xl mx-2">
          {blogdata.map((blog) => (
            <div key={blog._id} className="w-[48%] h-[500px]">
              <div className="w-full h-[70%]">
                <img
                  src={`https://febtech-backend.onrender.com/${blog.image}`}
                  className="w-full h-full"
                  alt="Blog"
                />
              </div>
              <div className="w-full flex flex-col gap-4 p-5">
                <p className="text-2xl font-semibold text-black">
                  {blog.title}
                </p>
                <p className="text-xl font-medium text-black">
                  {blog.subtitle}
                </p>

                <div
                  dangerouslySetInnerHTML={{
                    __html: blog.description.substring(0, 40) + "...",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="container mx-auto p-6">
          <htmlForm
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-white shadow-md rounded overflow-hidden"
          >
            {htmlFormData.image && (
              <img
                src={URL.createObjectURL(htmlFormData.image)}
                alt="Uploaded"
                className="w-full h-48 object-cover"
              />
            )}
            {!htmlFormData.image && (
              <div className="bg-gray-200 w-full h-48 flex items-center justify-center">
                <label
                  htmlhtmlFor="image"
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                >
                  <span className="flex items-center">
                    <svg
                      className="w-8 h-8 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    Upload an image
                  </span>
                </label>
                <input
                  className="hidden"
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
              </div>
            )}
            <div className="p-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlhtmlFor="title"
                >
                  Title
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="title"
                  type="text"
                  placeholder="Enter title"
                  name="title"
                  value={htmlFormData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlhtmlFor="subtitle"
                >
                  Subtitle
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="subtitle"
                  type="text"
                  placeholder="Enter subtitle"
                  name="subtitle"
                  value={htmlFormData.subtitle}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlhtmlFor="description"
                >
                  Description
                </label>
                <CKEditor
                  editor={ClassicEditor}
                  data={htmlFormData.description}
                  onChange={handleDescriptionChange}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Add Blog Post
                </button>
              </div>
            </div>
          </htmlForm>
        </div>
      </div>
    </>
  );
};

export default Blogdata;
