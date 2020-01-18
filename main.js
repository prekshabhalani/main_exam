
if (localStorage.getItem("adminDetail") != null) {
    document.getElementById("loginRegistration").style.visibility="hidden";}

function loginUser() {
  username = document.getElementById("loginEmail").value;
  password = document.getElementById("loginPassword").value;
  if (
    localStorage.getItem("adminDetail") == null &&
    localStorage.getItem("userDetail") == null
  ) {
    alert("Invalid user");
  } else {
    admindetail = JSON.parse(localStorage.getItem("adminDetail"));
    userdetail = JSON.parse(localStorage.getItem("userDetail"));
    count = null;
    if(userdetail!=null){
    for (var i = 0; i < userdetail.length; i++) {
      if (
        userdetail[i].email == username &&
        userdetail[i].password == password
      ) {
        count = 1;
        sessionStorage.setItem("currentuser",userdetail[i].names);
        userdetail[i].loginsessionDetail=new Date();
      }
    }}
    if (admindetail[1] == username && admindetail[2] == password) {
      alert("welcome admin");
      sessionStorage.setItem("currentuser",admindetail[0]);
      window.location.href = "dasboard.html";

    } else if (count == 1) {
        localStorage.setItem("userDetail", JSON.stringify(userdetail));
       
        alert("welcome user");
      window.location.href = "sub_user.html";
    } else {
      alert("invalid user");
    }
  }
}
function loginRegistration1() {
  registrationButton = document.getElementById("loginRegistration");
  window.location.href = "registration.html";
}

function registration() {
  // adminDetail = document.getElementsByName("admin").values;
  adminDetail = new Array();
  adminDetail.push((firstName = document.getElementById("firstName").value));
  adminDetail.push(
    (email = document.getElementById("registrationEmail").value)
  );
  adminDetail.push(
    (password = document.getElementById("registrationPassword").value)
  );
  rePassword = document.getElementById("registrationConfirmPassword").value;
  adminDetail.push((city = document.getElementById("city").value));
  adminDetail.push((state = document.getElementById("state").value));
  terms = document.getElementById("terms");
  if (firstName == "" || !isNaN(firstName)) {
    alert("invalid name");
  } else if (email == "" || !isNaN(email)) {
    alert("invalide email");
  } else if (password == "" || password !== rePassword) {
    alert("invalide password");
  } else if (city == "Select City") {
    alert("select city");
  } else if (state == "Select State") {
    alert("select state");
  } else if (terms.checked != true) {
    alert("must have to select terms and condition");
  } else {
    localStorage.setItem("adminDetail", JSON.stringify(adminDetail));
    window.location.href = "login.html";
  }
}
