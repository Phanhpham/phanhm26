import axios from "axios";

export const getAllUser = async () => {
  const response = await axios.get("http://localhost:8080/user");
  return response.data;
};

export const updateStatus = async (data) => {
  const response = await axios.patch(`http://localhost:8080/user/${data.id}`, {
    status: data.status,
  });
  return response.data;
};

// API tim kiem user
export const searchUser = async (searchItem) => {
  const response = await axios.get(
    `http://localhost:8080/user?username_like=${searchItem}`
  );
  return response.data;
};

//api sort
export const sortUser = async (sortItem) => {
  const response = await axios.get(
    `http://localhost:8080/user?_sort=username&_order=${sortItem}`
  );
  return response.data;
};
