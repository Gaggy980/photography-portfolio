import React from "react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="max-w-[1240px] m-auto p-4 h-screen">
      <h1 className="text-2hx font-bold text-center p-4">
        Let's work Together
      </h1>
      <form className="max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-28">
          <input
            className="border shadow-lg pt-3"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="border shadow-lg pt-3"
            type="text"
            placeholder="Your Email"
          />
        </div>
        <input
          className="border shadow-lg pt-3 w-full my-2"
          type="Text"
          placeholder="Subject"
        />
        <textarea
          className="border shadow-lg pt-3 w-full"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="border shadow-lg w-full mt-2 py-3 rounded-md hover:bg-blue-200 duration-300">
          Submit
        </button>
      </form>
      <div className="relative bottom-[-18rem]">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
