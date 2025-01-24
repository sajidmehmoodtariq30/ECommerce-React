import React from "react";

const Button = ({ text, bgColor, textColor, handler = () => { } }) => {
  return (
    <button
      data-aos='fade-up'
      data-aos-duration='1000'
      data-aos-once='true'
      onClick={handler}
      className={`${bgColor} ${textColor} cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}
    >
      {text}
    </button>
  );
};

export default Button;
