import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';



const Update = () => {
  
  const {id} = useParams()  // fetching blog id from url params


  const [title, setTitle]=useState("");
  const [body, setBody]=useState("");
  const [author,setAuthor]=useState("");

  const navigate = useNavigate()

    const fetchBlog = async() => {
      try { 
        const response = await fetch(`http://localhost:3000/blogs/${id}`)
        if(!response.ok){
          throw new Error("failed to fetch blog")
        } 

        const data = await response.json()
        setTitle(data.title)
        setBody(data.body)
        setAuthor(data.author)
        
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      fetchBlog()
    }, [id])


  const updateBlog = async(e) => {
    e.preventDefault()
    try {
      const updatedBlog = {title,body,author}
      const updateResponse = await fetch(`http://localhost:3000/blogs/${id}`,{
        method: "PUT",
        headers: { 
          "Content-Type": " application/json"
        },
        body:JSON.stringify(updatedBlog)
      })
      
      if(!updateResponse.ok){
        alert("Failed to update blog")
      }

      alert("Blog updated successfully")

      navigate("/")
      

    } catch (error) {
      console.log(error);
    }
  } 

  return (
    <>
      <div className="pl-10 mt-5 flex flex-col justify-center items-center">
        <h2 className="mb-3 text-xl font-medium ">Update Blog</h2>
        <form onSubmit={updateBlog} className="border p-5 bg-slate-300">
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
            Update Blog
          </button>
        </form>
      </div>
    </>
  )
}

export default Update