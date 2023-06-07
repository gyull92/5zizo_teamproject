function productEdit(productId) {
    let name = $('#name').val();
    let price = $('#price').val();
    let info = $('#info').val();
    let file = document.getElementById("Image").files[0];
    console.log(11111)
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("price", price);
    formdata.append("info", info);
    formdata.append("file", file);

    $.ajax({
        type: 'PUT',
        url: 'api/productEdit/:productId',
        data: formdata,
        cache: false,
        contentType: false,
        processData: false,
        enctype: "multipart/form-data",
        success: function (response) {
            alert("상품 수정에 성공하였습니다.")
            window.location.replace("/productList");
        }
    });
};
