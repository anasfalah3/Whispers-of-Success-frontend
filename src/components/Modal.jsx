
const Modal = ({ confirmDelete, cancelDelete }) => {
  return (
    <div className="modal-wrp">
      <div className="modal container">
        <h3>Delete comment</h3>
        <p>Are you sure you want to delete this comment? This will remove the comment and cant be undone.</p>
        <button className="yes" onClick={confirmDelete}>YES, DELETE</button>
        <button className="no" onClick={cancelDelete}>NO, CANCEL</button>
      </div>
    </div>
  );
};

export default Modal;
