$(document).ready(function () {
    showProducts();
});

function showProducts() {
    $("#products-box").html("");
    $.ajax({
        type: "GET",
        url: "/product",
        data: {},
        success: function (response) {
            let products = response["data"];
            for (let i = 0; i < products.length; i++) {
                makeProduct(products[i]["image"], products[i]["info"], products[i]["name"], products[i]["price"], products[i]["productId"]);
            }
        }
    });
}

function makeProduct(image, info, name, price, productId) {
    let tempHtml = `<a href="#">
                    <img src="${image}">
                    <p>제품명 : ${name}</p>
                    <p>설명 : ${info}</p>
                    <p class="price">${price}원</p>
                    <button onclick="putCart(${productId})" type="button" class="btn btn-primary">장바구니</button>
                    <p class="gap"></p>
                    </a>`;
    $("#products-box").append(tempHtml);
}

function putCart(productId) {
    $.ajax({
        type: "PUT",
        url: "/cart/" + productId,
        data: {},
        success: function (response) {
            if (response['result'] == 'success') {
                alert('장바구니 담기 완료!');
            }
        }
    });
}