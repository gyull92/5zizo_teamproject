$(document).ready(function () {
  orderinfo();
});

function orderinfo() {
  console.log(111111111111)
  $.ajax({
    type: 'get',
    url: 'api/paymentList',
    success: function (response) {
      let rows = response.data
      for (let i in rows) {
        let name = rows[i].name
        let address = rows[i].address
        let phone = rows[i].phone
        let email = rows[i].email
        let productname = rows[i].productname
        let createdAt = rows[i].createdAt.substring(0, 10);
        let temp_html =
          `<div>
                      <tr>
                      <th scope="row">${productname}</th>
                      <td>${name}</td>
                      <td>${address}</td>
                      <td>${phone}</td>
                      <td>${email}</td>
                      <td>${createdAt}</td>
                      </tr>
                  </div>`
        $('#productlist').append(temp_html)
      };
    }
  });
};