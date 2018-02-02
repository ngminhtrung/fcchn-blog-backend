### Express giúp ta việc gì?

Node.js chỉ đơn thuần giúp ta tạo server, lắng nghe bất kỳ HTTP request nào được gửi đến cổng chỉ định trước. Còn để trả về HTTP response, lập trình viên phải tự làm những việc sau:
- viết hàm xử lý cho mỗi HTTP verbs. Có bao nhiêu verb (GET, POST, DELETE, v.v.) thì có bấy nhiêu hàm.
- viết hàm xử lý cho mỗi đường dẫn URL (còn gọi là "routes"), 
- gửi đi các file tĩnh (như ảnh, CSS, JavaScript) nếu có yêu cầu
- sử dụng template để tạo HTML với đầy đủ nội dung

Express.js là 1 web framework giúp lập trình viên giảm nhẹ những việc trên bởi nó cung cấp sẵn cơ chế để:
- Viết hàm xử lý requests ứng với các HTTP verb và URL khác nhau.
- Tích hợp "view" rendering engines (một bộ tạo HTML thông qua việc chèn dữ liệu vào template sẵn có) 
- Thiết lập những thông số thông dụng của một ứng dụng web như:
    - cổng để kết nối
    - địa chỉ thư mục chứa templates để engine "view" trên hoạt động
- Những "middleware" - những hàm xử lý request bổ xung, được đặt ở bất kỳ điểm nào trong luồng chảy xử lý request. 

Express còn có những middleware packages cho các việc liên quan đến:
- cookies, 
- sessions, 
- user logins, 
- URL parameters, 
- POST data, 
- security headers
- v.v.

### Gọi Express trong ứng dụng kiểu gì?

Nếu `app.js` là điểm bắt đầu (entry point) của ứng dụng, thì đoạn code sau sẽ gọi module Express:
```js
var expres = require('express');
var app = express();
```

Câu lệnh `require('express)` sẽ nhúng module Express vào chương trình, còn `express()` là bước chính thức để  tạo 1 object chứa tất cả những methods và properties mà Express đã định sẵn cho lập trình viên. Object này được đặt tên là `app`. Muốn xem object tên `app` này được Express trang bị súng ống (methods và properties), hãy tham khảo ở [tài liệu chính thức của Express](https://expressjs.com/en/4x/api.html#app). Object tên `app` kia sẽ đi theo ta suốt toàn bộ quá trình xử lý HTTP request cũng như HTTP response.

Về có bản, `app` sẽ có nhiều method ứng với các chức năng sau:
- phân luồng HTTP requests để chiến (chia để trị)
- cấu hình middleware, 
- render HTML,
- đăng ký template engine
- thay đổi cài đặt của ứng dụng để thay đổi:
    - chế độ làm việc
    - cách xử lý chữ hoa chữ thường, 
    - v.v. 

### Trông cái method phân luồng chia để trị nó như thế nào?

Như thế này:
```js
app.get('/hello', function(req, res) {
  res.send('Hello World!');
});

app.get('/morning', function(req, res) {
  res.send('Good morning!');
});
```

Nghĩa là giả sử ta đang cấu hình cho server lắng nghe ở cổng 3000 trên localhost, thì khi gọi:
-  `http://localhost:3000/hello`, đây là 1 HTTP request có HTTP verb là `GET`, HTTP response trả về  sẽ là đoạn text "*Hello World!*", 
- `http://localhost:3000/hello`, HTTP verb của request vẫn là `GET`, HTTP response trả về là đoạn text "*Good Morning*".

Vậy cùng 1 lúc, method `.get()` của object `app` giúp phân biệt:
- Ký tự `/` tượng trưng cho đường dẫn của thư mục gốc, chính là `http://localhost:3000`.
- URL truyền vào ứng với `/hello` hay `/morning`.
- HTTP verb là `GET` chứ không phải `POST`, hay `UPDATE`, hay `DELETE`. 

từ đó app sẽ dẫn đến hàm callback thích hợp, trả về đoạn text phù hợp với từng trường hợp. 

### Ủa trong file app.js của fcchn-blog làm gì có có chỗ nào là app.get đâu?

Yeah, tại nếu gọi hết các trường hợp của URL và HTTP verbs ra rồi đặt trong `app.js` thì sẽ rất rối rắm, file `app.js` trở nên dài dằng dặc khó quản lý. Cho nên Express trang bị 1 middleware tên là **router** cho object `app`. Đúng như tên gọi, nếu router ở nhà dùng để chia nhánh các line internet ra như thế nào, thì middleware `router` cũng chia nhỏ các trường hợp của HTTP requests ra để xử. 

Cụ thể ở đây, `app.js` của *fcchn-blog* có:
- nhúng method *routes* từ file khác ngay từ đầu thông qua `routes = require('./routes');`
- đặt *routes* là hàm callback khi mà người dùng gọi đến thư mục `http://localhost:3000/api` thông qua `app.use('/api', routes)`;
- Một khi *routes* được gọi, nó sẽ rẽ nhánh tiếp như thế nào thì phải xem tiếp trong file `index.js` của folder `./routes` (vốn mặc định trỏ đến `index.js` đầu tiên)

### Vậy middlware Router của fcchn-blog có gì?

Khi nhìn vào `index.js` ta thấy:

1. Vẫn phải nhúng lại module Express thông qua `import express from 'express';`, 
2. Gọi middleware Router ra từ Express thông qua ` express.Router();`, tống vào object *routes*. 
    - Object *routes* này đóng vai trò callback function nói ở trên. 
    - Do ở trên đã chỉ định `app.use('/api', routes)`;, cho nên mọi thứ chia nhánh từ *route* sẽ bắt đầu với `/api`.
3. Bắt đầu chia nhỏ tình huống:
    - Nếu người dùng gọi `http://localhost:3000/api/health-check` thì trả về text "OK" nhờ đoạn:
        ```js
        router.get('/health-check', (req, res) =>
            res.send('OK')
        );
        ```
    - Nếu người dùng gọi: `http://localhost:3000/api/users` thì gọi tiếp hàm callback *userRoutes* nhờ đoạn `router.use('/users', userRoutes);`
    - Tương tự với `/posts`, `/comments`, `/likes`, v.v.
    - Mỗi một đường dẫn URL sẽ được xử lý bởi một hàm callback riêng, gọi là *Router function*.

### Router function nhận tham số gì, trả về cái gì?

Tiếp theo đoạn trên, object "app" đã biết được phải gọi callback function "userRoutes" ở đâu và như thế nào bởi:
- *userRoutes* đã được nhúng vào ngay từ đầu nhờ `import userRoutes from './users.route';`
- Bên trong file `users.route.js`:
    ```js
    router.route('/')
    .get(userCtrl.list)
    ```
    cho biết nếu gọi đến `/api/users` (cộng dồn từ `/api` ở `app.js`, đến `/users` ở `index.js`) và HTTP verb là `GET` thì gọi hàm *userCtrl.list*. 

Vậy *userCtrl.list* chính là 1 Router function, giúp xử lý 1 trường hợp cụ thể của HTTP request khi:
- HTTP verb là GET
- URL là `/api/users`

Lục tìm *userCtrl.list* từ chỉ dẫn `import userCtrl from '../controllers/users.controller';` ta tìm đến folder `controllers`, file `user.controller.js`, function *list* của object *userContrl*, có:

```js
function list(req, res, next) {
  // đoạn code nào đó
}
```

Không chỉ có hàm *list*, mà các hàm khác trong `user.controller.js`, cũng như `post.controller.js`, cả các hàm bên ngoài `app.js` hầu hết đều nhận 3 tham số truyền vào từ HTTP request, đó là `res`, `req` và `next`.

### Ba tham số `res`, `req` và `next` tượng trưng cho cái gì?

`req` và `res` tượng trưng cho 2 object HTTP request và HTTP response. 

Còn `next` là 1 hàm, báo hiệu cho `app` biết là khi xử lý xong với `req` và `res` thì chuyển đến middleware tiếp theo. 

### Quay lại, vậy middleware là gì?

Middleware đơn giản chỉ là hàm để xử lý việc gì đó:
 - xử lý các file tĩnh như HTML, CSS, JavaScript, hoặc .text, .pdf, v.v.
 - nén các HTTP responses. 
 - v.v.
 
Vậy Route function là hàm xử các HTTP response, middleware cũng là hmf, vậy chúng khác gì nhau?
- Route function chỉ liên quan đến luồng vào (HTTP request), và luồng ra (HTTP Response). Sau đó nó biến mất.
- Middleware ngoài việc với HTTP request và response, nó còn có nhiệm vụ gọi hàm kế tiếp trong chuỗi, có thể là 1 middle khác, hoặc 1 route function. 

Việc *chuyển đến 1 middle khác/ route function khác* phải được chỉ dẫn thông qua `next` (hoặc `next()`). Nếu không thì mọi thứ sẽ bị treo luẩn quẩn trong 1 middleware nào đó.

Chính vì thế, điểm khác nhau dễ nhận thấy khi quan sát route function và middleware function là:
    - Route function không có tham số `next` truyền vào.
    - Middleware cần có `next` truyền vào.

Như vậy việc sắp đặt các middleware cái nào trên cái nào dưới là bắt buộc, để đảm bảo các dòng chảy đi đến đúng nơi, về đúng chỗ. Sắp linh tinh là các dòng chảy cũng chạy lộn xộn ngay.

### Trong app fcchn-blog có những middleware nào

Nếu nhìn vào `app.js` thì thấy ngay những middleware ngay trên đầu:

```js
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api', routes);
```

Theo thứ tự trên, middleware Router `app.use('/api', routes);` ở dưới cùng, tức là tất cả các việc liên quan đến xử lý HTTP request thông qua route function mà ta trình bảy ở trên thực ra chỉ là bước cuối, sau những middleware như:
- logger: HTTP request logger middleware for node
- bodyParser: This parses the body portion of an incoming HTTP request and makes it easier to extract different parts of the contained information.
- cookieParse: Used to parse the cookie header and populate req.cookies (essentially provides a convenient method for accessing cookie information).

Các middleware được gọi thông qua method `.use()` của `app`. Gọi theo chuỗi, và cũng thực thi theo chuỗi.

