import React from "react";

const Button = ({ btnText }) => {
  return (
    <button className=" commonBtn whitespace-nowrap ring-2 ring-transparent hover:ring-[white] outline-none">
      {btnText}
    </button>
  );
};

export default Button;
