import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser
  .accessToken; /*  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTQxMWJiNDk2ZTE1MTVkZjBkMjY1ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjI1NzM0MSwiZXhwIjoxNjcyNTE2NTQxfQ.-3K6k4hMlaeIzAz_MJk3RAt-pKR4RteTPZR-H5GmZQo */

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
