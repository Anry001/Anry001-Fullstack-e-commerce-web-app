import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTQxMWJiNDk2ZTE1MTVkZjBkMjY1ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Mzk2NjIyNSwiZXhwIjoxNjc0MjI1NDI1fQ.7uRa70sYiT2-o0aToWg4TIzikYuwuvtLqpz-lxhpEsA";
/* JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser
  .accessToken; */

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
