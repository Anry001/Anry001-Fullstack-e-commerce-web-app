import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  /* JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser
  .accessToken; */ "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTQxMWJiNDk2ZTE1MTVkZjBkMjY1ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjQ1NDA1MCwiZXhwIjoxNjY2NzEzMjUwfQ.HW3CYsW5GyRqUDbVqguGtuU-ryff05FCkUuqsTcqzsk";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
