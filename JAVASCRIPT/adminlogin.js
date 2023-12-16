document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const radios = document.querySelectorAll('input[name="slide"]');

    function showSlide(n) {
        slides.forEach(slide => slide.style.display = "none");
        radios.forEach(radio => radio.checked = false);
        slides[n].style.display = "block";
        radios[n].checked = true;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function autoScroll() {
        nextSlide();
        setTimeout(autoScroll, 2000); // Change image every 2 seconds (2000ms)
    }

    autoScroll(); // Start the auto-scrolling

    // Add event listeners to radio buttons to manually switch slides
    radios.forEach((radio, index) => {
        radio.addEventListener("change", () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
});


    var Registration = document.getElementById('Registration')

    Registration.addEventListener('submit',function(event){
        event.preventDefault()
        var  mobileno, password;
           
            mobileno=document.getElementById("mobileNumber").value;
            password=document.getElementById("password").value;

            fetch("",{
                method: 'POST',
                body:JSON.stringify({
                  
                    mobileNumber: mobileno,
                    password:password
                }),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
                
            })
            .then(function(response){
                return response.json()

            })
            .then(function(data){
                console.log(data);
                if(data.statuscode === 200)
                {
                    sessionStorage.setItem('isLoggedIn', true)
                    sessionStorage.setItem('user', data.data.userName)
                    //session.isLoggedIn = true;
                    //session.user = data.data.userName;
                    alert("Sccessfully Login ");
                    window.location.href = "Dashboard.html";
                }else{
                    alert("Login Faild Try one more time ");
                } 
            })

    })


    // function show_password_login() {
 
    //   var x = document.getElementById("Password");
    //   if (x.type === "password") {
    //     x.type = "text";
    //     document.getElementsByClassName('eye_icon')[0].src = "../images/pass-hide1.png";
    //   } else {
    //     x.type = "password";
    //     document.getElementsByClassName('eye_icon')[0].src = "../images/pass-show1.png";
    //   }
   
  // }
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
  

