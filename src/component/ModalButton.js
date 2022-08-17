import React from "react";
import Modal from "react-modal";

function ModalButton({ modalIsOpen, closeModal }) {
  let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <Modal
          className="container w-1/2 lg:w-2/5 lg:h-2/3 xl:h-3/6 mx-auto bg-gray-50 shadow-md rounded-md flex px-10 py-4 md:mt-80 lg:mt-20 flex-col justify-center items-center "
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <section className="w-full flex flex-col my-10">
            <div className="text-2xl font-bold text-green-600 mb-8">
              Feedback
            </div>
            <div>
              {" "}
              <div className="mr-8">
                {" "}
                <label className="text-xl text-gray-600 ">
                  Enter your email ...
                </label>
              </div>
              <div className="transform border-2 bg-transparent text-lg duration-300 focus-within:border-green-500 my-3 shadow-md rounded-md p-2">
                <input
                  type="Email"
                  placeholder={`Email`}
                  className=" border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                />
              </div>
            </div>
            <div>
              {" "}
              <div className="mr-8">
                {" "}
                <label className="text-xl text-gray-600 ">
                  Write your feedback ...
                </label>
              </div>
              <div className="transform border-2 bg-transparent text-lg duration-300 focus-within:border-green-500 shadow-md rounded-md">
                <textarea
                  placeholder="Feedback"
                  className="w-full p-2 border-none bg-transparent outline-none placeholder:italic focus:outline-none resize-none"
                />
              </div>
            </div>
            <div className=" flex flex-row justify-between">
              <button
                onClick={closeModal}
                className="mt-5 mb-2 rounded-md bg-gradient-to-r from-green-600 to-emerald-600 ... py-2 font-medium  hover:bg-green-400  text-white shadow-lg text-center px-10"
              >
                Submit
              </button>
              <button
                onClick={closeModal}
                className="mt-5 mb-2 rounded-md bg-gradient-to-r from-green-600 to-emerald-600 ... py-2 font-medium  hover:bg-green-400   text-white shadow-lg text-center px-10"
              >
                Close
              </button>
            </div>{" "}
          </section>
        </Modal>
      </div>
    </div>
  );
}

export default ModalButton;
