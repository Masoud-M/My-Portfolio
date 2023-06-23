import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = ({ displayMode }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const secondaryTextStyle = " text-2xl text-gray-500 font-semibold font-sans ";
  const labelStyle = `${displayMode.secondaryText} uppercase font-semibold text-sm py-2 `;
  const inputStyle =
    "border-2 bg-zinc-300  rounded-lg p-3 flex border-gray-300";
  return (
    <div data-aos="zoom-in" id="contact" className="my-[100px]">
      <div className="w-[90%] lg:w-[65%] mx-auto">
        <div className="md:pl-[100px]">
          <div className="flex flex-col my-4">
            <span className={`${secondaryTextStyle}  mb-4 `}>
              &#60;div&#62;
            </span>
            <div className="my-4">
              <span className={`${secondaryTextStyle}   `}>
                &emsp;&#60;h1&#62;
              </span>
              <div
                className={`${displayMode.accentText} items-center justify-center my-4 flex sm:text-5xl text-4xl font-bold`}
              >
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
              </div>
              <span className={`${secondaryTextStyle} my-4  `}>
                &emsp;&#60;&#47;h1&#62;
              </span>
            </div>
            <span className={`${secondaryTextStyle} my-4 `}>
              &emsp;&#60;form&#62;
            </span>
            <div className="flex flex-col my-4 px-10">
              <form
                action="https://getform.io/f/32ad80e6-3f6d-410f-8727-76a999806fcf"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className={labelStyle}>Name</label>
                    <input className={inputStyle} type="text" name="name" />
                  </div>
                  <div className="flex flex-col">
                    <label className={labelStyle}>Phone</label>
                    <input className={inputStyle} type="text" name="phone" />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className={labelStyle}>Email</label>
                  <input className={inputStyle} type="email" name="email" />
                </div>
                <div className="flex flex-col py-2">
                  <label className={labelStyle}>Subject</label>
                  <input className={inputStyle} type="text" name="subject" />
                </div>
                <div className="flex flex-col py-2 ">
                  <label className={labelStyle}>Message</label>
                  <textarea
                    className={inputStyle}
                    name="message"
                    rows="10"
                  ></textarea>
                </div>
                <button
                  className={`${displayMode.accentColor}  font-semibold mt-4 w-full p-4 rounded-lg hover:text-white transition`}
                >
                  Send Message
                </button>
              </form>
            </div>
            <span className={`${secondaryTextStyle}  ml-5 mt-4 `}>
              &#60;&#47;form&#62;
            </span>
            <br />
            <span className={`${secondaryTextStyle}   `}>
              &#60;&#47;div&#62;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
