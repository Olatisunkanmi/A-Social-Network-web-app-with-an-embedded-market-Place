import React from "react";
import { Close, Add } from "@material-ui/icons";

const InputModal = ({ setOpenModal }) => {
  return (
    <div className="fixed bg-white/40 top-0 w-full bottom-0 z-20 flex justify-center items-center px-6">
      <div className="bg-white w-full h-96 border p-4 relative">
        <div className="flex justify-end gap-x-4 pb-3">
          <input type="file" name="" id="" />
          <button onClick={() => setOpenModal(false)}>
            <Close />
          </button>
        </div>
        <hr />
        <div className="flex gap-x-4 items-center mt-3">
          <button className="bg-gray-300 font-medium text-lg px-5 rounded-lg py-1 hover:border border-blue-500 cursor-pointer">
            <Add />
          </button>
          <button className="bg-gray-300 font-medium text-lg px-5 rounded-lg py-1 hover:border border-blue-600 cursor-pointer">
            Clear all
          </button>
          <p>{0} file(s) selected</p>
        </div>
        <div className="absolute bottom-0 right-4 mb-4">
          <button className="bg-blue-600 text-white rounded-lg px-4 py-1 cursor-pointer font-semibold">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputModal;
