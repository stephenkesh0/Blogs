import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [author, setAuthor] = useState("")
  const endPoint = "http://localhost:3000/blogs"

  const navigate = useNavigate()

  const addBlog = async(e) => {
    e.preventDefault()

    if(!title || !body || !author){
      alert("Fill in all fields")
    }

    try {
      const newBlog = {title,body,author}
      const blogResponse = await fetch(endPoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newBlog)
      })

      if(!blogResponse.ok){
        alert("Failed to add blog")
      }

      alert("Blog added successfuly")

      navigate("/")

    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <div className="pl-10 mt-5 flex flex-col justify-center items-center">
        <h2 className="mb-3 text-xl font-medium ">Add New Blog</h2>
        <form onSubmit={addBlog} className="border p-5 bg-slate-300">
          <div>
            <label>Blog title:</label>
            <input
              type="text"
              className="my-2 block w-[300px] p-2 border border-gray-300 rounded-md shadow-sm outline-none focus:ring"
              value={title}
              onChange={(e) => setTitle(e.target.value) }
              name="title"
            />
          </div>

          <div>
            <label>Blog body</label>
            <textarea
              name="body"
              className="my-2 block w-[300px] h-[200px] p-2 border outline-none border-gray-300 rounded-md shadow-sm focus:ring"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label>Blog Author</label>
            <input
              type="text"
              name="author"
              className="my-2 block w-[300px] h-[35px] p-2 border outline-none border-gray-300 rounded-md shadow-sm focus:ring"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            ></input>
          </div>
          <button className="w-[300px] bg-purple-500 text-white p-2 mt-5 rounded-md shadow-md hover:bg-purple-400 focus:ring focus:ring-purple-700 focus:bg-purple-700">
            Add Blog
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
