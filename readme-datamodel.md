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

Để giải quyết bài toán trên, database của app sẽ cần 04 *collections*:

### Collection "User"

Ví dụ:

```js
{
    "_id": ObjectId("523b1153a2aa6a3233a913f8"),
    "userName": "nguyenvana",
    "passworld": "123456789", // cần phải encrypt password
    "email": "nguyenvana@gmail.com",
    "firstName": "A",
    "lastName": "Nguyễn Văn"
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
    "like": 6969 // Mỗi user có quyền like mỗi bài viết tối đa 50 lần
    "userID": ObjectId("523b1153a2aa6a3233a913f8")
}
```

### Collection "Comments"

```js
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

### Collection "Likes"

## Yêu cầu chức năng cho REST API

Bảng liệt kê HTTP routes và verbs:

| Resources/Session    | Actions     | Routes     | Methods | Description | Parameters |
|---        |---        |---        |---        |---        |---                |
|Users  | index |/users |GET    | hiện toàn bộ users |      |
|       | show  |/users/:id |GET    |hiện profile của user |    |
|       | create|/users | POST      |                       |   |
|       |update |/users/:id | PUT    |                       |   |
|Posts  |index  |/posts    | GET    |hiện toàn bộ các posts |   |
|       |show   |/posts/:id | GET   |hiện một post          |   |
|       |update |/posts/:id |PUT    |thay đổi một post      |   |
|       |delete |/posts/:id |DELTE  |xóa một post           |   |
|Comments|index|/comments   |GET    | hiện toàn bộ comments của post |      |
|       |create|/comments   |POST   |tạo comment            |   |
|       |update|/comments/:id|PUT   |thay đổi một comment   |   |
|       |delete|/comments/:id|DELELTE |xóa một comment      |   |
|Likes  |index |/likes      |GET    |hiện toàn bộ các comments |    |
|       |create|/likes      |POST   |tạo like               |   |
|       |update|/likes/:id  |PUT    |cập nhật like          |   |
|       |      |            |       |                       |   |
|login  |login  |/login     |POST   |                       |   |
|logout |logout |/logout    |DELTE  |                       |   |
|forgot password |reset password |/forgot-password|PUT      |   |


Lưu ý: Xem xét thay HTTP bằng HTTP**s** để đảm bảo bảo mật thông tin

### Xác thực User:

- Xem xét sử dụng Passport hoặc Stormpath



