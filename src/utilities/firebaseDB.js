const firebaseGet = () => {
  const data = localStorage.getItem("user");
  if (data) {
    return JSON.parse(data);
  } else {
    return null;
  }
};
const firebaseSet = (data) => {
  const prevData = firebaseGet();
  const newData = prevData ? [...prevData, data] : [data];
  localStorage.setItem("user", JSON.stringify(newData));
};

const getUserByEmail = (email) => {
  const users = firebaseGet();
  return users.find((user) => user.email === email);
};

// Set the current user's data in localStorage
const setCurrentUser = (userData) => {
  localStorage.setItem("currentUser", JSON.stringify(userData));
};

// Remove the current user's data from localStorage
const removeCurrentUser = () => {
  localStorage.removeItem("currentUser");
};

// Get the current user's data from localStorage
const getCurrentUser = () => {
  const data = localStorage.getItem("currentUser");
  return data ? JSON.parse(data) : null; // Return the user object or null if not found
};
export {
  firebaseGet,
  firebaseSet,
  getUserByEmail,
  setCurrentUser,
  removeCurrentUser,
  getCurrentUser,
};
