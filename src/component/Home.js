import React, { useState } from "react";
import Nav from "./nav";
import ContactForm from "./ContactForm";

function Home() {
  const [formData, setFormData] = useState(null); // State to store form data

  // Function to handle form submission
  const handleFormSubmit = (data) => {
    setFormData(data); // Update state with submitted form data
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Nav />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-4">
        {/* Heading and Paragraph */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">CONTACT US</h1>
          <p className="text-gray-600 mt-4">
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
            WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN
            REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
            EMAIL, OR SOCIAL MEDIA.
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm onSubmit={handleFormSubmit} />

        {/* Display Submitted Data */}
        {formData && (
          <div className="mt-8 bg-white p-5 shadow-md rounded-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              View Your Submitted Data Here
            </h2>
            <p>
              <strong>Name:</strong> {formData.name}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Message:</strong> {formData.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
