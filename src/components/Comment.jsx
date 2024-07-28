import { Reply, ThumbsUp } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HiDotsHorizontal } from "react-icons/hi";

const Comment = ({ comment, currentUser, handleDelete, addComment }) => {
  return (
    <>
      <article className="p-6 text-base ">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
              <img
                className="mr-2 w-6 h-6 rounded-full"
                src={comment.user.avatar}
                alt={comment.user.username}
              />
              {comment.user.username}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {comment.createdAt}
            </p>
          </div>
          {comment.user.username === currentUser.username ? (
          <DropdownMenu >
          <DropdownMenuTrigger asChild>
              {/* <Button variant="outline">Open</Button> */}
              <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-black dark:text-white bg-transparent rounded-lg focus:outline-none focus:ring-gray-50"
                type="button">
                  <HiDotsHorizontal className="scale-150"/>
                <span className="sr-only">Comment settings</span>
            </button>
            </DropdownMenuTrigger>          
            <DropdownMenuContent>
                <DropdownMenuItem className="cursor-pointer">
                  <span>Edit</span>
                </DropdownMenuItem >
                <DropdownMenuItem className="cursor-pointer" onClick={() => handleDelete(comment)}>
                  <span>Remove</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          ) : (
            ""
          )}
        </footer>
        <p className="">
          {/* {comment.content} */}
          {comment.replyingTo && <span className="reply-to">@{comment.replyingTo} </span>}
          <span className="text-gray-500 dark:text-gray-400">{comment.content}</span>
          </p>
        <div className="flex items-center mt-4 space-x-4">
          <button
            type="button"
            className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
            <ThumbsUp />
            {comment.score}
          </button>
          <button
            type="button"
            className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
            <Reply />
            Reply
          </button>
        </div>
      </article>

      {comment.replies && (
        <article className="p-6 mb-3 ml-6 lg:ml-12 text-base">
          {comment.replies.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              currentUser={currentUser}
              handleDelete={handleDelete}
              addComment={addComment}
            />
          ))}
        </article>
      )}
    </>
  );
};

export default Comment;






