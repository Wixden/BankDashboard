const userName = document.getElementById("userName");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {
  const userNameValue = userName.value;
  const passwordValue = password.value;
  console.log(userNameValue, passwordValue);
  if (userNameValue === "user" && passwordValue === "admin") {
    window.location.href = "index.html";
  } else {
    console.log("Invalid Username and Password");
  }
});
