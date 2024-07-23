const Comment = ({ comment, currentUser, handleDelete, addComment }) => {
  return (
    <div className="comment-wrp">
      <div className="comment container">
        <div className="c-score">
          <img src="images/icon-plus.svg" alt="plus" className="score-control score-plus" />
          <p className="score-number">{comment.score}</p>
          <img src="images/icon-minus.svg" alt="minus" className="score-control score-minus" />
        </div>
        <div className="c-controls">
          {comment.user.username === currentUser.username ? (
            <>
              <a className="delete" onClick={() => handleDelete(comment)}>
                <img src="images/icon-delete.svg" alt="" className="control-icon" /> Delete
              </a>
              <a className="edit">
                <img src="images/icon-edit.svg" alt="" className="control-icon" /> Edit
              </a>
            </>
          ) : (
            <a className="reply">
              <img src="images/icon-reply.svg" alt="" className="control-icon" /> Reply
            </a>
          )}
        </div>
        <div className="c-user">
          <img src={comment.user.image.webp} alt="" className="usr-img" />
          <p className="usr-name">{comment.user.username}</p>
          <p className="cmnt-at">{comment.createdAt}</p>
        </div>
        <p className="c-text">
          {comment.replyingTo && <span className="reply-to">@{comment.replyingTo}</span>}
          <span className="c-body">{comment.content}</span>
        </p>
      </div>
      {comment.replies && (
        <div className="replies comments-wrp">
          {comment.replies.map(reply => (
            <Comment key={reply.id} comment={reply} currentUser={currentUser} handleDelete={handleDelete} addComment={addComment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
