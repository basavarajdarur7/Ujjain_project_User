Table();


fetch('http://3.108.240.106:8097/booking/getAllBookingOrders')
    .then(res => res.json())
    .then(json => {
        console.log(json.data)

        document.getElementsByClassName('Dashboard_order1')[0].innerText = json.data.hotel;
        document.getElementsByClassName('Dashboard_orderdata11')[0].innerText = json.data.poja;
        document.getElementsByClassName('Dashboard_orderdata12')[0].innerText = json.data.visitings;
        document.getElementsByClassName('Dashboard_orderdata13')[0].innerText = json.data.taxi;
        document.getElementsByClassName('Dashboard_orderdata14')[0].innerText = json.data.airport;

        document.getElementsByClassName('Dashboard_ruppe')[0].innerText = json.data.byCash;
        document.getElementsByClassName('Dashboard_ruppe1')[0].innerText = json.data.byOnline;
    });

async function Table() {
    try {
        const response = await fetch('http://3.108.240.106:8097/dashBoard/getAllDashBoardHomeList');
        const data = await response.json();
        console.log(data)


        let table = '<table><thead>';
        table += '<tr> <th class="Dashboard_left">S.No</th> <th>User Name</th> <th>Mobile Number</th><th>Request for</th><th>Price ( ₹ )</th><th>Status</th><th class="Dashboard_right ">Response</th></tr>';


        let button = "";
        if (data.data.status == "Waiting to Respond") {
            button = ` <button class="approve" onclick="accept21(${data.data.userRequestId})">Approve </button>
        <button class="reject" onclick="reject21(${data.data.userRequestId})">Reject</button>`;
        }



        table += `<tbody><tr><td>${data.data.userRequestId}</td><td>${data.data.userName}</td><td>${data.data.mobileNumber}</td><td>${data.data.requestFor}</td><td>${data.data.price}</td><td>${data.data.status}</td><td id="Dashboard_act4" >${button}</td></tr></tbody>`;
        const response1 = await fetch('http://3.108.240.106:8097/dashBoard/getAllDashBoardHomeTaxiServiceList');
        const data1 = await response1.json();

        let button1 = "";
        if (data1.data.status == "Waiting to Respond") {
            button1 = ` <button class="approve" onclick="accept21(${data1.data.userRequestId})">Approve </button>
     <button class="reject" onclick="reject21(${data1.data.userRequestId})">Reject</button>`;
        }

        table += `<tbody><tr><td>${data1.data.userRequestId}</td><td>${data1.data.userName}</td><td>${data1.data.mobileNumber}</td><td>${data1.data.requestFor}</td><td>${data1.data.price}</td><td>${data1.data.status}</td><td id="Dashboard_act4" >${button1}</td></tr></tbody>`;
        const response2 = await fetch('http://3.108.240.106:8097/dashBoard/getAllDashBoardHomeUjjainDarshanList');
        const data2 = await response2.json();


        let button2 = "";
        if (data2.data.status == "Waiting to Respond") {
            button2 = ` <button class="approve" onclick="accept34(${data2.data.userRequestId})">Approve </button>
     <button class="reject" onclick="reject34(${data2.data.userRequestId})">Reject</button>`;
        }

        table += `<tbody><tr><td>${data2.data.userRequestId}</td><td>${data2.data.userName}</td><td>${data2.data.mobileNumber}</td><td>${data2.data.requestFor}</td><td>${data2.data.price}</td><td>${data2.data.status}</td><td id="Dashboard_act22" >${button2}</td></tr></tbody>`;
        const response3 = await fetch('http://3.108.240.106:8097/dashBoard/getAllDashBoardOmkareshwarlist');
        const data3 = await response3.json();

        let button3 = "";
        if (data3.data.status == "Waiting to Respond") {
            button3 = ` <button class="approve" onclick="accept34(${data3.data.userRequestId})">Approve </button>
     <button class="reject" onclick="reject34(${data3.data.userRequestId})">Reject</button>`;
        }


        table += `<tbody><tr><td>${data3.data.userRequestId}</td><td>${data3.data.userName}</td><td>${data3.data.mobileNumber}</td><td>${data3.data.requestFor}</td><td>${data3.data.price}</td><td>${data3.data.status}</td><td id="Dashboard_act22" >${button3}</td></tr></tbody>`;
        const response4 = await fetch('http://3.108.240.106:8097/dashBoard/getAllDashBoardMaabagalamukhilist');
        const data4 = await response4.json();

        let button4 = "";
        if (data4.data.status == "Waiting to Respond") {
            button4 = ` <button class="approve" onclick="accept34(${data4.data.userRequestId})">Approve </button>
     <button class="reject" onclick="reject34(${data4.data.userRequestId})">Reject</button>`;
        }


        table += `<tbody><tr><td>${data4.data.userRequestId}</td><td>${data4.data.userName}</td><td>${data4.data.mobileNumber}</td><td>${data4.data.requestFor}</td><td>${data3.data.price}</td><td>${data4.data.status}</td><td id="Dashboard_act22" >${button4}</td></tr></tbody>`;
        const response5 = await fetch('http://3.108.240.106:8097/dashBoard/getAllDashBoardHomeShoppingList');
        const data5 = await response5.json();

        let button5 = "";
        if (data5.data.status == "Waiting to Respond") {
            button5 = ` <button class="approve" onclick="accept42(${data5.data.userRequestId})">Approve </button>
     <button class="reject" onclick="reject42(${data5.data.userRequestId})">Reject</button>`;
        }


        table += `<tbody><tr><td>${data5.data.userRequestId}</td><td>${data5.data.userName}</td><td>${data5.data.mobileNumber}</td><td>${data5.data.requestFor}</td><td>${data5.data.price}</td><td>${data5.data.status}</td><td id="Dashboard_act22" >${button5}</td></tr></tbody>`;
        const response6 = await fetch('http://3.108.240.106:8097/dashBoard/getAllDashBoardPojaList');
        const data6 = await response6.json();

        let button6 = "";
        if (data6.data.status == "Waiting to Respond") {
            button6 = ` <button class="approve" onclick="accept34(${data6.data.userRequestId})">Approve </button>
     <button class="reject" onclick="reject34(${data6.data.userRequestId})">Reject</button>`;
        }


        table += `<tbody><tr><td>${data6.data.userRequestId}</td><td>${data6.data.userName}</td><td>${data6.data.mobileNumber}</td><td>${data6.data.requestFor}</td><td>${data6.data.price}</td><td>${data6.data.status}</td><td id="Dashboard_act22" >${button6}</td></tr></tbody>`;

        table += '</thead ></table>';
        let x = document.getElementById('dashboarddiv');
        x.innerHTML = table;
    } catch (error) {
        console.error(error);
    }
}



function Dashboard() {
    Table();
    document.getElementById("homepage").style.display = "block";
    document.getElementById("hotel").style.display = "none";
    document.getElementById("puja").style.display = "none";
    document.getElementById("Ujjain").style.display = "none";
    document.getElementById("Omkarshwar").style.display = "none";
    document.getElementById("Maa").style.display = "none";
    document.getElementById("Taxi").style.display = "none";
    document.getElementById("Airport").style.display = "none";
    document.getElementById("About").style.display = "none";

    document.getElementById("Home").style.color = "white";
    document.getElementById("Home").style.backgroundColor = "#ff5c02";

    document.getElementById("Hotel-Booking").style.color = "black";
    document.getElementById("Hotel-Booking").style.backgroundColor = "white";

    document.getElementById("Puja-Booking").style.color = "black";
    document.getElementById("Puja-Booking").style.backgroundColor = "white";

    document.getElementById("Ujjain-Darshan").style.color = "black";
    document.getElementById("Ujjain-Darshan").style.backgroundColor = "white";

    document.getElementById("Omkarshwar-Tour").style.color = "black";
    document.getElementById("Omkarshwar-Tour").style.backgroundColor = "white";

    document.getElementById("Maa-Baglamukki-Tour").style.color = "black";
    document.getElementById("Maa-Baglamukki-Tour").style.backgroundColor = "white";

    document.getElementById("Taxi-Services").style.color = "black";
    document.getElementById("Taxi-Services").style.backgroundColor = "white";

    document.getElementById("Airport-Rides").style.color = "black";
    document.getElementById("Airport-Rides").style.backgroundColor = "white";

    document.getElementById("Shopping").style.color = "black";
    document.getElementById("Shopping").style.backgroundColor = "white";

    document.getElementById("About-Ujjain").style.color = "black";
    document.getElementById("About-Ujjain").style.backgroundColor = "white";
}
// two nunber added -2
function accept21() {
    document.getElementById("Dashboard_statusCell4").innerText = "Allocated";
    document.getElementById("Dashboard_statusCell4").style.color = " #00bf4c";
    document.getElementById("Dashboard_act4").style.display = "none";
}
//two number added -4
function accept42() {
    document.getElementById("Dashboard_statusCell5").innerText = "Allocated";
    document.getElementById("Dashboard_statusCell5").style.color = " #00bf4c";
    document.getElementById("Dashboard_act5").style.display = "none";
}
// one number added -1
function accept13() {
    document.getElementById("Dashboard_statusCell1").innerText = "Allocated";
    document.getElementById("Dashboard_statusCell1").style.color = " #00bf4c";
    document.getElementById("Dashboard_act3").style.display = "none";
}
// one number added -3
function accept34() {
    document.getElementById("Dashboard_statusCell22").innerText = "Allocated";
    document.getElementById("Dashboard_statusCell22").style.color = " #00bf4c";
    document.getElementById("Dashboard_act22").style.display = "none";
}
// two nunber added -2
function reject21() {
    document.getElementById("Dashboard_statusCell4").innerText = "Rejected";
    document.getElementById("Dashboard_statusCell4").style.color = "#ff0000";
    document.getElementById("Dashboard_act4").style.display = "none";
}
//two number added -4
function reject42() {
    document.getElementById("Dashboard_statusCell5").innerText = "Rejected";
    document.getElementById("Dashboard_statusCell5").style.color = "#ff0000";
    document.getElementById("Dashboard_act5").style.display = "none";
}
// one number adede -1
function reject13() {
    document.getElementById("Dashboard_statusCell1").innerText = "Rejected";
    document.getElementById("Dashboard_statusCell1").style.color = "#ff0000";
    document.getElementById("Dashboard_act3").style.display = "none";
}
// one number added -3
function reject34() {
    document.getElementById("Dashboard_statusCell22").innerText = "Rejected";
    document.getElementById("Dashboard_statusCell22").style.color = "#ff0000";
    document.getElementById("Dashboard_act22").style.display = "none";
}



async function accept21(id) {
    try {
        const response = await fetch('http://3.108.240.106:8097/dashBoard/hotelApprove/' + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
        });
        const data = await response.json();
        if (data.data != undefined) {
            Table();
        }


    } catch (error) {
        console.error(error);
    }
}

async function reject21(id) {
    try {
        const response = await fetch('http://3.108.240.106:8097/dashBoard/hotelReject/' + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
        });
        const data = await response.json();
        if (data.data != undefined) {
            Table();
        }


    } catch (error) {
        console.error(error);
    }
}



async function accept34(id) {
    try {
        const response = await fetch('http://3.108.240.106:8097/dashBoard/ujjainGuideApprove/' + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
        });
        const data = await response.json();
        if (data.data != undefined) {
            Table();
        }


    } catch (error) {
        console.error(error);
    }
}

async function reject34(id) {
    try {
        const response = await fetch('http://3.108.240.106:8097/dashBoard/ujjainGuideaReject/' + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
        });
        const data = await response.json();
        if (data.data != undefined) {
            Table();
        }


    } catch (error) {
        console.error(error);
    }
}


async function accept42(id) {
    try {
        const response = await fetch('http://3.108.240.106:8097/dashBoard/shoppingApprove/' + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
        });
        const data = await response.json();
        if (data.data != undefined) {
            Table();
        }


    } catch (error) {
        console.error(error);
    }
}

async function reject42(id) {
    try {
        const response = await fetch('' + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
        });
        const data = await response.json();
        if (data.data != undefined) {
            Table();
        }


    } catch (error) {
        console.error(error);
    }
}

//  hotelBooking

function hotelBooking() {
    Table();


    fetch('http://3.108.240.106:8097/admin/hotelBooking/getAllHotelBookings')
        .then(res => res.json())
        .then(json => {
            console.log(json.data)
            document.getElementsByClassName('Hotel_rup')[0].innerText = json.data.total;
            document.getElementsByClassName('Hotel_rup1')[0].innerText = json.data.available;
            document.getElementsByClassName('Hotel_rup2')[0].innerText = json.data.occupied;
            document.getElementsByClassName('Hotel_rup3')[0].innerText = json.data.reserved;

            document.getElementsByClassName('Hotel_rupee')[0].innerText = json.data.byCash;
            document.getElementsByClassName('Hotel_rupee1')[0].innerText = json.data.byOnline;
        });


    async function Table() {
        try {
            const response = await fetch('http://3.108.240.106:8097/admin/hotelBooking/allHotelBookings');
            const data = await response.json();
            console.log(data)


            let table = '<table><thead>';
            table += '<tr><th class="Hotel_left">S NO</th><th >User Name</th><th>Mobile Number</th><th>Members</th><th>HotelName</th><th>Price</th><th>Status</th><th>Response</th></tr>';
            let i = 1;
            data.data.forEach((item, i) => {
                let button = "";
                if (item.status == "Waiting to Respond") {
                    button = ` <button class="approve" onclick="Hotel_approve(${item.id})">Approve </button>
            <button class="reject" onclick="Hotel_reject(${item.id})">Reject</button>`;
                }

                let members = 0
                if (item.hotels.length > 0) {
                    members = item.hotels[0].totalPerson
                }

                table += `<tbody><tr><td>${i}</td><td>${item.name}</td><td>${item.mobileNo}</td><td>${3}</td><td>${item.hotels[0].hotelName}</td><td>${item.price}</td><td>${item.status}</td><td id="Hotel_act1" >${button}</td></tr></tbody>`;
                i++;
            });
            table += '</thead ></table>';
            let x = document.getElementById('BookingDiv');
            x.innerHTML = table;
        } catch (error) {
            console.error(error);
        }
    }


    async function getUserBookingInfo() {
        try {
            const response1 = await fetch('http://3.108.240.106:8097/manualBooking/getAllManualBooking');
            const values = await response1.json();
            document.getElementById('username').value = values.data.userName;
            document.getElementById('HotelName').value = values.data.hotelName;
            document.getElementById('MobileNumber').value = values.data.mobileNumber;
            document.getElementById('Noofadults').value = values.data.numberOfAdults;
            document.getElementById('Noofchilds').value = values.data.numberOfChildrens;
        } catch (error) {
            console.error(error);
        }
    }




    document.getElementById("homepage").style.display = "none";
    document.getElementById("hotel").style.display = "block";
    document.getElementById("puja").style.display = "none";
    document.getElementById("Ujjain").style.display = "none";
    document.getElementById("Omkarshwar").style.display = "none";
    document.getElementById("Maa").style.display = "none";
    document.getElementById("Taxi").style.display = "none";
    document.getElementById("Airport").style.display = "none";
    document.getElementById("About").style.display = "none";

    document.getElementById("Home").style.color = "black";
    document.getElementById("Home").style.backgroundColor = "white";

    document.getElementById("Hotel-Booking").style.color = "white";
    document.getElementById("Hotel-Booking").style.backgroundColor = "#ff5c02";

    document.getElementById("Puja-Booking").style.color = "black";
    document.getElementById("Puja-Booking").style.backgroundColor = "white";

    document.getElementById("Ujjain-Darshan").style.color = "black";
    document.getElementById("Ujjain-Darshan").style.backgroundColor = "white";

    document.getElementById("Omkarshwar-Tour").style.color = "black";
    document.getElementById("Omkarshwar-Tour").style.backgroundColor = "white";

    document.getElementById("Maa-Baglamukki-Tour").style.color = "black";
    document.getElementById("Maa-Baglamukki-Tour").style.backgroundColor = "white";

    document.getElementById("Taxi-Services").style.color = "black";
    document.getElementById("Taxi-Services").style.backgroundColor = "white";

    document.getElementById("Airport-Rides").style.color = "black";
    document.getElementById("Airport-Rides").style.backgroundColor = "white";

    document.getElementById("Shopping").style.color = "black";
    document.getElementById("Shopping").style.backgroundColor = "white";

    document.getElementById("About-Ujjain").style.color = "black";
    document.getElementById("About-Ujjain").style.backgroundColor = "white";
}
function Hotel_aprve2() {
    document.getElementById("Hotel_statusCell1").innerText = "Allocated";
    document.getElementById("Hotel_statusCell1").style.color = " #00bf4c";
    document.getElementById("Hotel_act1").style.display = "none";
}

function Hotel_rect2() {
    document.getElementById("Hotel_statusCell1").innerText = "Rejected";
    document.getElementById("Hotel_statusCell1").style.color = "#ff0000";
    document.getElementById("Hotel_act1").style.display = "none";
}

function Hotel_approve2() {
    document.getElementById("Hotel_statusCell4").innerText = "Allocated";
    document.getElementById("Hotel_statusCell4").style.color = " #00bf4c";
    document.getElementById("Hotel_act4").style.display = "none";
}

function Hotel_reject2() {
    document.getElementById("Hotel_statusCell4").innerText = "Rejected";
    document.getElementById("Hotel_statusCell4").style.color = "#ff0000";
    document.getElementById("Hotel_act4").style.display = "none";

}


async function Hotel_approve(id) {
    try {
        const response = await fetch('http://3.108.240.106:8097/admin/hotelBooking/approve/' + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
        });
        const data = await response.json();
        if (data.data != undefined) {
            generateTable();
        }


    } catch (error) {
        console.error(error);
    }
}

async function Hotel_reject(id) {
    try {
        const response = await fetch('http://3.108.240.106:8097/admin/hotelBooking/reject/2052' + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
        });
        const data = await response.json();
        if (data.data != undefined) {
            generateTable();
        }


    } catch (error) {
        console.error(error);
    }
}






//    pujaBooking

function pujaBooking() {
    Table();


    fetch('http://3.108.240.106:8097/booking/getAllPoojaBooking')
        .then(res => res.json())
        .then(json => {
            console.log(json.data)

            document.getElementsByClassName('puja_rup')[0].innerText = json.data.total;
            document.getElementsByClassName('puja_rup1')[0].innerText = json.data.available;
            document.getElementsByClassName('puja_rup2')[0].innerText = json.data.occupied;
            document.getElementsByClassName('puja_rup3')[0].innerText = json.data.reserved;

            document.getElementsByClassName('puja_rupee')[0].innerText = json.data.byCash;
            document.getElementsByClassName('puja_rupee1')[0].innerText = json.data.byOnline;

        });



    async function Table() {
        try {
            const response = await fetch('http://3.108.240.106:8097/admin/api/poja/allBookings');
            const data = await response.json();
            console.log(data)


            let table = '<table><thead>';
            table += '<tr><th class="puja_left">S.NO</th><th >User Name</th><th>Mobile Number</th><th>Members</th><th>Price</th><th>Status</th><th>Response</th></tr>';
            let i = 1;
            data.forEach(item => {
                let button = "";
                if (item.status == "Waiting to Respond") {
                    button = ` <button class="approve" onclick="puja_aprve2(${item.id})">Approve </button>
            <button class="reject" onclick="puja_rect2(${item.id})">Reject</button>`;
                }

                // let members = 0
                // if (item.hotels.length > 0) {
                //     members = item.hotels[0].totalPerson
                // }

                table += `<tbody><tr><td>${i}</td><td>${item.name}</td><td>${item.mobileNumber}</td><td>${item.poja.totalpoja}</td><td>${item.price}</td><td>${item.status}</td><td id="puja_act2" >${button}</td></tr></tbody>`;
                i++;
            });
            table += '</thead ></table>';
            let x = document.getElementById('pujaDiv');
            x.innerHTML = table;
        } catch (error) {
            console.error(error);
        }
    }



    document.getElementById("homepage").style.display = "none";
    document.getElementById("hotel").style.display = "none";
    document.getElementById("puja").style.display = "block";
    document.getElementById("Ujjain").style.display = "none";
    document.getElementById("Omkarshwar").style.display = "none";
    document.getElementById("Maa").style.display = "none";
    document.getElementById("Taxi").style.display = "none";
    document.getElementById("Airport").style.display = "none";
    document.getElementById("About").style.display = "none";

    document.getElementById("Home").style.color = "black";
    document.getElementById("Home").style.backgroundColor = "white";

    document.getElementById("Hotel-Booking").style.color = "black";
    document.getElementById("Hotel-Booking").style.backgroundColor = "white";

    document.getElementById("Puja-Booking").style.color = "white";
    document.getElementById("Puja-Booking").style.backgroundColor = "#ff5c02";

    document.getElementById("Ujjain-Darshan").style.color = "black";
    document.getElementById("Ujjain-Darshan").style.backgroundColor = "white";

    document.getElementById("Omkarshwar-Tour").style.color = "black";
    document.getElementById("Omkarshwar-Tour").style.backgroundColor = "white";

    document.getElementById("Maa-Baglamukki-Tour").style.color = "black";
    document.getElementById("Maa-Baglamukki-Tour").style.backgroundColor = "white";

    document.getElementById("Taxi-Services").style.color = "black";
    document.getElementById("Taxi-Services").style.backgroundColor = "white";

    document.getElementById("Airport-Rides").style.color = "black";
    document.getElementById("Airport-Rides").style.backgroundColor = "white";

    document.getElementById("Shopping").style.color = "black";
    document.getElementById("Shopping").style.backgroundColor = "white";

    document.getElementById("About-Ujjain").style.color = "black";
    document.getElementById("About-Ujjain").style.backgroundColor = "white";
}








function puja_aprve2() {
    document.getElementById("puja_statusCell2").innerText = "Allocated";
    document.getElementById("puja_statusCell2").style.color = " #00bf4c";
    document.getElementById("puja_act2").style.display = "none";
}

function puja_rect2() {
    document.getElementById("puja_statusCell2").innerText = "Rejected";
    document.getElementById("puja_statusCell2").style.color = "#ff0000";
    document.getElementById("puja_act2").style.display = "none";
}

function puja_approve2() {
    document.getElementById("puja_statusCell4").innerText = "Allocated";
    document.getElementById("puja_statusCell4").style.color = " #00bf4c";
    document.getElementById("puja_act4").style.display = "none";
}

function puja_reject2() {
    document.getElementById("puja_statusCell4").innerText = "Rejected";
    document.getElementById("puja_statusCell4").style.color = "#ff0000";
    document.getElementById("puja_act4").style.display = "none";

}



async function puja_aprve2(id) {
    try {
        const response = await fetch('http://3.108.240.106:8097/admin/api/poja/approve/' + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
        });
        const data = await response.json();
        if (data.data != undefined) {
            generateTable();
        }


    } catch (error) {
        console.error(error);
    }
}

async function puja_rect2(id) {
    try {
        const response = await fetch('http://3.108.240.106:8097/admin/api/poja/reject/15' + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
        });
        const data = await response.json();
        if (data.data != undefined) {
            generateTable();
        }


    } catch (error) {
        console.error(error);
    }
}





//    ujjainDarshan

function ujjainDarshan() {

    Table();


    fetch('http://3.108.240.106:8097/booking/getAllUjjainiBookings')
        .then(res => res.json())
        .then(json => {
            console.log(json.data)

            document.getElementsByClassName('ujjain_rup')[0].innerText = json.data.total;
            document.getElementsByClassName('ujjain_rup1')[0].innerText = json.data.available;
            document.getElementsByClassName('ujjain_rup2')[0].innerText = json.data.occupied;
            document.getElementsByClassName('ujjain_rup3')[0].innerText = json.data.reserved;

            document.getElementsByClassName('ujjain_rupee')[0].innerText = json.data.byCash;
            document.getElementsByClassName('ujjain_rupee1')[0].innerText = json.data.byOnline;

        });


    async function Table() {
        try {
            const response = await fetch('http://3.108.240.106:8097/admin/api/poja/allBookings');
            const data = await response.json();
            console.log(data)


            let table = '<table><thead>';
            table += '<tr><th class="ujjain_left">S NO</th><th >User Name</th><th>Mobile Number</th><th>Members</th><th>price</th><th>Status</th><th>Response</th></tr>';
            let i = 1;
            data.forEach(item => {
                let button = "";
                if (item.status == "Waiting to Respond") {
                    button = ` <button class="approve" onclick="ujjain_aprve4(${item.id})">Approve </button>
            <button class="reject" onclick="ujjain_rect4(${item.id})">Reject</button>`;
                }

                // let members = 0
                // if (item.hotels.length > 0) {
                //     members = item.hotels[0].totalPerson
                // }

                table += `<tbody><tr><td>${i}</td><td>${item.name}</td><td>${item.mobileNumber}</td><td>${item.poja.totalpoja}</td><td>${item.price}</td><td>${item.status}</td><td id="ujjain_act2" >${button}</td></tr></tbody>`;
                i++;
            });
            table += '</thead ></table>';
            let x = document.getElementById('ujjainDiv');
            x.innerHTML = table;
        } catch (error) {
            console.error(error);
        }
    }






    document.getElementById("homepage").style.display = "none";
    document.getElementById("hotel").style.display = "none";
    document.getElementById("puja").style.display = "none";
    document.getElementById("Ujjain").style.display = "block";
    document.getElementById("Omkarshwar").style.display = "none";
    document.getElementById("Maa").style.display = "none";
    document.getElementById("Taxi").style.display = "none";
    document.getElementById("Airport").style.display = "none";
    document.getElementById("About").style.display = "none";

    document.getElementById("Home").style.color = "black";
    document.getElementById("Home").style.backgroundColor = "white";

    document.getElementById("Hotel-Booking").style.color = "black";
    document.getElementById("Hotel-Booking").style.backgroundColor = "white";

    document.getElementById("Puja-Booking").style.color = "black";
    document.getElementById("Puja-Booking").style.backgroundColor = "white";

    document.getElementById("Ujjain-Darshan").style.color = "white";
    document.getElementById("Ujjain-Darshan").style.backgroundColor = "#ff5c02";

    document.getElementById("Omkarshwar-Tour").style.color = "black";
    document.getElementById("Omkarshwar-Tour").style.backgroundColor = "white";

    document.getElementById("Maa-Baglamukki-Tour").style.color = "black";
    document.getElementById("Maa-Baglamukki-Tour").style.backgroundColor = "white";

    document.getElementById("Taxi-Services").style.color = "black";
    document.getElementById("Taxi-Services").style.backgroundColor = "white";

    document.getElementById("Airport-Rides").style.color = "black";
    document.getElementById("Airport-Rides").style.backgroundColor = "white";

    document.getElementById("Shopping").style.color = "black";
    document.getElementById("Shopping").style.backgroundColor = "white";

    document.getElementById("About-Ujjain").style.color = "black";
    document.getElementById("About-Ujjain").style.backgroundColor = "white";
}
function ujjain_aprve4() {
    document.getElementById("ujjain_statusCell2").innerText = "Allocated";
    document.getElementById("ujjain_statusCell2").style.color = "#00bf4c";
    document.getElementById("ujjain_act2").style.display = "none";
}

function ujjain_rect4() {
    document.getElementById("ujjain_statusCell2").innerText = "Rejected";
    document.getElementById("ujjain_statusCell2").style.color = "#ff0000";
    document.getElementById("ujjain_act2").style.display = "none";
}

function ujjain_approve4() {
    document.getElementById("ujjain_statusCell4").innerText = "Allocated";
    document.getElementById("ujjain_statusCell4").style.color = "#00bf4c";
    document.getElementById("ujjain_act4").style.display = "none";
}

function ujjain_reject4() {
    document.getElementById("ujjain_statusCell4").innerText = "Rejected";
    document.getElementById("ujjain_statusCell4").style.color = "#ff0000";
    document.getElementById("ujjain_act4").style.display = "none";
}



async function ujjain_aprve4(id) {
    try {
        const response = await fetch('http://3.108.240.106:8097/admin/api/ujjain/approve/' + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
        });
        const data = await response.json();
        if (data.data != undefined) {
            generateTable();
        }


    } catch (error) {
        console.error(error);
    }
}

async function ujjain_rect4(id) {
    try {
        const response = await fetch('http://3.108.240.106:8097/admin/api/ujjain/reject/' + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
        });
        const data = await response.json();
        if (data.data != undefined) {
            generateTable();
        }


    } catch (error) {
        console.error(error);
    }
}



// omkarshwarTour

function omkarshwarTour() {
    Table();


    fetch('http://3.108.240.106:8097/booking/getAllUjjainiBookings')
        .then(res => res.json())
        .then(json => {
            console.log(json.data)

            document.getElementsByClassName('omkarshawar_rup')[0].innerText = json.data.total;
            document.getElementsByClassName('omkarshawar_rup1')[0].innerText = json.data.available;
            document.getElementsByClassName('omkarshawar_rup2')[0].innerText = json.data.occupied;
            document.getElementsByClassName('omkarshawar_rup3')[0].innerText = json.data.reserved;

            document.getElementsByClassName('omkarshawar_rupee')[0].innerText = json.data.byCash;
            document.getElementsByClassName('omkarshawar_rupee1')[0].innerText = json.data.byOnline;

        });

    async function Table() {
        try {
            const response = await fetch('http://3.108.240.106:8097/admin/api/ujjain/allBookings');
            const data = await response.json();
            console.log(data)


            let table = '<table><thead>';
            table += '<tr><th class="ujjain_left">S NO</th><th >User Name</th><th>Mobile Number</th><th>Members</th><th>Places</th><th>price</th><th>Status</th><th>Response</th></tr>';
            let i = 1;
            data.forEach(item => {
                let button = "";
                if (item.status == "Waiting to Respond") {
                    button = ` <button class="approve" onclick="omkarshawar_aprve4(${item.id})">Approve </button>
            <button class="reject" onclick="omkarshawar_rect4(${item.id})">Reject</button>`;
                }

                // let members = 0
                // if (item.hotels.length > 0) {
                //     members = item.hotels[0].totalPerson
                // }

                table += `<tbody><tr><td>${i}</td><td>${item.name}</td><td>${item.mobileNumber}</td><td>${item.data.totalujjainguides}</td><td>${item.data.distance}</td><td>${item.price}</td><td>${item.status}</td><td id="omkarshawar_act2" >${button}</td></tr></tbody>`;
                i++;
            });
            table += '</thead ></table>';
            let x = document.getElementById('omkareshwaraDiv');
            x.innerHTML = table;
        } catch (error) {
            console.error(error);
        }
    }



    document.getElementById("homepage").style.display = "none";
    document.getElementById("hotel").style.display = "none";
    document.getElementById("puja").style.display = "none";
    document.getElementById("Ujjain").style.display = "none";
    document.getElementById("Omkarshwar").style.display = "block";
    document.getElementById("Maa").style.display = "none";
    document.getElementById("Taxi").style.display = "none";
    document.getElementById("Airport").style.display = "none";
    document.getElementById("About").style.display = "none";

    document.getElementById("Home").style.color = "black";
    document.getElementById("Home").style.backgroundColor = "white";

    document.getElementById("Hotel-Booking").style.color = "black";
    document.getElementById("Hotel-Booking").style.backgroundColor = "white";

    document.getElementById("Puja-Booking").style.color = "black";
    document.getElementById("Puja-Booking").style.backgroundColor = "white";

    document.getElementById("Ujjain-Darshan").style.color = "black";
    document.getElementById("Ujjain-Darshan").style.backgroundColor = "white";

    document.getElementById("Omkarshwar-Tour").style.color = "white";
    document.getElementById("Omkarshwar-Tour").style.backgroundColor = "#ff5c02";

    document.getElementById("Maa-Baglamukki-Tour").style.color = "black";
    document.getElementById("Maa-Baglamukki-Tour").style.backgroundColor = "white";

    document.getElementById("Taxi-Services").style.color = "black";
    document.getElementById("Taxi-Services").style.backgroundColor = "white";

    document.getElementById("Airport-Rides").style.color = "black";
    document.getElementById("Airport-Rides").style.backgroundColor = "white";

    document.getElementById("Shopping").style.color = "black";
    document.getElementById("Shopping").style.backgroundColor = "white";

    document.getElementById("About-Ujjain").style.color = "black";
    document.getElementById("About-Ujjain").style.backgroundColor = "white";
}
function omkarshawar_aprve4() {
    document.getElementById("omkarshawar_statusCell2").innerText = "Allocated";
    document.getElementById("omkarshawar_statusCell2").style.color = "#00bf4c";
    document.getElementById("omkarshawar_act2").style.display = "none";
}

function omkarshawar_rect4() {
    document.getElementById("omkarshawar_statusCell2").innerText = "Rejected";
    document.getElementById("omkarshawar_statusCell2").style.color = "#ff0000";
    document.getElementById("omkarshawar_act2").style.display = "none";
}

function omkarshawar_approve4() {
    document.getElementById("omkarshawar_statusCell4").innerText = "Allocated";
    document.getElementById("omkarshawar_statusCell4").style.color = "#00bf4c";
    document.getElementById("omkarshawar_act4").style.display = "none";
}

function omkarshawar_reject4() {
    document.getElementById("omkarshawar_statusCell4").innerText = "Rejected";
    document.getElementById("omkarshawar_statusCell4").style.color = "#ff0000";
    document.getElementById("omkarshawar_act4").style.display = "none";
}


async function omkarshawar_aprve4(id) {
    try {
        const response = await fetch('http://3.108.240.106:8097/admin/api/omkareshwar/approve/' + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
        });
        const data = await response.json();
        if (data.data != undefined) {
            generateTable();
        }


    } catch (error) {
        console.error(error);
    }
}

async function omkarshawar_rect4(id) {
    try {
        const response = await fetch('http://3.108.240.106:8097/admin/api/omkareshwar/reject/' + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
        });
        const data = await response.json();
        if (data.data != undefined) {
            generateTable();
        }


    } catch (error) {
        console.error(error);
    }
}




//   maaBaglamukkiTour



function maaBaglamukkiTour() {


    Table();


    fetch('http://3.108.240.106:8097/booking/getAllUjjainiBookings')
        .then(res => res.json())
        .then(json => {
            console.log(json.data)

            document.getElementsByClassName('Maa_baglamukki_rup')[0].innerText = json.data.total;
            document.getElementsByClassName('Maa_baglamukki_rup1')[0].innerText = json.data.available;
            document.getElementsByClassName('Maa_baglamukki_rup2')[0].innerText = json.data.occupied;
            document.getElementsByClassName('Maa_baglamukki_rup3')[0].innerText = json.data.reserved;

            document.getElementsByClassName('Maa_baglamukki_rupee')[0].innerText = json.data.byCash;
            document.getElementsByClassName('Maa_baglamukki_rupee1')[0].innerText = json.data.byOnline;

        });



    async function Table() {
        try {
            const response = await fetch('http://3.108.240.106:8097/admin/api/maaBaglamukhi/allBookings');
            const data = await response.json();
            console.log(data)


            let table = '<table><thead>';
            table += '<tr><th class="ujjain_left">S NO</th><th >User Name</th><th>Mobile Number</th><th>Members</th><th>Places</th><th>Price</th><th>Status</th><th>Response</th></tr>';
            let i = 1;
            data.forEach(item => {
                let button = "";
                if (item.status == "Waiting to Respond") {
                    button = ` <button class="approve" onclick="Maa_baglamukki_aprve4(${item.id})">Approve </button>
            <button class="reject" onclick="Maa_baglamukki_rect4(${item.id})">Reject</button>`;
                }

                table += `<tbody><tr><td>${i}</td><td>${item.name}</td><td>${item.mobileNumber}</td><td>${item.data.totalujjainguides}</td><td>${item.data.distance}</td><td>${item.price}</td><td>${item.status}</td><td id="Maa_baglamukki_act2" >${button}</td></tr></tbody>`;
                i++;
            });

            table += '</thead ></table>';
            let x = document.getElementById('maabaglamukhidiv');
            x.innerHTML = table;
        } catch (error) {
            console.error(error);
        }
    }



    document.getElementById("homepage").style.display = "none";
    document.getElementById("hotel").style.display = "none";
    document.getElementById("puja").style.display = "none";
    document.getElementById("Ujjain").style.display = "none";
    document.getElementById("Omkarshwar").style.display = "none";
    document.getElementById("Maa").style.display = "block";
    document.getElementById("Taxi").style.display = "none";
    document.getElementById("Airport").style.display = "none";
    document.getElementById("About").style.display = "none";

    document.getElementById("Home").style.color = "black";
    document.getElementById("Home").style.backgroundColor = "white";

    document.getElementById("Hotel-Booking").style.color = "black";
    document.getElementById("Hotel-Booking").style.backgroundColor = "white";

    document.getElementById("Puja-Booking").style.color = "black";
    document.getElementById("Puja-Booking").style.backgroundColor = "white";

    document.getElementById("Ujjain-Darshan").style.color = "black";
    document.getElementById("Ujjain-Darshan").style.backgroundColor = "white";

    document.getElementById("Omkarshwar-Tour").style.color = "black";
    document.getElementById("Omkarshwar-Tour").style.backgroundColor = "white";

    document.getElementById("Maa-Baglamukki-Tour").style.color = "white";
    document.getElementById("Maa-Baglamukki-Tour").style.backgroundColor = "#ff5c02";

    document.getElementById("Taxi-Services").style.color = "black";
    document.getElementById("Taxi-Services").style.backgroundColor = "white";

    document.getElementById("Airport-Rides").style.color = "black";
    document.getElementById("Airport-Rides").style.backgroundColor = "white";

    document.getElementById("Shopping").style.color = "black";
    document.getElementById("Shopping").style.backgroundColor = "white";

    document.getElementById("About-Ujjain").style.color = "black";
    document.getElementById("About-Ujjain").style.backgroundColor = "white";
}
function Maa_baglamukki_aprve4() {
    document.getElementById("Maa_baglamukki_statusCell2").innerText = "Allocated";
    document.getElementById("Maa_baglamukki_statusCell2").style.color = "#00bf4c";
    document.getElementById("Maa_baglamukki_act2").style.display = "none";
}

function Maa_baglamukki_rect4() {
    document.getElementById("Maa_baglamukki_statusCell2").innerText = "Rejected";
    document.getElementById("Maa_baglamukki_statusCell2").style.color = "#ff0000";
    document.getElementById("Maa_baglamukki_act2").style.display = "none";
}

function Maa_baglamukki_approve4() {
    document.getElementById("Maa_baglamukki_statusCell4").innerText = "Allocated";
    document.getElementById("Maa_baglamukki_statusCell4").style.color = "#00bf4c";
    document.getElementById("Maa_baglamukki_act4").style.display = "none";
}

function Maa_baglamukki_reject4() {
    document.getElementById("Maa_baglamukki_statusCell4").innerText = "Rejected";
    document.getElementById("Maa_baglamukki_statusCell4").style.color = "#ff0000";
    document.getElementById("Maa_baglamukki_act4").style.display = "none";
}


async function Maa_baglamukki_aprve4(id) {
    try {
        const response = await fetch('http://3.108.240.106:8097/admin/api/maaBaglamukhi/approve/1' + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
        });
        const data = await response.json();
        if (data.data != undefined) {
            generateTable();
        }


    } catch (error) {
        console.error(error);
    }
}

async function Maa_baglamukki_rect4(id) {
    try {
        const response = await fetch('http://3.108.240.106:8097/admin/api/maaBaglamukhi/reject/1' + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
        });
        const data = await response.json();
        if (data.data != undefined) {
            generateTable();
        }


    } catch (error) {
        console.error(error);
    }
}





//    taxiServices

function taxiServices() {
    Table();
    fetch('http://3.108.240.106:8097/booking/getAllTaxiBookings')
        .then(res => res.json())
        .then(json => {
            console.log(json.data)

            document.getElementsByClassName('taxi_services_rup')[0].innerText = json.data.total;
            document.getElementsByClassName('taxi_services_rup1')[0].innerText = json.data.available;
            document.getElementsByClassName('taxi_services_rup2')[0].innerText = json.data.occupied;
            document.getElementsByClassName('taxi_services_rup3')[0].innerText = json.data.reserved;

            document.getElementsByClassName('taxi_services_rupee')[0].innerText = json.data.byCash;
            document.getElementsByClassName('taxi_services_rupee1')[0].innerText = json.data.byOnline;
        });



    async function Table() {
        try {
            const response = await fetch('http://3.108.240.106:8097/taxiService/getAllTaxi');
            const data = await response.json();
            console.log(data)


            let table = '<table><thead>';
            table += '<tr><th class="airport_rides_left">S NO</th><th >User Name</th><th >Email id</th><th >From</th><th >To</th><th>Mobile Number</th><th>Members</th><th>price</th><th>Status</th><th>Response</th></tr>';
            let i = 1;
            data.data.forEach(item => {
                let button = "";
                if (item.status == "Waiting to Respond") {
                    button = ` <button class="approve" onclick="taxi_services_aprve4(${item.id})">Approve </button>
                                   <button class="reject" onclick="taxi_services_reject4(${item.id})">Reject</button>`;
                }

                table += `<tbody><tr><td>${i}</td><td>${item.userName}</td><td>${item.email}</td><td>${item.fromLocation}</td><td>${item.toLocation}</td><td>${item.mobileNo}</td><td>${3}</td><td>${item.totalFare}</td><td>${item.status}</td><td id="taxi_services_act2" >${button}</td></tr></tbody>`;
                i++;
            });
            table += '</thead ></table>';
            let x = document.getElementById('taxiservicediv');
            x.innerHTML = table;
        } catch (error) {
            console.error(error);
        }
    }




    document.getElementById("homepage").style.display = "none";
    document.getElementById("hotel").style.display = "none";
    document.getElementById("puja").style.display = "none";
    document.getElementById("Ujjain").style.display = "none";
    document.getElementById("Omkarshwar").style.display = "none";
    document.getElementById("Maa").style.display = "none";
    document.getElementById("Taxi").style.display = "block";
    document.getElementById("Airport").style.display = "none";
    document.getElementById("About").style.display = "none";

    document.getElementById("Home").style.color = "black";
    document.getElementById("Home").style.backgroundColor = "white";

    document.getElementById("Hotel-Booking").style.color = "black";
    document.getElementById("Hotel-Booking").style.backgroundColor = "white";

    document.getElementById("Puja-Booking").style.color = "black";
    document.getElementById("Puja-Booking").style.backgroundColor = "white";

    document.getElementById("Ujjain-Darshan").style.color = "black";
    document.getElementById("Ujjain-Darshan").style.backgroundColor = "white";

    document.getElementById("Omkarshwar-Tour").style.color = "black";
    document.getElementById("Omkarshwar-Tour").style.backgroundColor = "white";

    document.getElementById("Maa-Baglamukki-Tour").style.color = "black";
    document.getElementById("Maa-Baglamukki-Tour").style.backgroundColor = "white";

    document.getElementById("Taxi-Services").style.color = "white";
    document.getElementById("Taxi-Services").style.backgroundColor = "#ff5c02";

    document.getElementById("Airport-Rides").style.color = "black";
    document.getElementById("Airport-Rides").style.backgroundColor = "white";

    document.getElementById("Shopping").style.color = "black";
    document.getElementById("Shopping").style.backgroundColor = "white";

    // document.getElementById("About-Ujjain").style.color = "black";
    // document.getElementById("About-Ujjain").style.backgroundColor = "white";

}

function taxi_services_approve4() {
    document.getElementById("taxi_services_statusCell4").innerText = "Allocated";
    document.getElementById("taxi_services_statusCell4").style.color = "#00bf4c";
    document.getElementById("taxi_services_act4").style.display = "none";
}

function taxi_services_reject4() {
    document.getElementById("taxi_services_statusCell4").innerText = "Rejected";
    document.getElementById("taxi_services_statusCell4").style.color = "#ff0000";
    document.getElementById("taxi_services_act4").style.display = "none";
}

async function taxi_services_aprve4(id) {
    try {
        const response = await fetch('http://3.108.240.106:8097/taxiService/approve/' + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
        });
        const data = await response.json();
        if (data.data != undefined) {
            Table();
        }


    } catch (error) {
        console.error(error);
    }
}



async function taxi_services_reject4(id) {
    try {
        const response = await fetch('http://3.108.240.106:8097/taxiService/reject/' + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
        });
        const data = await response.json();
        if (data.data != undefined) {
            Table();
        }


    } catch (error) {
        console.error(error);
    }
}








function airportRides() {
    Table();


    fetch('http://3.108.240.106:8097/booking/getAllAirportBookings')
        .then(res => res.json())
        .then(json => {
            console.log(json.data)

            document.getElementsByClassName('airport_rides_rup')[0].innerText = json.data.total;
            document.getElementsByClassName('airport_rides_rup1')[0].innerText = json.data.available;
            document.getElementsByClassName('airport_rides_rup2')[0].innerText = json.data.occupied;
            document.getElementsByClassName('airport_rides_rup3')[0].innerText = json.data.reserved;

            document.getElementsByClassName('airport_rides_rupee')[0].innerText = json.data.byCash;
            document.getElementsByClassName('airport_rides_rupee1')[0].innerText = json.data.byOnline;
        });



    async function Table() {
        try {
            const response = await fetch('http://3.108.240.106:8097/airportRides/getAll');
            const data = await response.json();
            console.log(data)


            let table = '<table><thead>';
            table += '<tr><th class="airport_rides_left">S NO</th><th >User Name</th><th >Email id</th><th >From</th><th >To</th><th>Mobile Number</th><th>Members</th><th>Price</th><th>Status</th><th>Response</th></tr>';
            let i = 1;
            data.data.forEach(item => {
                let button = "";
                if (item.status == "Waiting to Respond") {
                    button = ` <button class="approve" onclick="airport_rides_ap1(${item.id})">Approve </button>
        <button class="reject" onclick="airport_rides_re1(${item.id})">Reject</button>`;
                }

                table += `<tbody><tr><td>${i}</td><td>${item.userName}</td><td>${item.email}</td><td>${item.from}</td><td>${item.to}</td><td>${item.mobileNo}</td><td>${3}</td><td>${item.totalprice}</td><td>${item.status}</td><td id="airport_rides_act2" >${button}</td></tr></tbody>`;
                i++;
            });
            table += '</thead ></table>';
            let x = document.getElementById('airportDiv');
            x.innerHTML = table;
        } catch (error) {
            console.error(error);
        }
    }




    document.getElementById("homepage").style.display = "none";
    document.getElementById("hotel").style.display = "none";
    document.getElementById("puja").style.display = "none";
    document.getElementById("Ujjain").style.display = "none";
    document.getElementById("Omkarshwar").style.display = "none";
    document.getElementById("Maa").style.display = "none";
    document.getElementById("Taxi").style.display = "none";
    document.getElementById("Airport").style.display = "block";
    document.getElementById("About").style.display = "none";

    document.getElementById("Home").style.color = "black";
    document.getElementById("Home").style.backgroundColor = "white";

    document.getElementById("Hotel-Booking").style.color = "black";
    document.getElementById("Hotel-Booking").style.backgroundColor = "white";

    document.getElementById("Puja-Booking").style.color = "black";
    document.getElementById("Puja-Booking").style.backgroundColor = "white";

    document.getElementById("Ujjain-Darshan").style.color = "black";
    document.getElementById("Ujjain-Darshan").style.backgroundColor = "white";

    document.getElementById("Omkarshwar-Tour").style.color = "black";
    document.getElementById("Omkarshwar-Tour").style.backgroundColor = "white";

    document.getElementById("Maa-Baglamukki-Tour").style.color = "black";
    document.getElementById("Maa-Baglamukki-Tour").style.backgroundColor = "white";

    document.getElementById("Taxi-Services").style.color = "black";
    document.getElementById("Taxi-Services").style.backgroundColor = "white";



    document.getElementById("Airport-Rides").style.color = "white";
    document.getElementById("Airport-Rides").style.backgroundColor = "#ff5c02";

    document.getElementById("Shopping").style.color = "black";
    document.getElementById("Shopping").style.backgroundColor = "white";
}
function airport_rides_ap1() {
    document.getElementById("airport_rides_statusCell2").innerText = "Allocated";
    document.getElementById("airport_rides_statusCell2").style.color = "#00bf4c";
    document.getElementById("airport_rides_act2").style.display = "none";
}

function airport_rides_re1() {
    document.getElementById("airport_rides_statusCell2").innerText = "Rejected";
    document.getElementById("airport_rides_statusCell2").style.color = "#ff0000";
    document.getElementById("airport_rides_act2").style.display = "none";
}

function airportrides_approve4() {
    document.getElementById("airport_rides_statusCell4").innerText = "Allocated";
    document.getElementById("airport_rides_statusCell4").style.color = "#00bf4c";
    document.getElementById("airport_rides_act4").style.display = "none";
}

function airportrides_reject4() {
    document.getElementById("airport_rides_statusCell4").innerText = "Rejected";
    document.getElementById("airport_rides_statusCell4").style.color = "#ff0000";
    document.getElementById("airport_rides_act4").style.display = "none";
}

async function airport_rides_ap1(id) {
    try {
        const response = await fetch('http://3.108.240.106:8097/airportRides/approve/' + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
        });
        const data = await response.json();
        if (data.data != undefined) {
            Table();
        }


    } catch (error) {
        console.error(error);
    }
}



async function airport_rides_re1(id) {
    try {
        const response = await fetch('http://3.108.240.106:8097/airportRides/reject/' + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
        });
        const data = await response.json();
        if (data.data != undefined) {
            Table();
        }


    } catch (error) {
        console.error(error);
    }
}











function shopping() {

    Table()

    fetch('http://3.108.240.106:8097/booking/getAllShopBookings')

        .then(res => res.json())
        .then(json => {
            console.log(json.data)

            document.getElementsByClassName('shopping_rup')[0].innerText = json.data.total;
            document.getElementsByClassName('shopping_rup1')[0].innerText = json.data.available;
            document.getElementsByClassName('shopping_rup2')[0].innerText = json.data.occupied;
            document.getElementsByClassName('shopping_rup3')[0].innerText = json.data.reserved;

            document.getElementsByClassName('shopping_rupee')[0].innerText = json.data.byCash;
            document.getElementsByClassName('shopping_rupee1')[0].innerText = json.data.byOnline;
        });



    async function Table() {
        try {
            const response = await fetch('http://3.108.240.106:8097/admin/api/shop/allBookings');
            const data = await response.json();
            console.log(data)

            let table = '<table><thead>';
            table += '<tr><th class="airport_rides_left">S NO</th><th >User Name</th><th>Mobile Number</th><th>Price</th><th>Status</th><th>Response</th></tr>';
            let i = 1;
            data.forEach(item => {
                let button = "";
                if (item.status == "Waiting to Respond") {
                    button = ` <button class="approve" onclick="shopping_ap1(${item.id})">Approve </button>
           <button class="reject" onclick="shopping_re1(${item.id})">Reject</button>`;
                }

                table += `<tbody><tr><td>${i}</td><td>${item.name}</td><td>${item.mobileNumber}</td><td>${item.price}</td><td>${item.status}</td><td  id="shopping_act2" >${button}</></tr></tbody>`;
                i++;
            });
            table += '</thead ></table>';
            let x = document.getElementById('ShoppingDiv');
            x.innerHTML = table;
        } catch (error) {
            console.error(error);
        }
    }






    document.getElementById("homepage").style.display = "none";
    document.getElementById("hotel").style.display = "none";
    document.getElementById("puja").style.display = "none";
    document.getElementById("Ujjain").style.display = "none";
    document.getElementById("Omkarshwar").style.display = "none";
    document.getElementById("Maa").style.display = "none";
    document.getElementById("Taxi").style.display = "none";
    document.getElementById("Airport").style.display = "none";
    document.getElementById("About").style.display = "block";

    document.getElementById("Home").style.color = "black";
    document.getElementById("Home").style.backgroundColor = "white";

    document.getElementById("Hotel-Booking").style.color = "black";
    document.getElementById("Hotel-Booking").style.backgroundColor = "white";

    document.getElementById("Puja-Booking").style.color = "black";
    document.getElementById("Puja-Booking").style.backgroundColor = "white";

    document.getElementById("Ujjain-Darshan").style.color = "black";
    document.getElementById("Ujjain-Darshan").style.backgroundColor = "white";

    document.getElementById("Omkarshwar-Tour").style.color = "black";
    document.getElementById("Omkarshwar-Tour").style.backgroundColor = "white";

    document.getElementById("Maa-Baglamukki-Tour").style.color = "black";
    document.getElementById("Maa-Baglamukki-Tour").style.backgroundColor = "white";

    document.getElementById("Taxi-Services").style.color = "black";
    document.getElementById("Taxi-Services").style.backgroundColor = "white";

    document.getElementById("Airport-Rides").style.color = "black";
    document.getElementById("Airport-Rides").style.backgroundColor = "white";

    document.getElementById("Shopping").style.color = "white";
    document.getElementById("Shopping").style.backgroundColor = "#ff5c02";

}



function shopping_ap1() {
    document.getElementById("shopping_statusCell2").innerText = "Allocated";
    document.getElementById("shopping_statusCell2").style.color = "#00bf4c";
    document.getElementById("shopping_act2").style.display = "none";
}

function shopping_re1() {
    document.getElementById("shopping_statusCell2").innerText = "Rejected";
    document.getElementById("shopping_statusCell2").style.color = "#ff0000";
    document.getElementById("shopping_rides_act2").style.display = "none";
}

function shopping_approve4() {
    document.getElementById("shopping_statusCell4").innerText = "Allocated";
    document.getElementById("shopping_statusCell4").style.color = "#00bf4c";
    document.getElementById("shopping_act4").style.display = "none";
}

function shopping_reject4() {
    document.getElementById("shopping_statusCell4").innerText = "Rejected";
    document.getElementById("shopping_statusCell4").style.color = "#ff0000";
    document.getElementById("shopping_act4").style.display = "none";
}


async function shopping_ap1(id) {
    try {
        const response = await fetch('http://3.108.240.106:8097/admin/api/shop/approve/' + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
        });
        const data = await response.json();
        if (data.data != undefined) {
            Table();
        }


    } catch (error) {
        console.error(error);
    }
}



async function shopping_re1(id) {
    try {
        const response = await fetch('http://3.108.240.106:8097/admin/api/shop/reject/' + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
        });
        const data = await response.json();
        if (data.data != undefined) {
            Table();
        }


    } catch (error) {
        console.error(error);
    }
}







function onclickbutton() {
    document.getElementById('hotelsavediv').style.display = 'block'
 
}

async function Addhotel(id) {
   
    document.getElementById('hotelsavediv').style.display = 'none'
    document.getElementById('succes1').style.display = 'block'
}

function closePopUp() {
    document.getElementById('succes1').style.display = 'none'
}


// async function getUserBookingInfo() {
//     try {
//         const response1 = await fetch('http://3.108.240.106:8097/manualBooking/getAllManualBooking');
//         const values = await response1.json();
//         document.getElementById('username').value = values.data.userName;
//         document.getElementById('HotelName').value = values.data.hotelName;
//         document.getElementById('MobileNumber').value = values.data.mobileNumber;
//         document.getElementById('Noofadults').value = values.data.numberOfAdults;
//         document.getElementById('Noofchilds').value = values.data.numberOfChildrens;
//     } catch (error) {
//         console.error(error);
//     }
// }

async function Addhotel(id) {
    try {
      var obj = new Object();
      obj.userName =  document.getElementById('UserName').value;
      obj.hotelName =  document.getElementById('HotelName').value;
      obj.mobileNumber =  document.getElementById('MobileNumber').value;
      obj.numberOfAdults =  document.getElementById('Noofadults').value;
      obj.numberOfChildrens =  document.getElementById('Noofchilds').value;
      obj.price =  document.getElementById('price').value;
      const response = await fetch('http://3.108.240.106:8097/manualBooking/book', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(obj)
      });
      const data = await response.json();
      if (data.data != undefined) {
        document.getElementById('hotelsavediv').style.display = 'none'
    document.getElementById('succes1').style.display = 'block'
       
      }
  
  
    } catch (error) {
      console.error(error);
    }}
  

