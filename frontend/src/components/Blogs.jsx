import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postBlog, getAllBlogs, deleteBlog, updateBlogDetailsApi, updateBlogImageApi } from "../utils/userApi.js";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useAuth }  from "../context/AuthProvider.jsx"


const BlogCard = ({ blog, onClick, onEdit, onDelete }) => (
  <div
    onClick={() => onClick(blog._id)}
    className="cursor-pointer bg-[#f5f8fcf6] rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
  >
    <img
      src={blog.image}
      alt={blog.title}
      className="h-48 w-full object-cover p-1 rounded-xl"
    />
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-[#03009b] mb-2">{blog.title}</h3>
      <p className="text-gray-700 mb-4 flex-grow"> {blog.description.length > 40
    ? blog.description.substring(0, 40) + "..."
    : blog.description}</p>
      <div className="flex gap-3 mt-2">
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onEdit(blog); }}
          className="px-3 py-2 text-white bg-[#03009b] rounded-lg text-sm hover:bg-[#4284FF]"
        >
          <FaEdit/>
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onDelete(blog._id); }}
          className="px-3 py-2 text-white bg-red-600 rounded-lg text-sm hover:bg-red-700"
        >
          <FaTrash/>
        </button>
      </div>
    </div>
  </div>
);

const Blogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    title: "",
    description: "",
    imageFile: null,
    imagePreview: "",
  });

  const { isAuthenticated } = useAuth()

   const [loadingDetails, setLoadingDetails] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
const [posting, setPosting] = useState(false);

  const handleInputChange = (e) =>
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value });

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      setNewBlog({
        ...newBlog,
        imageFile: file,
        imagePreview: URL.createObjectURL(file),
      });
    }
  };

  const handleAddBlog = async (e) => {
    e.preventDefault();
    if (!newBlog.title || !newBlog.description || !newBlog.imageFile) {
      alert("All fields are required");
      return;
    }
     
    if( !isAuthenticated){
      navigate('/login')
      return
    }

    try {
       setPosting(true);
      const data = await postBlog({
        title: newBlog.title,
        description: newBlog.description,
        imageFile: newBlog.imageFile,
      });

      setBlogs([data, ...blogs]);

      setNewBlog({
        title: "",
        description: "",
        imageFile: null,
        imagePreview: "",
      });
    } catch (error) {
      console.error("Failed to post blog:", error);
      alert("Failed to post blog");
    }finally {
    setPosting(false); 
  }
  };

  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };

  const [loading, setLoading] = useState(false);
  const [allBlogs, setallBlogs] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", description: "", imageFile: null, imagePreview: "" });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await getAllBlogs();
        setallBlogs(response);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  console.log(allBlogs);

  const startEdit = (blog) => {
    setEditing(blog._id);
    setEditForm({ title: blog.title, description: blog.description, imageFile: null, imagePreview: blog.image });
  };

  const cancelEdit = () => {
    setEditing(null);
    setEditForm({ title: "", description: "", imageFile: null, imagePreview: "" });
  };

  const submitEditDetails = async () => {
    try {
      setLoadingDetails(true);
      await updateBlogDetailsApi(editing, { title: editForm.title, description: editForm.description });
      const updated = await getAllBlogs();
      setallBlogs(updated);
      cancelEdit();
    } catch (err) {
      alert("Failed to update blog details");
    }finally {
      setLoadingDetails(false);
    }
  };

  const submitEditImage = async () => {
    if (!editForm.imageFile) return;
    try {
      setLoadingImage(true);
      await updateBlogImageApi(editing, editForm.imageFile);
      const updated = await getAllBlogs();
      setallBlogs(updated);
      cancelEdit();
    } catch (err) {
      alert("Failed to update blog image");
    }finally {
      setLoadingImage(false);
    }
  };

  const removeBlog = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      await deleteBlog(id);
      setallBlogs((prev) => prev.filter((b) => b._id !== id));
    } catch (err) {
      alert("Failed to delete blog");
    }
  };


   

  return (
    
    <div className="bg-[#d5dee6]">
    <section className="max-w-7xl mx-auto p-6 font-[font1] space-y-14  min-h-screen">
      {/* Post new blog */}
      <form
        onSubmit={handleAddBlog}
        className="rounded-3xl p-8 shadow-xl max-w-4xl mx-auto mb-40 mt-20 space-y-4 bg-[#f5f8fcf6]"
      >
        <h2 className="text-3xl font-bold text-[#03009b] mb-4 text-center">
          Post a New Blog
        </h2>
        <input
          type="text"
          name="title"
          value={newBlog.title}
          onChange={handleInputChange}
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Title"
          required
        />
      <textarea
  name="description"
  value={newBlog.description}
  onChange={(e) => {
    handleInputChange(e); 
    e.target.style.height = "auto"; 
    e.target.style.height = `${e.target.scrollHeight}px`; 
  }}
  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden"
  placeholder="Description"
  rows={5} 
  required
/>


        <div className="flex flex-col gap-5  ">
          <label
            htmlFor="imageInput"
            // className="block text-[#03009b] font-semibold mb-1 cursor-pointer border-1 w-40 "
            className="px-5 py-2  border-1 border-[#1A1A1A]  text-[#1A1A1A] text-sm sm:text-base font-semibold rounded-xl shadow-md cursor-pointer hover:bg-[#4284FF] focus:ring-2 focus:ring-[#4284FF] focus:outline-none transition  w-40"
          >
            {newBlog.imageFile ? "Change Image" : "Select Image"}
          </label>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-10"
            required={!newBlog.imageFile}
          />
        </div>
        {newBlog.imagePreview && (
          <img
            src={newBlog.imagePreview}
            alt="Preview"
            className="mb-4 mt-4 max-h-48 rounded-md object-cover mx-auto"
          />
        )}

       <button
  type="submit"
  disabled={posting}
  className={`w-full py-3 mt-5 rounded-xl font-semibold transition ${
    posting
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-[#03009b] text-white hover:bg-[#4284FF]"
  }`}
>
  {posting ? "Posting..." : "Post Blog"}
</button>

      </form>

      {/* Edit modal */}
      {editing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-xl">
            <h3 className="text-2xl font-bold text-[#03009b] mb-4">Edit Blog</h3>
            <div className="space-y-3">
              <input
                type="text"
                value={editForm.title}
                onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Title"
              />
              <textarea
                value={editForm.description}
                onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Description"
                rows={4}
              />
              <div>
                {editForm.imagePreview && (
                  <img src={editForm.imagePreview} alt="Preview" className="mb-3 max-h-48 rounded-md object-cover" />
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    if (file) {
                      setEditForm({ ...editForm, imageFile: file, imagePreview: URL.createObjectURL(file) });
                    }
                  }}
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6 justify-end">
              <button onClick={cancelEdit} className="px-4 py-2 rounded-lg border">Cancel</button>
              <button
        onClick={submitEditDetails}
        className="px-4 py-2 rounded-lg bg-[#03009b] text-white"
        disabled={loadingDetails}
      >
        {loadingDetails ? "Saving..." : "Save Details"}
      </button>
      <button
        onClick={submitEditImage}
        className="px-4 py-2 rounded-lg bg-[#4284FF] text-white"
        disabled={loadingImage}
      >
        {loadingImage ? "Saving..." : "Save Image"}
      </button>
            </div>
          </div>
        </div>
      )}


     

      {/* Blogs grid */}
      
      { loading ? (<div className="flex items-center justify-center min-h-screen  px-4">
  <div className=" p-12 r  text-center max-w-lg w-full">
    <h2 className="text-3xl   mb-5">
      Loading....
    </h2>
   
  </div>
</div>) : (<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-80 ">
        {allBlogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} onClick={handleCardClick} onEdit={startEdit} onDelete={removeBlog} />
        ))}
      </div>)}
      
    </section>
    </div>
  
  );
};

export default Blogs;


