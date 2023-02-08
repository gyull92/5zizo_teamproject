$(document).ready(function () {
  productIdList();
});

function productIdList() {
  $.ajax({
    type: 'get',
    url: '/admin/adminprofile',
    success: function (response) {
      console.log(response)
      const rows = response.data;
      for (let i in rows) {
        let image = rows[i].image
        let info = rows[i].info
        let name = rows[i].name
        let price = rows[i].price
        let imgsrc = "../static/images/" + image
        let productId = rows[i].productId;

        let temp_html = `
        <div class="col-xl-3 col-lg-4 col-md-6">
                           <div class="card" id="productcard" style="width: 18rem;">
                             <img src="${imgsrc}" class="card-img-top">
                               <div class="card-body">
                                 <h5 class="card-title">${name}</h5>
                                 <p class="card-text">
                                   <span class="badge bg-dark">${info}</span>                                                  
                                 </p>
                                   <div class= "d-flex justify-content-between align-items-center">
                                     <div id="addButton-group" class="btn-group" role="group" >      
                                       <small class="text-dark" id="priceinput">가격 : ${price}원</small><br>             
                                       <button id="addButton" onclick="deleteProduct(${productId})" type="button" class="btn btn-sm btn-outline-secondary">삭제</button>
                                       <button onclick="location.href='/productEdit/${productId}'" type="button" class="btn btn-sm btn-outline-secondary">수정</button>
                                     </div>
                                   </div>
                               </div>
                             </div>
                       </div>`
        $('#product-box').append(temp_html)
      };
    }
  });
};

//<div class="col-auto">
//    <label class="col-form-label">구매수량</label>
//</div>

//<div class="col-auto">
//    <div class="input-group ">
//      <input name="modQuantity" id="modQuantity" class="modQuantity" type="number" value="0" style="width:60px;" min="0"> 
//    </div>
//</div>

//  <small class="text-dark" id="priceinput">가격 : ${price}원</small><br>
//  <button onclick="putCart()" class="btn btn-sm btn-outline-secondary">장바구니</button>