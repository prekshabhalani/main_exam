btid=null;
var buttonadd = "<input type='button' value='Add User' id='adduser' onclick='validateData()'/>";
document.getElementById("buttonAddEdit").innerHTML=buttonadd;    
var arr = new Array();
if (localStorage.getItem("userDetail") == null) {
}
else {
    arr = JSON.parse(localStorage.getItem("userDetail"));
       var buttondelete = "<input type='button' value='Delete' id='delete' onclick='deleteData()'/>";
    var table1 =
        "<table border=1><tr><th>Index</th><th>Name</th><th>email</th><th>password</th><th>birth year</th><th>Age</th><th>Action</th></tr>";
    for (var i = 0; i < arr.length; i++) {
        table1 +=
            "<tr><td>" +
            (i + 1) +
            "</td><td hidden>" +
            arr[i].id +
            "</td><td>" +
            arr[i].names +
            "</td><td>" +
            arr[i].email +
            "</td><td>" +
            arr[i].password +
            "</td><td>" +
            arr[i].birthDate +
            "</td><td>" +
            arr[i].age +
            "</td><td>" +
            "<input type='button' value='Edit' id=" + i + " onclick='editData(this.id)'/>"

            + "<input type='button' value='Delete' id=" + i + " onclick='deleteData(this.id)'/>" +
            "</td></tr>";
    }
    table1 += "<tr></tr></table>";
    document.getElementById("display").innerHTML = table1;
}
var userstore = new Array();
//object to store value of all user
var userDetail = {
    id: "",
    names: "",
    email: "",
    password: "",
    birthDate: "",
    age: "",
    loginsessionDetail: "",
    logoutsessionDetail: "",
};
function findage() {
    var byear = birthDate.slice(0, 4);
    var bmonth = birthDate.slice(5, 7);
    var bday = birthDate.slice(8, 10);
    var day = new Date().getDate();
    var month = ("0" + new Date().getMonth() + 1).slice(-2);
    var year = new Date().getFullYear();
    var age = 0;
    if (month > bmonth) {
        age = year - byear;
    }
    else if (bmonth > month) {
        age = (year - byear) - 1;
    }
    else {
        age = (day > bday) ? (year - byear - 1) : (year - byear);
    }
    return age;
}
function validateData() {

    firstName = document.getElementById("userName").value;
    email = document.getElementById("userEmail").value;
    password = document.getElementById("userPassword").value;
    birthDate = document.getElementById("birthdayDate").value;
    //for validation
    if (firstName == "" || !isNaN(firstName)) {
        alert("Name is invalid");
    }
    else if (email == "" || !isNaN(email)) {
        alert("email is invalid");
    }
    else {
        //store value into object
        userDetail.names = firstName;
        userDetail.email = email;
        userDetail.password = password;
        userDetail.birthDate = birthDate;
        userDetail.age = findage();
        saveData1();
    }
    window.location.reload();
}
function saveData1() {
    //store value into localstorage
    if(btid==null){
        if (localStorage.getItem("userDetail") == null) {
            userDetail.id = 1;
            userstore.push(userDetail);
            localStorage.setItem("userDetail", JSON.stringify(userstore));
            userstore = JSON.parse(localStorage.getItem("userDetail"));
            //        display();
        }
        else {
            userstore = JSON.parse(localStorage.getItem("userDetail"));
            userDetail.id = (userstore[userstore.length - 1].id) + 1;
            userstore.push(userDetail);
            localStorage.setItem("userDetail", JSON.stringify(userstore));
            //        display();
        }}
    else
    {
        arr[btid].names=userDetail.names;
        arr[btid].email=userDetail.email;
        arr[btid].password=userDetail.password;
        arr[btid].birthDate=userDetail.birthDate;
        arr[btid].age=userDetail.age;
        localStorage.setItem("userDetail", JSON.stringify(arr));
        
    }
}
var buttonedit = "<input type='button' value='Edit User' id='edituser' onclick='validateData()'/>";

function editData(btid) {
    for (var i = 0; i < arr.length; i++) {
        this.btid=btid;
        if (btid == i) {
             document.getElementById("userName").value = arr[i].names;
            document.getElementById("userEmail").value = arr[i].email;
             document.getElementById("userPassword").value = arr[i].password;
             document.getElementById("birthdayDate").value = arr[i].birthDate;
            document.getElementById("buttonAddEdit").innerHTML=buttonedit;            
        }
    }

}
function storeedit(id)
{
    for(var i=0;i<=arr.length;i++)
    {
        if(id==i)
        {

        }
    }
}

function deleteData(id) {
    for (var i = 0; i < arr.length; i++) {
        if (id == i) {
            arr.splice(i, 1);
            break;
        }
    }
    localStorage.setItem("userDetail", JSON.stringify(arr));
    window.location.reload();
}
function storelogout() {

    window.location.href("login.html");
}

