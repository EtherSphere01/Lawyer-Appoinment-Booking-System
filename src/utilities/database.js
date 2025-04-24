const getData = () => {
  const data = localStorage.getItem("lawyerData");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const setData = (data) => {
  const prevData = getData();
  const newData = [...prevData, data];
  localStorage.setItem("lawyerData", JSON.stringify(newData));
};

const removeData = (id) => {
  const prevData = getData();
  console.log(id);
  const newData = prevData.filter((item) => item !== id);
  localStorage.setItem("lawyerData", JSON.stringify(newData));
};

export { getData, setData, removeData };
