$(document).ready(function () {
    orderlist();
    console.log(1111111)
});

function orderlist(){
  $.ajax({
    type: 'get',
    url: '/api/paymentList',
    data: {},
    success: function (response){
     let rows =response['order']
       for (let i = 0;i <rows.length; i++){
         let image = rows[i][image]
         let info = rows[i][info]
         let name = rows[i][name ]
         let price = rows[i][price]

         let temp_html =`<div class="row">
                 <div class="col-md-5">
                     <div id="carouselExample" class="card ">
                         <div class="carousel-inner">
                           <div class="card ">
                             <img src="${image}" class="d-block w-100" alt="...">
                           </div>    
                         </div>
                       </div>
                 </div>
                 <div class="col-md-7">
                     <div class="card shadow-sm" >
                         <div class="card-body">
                           <h5 class="card-title">${name} </h5>
                           <h5 class="card-title pt-3 pb-3 border-top">"${phone}님" </h5>
 
                           <p class="card-text border-top pt-3 ">
                         <p class="card-text pb-3">"${phone}"
                             <p class="card-text border-top pt-3 ">   
                           </p>
                           <p class="card-text pb-3">
                             "${address}"
                           </p>
                           <p class="card-text border-top  pb-3 ">
                             <div class ="row">
                                 <div class="col-auto">
                                     <label class="col-form-label">구매수량</label>
                                 </div>
                                 <div class="col-auto">
                                     <div class="input-group ">
                                         <input type="number" class="form-control" style="width:40px;" value="${quantity}">                                                
                                       </div>
                                     </div>
                                 </div>
                              </p>
                          </div>
                         </div>
                       </div>
                 </div>`;
     $("#orderlist").append(tempHtml);
     }
         }  
     });
 }

 function order(order) {
     let image = $('#image').val()
     let name = $('#name').val()
     let price = $('#price').val()
     let quantity = $('#quantity').val()

     $.ajax({
             type: "PUT",
             url: "/order/" + productId,
             data: {},
             success: function (response) {
                 if (response['result'] == 'success') {
                     alert('주문 완료!');
                 }
             }
         });
 }