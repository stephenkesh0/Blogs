import React, { useEffect, useState } from "react";
import Blog from "../components/Blog";


const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const endPoint = "http://localhost:3000/blogs"
  // Note: any function carrying an "async" operator requires internet connection
  const fetchBlog = async() =>{
    try {
      const fetchResponse = await fetch(endPoint)
      const convertedResponse = await fetchResponse.json()
      setBlogs(convertedResponse);

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchBlog()
  },[])

  const deleteBlog = async(id) => {
    try {
      const response = await fetch(`http://localhost:3000/blogs/${id}`, {
        method: "DELETE"
      })  

      if(!response.ok){
        throw new Error ("Failed to delete blog")
      }

      // Remove the deleted blog from the state
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {
          blogs && blogs.map((blog) => (
            <Blog id={blog.id} key={blog.id} titleProp={blog.title} bodyProp={blog.body} authorProp={blog.author} deleteProp={() => deleteBlog(blog.id)}/>
          ))
        }
      </div>
    </>
  );
};

export default Home;
