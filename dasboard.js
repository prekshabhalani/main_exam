var userdetail = new Array();
if (localStorage.getItem("userDetail") == null) {
    document.getElementById("less").innerHTML = "0 user";
    document.getElementById("between").innerHTML = "0 user";
    document.getElementById("more").innerHTML = "0 user";
}
else {
    var less = 0; var higher = 0; var between = 0;
    userdetail = JSON.parse(localStorage.getItem("userDetail"));
    
    bd="<tr><th>Today's Birthday list</th></tr>";
    for (i = 0; i < userdetail.length; i++) {
        (userdetail[i].age >= 50) ? higher++ : (userdetail[i].age <= 18) ? less++ : between++;
        
        if(birthday(userdetail[i].birthDate))
        {
            bd+="<tr><td> id No. "+userdetail[i].id+")  "+userdetail[i].names+"'birthday</td></tr>";
        }
    }
    document.getElementById("bd").innerHTML=bd;
        
    document.getElementById("less").innerHTML = less+" users";
    document.getElementById("between").innerHTML = between+" users";
    document.getElementById("more").innerHTML = higher+" users";
}


function birthday(birthDate)
{
    var byear= birthDate.slice(0,4);
    var bmonth= birthDate.slice(5,7);
    var bday= birthDate.slice(8,10);
    var day=new Date().getDate();
    var month=("0"+new Date().getMonth()+1).slice(-2);
    var year=new Date().getFullYear();
    if(month==bmonth && day==bday)
       return true;
       else{      return false}
}