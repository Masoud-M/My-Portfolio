import React from "react";
import { TypeAnimation } from "react-type-animation";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <p className="text-2xl text-gray-500 self-start pl-2">
        &emsp;&#60;div&#62;
      </p>
      <p className="text-2xl text-gray-500 self-start pl-2">
        &emsp;&emsp;&#60;h1&#62;
      </p>
      <h1 className="py-4 text-4xl text-bold  text-center text-orange-500">
        <TypeAnimation
          sequence={["Contact", 1000, " ", 1000]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{
            fontSize: "1em",
            display: "inline-block",
            paddingLeft: "5px",
          }}
        />
      </h1>
      <p className="text-2xl text-gray-500 self-start pl-2">
        &emsp;&emsp;&#60;&#47;h1&#62;
      </p>
      <p className="text-2xl text-gray-500 self-start pl-2">
        &emsp;&emsp;&#60;form&#62;
      </p>
      <form
        action="https://getform.io/f/32ad80e6-3f6d-410f-8727-76a999806fcf"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2 text-gray-300">Name</label>
            <input
              className="border-2  rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2 text-gray-300">
              Phone
            </label>
            <input
              className="border-2  rounded-lg p-3 flex border-gray-300"
              type="text"
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2 text-gray-300">Email</label>
          <input
            className="border-2  rounded-lg p-3 flex border-gray-300"
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2 text-gray-300">
            Subject
          </label>
          <input
            className="border-2  rounded-lg p-3 flex border-gray-300"
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2 ">
          <label className="uppercase text-sm py-2 text-gray-300">
            Message
          </label>
          <textarea
            className="border-2 rounded-lg  p-3 border-gray-300"
            name="message"
            rows="10"
          ></textarea>
        </div>
        <button className="bg-orange-500 text-gray-100 mt-4 w-full p-4 rounded-lg">
          Send Message
        </button>
      </form>
      <p className="text-2xl text-gray-500 self-start pl-2">
        &emsp;&#60;&#47;form&#62;
      </p>
      <p className="text-2xl text-gray-500 self-start pl-2">
        &#60;&#47;div&#62;
      </p>
    </div>
  );
};

export default Contact;
