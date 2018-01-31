Ghi chú của Trung:
- Wed, 28.01.2018

---

- Khi khởi động ứng dụng bằng lệnh `npm start`, node.js sẽ tìm trong *package.json` và chạy lệnh tương ứng với *start* là `"nodemon ./bin/www --exec babel-node"`.
    - Node.js chạy `./bin/www`. 
    - `./bin/www` import *app.js*, node.js tạo server tại cổng 3000, truyền vào tham số *app* như 1 object. Object *app* sẽ xử lý tiếp các middleware đã được khai báo trong *app.js*
    - *babel-node* là node module sẽ lấy syntax của ES6, biên dịch thành ES5.
- Trong *app.js* sẽ có nhiều Express middleware, mỗi middleware được gọi thông qua `app.use()`.
    - Các middleware sẽ được gọi từ trên xuống dưới. 
    - Trong mỗi middleware, người dùng sẽ truyền tham số và hàm callback để thực thi. Khi callback thực thi xong sẽ gọi tiếp đến middleware khác thông qua *next()*. 
- Ví dụ với middleware `app.use('/api', routes)`: 
    - khi có HTTP request đến URL "/api", thì Express sẽ gọi hàm callback ứng với *routes* đã được import ở trên đầu. 
    - đến lượt nó, *routes* lại tiếp tục kiểm tra tiếp xem full URL là gì? HTTP method là gì? để gọi tiếp từng hàm. Ví dụ, URL đầy đủ là "/api/user" và HTTP method là *get*, thì *route* sẽ gọi *userCtrl.list*
