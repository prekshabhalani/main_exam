admin= JSON.parse(localStorage.getItem("adminDetail"));

//alert(document.getElementById("adminName").innerHTML=admin[0]);
var userstore = new Array();
//object to store value
var userDetail = {
    id:"",
    names: "",
    email:"",
    password: "",
    birthDate:"",
    age:"",
    loginsessionDetail:"",
    logoutsessionDetail:"",
};
function findage()
{
    return    (new Date())-(new Date(birthDate));
}
function validateData() {
    //for validation
    firstName = document.getElementById("userName").value;
    email = document.getElementById("userEmail").value;
    password = document.getElementById("userPassword").value;
    birthDate = document.getElementById("birthdayDate").value;
    
    if (firstName == "" || !isNaN(firstName) ){
        alert("Name is invalid");
    }
    else if(email == ""|| !isNaN(email))
    {
        alert("email is invalid");
    }
    else {
        //store value into object
        
        userDetail.names = firstName;
        userDetail.email = email;
        userDetail.password =password;
        userDetail.birthDate = birthDate;
        userDetail.age = findage();
        saveData1();
    }
}

function saveData1() {
    //store value into localstorage
    //when local storage is empty
    if (localStorage.getItem("userDetail") == null) {
        userDetail.id=1;
        userstore.push(userDetail);
        localStorage.setItem("userDetail", JSON.stringify(userstore));
        userstore = JSON.parse(localStorage.getItem("userDetail"));
        display();
    }
    //already have data and append
    else {
        
        
        userstore = JSON.parse(localStorage.getItem("userDetail"));
        userDetail.id=(userstore[userstore.length-1].id)+1;
        userstore.push(userDetail);
        localStorage.setItem("userDetail", JSON.stringify(userstore));
        display();
    }
}

//display data into html
function display() {
    var table1 =
        "<table border=1><tr><th>Index</th><th>Name</th><th>email</th><th>password</th><th>birth year</th><th>Age</th><th>Action</th></tr>";
    for (var i = 0; i < userstore.length; i++) {
        table1 +=
             "<tr> <td>" +
            (i + 1) +
            "</td><td hidden>" +
            userstore[i].id +
            "</td><td>" +
            userstore[i].names +
            "</td><td>" +
            userstore[i].email +
            "</td><td>" +
            userstore[i].password +
            "</td><td>" +
            userstore[i].birthDate+
            "</td><td>"+
            userstore[i].age+
            "</td></tr>";
    }
    table1 += "<tr></tr></table>";
    document.getElementById("display").innerHTML = table1;
}
function storelogout()
{

    window.location.href("login.html");
}

