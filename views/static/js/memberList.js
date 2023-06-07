$(document).ready(function () {
    memberList();
});

function memberList() {
    $.ajax({
        type: 'get',
        url: 'api/memberList',
        success: function (response) {
            let rows = response.data;
            for (let i in rows) {
                let phone = rows[i].phone
                let email = rows[i].email
                let userId = rows[i].userId
                let createdAt = rows[i].createdAt.substring(0, 10);
                let temp_html =
                    `<div id="memberinfo">
                        <tr>
                        <div id="membernumber">
                        <th scope="row">${userId}</th>
                        </div>
                        <div id="memberphone">
                        <td>${phone}</td>
                        </div>
                        <div id="memberemail">
                        <td>${email}</td>
                        </div>
                        <div id="memebername">
                        <td>${createdAt}</td>
                        </div>
                        </tr>
                    </div>`
                $('#membercard').append(temp_html)
            };
        }
    });
};