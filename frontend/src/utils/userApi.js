import { AxiosInstance } from "../routes/axiosInstance";

// User profile
export const register = async (payload) => {
  const resp = await AxiosInstance.post("/users/register", payload);
  return resp.data;
};

export const login = async (payload) => {
  const resp = await AxiosInstance.post("/users/login", payload);
  return resp.data;
};



export const getCurrentUser = async () => {
  const resp = await AxiosInstance.get("/users/me");
  return resp.data;
};

export const logout = async () => {
  const resp = await AxiosInstance.post("/users/logout");
  return resp.data;
};






export const updateUserProfileData = async ({ name, email }) => {
  const resp = await AxiosInstance.patch("/users/update-profile", { name, email })
  return resp.data
}


//blog
export const postBlog = async ({ title, description, imageFile }) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('image', imageFile);

  const resp = await AxiosInstance.post("/blogs/publish-blog", formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return resp.data?.data?.postBlog || resp.data;
};


export const getAllBlogs = async () => {
  const resp = await AxiosInstance.get("/blogs/get-blog");
 
  return resp.data?.data
}


export const getSingleBlog = async (id) => {
  const resp = await AxiosInstance.get(`/blogs/get-single-blog/${id}`);
  return resp.data;
};

export const deleteBlog = async (id) => {
  const resp = await AxiosInstance.delete(`/blogs/delete/${id}`);
  return resp.data;
}

export const updateBlogDetailsApi = async (id, { title, description }) => {
  const resp = await AxiosInstance.patch(`/blogs/update-blog-details/${id}`, { title, description });
  return resp.data;
}

export const updateBlogImageApi = async (id, imageFile) => {
  const formData = new FormData();
  formData.append('newImage', imageFile);
  const resp = await AxiosInstance.patch(`/blogs/update-image/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return resp.data;
}
















