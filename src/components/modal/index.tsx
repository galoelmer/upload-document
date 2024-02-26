interface ModalProps {
  handleCloseModal: () => void;
  isModalOpen: boolean;
  children?: React.ReactNode;
  modalWidth: "md" | "lg";
}

const ModalWidth = {
  lg: "w-4/5",
  md: "w-1/2",
};

const Modal = ({
  isModalOpen,
  handleCloseModal,
  children,
  modalWidth = "md",
}: ModalProps) => {
  const classNames = ModalWidth[modalWidth];

  if (!isModalOpen) return null;

  return (
    <div className="fixed -inset-x-8 inset-2 z-50 flex justify-center sm:inset-10">
      <div className="fixed inset-0 bg-black opacity-30"></div>
      <div
        className={`relative z-50 bg-slate-50 p-8 rounded-xl max-w-screen-lg shadow-md overflow-hidden ${classNames} `}
      >
        <span
          className="absolute top-0 left-0 px-2 m-5 rounded-md shadow-sm cursor-pointer bg-blue text-white text-xl"
          onClick={handleCloseModal}
        >
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
