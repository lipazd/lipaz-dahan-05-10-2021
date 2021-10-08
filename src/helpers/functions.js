import Swal from "sweetalert2";

export const getFromLocalStoarge = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
export const setLocalStoarge = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const getTodayDay = () => {
  let newDate = new Date();
  let day = newDate.getDay();
  return day;
};

export const degreesConverter = (temp, type) => {
  let newTemp;
  if (type === "celsius") {
    newTemp = ((temp * 9) / 5 + 32).toFixed(1);
  } else {
    newTemp = (((temp - 32) * 5) / 9).toFixed(1);
  }
  return newTemp;
};

export const englishOnly = (letters) => {
  let reg = /^[a-zA-Z,'\s\d-]+$/;
  return reg.test(letters);
};
export const swalError = () => {
  Swal.fire("oops!", "Something went wrong. please try again", "error");
};
