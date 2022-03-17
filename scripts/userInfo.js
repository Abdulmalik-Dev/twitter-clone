// To Set The Name And User Name
function setUserInfo() {
  let theName = document.querySelectorAll("[data-theName]"),
    theUserName = document.querySelectorAll("[data-theUserName]");

  theName.forEach((name) => (name.innerHTML = localStorage.getItem("name")));

  theUserName.forEach(
    (userName) => (userName.innerHTML = `@${localStorage.getItem("userName")}`)
  );
}
setUserInfo();

// Add New Twit Form
let twitForm = document.querySelector(".add-new-twit form");
// Appear New Twit Area
document
  .querySelectorAll("[data-addTwit]")
  .forEach((el) =>
    el.addEventListener("click", () =>
      document.querySelector(".add-new-twit").classList.remove("hide")
    )
  );
// Hide The Form For New Twit
document
  .querySelector("[data-hide]")
  .addEventListener("click", () =>
    twitForm.parentElement.classList.add("hide")
  );

// Appear The Twit To The Page
twitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //   The Twit
  document.querySelector("main").innerHTML += `
  <div class="twit">
  <i class="fa-solid fa-user"></i>
  <div>
    <div class="name">
      <span data-theName></span>
      <span data-theUserName></span>
    </div>
    <p class="twit-text">${document.querySelector("#newTwit").value}</p>
    <div>
      <i class="fa-solid fa-comment"></i>
      <i class="fa-solid fa-arrow-right-arrow-left"></i>
      <i class="fa-solid fa-heart"></i>
      <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </div>
  </div>
</div>
  `;

  document.querySelector("#newTwit").value = "";

  //   Hide The New Twit Area
  twitForm.parentElement.classList.add("hide");
  //   To Set The User Info
  setUserInfo();
});
