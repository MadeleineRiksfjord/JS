const form = document.querySelector(".Form");
const name = document.querySelector("name");
const nameError = document.querySelector("nameError");
const firstSubject = document.querySelector("firstSubject");
const firstSubjectError = document.querySelector("firstSubjectError");
const email = document.querySelector("email");
const emailError = document.querySelector("emailError");

function validateForm() {
  event.preventDefault();

  //   if (checkLength(firstName.value, 0) === true) {
  //     firstNameError.style.display = "none";
  //   } else {
  //     firstNameError.style.display = "block";
  //   }

  //   if (checkLength(firstSubject.value, 3) === true) {
  //     firstSubjectError.style.display = "none";
  //   } else {
  //     firstSubjectError.style.display = "block";
  //   }

  if (firstName.value.length > 0) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (firstSubject.value.length > 0) {
    firstSubjectError.style.display = "none";
  } else {
    firstSubjectError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  console.log("hello");
}

form.addEventListener("submit", validateForm);

// function checkLength(value, len) {
//   if (value.trim().length > len) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function validateEmail(email) {
//   const regEx = /\S+@\S+\.\S+/;
//   const patternMatches = regEx.test(email);
//   return patternMatches;
// }
