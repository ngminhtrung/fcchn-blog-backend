## Yêu cầu cho data model

## Tính năng cho người dùng:

- Tài khoản:
    - Tạo tài khoản
    - Xóa tài khoản
    - Chỉnh sửa thông tin tài khoản
    - Reset mật khẩu
- Bài viết của bản thân:
    - Tạo bài viết mới
    - Edit bài viết cũ
    - Xóa bài viết cũ
    - Xem bài viết
    - Share bài viết lên Facebook
- Bài viết của người khác:
    - View bài
    - Nhấn like
    - Comment 
    - Nhấn like comment

## Mô hình của database

Để giải quyết bài toán trên, database của app sẽ cần 02 *collections*:

### Collection "User"

Ví dụ:

```js
{
    "_id": ObjectId("523b1153a2aa6a3233a913f8"),
    "userName": "nguyenvana",
    "passworld": "123456789", // cần phải encrypt password
    "email": "nguyenvana@gmail.com",
    "fullName": "Nguyen Van A",
    "avatar": "http://www.photos.com/nguyenvana.jog",
    "description": "Sinh vien FUNIX",
    "facebookAcc": "nguyenvana"
}
```

### Collection "Posts"

```js
{
    "_id": ObjectId("634b1153a2aa6a3233a914g9"),
    "title": "Kinh nghiệm sử dụng GIT",
    "like": true, // true/ false
    "userID": ObjectId("523b1153a2aa6a3233a913f8"),
    "comments": {
        [{
            "content": "Bài này viết tốt quá",
            "author": "Nguyễn Thị C",
            "authorID": ObjectId("745b1153a2aa6a3233a915h0"),
            "like": true, // true or false
        }],
               [{
            "content": "Cần bổ sung thêm về ...",
            "author": "Nguyễn Văn D",
            "authorID": ObjectId("412b1153a2aa6a3233a9132e7"),
            "like": false, // true or false
        }]
    },
}
```

### Yêu cầu chức năng cho REST API

Như đã đề cập ở trên, mỗi user cần có khả năng làm những việc sau:
- Tài khoản:
    - Tạo tài khoản
    - Xóa tài khoản
    - Chỉnh sửa thông tin tài khoản
    - Reset mật khẩu
- Bài viết của bản thân:
    - Tạo bài viết mới
    - Edit bài viết cũ
    - Xóa bài viết cũ
    - Xem bài viết
    - Share bài viết lên Facebook
- Bài viết của người khác:
    - View bài
    - Nhấn like
    - Comment 
    - Nhấn like comment

Bảng liệt kê HTTP routes và verbs:

| Routes    | Verbs     | Mô tả     | Variables |
|---        |---        |---        |---        |
|/user/enroll   |POST   |Đăng ký user mới| username, password, fullName, email, avatar, description, facebookAcc |
|/user/resetPassword   |PUT | Reset mật khẩu | password, email |
|/user/deleteAcc       |PUT | Xóa tài khoản |   *Chưa rõ* |
|/user/editAcc         |PUT | Chỉnh sửa tài khoản | password, fullName, email, avatar, description, facebookAcc |
|/user/newPost| POST | Viết bài mới | *Chưa rõ*|
|/user/editPost | PUT | Chỉnh sửa bài cũ | *Chưa rõ*|
|/user/deletePost | PUT | Xóa bài cũ | *Chưa rõ* |
|/user/sharePost | *Chưa rõ* | Share bài lên Facebook | *Chưa rõ* |
|/user/viewPost | *Chưa rõ* | Xem bài viết bản thân | *Chưa rõ* |
|/viewPosts |  | Xem toàn bộ danh sách bài viết | *Chưa rõ*|
|/viewPost|  | Xem 1 bài viết |  |
|/viewPost/like|   | Like bài viết đang xem |   |
|/viewPost/comment|     | Comment bài viết đang xem | |
|/viewPost/comment/like/ |   | Like một comment|   |

Lưu ý: Xem xét thay HTTP bằng HTTP**s** để đảm bảo bảo mật thông tin

### Xác thực User:

- Xem xét sử dụng Passport hoặc Stormpath



