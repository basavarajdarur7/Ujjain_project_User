
getUserData();
async function getUserData() {
  try {
    const response1 = await fetch('http://3.108.240.106:8097/user/getBy/58');
    const values = await response1.json();
    document.getElementById('username').value = values.data.userName;
    document.getElementById('password').value = values.data.password;
    document.getElementById('userId').value = values.data.userId;
    document.getElementById('email').value = values.data.email;
    document.getElementById('mobileNo').value = values.data.mobileNo;
  } catch (error) {
    console.error(error);
  }
}

async function savechanges(id) {
  try {
    var obj = new Object();
    obj.userName =  document.getElementById('username').value;
    obj.password =  document.getElementById('password').value;
    obj.email =  document.getElementById('email').value;
    obj.mobileNo =  document.getElementById('mobileNo').value;
    const response = await fetch('http://3.108.240.106:8097/user/update', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(obj)
    });
    const data = await response.json();
    if (data.data != undefined) {
      getUserData();
    }


  } catch (error) {
    console.error(error);
  }}













function  Editbtn() {
  document.getElementById("edit-btn").style.display = "none";
  document.getElementById("ca").style.display = "block";
  document.getElementById("sv").style.display = "block";
  document.getElementById("editimage").style.display = "none";

}

function cancel() {
  document.getElementById("edit-btn").style.display = "block";
  document.getElementById("ca").style.display = "none";
  document.getElementById("sv").style.display = "none";
  document.getElementById("editimage").style.display = "block";
}

function savechanges() {
  document.getElementById("edit-btn").style.display = "block";
  document.getElementById("ca").style.display = "none";
  document.getElementById("sv").style.display = "none";
  document.getElementById("editimage").style.display = "block";
}

var a;
function pass() {
  if (a == 1) {
    document.getElementById('password').type = 'password';
    document.getElementById('pwdeye').src = "../images/pass-hide1.png";
    a = 0;
  }
  else {
    document.getElementById('password').type = 'text';
    document.getElementById('pwdeye').src = "../images/pass-show1.png";
    a = 1;
  }
}


function home() {
  document.getElementById("viewprofilesection").style.display = "none";
  document.getElementById("view").style.display = "block";
  document.getElementById("home-div").style.backgroundColor = "#ff5c02";
  document.getElementById("home-div").style.color = "white";
  document.getElementById("hotel-div").style.backgroundColor = "white";
  document.getElementById("hotel-div").style.color = "black";
  document.getElementById("pujabooking-div").style.backgroundColor = "white";
  document.getElementById("pujabooking-div").style.color = "black";
  document.getElementById("ujjain_jarshan-div").style.backgroundColor = "white";
  document.getElementById("ujjain_jarshan-div").style.color = "black";
  document.getElementById("omkareshwar-tour-div").style.backgroundColor = "white";
  document.getElementById("omkareshwar-tour-div").style.color = "black";
  document.getElementById("maa-baglamukhi-div").style.backgroundColor = "white";
  document.getElementById("maa-baglamukhi-div").style.color = "black";
  document.getElementById("taxi-services-div").style.backgroundColor = "white";
  document.getElementById("taxi-services-div").style.color = "black";
  document.getElementById("airport-rides-div").style.backgroundColor = "white";
  document.getElementById("airport-rides-div").style.color = "black";
}

function hotelbooking() {
  document.getElementById("viewprofilesection").style.display = "none";
  document.getElementById("view").style.display = "block";
  document.getElementById("hotel-div").style.backgroundColor = "#ff5c02";
  document.getElementById("hotel-div").style.color = "white";
  document.getElementById("home-div").style.backgroundColor = "white";
  document.getElementById("home-div").style.color = "black";
  document.getElementById("pujabooking-div").style.backgroundColor = "white";
  document.getElementById("pujabooking-div").style.color = "black";
  document.getElementById("ujjain_jarshan-div").style.backgroundColor = "white";
  document.getElementById("ujjain_jarshan-div").style.color = "black";
  document.getElementById("omkareshwar-tour-div").style.backgroundColor = "white";
  document.getElementById("omkareshwar-tour-div").style.color = "black";
  document.getElementById("maa-baglamukhi-div").style.backgroundColor = "white";
  document.getElementById("maa-baglamukhi-div").style.color = "black";
  document.getElementById("taxi-services-div").style.backgroundColor = "white";
  document.getElementById("taxi-services-div").style.color = "black";
  document.getElementById("airport-rides-div").style.backgroundColor = "white";
  document.getElementById("airport-rides-div").style.color = "black";
}

function pujabooking() {
  document.getElementById("viewprofilesection").style.display = "none";
  document.getElementById("view").style.display = "block";
  document.getElementById("pujabooking-div").style.backgroundColor = "#ff5c02";
  document.getElementById("pujabooking-div").style.color = "white";
  document.getElementById("home-div").style.backgroundColor = "white";
  document.getElementById("home-div").style.color = "black";
  document.getElementById("hotel-div").style.backgroundColor = "white";
  document.getElementById("hotel-div").style.color = "black";
  document.getElementById("ujjain_jarshan-div").style.backgroundColor = "white";
  document.getElementById("ujjain_jarshan-div").style.color = "black";
  document.getElementById("omkareshwar-tour-div").style.backgroundColor = "white";
  document.getElementById("omkareshwar-tour-div").style.color = "black";
  document.getElementById("maa-baglamukhi-div").style.backgroundColor = "white";
  document.getElementById("maa-baglamukhi-div").style.color = "black";
  document.getElementById("taxi-services-div").style.backgroundColor = "white";
  document.getElementById("taxi-services-div").style.color = "black";
  document.getElementById("airport-rides-div").style.backgroundColor = "white";
  document.getElementById("airport-rides-div").style.color = "black";
}

function ujjaindarshan() {
  document.getElementById("viewprofilesection").style.display = "none";
  document.getElementById("view").style.display = "block";
  document.getElementById("ujjain_jarshan-div").style.backgroundColor = "#ff5c02";
  document.getElementById("ujjain_jarshan-div").style.color = "white";
  document.getElementById("pujabooking-div").style.backgroundColor = "white";
  document.getElementById("pujabooking-div").style.color = "black";
  document.getElementById("home-div").style.backgroundColor = "white";
  document.getElementById("home-div").style.color = "black";
  document.getElementById("hotel-div").style.backgroundColor = "white";
  document.getElementById("hotel-div").style.color = "black";
  document.getElementById("omkareshwar-tour-div").style.backgroundColor = "white";
  document.getElementById("omkareshwar-tour-div").style.color = "black";
  document.getElementById("maa-baglamukhi-div").style.backgroundColor = "white";
  document.getElementById("maa-baglamukhi-div").style.color = "black";
  document.getElementById("taxi-services-div").style.backgroundColor = "white";
  document.getElementById("taxi-services-div").style.color = "black";
  document.getElementById("airport-rides-div").style.backgroundColor = "white";
  document.getElementById("airport-rides-div").style.color = "black";
}

function omkareshwartour() {
  document.getElementById("viewprofilesection").style.display = "none";
  document.getElementById("view").style.display = "block";
  document.getElementById("omkareshwar-tour-div").style.backgroundColor = "#ff5c02";
  document.getElementById("omkareshwar-tour-div").style.color = "white";
  document.getElementById("ujjain_jarshan-div").style.backgroundColor = "white";
  document.getElementById("ujjain_jarshan-div").style.color = "black";
  document.getElementById("pujabooking-div").style.backgroundColor = "white";
  document.getElementById("pujabooking-div").style.color = "black";
  document.getElementById("home-div").style.backgroundColor = "white";
  document.getElementById("home-div").style.color = "black";
  document.getElementById("hotel-div").style.backgroundColor = "white";
  document.getElementById("hotel-div").style.color = "black";
  document.getElementById("maa-baglamukhi-div").style.backgroundColor = "white";
  document.getElementById("maa-baglamukhi-div").style.color = "black";
  document.getElementById("taxi-services-div").style.backgroundColor = "white";
  document.getElementById("taxi-services-div").style.color = "black";
  document.getElementById("airport-rides-div").style.backgroundColor = "white";
  document.getElementById("airport-rides-div").style.color = "black";
  
}

function maabaglamuki() {
  document.getElementById("viewprofilesection").style.display = "none";
  document.getElementById("view").style.display = "block";
  document.getElementById("maa-baglamukhi-div").style.backgroundColor = "#ff5c02";
  document.getElementById("maa-baglamukhi-div").style.color = "white";
  document.getElementById("omkareshwar-tour-div").style.backgroundColor = "white";
  document.getElementById("omkareshwar-tour-div").style.color = "black";
  document.getElementById("ujjain_jarshan-div").style.backgroundColor = "white";
  document.getElementById("ujjain_jarshan-div").style.color = "black";
  document.getElementById("pujabooking-div").style.backgroundColor = "white";
  document.getElementById("pujabooking-div").style.color = "black";
  document.getElementById("home-div").style.backgroundColor = "white";
  document.getElementById("home-div").style.color = "black";
  document.getElementById("hotel-div").style.backgroundColor = "white";
  document.getElementById("hotel-div").style.color = "black";
  document.getElementById("taxi-services-div").style.backgroundColor = "white";
  document.getElementById("taxi-services-div").style.color = "black";
  document.getElementById("airport-rides-div").style.backgroundColor = "white";
  document.getElementById("airport-rides-div").style.color = "black";
}

function taxiservices() {
  document.getElementById("viewprofilesection").style.display = "none";
  document.getElementById("view").style.display = "block";
  document.getElementById("taxi-services-div").style.backgroundColor = "#ff5c02";
  document.getElementById("taxi-services-div").style.color = "white";
  document.getElementById("maa-baglamukhi-div").style.backgroundColor = "white";
  document.getElementById("maa-baglamukhi-div").style.color = "black";
  document.getElementById("omkareshwar-tour-div").style.backgroundColor = "white";
  document.getElementById("omkareshwar-tour-div").style.color = "black";
  document.getElementById("ujjain_jarshan-div").style.backgroundColor = "white";
  document.getElementById("ujjain_jarshan-div").style.color = "black";
  document.getElementById("pujabooking-div").style.backgroundColor = "white";
  document.getElementById("pujabooking-div").style.color = "black";
  document.getElementById("home-div").style.backgroundColor = "white";
  document.getElementById("home-div").style.color = "black";
  document.getElementById("hotel-div").style.backgroundColor = "white";
  document.getElementById("hotel-div").style.color = "black";
  document.getElementById("airport-rides-div").style.backgroundColor = "white";
  document.getElementById("airport-rides-div").style.color = "black";
  
}

function airportrides() {
  document.getElementById("viewprofilesection").style.display = "none";
  document.getElementById("view").style.display = "block";
  document.getElementById("airport-rides-div").style.backgroundColor = "#ff5c02";
  document.getElementById("airport-rides-div").style.color = "white";
  document.getElementById("taxi-services-div").style.backgroundColor = "white";
  document.getElementById("taxi-services-div").style.color = "black";
  document.getElementById("maa-baglamukhi-div").style.backgroundColor = "white";
  document.getElementById("maa-baglamukhi-div").style.color = "black";
  document.getElementById("omkareshwar-tour-div").style.backgroundColor = "white";
  document.getElementById("omkareshwar-tour-div").style.color = "black";
  document.getElementById("ujjain_jarshan-div").style.backgroundColor = "white";
  document.getElementById("ujjain_jarshan-div").style.color = "black";
  document.getElementById("pujabooking-div").style.backgroundColor = "white";
  document.getElementById("pujabooking-div").style.color = "black";
  document.getElementById("home-div").style.backgroundColor = "white";
  document.getElementById("home-div").style.color = "black";
  document.getElementById("hotel-div").style.backgroundColor = "white";
  document.getElementById("hotel-div").style.color = "black";
}

function view() {
  document.getElementById("view").style.display = "none"
  document.getElementById("viewprofilesection").style.display = "block";
  document.getElementById("home-div").style.backgroundColor = "white";
  document.getElementById("home-div").style.color = "black";
  document.getElementById("hotel-div").style.backgroundColor = "white";
  document.getElementById("hotel-div").style.color = "black";
  document.getElementById("taxi-services-div").style.backgroundColor = "white";
  document.getElementById("taxi-services-div").style.color = "black";
  document.getElementById("maa-baglamukhi-div").style.backgroundColor = "white";
  document.getElementById("maa-baglamukhi-div").style.color = "black";
  document.getElementById("omkareshwar-tour-div").style.backgroundColor = "white";
  document.getElementById("omkareshwar-tour-div").style.color = "black";
  document.getElementById("ujjain_jarshan-div").style.backgroundColor = "white";
  document.getElementById("ujjain_jarshan-div").style.color = "black";
  document.getElementById("pujabooking-div").style.backgroundColor = "white";
  document.getElementById("pujabooking-div").style.color = "black";
  document.getElementById("airport-rides-div").style.backgroundColor = "white";
  document.getElementById("airport-rides-div").style.color = "black";


}

function clickbtn(){
  document.getElementById('TotalloginDiv').style.display='block'
}