# Free Code Camp Hanoi Blog Project (Back-end)

## Giới thiệu chung
---

- **fcchn-blog** là dự án làm 1 platform giúp mọi người chia sẻ bài viết, với mục đích để học *front-end* (React) và *back-end* (Nodejs, Express và MongoDB) của 1 nhóm các thành viên Facebook group [freeCodeCamp Hà Nội](https://www.facebook.com/groups/free.code.camp.hanoi/).
    - Phần front-end được lưu tại [đây](https://github.com/tamtm/fcchn-blog).
    - Phần back-end được lưu tại [đây](https://github.com/ngminhtrung/fcchn-blog-backend)

- Những thành viên đăng ký học, code, và đóng góp cho dự án này bao gồm:
    - Front-end
        - Nguyễn Quốc Đại
        - Nguyễn Trung Tuyến
        - Trịnh Minh Tâm
        - Lê Đức Thắng
    - Back-end: 
        - Nguyễn Minh Trung
        - Nguyễn Thế Phụng Long
        - Nguyễn Thế Tùng
        - Lương Ngọc Phúc

- Tài liệu quan trọng khác trong dự án:
    - [Mô tả về data model](https://github.com/ngminhtrung/fcchn-blog-backend/blob/master/readme-datamodel.md)
    - [Đóng góp cho dự án](https://github.com/ngminhtrung/fcchn-blog-backend/blob/master/Contributing.md)
    - [Chạy ứng dụng](https://github.com/ngminhtrung/fcchn-blog-backend/blob/master/Contributing.md)
    - [Câu hỏi](https://github.com/ngminhtrung/fcchn-blog-backend/blob/master/readme-faq.md)
    - [Tools sử dụng để test](https://github.com/ngminhtrung/fcchn-blog-backend/blob/master/readme-tools.md)
    - [API documentation](https://github.com/ngminhtrung/fcchn-blog-backend/blob/master/doc/index.html)

#### Cập nhật:

- 2018.01.15: Bổ sung mục *Những điều học được sau dự án*
- 2018.01.10: Thêm thành viên dự án. Quyết định cấu trúc dự án (Back-end và Front-end)
- 2018.01.03: Tạo dự án 

## Tính năng và công nghệ
---

Là một platform để viết blog, nơi các thành viên có thể viết blog, đăng bài, xem bài của mình cũng như của người khác, bình luận vào bài của người khác. Sản phẩm này sẽ học theo các platform viết blog khác như Medium nhưng chỉ dừng ở mức cơ bản. Mục đích cuối cùng vẫn là nắm bắt được những công nghệ cần dùng cho 1 sản phẩm hoàn thiện (xem thêm mục "*Những điều học được qua dự án này*" ở bên dưới)

### Tính năng chi tiết

1. Đăng ký
2. Đăng nhập
3. View profile
4. Chỉnh sửa profile
5. Viết blog mới
6. Chỉnh sửa blog cũ
7. View danh sách blog của bản thân
8. View blog của người khác
9. Xóa blog
10. Comment
11. Like
12. Share Facebook

### Công nghệ sử dụng

- Front-end: 
    - React
    - Bootstrap
- Back-end:
    - Node.js
    - Express.js
    - MongoDB-moongoose
- Testing:
    - Unit test: Karma, Mochai, Chai, Sinon
    - Automation test: Selenium
- Bảo mật

### Công cụ sử dụng

1. Visual Design: Gravit Designer
2. Visual Studio Code

### Cấu trúc

- client
- server
- test
- configuration

## Tài liệu tham khảo:
---

## Những điều học được qua dự án này
---

- [ ] Cách đóng góp vào dự án mã nguồn mở trên Github
    - [x] Hiểu về Git cơ bản: `clone`, `add`, `commit`, `push`
    - [x] Hiểu về remote và local repositories 
    - [x] Biết tạo nhánh (branch) và hiểu về mục đích của việc tạo nhánh
    - [x] Biết cách `fork`, và `pull` để cập nhật từ repo gốc
    - [x] Biết cách `commit` và `push` lên remote repo của bản thân
    - [x] Biết cách tạo `pull request` để merge từ remote repo của bản thân vào repo gốc
    - [x] Biết cách cập nhật pull request khi muốn thay đổi hoặc sửa lỗi trước khi merge

- [ ] Làm việc nhóm qua mạng
    - [ ] Chọn chủ đề
    - [ ] Thống nhất về workflow
    - [ ] Ưu nhược điểm của làm việc nhóm
    - [ ] Giao tiếp online: ưu nhược điểm. 
    - [ ] Các công cụ để giao tiếp online
    - [ ] Giao tiếp offline: ưu nhược điểm. Cách thức.
    - [ ] Cách giải quyết khi có mâu thuẫn
    - [ ] Công cụ để quản lý dự án theo nhóm
    - [ ] Cách phân chia công việc:
        - [ ] Cấu trúc của dự án
        - [ ] Nhiệm vụ chi tiết  

- [ ] Hiểu và thực hành các công nghệ front-end:
    - [ ] Quy trình design:
        - [ ] Viết requirement và user stories
        - [ ] Sử dụng *Gravit Designer* để vẽ 
    - [ ] Bootstrap
    - [ ] React
    - [ ] React-Router

- [ ] Hiểu và thực hành các công nghệ back-end:
    - [x] Database:
        - [x] MongoDB
        - [x] Mongoose
    - [x] Rest API
    - [ ] HTTP (hoặc HTTPs)
    - [ ] User Authentication
    - [ ] User Authorization

- [ ] Hiểu và thực thành Node.js:
    - [x] Node.js
    - [x] Express.js

- [ ] Hiểu và thực hành *unit test* cũng như *automation test*:
    - [ ] Naive test sử dụng Postman và Robo3T
    - [ ] Unit test sử dụng Mocha, Chai và Chai-Http
    - [ ] Automation test sử dụng Selenium

- [ ] Biết, thống nhất, và cấu hình cho linting tool
    - [ ] Code format khi chạy trên local
    - [ ] Code format khi commit lên remote

- [ ] Hiểu cơ bản về bảo mật cho website
    - [ ] Bảo mật chung cho website
    - [ ] Bảo mật riêng cho Node.js

- [ ] Biết cách cấu hình cho Webpack

- [ ] Triển khai sản phẩm: quản lý asset và Heroku