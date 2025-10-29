const API_BASE_URL = "https://blissman-backend.onrender.com";

export default API_BASE_URL;

export const resolveMediaUrl = (url) => {
  if (!url) return "";
  if (url.startsWith("http")) return url; // already full URL
  return `${API_BASE_URL}${url}`; // make it absolute
};
