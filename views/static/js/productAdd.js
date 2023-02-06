function productAdd() {
    let name = $('#name').val()
    let price = $('#price').val()
    let info = $('#info').val()
    // let image = $('#image').val()
    let file = document.getElementById("Image").files[0];
    console.log(name, price, info, file)

    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("price", price);
    formdata.append("info", info);
    formdata.append("file", file);

    $.ajax({
        type: 'POST',
        url: 'api/productAdd',
        data: formdata,
        cache: false,
        contentType: false,
        processData: false,
        enctype: "multipart/form-data",
        success: function (response) {
            alert("상품 등록에 성공하였습니다.")
            window.location.reload
        }
    });
};

