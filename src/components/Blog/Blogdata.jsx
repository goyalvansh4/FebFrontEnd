import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Blogdata = () => {

  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    image: null,
  });

  const [blogdata, setBlogData] = useState([]);


  useEffect(() => {

    const fetchBlog = async () => {
      try {
        const response = await axios.get("http://192.168.35.21:3000/api/blogs");
        //console.log(response.data.data);
        if(response.data.message === "success"){
          setBlogData(response.data.data);
        }
      } catch (error) {
        console.log("Error fetching blog:", error.response ? error.response.data : error.message);
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const data = new FormData();
    data.append('title', formData.title);
    data.append('subtitle', formData.subtitle);
    data.append('description', formData.description);
    data.append('image', formData.image);

    try {
      const response = await axios.post("http://192.168.35.21:3000/api/blogs/create", data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
     console.log(response.data.message);
      if(response.data.message === "success"){
        console.log("Response",response.data)
        toast.success('Blog submitted successfully!');
        window.location.href = window.location.href;
      }
    } catch (error) {
      console.error("Error submitting blog:", error.response ? error.response.data : error.message);
    }

    setFormData({
      title: '',
      subtitle: '',
      description: '',
      image: null,
    });
  };

  return (
    <>
      <ToastContainer />
      <div className='py-16'>
          <div className='blog flex flex-wrap justify-center items-center gap-4  items-center rounded-xl mx-2'>
            {blogdata.map((blog) => {
              return <div className='w-[48%] h-[500px] '>
              <div className='w-full h-[70%]'>
              <img src={"http://192.168.35.21:3000/"+blog.image} className='w-full h-full' alt="not found" />
               </div>
              <div className='w-full flex flex-col gap-4 p-5'>
              <p className='text-2xl font-semibold text-black'>{blog.title}</p>
              <p className='text-xl font-medium text-black'>{blog.subtitle}</p>
              <p className='text-sm font-thin text-black'>{blog.description}</p>
            </div>
              </div>
            })}
          </div>
        <div className="container mx-auto p-6">
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white shadow-md rounded overflow-hidden">
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
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  placeholder="Enter description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
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
          </form>
        </div>
      </div>
    </>
  );
};

export default Blogdata;
