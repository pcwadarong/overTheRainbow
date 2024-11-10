const Modals = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    return (
      isOpen ? (
        <div className="modal">
          <div className="modal-content">
            <button onClick={onClose}>X</button>
            <p>모달 내용</p>
          </div>
        </div>
      ) : null
    );
  };
  
  export default Modals;