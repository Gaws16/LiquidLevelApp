import { axios } from "../api/axiosInstance";
export const loginAsync = async (email, password) => {
  try {
    axios.post("/auth/login", { email, password }).then((res) => {
      console.log(res.data);
    });
  } catch (error) {
    console.log(error);
  }
};
