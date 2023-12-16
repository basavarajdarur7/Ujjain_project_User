// fetch('http://13.50.223.218:8097/guide/AllGuides')
// .then(response => response.json())
// .then(data => {  console.log(data.data[0])
 
//   let data2 = "";
 
//   data.data.map( (product) => {
 
//     data2 +=`
//     <div class="swiper-slide ujjain_swiperslides">
 
//      <div class="top_visited_contents_div">
//           <img src="../Images/image 1.PNG " class="ujjain-dharshan_imgs" alt="hotel_img1">
//           <div class="rating_div">
//               <i class="fa fa-star checked"></i>
//               <span class="rating_span">${product.rating}</span>
//           </div>
//           <h3 class="ujjain_place_name">${product.name}</h3>
//           <div class="destinatio_km_div">
//               <img class="ujjain_desti_img" src="../Images/destination_popup_icon.png" alt="" srcset="">
//               <span class="ujjain_km">${product.distance} km</span>
//               <span class="ujjainprice">₹ ${product.price} </span>
//           </div>
//           <input type="button" id="demo" class="Topvisited_ujjain_btn" value="Book a Guide" onclick="ujjainFirstcard()"  >
//       </div>
               
//            </div> `;
 
//             document.getElementById("swiper-wrapper_ujjain_up").innerHTML = data2;
//             // console.log(data2);
 
//           } )

//         })



       


 
async function generateTable() {
    try {
        const response = await fetch('http://13.48.227.61:8097/admin/hotelbooking/allhotelbookings');
        const data = await response.json();
        let btnhtml=`<td id="Hotel_act1" class="actions">
        <button class="approve" onclick="Hotel_aprve2()">Approve </button>
        <button class="reject" onclick="Hotel_rect2()">Reject</button>
      </td>`;
        let table = '<table><thead>';
        table += '<tr><th class="Hotel_left">S NO</th><th >User Name</th><th>Mobile Number</th><th>Members</th><th>Price</th><th>Status</th><th>Response</th></tr>';
        let i = 1;
        data.data.forEach(item => {
            table += `<tbody><tr><td>${i}</td><td>${item.name}</td><td>${item.mobileNo}</td><td>${item.hotels[0].totalPerson}</td><td>${item.price}</td><td>${item.status}</td><td>${btnhtml}</td></tr></tbody>`;
            i++;
        });
        table += '</thead></table>';
        let x = document.getElementById('BookingDiv');
        x.innerHTML = table;
    } catch (error) {
        console.error(error);
    }
  }