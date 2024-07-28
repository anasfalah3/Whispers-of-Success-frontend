import { useState } from "react";
import ReplyInput from "./ReplyInput";
import Modal from "./Modal";
import Comment from "./Comment";
// import AlertDelete from "./Modal";
// import "./App.css";

const data = {
  currentUser: {
    avatar: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
    username: "Anas Falah",
  },
  comments: [
    {
      parent: 0,
      id: 1,
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: "1 month ago",
      score: 12,
      user: {
        avatar: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
        username: "Anas Falah",
      },
      replies: [],
    },
    {
      parent: 0,
      id: 2,
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: "2 weeks ago",
      score: 5,
      user: {
        avatar: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
        username: "maxblagun",
      },
      replies: [
        {
          parent: 2,
          id: 1,
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: "1 week ago",
          score: 4,
          replyingTo: "maxblagun",
          user: {
            avatar: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
            username: "ramsesmiron",
          },
        },
        {
          parent: 2,
          id: 2,
          content:
            "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          createdAt: "2 days ago",
          score: 2,
          replyingTo: "ramsesmiron",
          user: {
            avatar: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
            username: "juliusomo",
          },
        },
      ],
    },
  ],
};

export default function Comments() {
  const [comments, setComments] = useState(data.comments);
  const [showModal, setShowModal] = useState(false);
  const [deleteComment, setDeleteComment] = useState(null);

  const addComment = (body, parentId, replyTo = undefined) => {
    const newComment = {
      parent: parentId,
      id: Math.max(...comments.map((c) => c.id)) + 1,
      content: body,
      createdAt: "Now",
      replyingTo: replyTo,
      score: 0,
      replies: parentId === 0 ? [] : undefined,
      user: data.currentUser,
    };

    if (parentId === 0) {
      setComments([...comments, newComment]);
    } else {
      setComments(
        comments.map((comment) => {
          if (comment.id === parentId) {
            return { ...comment, replies: [...comment.replies, newComment] };
          }
          return comment;
        })
      );
    }
  };

  const handleDelete = (comment) => {
    setShowModal(true);
    setDeleteComment(comment);
  };

  const confirmDelete = () => {
    if (deleteComment.parent === 0) {
      setComments(comments.filter((c) => c.id !== deleteComment.id));
    } else {
      setComments(
        comments.map((comment) => {
          if (comment.id === deleteComment.parent) {
            return {
              ...comment,
              replies: comment.replies.filter(
                (reply) => reply.id !== deleteComment.id
              ),
            };
          }
          return comment;
        })
      );
    }
    setShowModal(false);
    setDeleteComment(null);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setDeleteComment(null);
  };

  
  return (
    <main>
      <div className="px-4 w-3/4 m-auto mt-4">
      <ReplyInput currentUser={data.currentUser} addComment={addComment} />
        <div className="flex flex-col">
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              currentUser={data.currentUser}
              handleDelete={handleDelete}
              addComment={addComment}
            />
          ))}
        </div>
      </div>

      {showModal && (
        <Modal confirmDelete={confirmDelete} cancelDelete={cancelDelete} />
      )}
    </main>
  );
}
