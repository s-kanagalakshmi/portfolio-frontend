import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Blog.css";
import Navbar from "./Navbar";
import { auth } from "../src/config";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: "", content: "" });
  const [comment, setComment] = useState({});
  const [admin, setAdmin] = useState(false);

  // Fetch Blogs
  const fetchBlogs = async () => {
    const res = await axios.get("http://localhost:5000/api/blogs");
    setBlogs(res.data);
  };

  // Check for Admin user
  useEffect(() => {
    fetchBlogs();
    auth.onAuthStateChanged((user) => {
      if (user) {
        if (user.uid === "q7g0CfX7hOgOPHliaOQRlzjuKpt1") {
          setAdmin(true);  // If user is admin
        } else {
          setAdmin(false);
        }
      } else {
        setAdmin(false); // User is logged out
      }
    });
  }, []);

  // Add new blog
  const addBlog = async () => {
    if (!newBlog.title.trim() || !newBlog.content.trim()) return;
    await axios.post("http://localhost:5000/api/blogs", newBlog);
    setNewBlog({ title: "", content: "" });
    fetchBlogs();
  };

  // Like a blog
  const likeBlog = async (id) => {
    await axios.post(`http://localhost:5000/api/blogs/${id}/like`);
    fetchBlogs();
  };

  // Comment on a blog
  const commentBlog = async (id) => {
    const commentText = comment[id];
    if (!commentText?.trim()) return;

    await axios.post(`http://localhost:5000/api/blogs/${id}/comment`, {
      text: commentText,
    });

    setComment((prev) => ({ ...prev, [id]: "" }));
    fetchBlogs();
  };

  return (
    <>
      <Navbar />
      {admin && (
        <div className="blog-create">
          <input
            className="input-title"
            type="text"
            placeholder="Blog Title"
            value={newBlog.title}
            onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
          />
          <textarea
            className="input-content"
            placeholder="Blog Content"
            value={newBlog.content}
            onChange={(e) =>
              setNewBlog({ ...newBlog, content: e.target.value })
            }
          ></textarea>
          <button className="btn-add" onClick={addBlog}>
            Add Blog
          </button>
        </div>
      )}

      <div className="blog-container">
        <h2>My Blog</h2>

        <div className="blog-list">
          {blogs.map((blog) => (
            <div key={blog._id} className="blog-item">
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              <div className="blog-actions">
                <button onClick={() => likeBlog(blog._id)}>
                  👍 {blog.likes}
                </button>
                <input
                  className="input-content"
                  type="text"
                  placeholder="Comment"
                  value={comment[blog._id] || ""}
                  onChange={(e) =>
                    setComment({ ...comment, [blog._id]: e.target.value })
                  }
                />
                <button className="btn-add" onClick={() => commentBlog(blog._id)}>
                  💬 Comment
                </button>
              </div>
              {blog.comments.length > 0 && (
                <ul className="comments">
                  {blog.comments.map((c, i) => (
                    <li key={i}>{c.text}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
