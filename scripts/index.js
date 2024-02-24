// your-script.js

// This is for SignUp modal
var signUpModal = document.getElementById("signupModal");
var signUpBtn = document.getElementById("signup-button");
var signUpSpan = document.getElementsByClassName("signupClose")[0];

signUpBtn.addEventListener("click", function() {
  signUpModal.style.display = "block";
});

signUpSpan.addEventListener("click", function() {
  signUpModal.style.display = "none";
});

// This is for SignIn Modal
var signInModal = document.getElementById("signinModal");
var signInBtn = document.getElementById("signin-button");
var signInSpan = document.getElementsByClassName("signinClose")[0];

signInBtn.addEventListener("click", function() {
  signInModal.style.display = "block";
});

signInSpan.addEventListener("click", function() {
  signInModal.style.display = "none";
});

// This is for Create Post Modal
var createPostModal = document.getElementById("createPostModal");
var createPostBtn = document.getElementById("createPost");
var createPostSpan = document.getElementsByClassName("createpostClose")[0];

createPostBtn.addEventListener("click", function() {
  createPostModal.style.display = "block";
});

createPostSpan.addEventListener("click", function() {
  createPostModal.style.display = "none";
});

// This is for SignUp Link
var signUpLink = document.getElementById("signup-link");

signUpLink.addEventListener("click", function() {
  signInModal.style.display = "none";
  signUpModal.style.display = "block";
});

// This is for the Window click
window.addEventListener("click", function(event) {
  if (event.target == signUpModal || event.target == signInModal || event.target == createPostModal) {
    signUpModal.style.display = "none";
    signInModal.style.display = "none";
    createPostModal.style.display = "none";
  }
});

// This is a basic example of handling authentication using localStorage
var sUpBtn = document.getElementById("signupbutton");
var sInBtn = document.getElementById("signinbutton"); 

sUpBtn.addEventListener("click", function() {
  // Retrieve username and password from your signup form
  var username = document.getElementById("signup-username").value;
  var password = document.getElementById("signup-password").value;
  var reEnterPassword = document.getElementById("re-enter-password").value;

  if(username !== "" && password !== "" && reEnterPassword !== ""){
    if(password === reEnterPassword){
      signUp(username, password);
    }
    else{
      alert("Password and Confirm Password Should Be Same!!!");
    }
  }
});

sInBtn.addEventListener("click", function() {
  // Retrieve username and password from your signin form
  var username = document.getElementById("signin-username").value;
  var password = document.getElementById("signin-password").value;

  if(username !== "" && password !== ""){
    signIn(username, password);
  }
});
 

function signUp(username, password) {
  // In a real-world scenario, you would send this information to a server for validation
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  alert("Sign up successful! Welcome, " + username + "!");
}

function signIn(username, password) {
  // In a real-world scenario, you would validate the credentials against the server
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (username === storedUsername && password === storedPassword) {
    alert("Welcome back, " + username + "!");
  } else {
    alert("Invalid credentials");
  }
}

// All Posts Button
var allPostsButton = document.getElementById("allPostsButton");

allPostsButton.addEventListener("click", function() {
  window.location.href = "./html/postslist.html";
});
