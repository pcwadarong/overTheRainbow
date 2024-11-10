interface ModalProps {
  onClose: () => void;
}

const Modals = ({ onClose }: ModalProps) => {
    return (
        <div className="modal">
          <div className="modal-content">
            <button onClick={onClose}>X</button>
            <p>모달 내용</p>
          </div>
        </div>
    );
  };
  
  export default Modals;