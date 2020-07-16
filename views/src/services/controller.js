import axios from "axios";

export default {
  getAllBlogs: () => {
    return axios.get("http://localhost:3001/api/user");
  },
  createBlog: (blog) => {
    return axios.post("/api/user/", blog);
  },
};
