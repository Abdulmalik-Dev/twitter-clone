// Cash
let name = document.querySelector("#name"),
  userName = document.querySelector("#userName"),
  submit = document.querySelector("[type='submit']");

// To Set User Info To localStorage On Submit
document.forms[0].addEventListener("submit", (e) => {
  e.preventDefault();
  // User Info
  localStorage.setItem("name", name.value);
  localStorage.setItem("userName", userName.value);

  window.location.href = "homePage.html";
});
