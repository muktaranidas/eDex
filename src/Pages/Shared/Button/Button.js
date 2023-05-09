import React from "react";

const Button = ({ btnText }) => {
  return (
    <button className=" commonBtn whitespace-nowrap ring-2 ring-transparent hover:ring-[#3461fd] outline-none">
      {btnText}
    </button>

    // <div className="py-[12px] px-[24px]">
    //   <a
    //     href="#_"
    //     class="flex items-center justify-center    leading-6 text-white whitespace-no-wrap bg-[#FFB865] border-2 border-transparent  shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none"
    //   >
    //     {btnText}
    //   </a>
    // </div>
  );
};

export default Button;
