import React, { useState, useEffect } from "react";
import { getSingleBlog } from "../utils/userApi";
import { useAuth } from "../context/AuthProvider";
import { Link, useParams } from "react-router-dom";
import ScrollEffect from './ScrollEffect'

const SingleBlog = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchBlog = async (id) => {
      try {
        setLoading(true);
        const res = await getSingleBlog(id);
        setBlog(res.data);
      } catch (error) {
        console.log("error while fetching blog ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog(id);
  }, [id]);

  useEffect(() => {
    if (blog?.title) {
      document.title = `${blog.title} | EmpireBlue Blog`;
    }
    return () => {
      document.title = "EmpireBlue";
    };
  }, [blog?.title]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-[#03009b] text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <ScrollEffect>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="bg-white p-12 rounded-2xl shadow-lg text-center max-w-lg w-full">
          <h2 className="text-3xl font-bold text-[#03009b] mb-5">
            Please Login First
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            You need to log in to view this blog.
          </p>
          <Link
            to="/login"
            className="inline-block px-8 py-3 bg-[#03009b] text-white rounded-lg font-semibold hover:bg-[#4284FF] transition text-lg"
          >
            Go to Login
          </Link>
        </div>
      </div>
      </ScrollEffect>
    );
  }

  if (!blog) {
    return (
      <ScrollEffect>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-red-600 text-xl font-semibold">Blog not found</div>
      </div>
      </ScrollEffect>
    );
  }

  return (
    <ScrollEffect>
    <div className="bg-[#d5dee6] min-h-screen">
      <main className="max-w-3xl mx-auto font-[font1] px-4 md:px-0">
        <div className="pt-10 mt-6">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full  h-auto  object-cover rounded-2xl"
            loading="lazy"
          />
        </div>

        <article className="mt-12 ">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#03009b] leading-tight">{blog.title}</h1>
          <p className="mt-15 mb-25 text-[#1A1A1A] text-lg leading-8 whitespace-pre-line">{blog.description}</p>
        </article>
      </main>
    </div>
    </ScrollEffect>
  );
};

export default SingleBlog;
