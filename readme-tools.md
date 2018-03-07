
## Hướng dẫn sử dụng Robo3T để xem MongoDB trên localhost

Robo3T (tên cũ: Robomongo) được dùng để xem database MongoDB trên máy. 

### Trang chủ:

https://robomongo.org/

### Đã có nhiều hướng dẫn cài đặt và sử dụng bằng tiếng Việt. Vui lòng xem các bài đưới đây:

- [Hướng dẫn cài đặt và sử dụng RoboMongo](https://o7planning.org/vi/10273/huong-dan-cai-dat-va-su-dung-robomongo)
- [Node.js – Bài 4: Hướng dẫn dùng Robomongo quản lý Mongodb (3042 views)](https://smartjob.vn/huong-dan-dung-robomongo-quan-ly-mongodb/)
- [Sử dụng Robomongo kết nối tạo dữ liệu với MongoDB](http://www.dtmi.net/su-dung-robomongo-ket-noi-tao-du-lieu-voi-mongodb/)

### Xem các hình chụp sau để thực hiện nhanh việc kiểm tra database MongoDB dự án fcchanoi-blog-backend

Sau khi cài đặt, mở Robo3T, tạo connection đến database trong máy. 

#### Bước 1:
![robo 3t - 1 1_003](https://user-images.githubusercontent.com/7209436/35837970-7e91d276-0b1b-11e8-8185-548cd37139a9.png)

#### Bước 2:
![mongodb connections_004](https://user-images.githubusercontent.com/7209436/35838075-1b4189d6-0b1c-11e8-8fac-d43db4209067.png)

#### Bước 3: Đặt tên cho connection này. Nó sẽ trỏ đến toàn bộ MongoDB trên localhost của ta, kể cả các dự án khác. Lưu ý số cổng MongoDB. Sau đó nhấn Connect.

![connection settings_005](https://user-images.githubusercontent.com/7209436/35838114-4e1a3e34-0b1c-11e8-810b-8cc032fc500c.png)

![mongodb connections_006](https://user-images.githubusercontent.com/7209436/35838129-644eda98-0b1c-11e8-8eff-0ab4aad07c94.png)

#### Bước 4: Vào xem database của fcchn-blog-backend. Chỉnh sửa nếu muốn.

![robo 3t - 1 1_007](https://user-images.githubusercontent.com/7209436/35838240-f8c6654c-0b1c-11e8-83a4-79111b96d036.png)
![robo 3t - 1 1_008](https://user-images.githubusercontent.com/7209436/35838243-f8f96a1e-0b1c-11e8-8229-7717b1bd9419.png)