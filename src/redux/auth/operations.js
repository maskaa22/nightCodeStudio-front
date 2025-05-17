import axios from "axios";

export const api = axios.create({
  baseURL: "https://nightcodestudio-backend.onrender.com",
});
