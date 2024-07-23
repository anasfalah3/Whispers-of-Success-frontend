import { useState } from 'react';

const ReplyInput = ({ currentUser, addComment, parentId = 0, replyTo }) => {
  const [commentBody, setCommentBody] = useState('');

  const handleSubmit = () => {
    if (commentBody.length > 0) {
      addComment(commentBody, parentId, replyTo);
      setCommentBody('');
    }
  };

  return (
    <div className="reply-input container">
      <img src={currentUser.image.webp} alt="" className="usr-img" />
      <textarea className="cmnt-input" placeholder="Add a comment..." value={commentBody} onChange={(e) => setCommentBody(e.target.value)}></textarea>
      <button className="bu-primary" onClick={handleSubmit}>SEND</button>
    </div>
  );
};

export default ReplyInput;
