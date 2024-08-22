import { AiOutlineCloseCircle } from "react-icons/ai";

const AlertModal = ({ message, closeModal }) => {
  return (
    <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 backdrop-blur-sm z-20">
      <div
        className={`flex justify-center items-center relative m-4 p-3 shadow-2xl bg-black rounded h-[200px] w-[80%] border-2 border-darkGray`}
      >
        <AiOutlineCloseCircle
          onClick={closeModal}
          size={30}
          className="fill-orange absolute right-[-15px] top-[-15px] cursor-pointer"
        />
        <p className="text-white text-center text-xl">{message}</p>
      </div>
    </div>
  );
};

export default AlertModal;