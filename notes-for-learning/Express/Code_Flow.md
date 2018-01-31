Ghi chú của Trung:
- Wed, 28.01.2018

---

- Khi khởi động ứng dụng bằng lệnh `npm start`, node.js sẽ tìm trong *package.json` và chạy lệnh tương ứng với *start* là `"nodemon ./bin/www --exec babel-node"`.
- Cấu hình của `./bin/www` sẽ cho server listen tại cổng 3000.
- Trong *app.js* sẽ có nhiều Express middleware, mỗi middleware được gọi thông qua `app.use()`.
    - Các middleware sẽ được gọi từ trên xuống dưới. 
    - Trong mỗi middleware, người dùng sẽ truyền tham số và hàm callback để thực thi. Khi callback thực thi xong sẽ gọi tiếp đến middleware khác thông qua *next()*. 
- Ví dụ với middleware `app.use('/api', routes)`: khi có HTTP request đến URL "/api", thì Express sẽ gọi hàm callback ứng với *routes* đã được import ở trên đầu. 