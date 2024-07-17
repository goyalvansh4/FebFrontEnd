import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalAxios from "../../../GlobalAxios/GlobalAxios";
import { TailSpin, ThreeDots } from "react-loader-spinner";

const Blogdata = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    image: null,
  });

  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await GlobalAxios.get("/blogs");
        if (response.data.message === "success") {
          console.log(response.data.data);
          setBlogData(response.data.data);
        }
      } catch (error) {
        console.log(
          "Error fetching blog:",
          error.response ? error.response.data : error.message
        );
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDescriptionChange = (event, editor) => {
    const data = editor.getData();
    setFormData((prevData) => ({
      ...prevData,
      description: data,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    const data = new FormData();
    data.append("title", formData.title);
    data.append("subtitle", formData.subtitle);
    data.append("description", formData.description);
    data.append("image", formData.image);

    try {
      const response = await GlobalAxios.post("/blogs/create", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.message === "success") {
        toast.success("Blog submitted successfully!");
        setFormData({
          title: "",
          subtitle: "",
          description: "",
          image: null,
        });
        window.location.reload();
      }
    } catch (error) {
      console.error(
        "Error submitting blog:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="py-16 bg-gray-100 min-h-screen">
        <div className="container px-5  mx-auto">
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <TailSpin color="#00BFFF" height={80} width={80} />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {blogData.map((blog) => (
                  <div key={blog._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src={`https://febtech-backend.onrender.com/${blog.image}`}
                      className="w-full h-48 object-cover"
                      alt="Blog"
                    />
                    <div className="p-5">
                      <h2 className="text-2xl font-semibold text-black mb-2">
                        {blog.title}
                      </h2>
                      <h3 className="text-xl font-medium text-gray-700 mb-2">
                        {blog.subtitle}
                      </h3>
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
                <form
                  onSubmit={handleSubmit}
                  className="max-w-xl mx-auto bg-white shadow-md rounded overflow-hidden"
                >
                  {formData.image && (
                    <img
                      src={URL.createObjectURL(formData.image)}
                      alt="Uploaded"
                      className="w-full h-48 object-cover"
                    />
                  )}
                  {!formData.image && (
                    <div className="bg-gray-200 w-full h-48 flex items-center justify-center">
                      <label
                        htmlFor="image"
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
                        htmlFor="title"
                      >
                        Title
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        placeholder="Enter title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="subtitle"
                      >
                        Subtitle
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="subtitle"
                        type="text"
                        placeholder="Enter subtitle"
                        name="subtitle"
                        value={formData.subtitle}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="description"
                      >
                        Description
                      </label>
                      <CKEditor
                        editor={ClassicEditor}
                        data={formData.description}
                        onChange={handleDescriptionChange}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        {uploading ? (
                          <ThreeDots color="#FFFFFF" height={20} width={20} />
                        ) : (
                          "Add Blog Post"
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Blogdata;