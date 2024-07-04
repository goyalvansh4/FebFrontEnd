import React from 'react'
import { useState } from 'react';

const Blogdata = () => {

    const [blogData , setBlogData] = useState([]);
    const [blog,setBlog] = useState({
        title:"",
        subtitle:"",
        description:"",
        image:""
    });

  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prevData) => ({
        ...prevData,
        image: reader.result,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setBlog({
        title:formData.title,
        subtitle:formData.subtitle,
        description:formData.description,
        image:formData.image

    })

    setFormData({
      title: '',
      subtitle: '',
      description: '',
      image: '',
    });

    // Example toast notification (replace with your preferred toast library)
    console.log(formData)
  };

  return (
  <>
  <div className='py-16'>
    {(blog.image) && <div className='blog w-1/2 flex flex-col bg-gray-400 items-center rounded-xl mx-10'>
    <div className='w-full '>
    <img src={blog.image} className='w-full h-full' alt="" />
    </div>
     <div className='w-full flex flex-col gap-4 p-5'>
        <p className='text-2xl font-semibold text-black'>{blog.title}</p>
        <p className='text-xl font-medium text-black'>{blog.subtitle}</p>
        <p className='text-sm font-thin text-black'>{blog.description}</p>
     </div>
   </div>
    } 
    <div className="container mx-auto p-6">
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white shadow-md rounded overflow-hidden">
      {formData.image && (
          <img
            src={formData.image}
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
            //   onClick={handleSubmit}
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

export default Blogdata
