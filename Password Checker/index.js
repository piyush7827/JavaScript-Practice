function checkpassword() {
  var password = document.getElementById("password").value;
  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (password.length < 5) {
    document.getElementById("password-checker").innerText = "Weak Password";
    document.getElementById("password-checker").style.backgroundColor = "red";
  } else if (re.test(password)) {
    document.getElementById("password-checker").innerText = "STRONG";
    document.getElementById("password-checker").style.backgroundColor = "green";
  } else {
    document.getElementById("password-checker").innerText =
      "Make a strong password";
    document.getElementById("password-checker").style.backgroundColor =
      "yellow";
  }
}
