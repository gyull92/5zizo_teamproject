$(document).ready(function () {
    profileEdit();
});

function profileEdit() {
    $.ajax({
        type: 'GET',
        url: 'api/userProfileEdit',
        success: function (response) {
            const rows = response.data;
            console.log(22222222222222)
            for (let i in rows) {
                let email = rows[i].email
                let phone = rows[i].phone
                let userId = rows[i].userId
                let temp_html = `<div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">이메일</label>
                <input type="text" name="tel" class="form-control" id="exampleInputEmail2" placeholder="email"
                    aria-describedby="emailHelp" value=${email}>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">비밀번호</label>
                <input type="text" name="address" class="form-control" id="exampleInputEmail3"
                    placeholder="password" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">전화번호</label>
                <input type="text" name="ask" class="form-control" id="exampleInputEmail4" placeholder="phone"
                    aria-describedby="emailHelp" value=${phone}>
            </div>
        </div>
    </nav>
    <div id="button-req">
        <button type="submit" name="submit" class="btn btn-dark" style="width:200px;" onclick="profilesave(${userId})">수정하기</button>
    </div>`
                $('#profilebox').append(temp_html)
            }
        }
    })
}

function profilesave(userId) {

    let email = $('#exampleInputEmail2').val();
    let password = $('#exampleInputEmail3').val();
    let phone = $('#exampleInputEmail4').val();

    $.ajax({
        type: 'PUT',
        url: 'api/userProfileEdit:id',
        data: {
            userId: userId,
            email: email,
            password: password,
            phone: phone
        },
        success: function (response) {
            console.log(response)
            alert("프로필 수정을 완료하였습니다.");
            window.location.replace("/userProfile");
        }
    });
};