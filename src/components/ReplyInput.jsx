import { useState } from "react";

const ReplyInput = ({ currentUser, addComment, parentId = 0, replyTo }) => {
  const [commentBody, setCommentBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if (commentBody.length > 0) {
      addComment(commentBody, parentId, replyTo);
      setCommentBody("");
    }
  };

  return (
    <form className="mb-6">
      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-black dark:border-gray-900">
        <label htmlFor="comment" className="sr-only">
          Your comment
        </label>
        <textarea
          id="comment"
          rows="6"
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
          className="px-0 w-full text-sm text-black bg-white border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-black resize-none"
          placeholder="Write a comment..."></textarea>
      </div>
      <button
        type="submit"
        onClick={(e)=>handleSubmit(e)}
        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white dark:text-black bg-black dark:bg-white rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
        Post comment
      </button>
    </form>
  );
};

export default ReplyInput;
