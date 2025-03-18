import React, { useState } from "react";
import { MdMessage, MdPhone, MdEmail } from "react-icons/md";

function ContactForm({ onSubmit }) {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    onSubmit(formValues); // Pass form data to parent
    setFormValues({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="container mx-auto px-4 py-2 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Contact Options */}
      <div className="bg-white p-8 shadow-md rounded-md">
        <div className="mb-6">
          {/* First Row Buttons */}
          <div className="flex space-x-4 mb-4">
            {/* First Button */}
            <button className="flex items-center justify-center bg-black text-white px-4 py-2 rounded-md w-1/2">
              <MdMessage className="w-5 h-5 mr-2" /> {/* Message Icon */}
              VIA SUPPORT CHAT
            </button>

            {/* Second Button */}
            <button className="flex items-center justify-center bg-black text-white px-4 py-2 rounded-md w-1/2">
              <MdPhone className="w-5 h-5 mr-2" /> {/* Phone Icon */}
              VIA PHONE
            </button>
          </div>

          {/* Second Row Button */}
          <div>
            <button className="flex items-center justify-center bg-white text-black border border-black px-4 py-2 rounded-md w-full">
              <MdEmail className="w-5 h-5 mr-2" /> {/* Email Icon */}
              VIA EMAIL SUPPORT
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-600 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formValues.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 ml-auto block"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="flex items-center justify-center">
        <img
          src="/Images/contkk.svg"
          alt="Contact"
          className="rounded-md shadow-md w-full h-auto"
        />
      </div>
    </div>
  );
}

export default ContactForm;
