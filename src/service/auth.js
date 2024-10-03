const getCurrentUserAndToken = () => {
  return JSON.parse(localStorage.getItem("user-access-token"));
};

const setUserAndToken = (data) => {
  localStorage.setItem("user-access-token", JSON.stringify(data));
};

const removeUserAndToken = () => {
  localStorage.removeItem("user-access-token");
};

export { getCurrentUserAndToken, setUserAndToken, removeUserAndToken };
