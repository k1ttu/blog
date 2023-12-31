'use client'

import { useState } from "react";
import { useState } from "react";
export default function AddCommentForm({ id, comment }) {

        const [newComment, setNewComment] = useState("");
        const [newName, setNewName] = useState("");
        const handleSubmit = () => {
            comment.push({ name: newName, comments: newComment });
        }
        return (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                    onChange={(e) => setNewName(e)}
                    value={newName}
                    className="self-start my-2 lg:w-1/3 md:w-1/2 w-2/3  border-b border-b-gray-300 bg-transparent "
                    type="text"
                    placeholder="Enter your name (so I know who you are)"
                />
                <input
                    onChange={(e) => setNewComment(e)}
                    value={newComment}
                    className="self-center w-full border-b border-b-gray-300 bg-transparent"
                    type="text"
                    placeholder="Add a comment"
                />
                <button className="self-end relative text-gray-700 text-xl py-3 pb-1 px-6 after:bg-gray-600 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                    Post
                </button>
            </form>
        );
    }