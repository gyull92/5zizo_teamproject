$(document).ready(function () {
    profileEdit();
});

function profileEdit() {
    $.ajax({
        type: 'GET',
        url: 'api/userProfileEdit',
        success: function (response) {
            const rows = response.data;
            for (let i in rows) {
                let email = rows[i].email
                let password = rows[i].password
                let phone = rows[i].phone
                let userId = rows[i].userId
                let temp_html = `<div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">이메일</label>
                <input type="text" name="tel" class="form-control" id="exampleInputEmail2" placeholder="email"
                    aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">비밀번호</label>
                <input type="text" name="address" class="form-control" id="exampleInputEmail3"
                    placeholder="password" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">전화번호</label>
                <input type="text" name="ask" class="form-control" id="exampleInputEmail4" placeholder="phone"
                    aria-describedby="emailHelp">
            </div>`
            $('#profilebox').append(temp_html)
            }
        }
    })
}