### Quy trình xây dựng một API trong Express:
1. nhận *request*
2. đọc *request* đó (parsing)
3. trả về một *response* bao gồm:
    - một JSON object
    - một HTTP status code

### Thành phần chính:
1. Tạo file *package.json* để mô tả về app.
2. Tạo file *app.js* chứa code thực hiện nghiệp vụ của  app.
3. Tạo một ứng dụng Express bên trong *app.js*, gán route để đáp ứng các yêu cầu gọi từ bên ngoài. 

### HTTP verbs (HTTP methods)

1. `GET` - method thông dụng nhất mà tất cả mọi người đều sử dụng. Mục đích để lấy thông tin. Ví dụ:
- khi tải trang web, bạn đang GET nội dung của trang đó.
- khi tải 1 hình ảnh, bạn đang GET nội dung của file ảnh. 

2. `POST` - thường được dùng để gửi một yêu cầu thay đổi thứ gì đó đến server. Ví dụ:
- bạn POST một bài blog mới
- bạn POST một bức ảnh mới
- bạn POST khi đăng ký tài khoản mới trên website. 

    Túm lại: POST dùng để tạo bản ghi (record) mới trên server, không phải để chỉnh sửa bản ghi hiện tại. 

3. `PUT` - method này nên có cái tên dễ hiểu hơn là *UPDATE* hoặc *CHANGE*. Nếu bạn đã viết một bài blog mới ở đâu đó (POST bài đấy), sau đó muốn chỉnh sửa phần tiêu đề hoặc nội dung, tức là bạn đã cập nhật (update/ change) nó, hay là bạn đã PUT những thay đổi đấy. 

    Chú ý:
    - Không dùng PUT để xóa bản ghi, việc đó đã có `DELTE` lo.
    - Nếu PUT một bản ghi chưa tồn tại, thì server có thể (có thể thôi) sẽ tạo bản ghi đấy. Bạn có thể không muốn cập nhật một profile chưa tồn tại, nhưng có thể bạn muốn cập nhật một trang trên website cá nhân chưa tồn tại. 

4. `DELETE` - có nhiệm vụ xóa bản ghi. 

### Đánh số phiên bản API

### Thiết lập HTTP status code