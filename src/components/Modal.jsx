
const Modal = ({ confirmDelete, cancelDelete }) => {
  return (
    <div className=" fixed top-0 left-0 h-full w-full flex items-center justify-center bg-black bg-opacity-70">
      <div className=" p-6 max-w-lg grid container border-2 border-gray-400 dark:border-gray-600 rounded-xl bg-white dark:bg-black">
        <h3 className="mb-5 text-xl font-normal text-black dark:text-white">Delete comment</h3>
        <p className="">Are you sure you want to delete this comment? This will remove the comment and cant be undone.</p>
        <div className="p-4 md:p-5 flex">

        <button className="text-white bg-red-600 hover:bg-red-800  focus:outline-none font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center" onClick={confirmDelete}>YES, DELETE</button>
        <button className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={cancelDelete}>NO, CANCEL</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
