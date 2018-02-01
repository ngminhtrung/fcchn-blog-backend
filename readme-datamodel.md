## Yêu cầu cho data model

## Tính năng cho người dùng:
---
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
---
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
    "content": "Đây là nội dung của bài viết. Blah blah ...",
    "userID": ObjectId("523b1153a2aa6a3233a913f8")
}
```

### Collection "Comments"

```js
{
    {
        "content": "Bài này viết tốt quá",
        "authorID": ObjectId("745b1153a2aa6a3233a915h0"),
        "postID": ObjectId("235b1153a2aa6a3233a911a4"),
    },
    {
        "content": "Cần bổ sung thêm về ...",
        "authorID": ObjectId("412b1153a2aa6a3233a9132e7"),
        "postID": ObjectId("412b1153a2aa6a3233a913ada1"),
    }
},
```

### Collection "Likes"

```js
{
    "ownerID": ObjectId("412b1153a2aa6a3233a9132e7"),
    "_type": "Post", // "post" hoặc "comment"
    "target_id": ObjectId("412b1153a2aa6a3233a9132e7"),
    "count": 10// "post": [0,50], "comment": [0,1]
}
```

## Bảng liệt kê HTTP routes và verbs:
---

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

### Bài tham khảo:

- [RESTful API Cho Người Bắt Đầu](https://www.codehub.vn/RESTful-API-Cho-Nguoi-Bat-Dau)
- [RESTful API Designing guidelines — The best practices](https://hackernoon.com/restful-api-designing-guidelines-the-best-practices-60e1d954e7c9)
