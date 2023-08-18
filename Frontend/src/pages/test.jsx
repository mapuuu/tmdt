import React from "react";

const Modal = () => {
  return(
    <div className="w-full relative">
      <div className="bg-red-200 w-[50%] fixed h-[50%] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <input className="absolute" type="range" />
        <input className="absolute" type="range" />
      </div>
    </div>
  )
}
export default Modal;