import axios from "axios";

export const getCSRFToken = async () => {
  const { data: token } = await axios.get("http://localhost:8000/csrf_token", {
    withCredentials: true,
  });

  return token;
};
