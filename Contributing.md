# Làm thế nào để đóng góp cho app này?

*blog-app* mở cho tất cả mọi người, và chúng tôi hoan nghênh bất kỳ đóng góp nào. Chúng tôi tin rằng dự án này sẽ hoàn thiện hơn khi nhận được sự quan tâm của các bạn. 

## SETUP
---

### Danh sách modules cần để chạy fcchn-blog-backend

Những chương trình cần cài trước trong máy:

| Tên chương trình    | Phiên bản |
|---                  |---        |
| Node.js             |     8.9.3      |
| MongoDB             |        3.4.5   |

Nếu Node.js hoặc MongoDB đã có sẵn trong máy của bạn, hãy chạy câu lệnh sau để kiểm tra phiên bản đã cài đặt:
```
node -v
mongo --version
```
Nếu phiên bản Node.js hoặc MongoDB của bạn đang thấp hơn phiên bản yêu cầu trên, bạn cần tiến hành cập nhật.

### Fork the project

Bạn cần fork dự án này về repo của bạn. 

#### Cài đặt git
1. Cài đặt [git](https://git-scm.com/)
2. Setup một [khóa SSH](https://help.github.com/articles/generating-an-ssh-key/) cho Github.

#### Tiến hành fork fcchn-blog-backend

1. Vào repo của fcchn-blog-backend tại địa chỉ: https://github.com/ngminhtrung/fcchn-blog-backend
2. Kéo lên đầu trang, click chuột vào nút "Fork" ở bên tay phải. Xem chi tiết ở [đây](https://help.github.com/articles/fork-a-repo/).
3. Sau khi repo này được *forked*, trình duyệt web sẽ đưa bạn đến repo trên account Github của bạn tại địa chỉ [lưu ý thay tên account của bạn]: https://github.com/[tên-account-Github-của-bạn]/fcchn-blog-backend

#### Clone bản fork về máy local

1. Mở Terminal/ Command Line/ Bash Shell trong folder nào đó trong máy bạn, chọn folder mà bạn muốn lưu trữ repo fcchn-blog-backedn nói trên, ví dụ: `/learningReact`
2. Clone bản fork của fcchn-blog-backend về máy qua câu lệnh:
```
git clone https://github.com/[tên-account-Github-của-bạn]/fcchn-blog-backend.git
```
**Lưu ý lần nữa**: nhớ đổi "tên-account-Github-của-bạn" trong đường dẫn trên với username Github của bạn.

#### Cài đặt Upstream

1. Chuyển đến thư mục chứa fcchn-blog-backend (ví dụ bằng câu lệnh `cd fcchn-blog-backend`)
2. Thêm một tham chiếu từ xa đến repo chính thức của fcchn-blog-backend:
```
$ git remote add upstream https://github.com/ngminhtrung/fcchn-blog-backend.git
```

Lưu ý: từ `upstream` có thể thay đổi bằng bất kỳ từ nào khác theo ý bạn. Chủ yếu bạn cần nhớ từ khóa này để dùng sau này, khi cần cập nhật mã nguồn từ repo chính thức của fcchn-blog-backend.

### Maintain bản fork của bạn

Bây giờ bạn đã có 1 bản fork, sẽ có vài việc cần làm để giúp cho bản fork này được cập nhật.

#### Rebase từ upstream

Hãy thực hiện việc sau trước khi tạo 1 branch mới để Pull Request:

1. Đảm bảo rằng bạn đang ở nhánh `develop`:
```
git status
// On branch develope
// Your branch is up-to-date with 'origin/develop'
```
Nếu đang ở nhánh khác, hãy xử lý các files còn đang dang dở, commits, rồi chuyển sang nhánh `develop`:
```
git checkout develop
```

Thực hiện 1 pull có rebase đối với repo "upstream" (chính là repo gốc của fcchn-blog-backend). Lưu ý: nếu bạn đã từng thay từ "upstream" bằng cái tên khác ở bước bên trên, thì ở đây cũng phải đổi "upstream" thành từ mà bạn đã đặt.
```
git pull --rebase upstream develop
```
Việc này sẽ giúp lôi mọi thay đổi từ nhánh `develop` của repo chính thức về repo của bạn (mà không tạo thêm commit trong repo trên máy). 

3. (Tùy chọn) Force push những thay đổi trên nhánh `develop` trên repo trên máy đến bản fork online trên Github
```
git push origin develop --force
```
Thao tác này sẽ ghi đè nhánh `develope` trên bản fork của bạn (trên Github).

### Tạo nhánh mới

Trước khi tiến hành công việc, bạn sẽ cần tạo 1 nhánh mới liên quan cụ thể đến issue/ tính năng mà bạn đang nhắm đến. Mọi code của bạn sẽ được đẩy vào nhánh này.

#### Đặt tên cho nhánh

Định dạng tên nhánh:
- Khi fix bug: `fix/xxx` 
- Khi liên quan đến tính năng: `feature/xxx`

trong đó `xxx` là mô tả "cực" ngắn về thay đổi hoặc tính năng mà bạn đang thêm vào. Ví dụ, nếu bạn định fix bug liên quan đến tính năng log-in bằng email, hãy đặt tên nhánh là `fix/email-login`.

#### Thêm nhánh vào repo trên máy
Tạo một nhánh mới trên máy và chuyển đến nhánh đó bằng lệnh:
```
git checkout -b [tên_nhánh_mới_của_bạn]
```
sau đó đẩy lên Github 
```
$ git push origin [tên_nhánh_mới_của_bạn]
```
Nếu cần tra thêm cách xử lý với nhánh, hãy xem tại [đây](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches).

### Thiết lập cơ chế "linting"

Bạn cần có ESLint được cài vào editor của mình, ESLint sẽ giúp phát hiện bất kỳ đoạn code nào không tuân thủ với quy định về viết code của fcchn-blog-backend. Các quy định được dựa trên [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript). 

Xin đừng bỏ qua bất kỳ vấn đề nào do ESLint chỉ ra, bởi quy định về viết code được sinh ra để đảm bảo chúng ta luôn có một code base sạch sẽ và sáng sủa.

### Set-up fcchn-blog-backend

Một khi bạn đã fork fcchn-blog-backend về máy, trước khi chạy chương trình, bạn cần cài đặt tất cả các dependencies qua lệnh:
```
npm install
```
Sau đó bạn cần khởi động MongoDB, thêm dữ liệu cho database, sau đó khởi động chương trình:
```
# Bật mongo server ở một terminal riêng:
# Nếu dùng macOS:
mongod

# Nếu dùng Windows, bạn cần phải chỉ rõ đường dẫn đến file thực thi mongod
# Đường dẫn dưới đây chỉ là mẫu, hãy thay 3.4 bằng phiên bản thực tế cài trên máy bạn:
"C:\Program Files\MongoDB\Server\3.4\bin\mongod"

# Khởi động fcchn-blog-backend
# Lệnh sau sẽ thêm dữ liệu vào database trong lần cài đặt đầu tiên
# Và lệnh này chỉ cần chạy 1 lần duy nhấ
npm run only-once

# Khởi động ứng dụng
npm start
```

Bây giờ, hãy mở trình duyệt lên, gõ vào thanh địa chỉ http://localhost:3000. Nếu ứng dụng chạy, thì nghĩa là mọi thứ đã ngon lành. Còn không, bạn có thể tạo issue trong repo chính thức của fcchn-blog-backend để hỏi. 

### Test ứng dụng

Khi bạn đã sẵn sàng để chia sẻ code mới thêm vào, bạn cần test lại ứng dụng với:
```
npm test
```
và đảm bảo mọi tests phải được pass.



## Hướng dẫn khi Commit Code
---
*blog-app* quy định về cách viết commit log cho rất nhiều mục đích (ví dụ như việc tạo CHANGELOG, xóa lịch sử tìm kiếm, v.v.).
Trước khi commit/push, cần đảm bảo tuân theo quy định về định dạng của commit log như sau:

Khung sườn của commit log:
```bash
<type>(<module>): <chủ đề>
<Dòng trống>
<Phần thân>
<Dòng trống>
<footer>
```

- #### Types
  - **feat**: Tính năng mới
  - **fix**: Sửa lỗi
  - **docs**: Thay đổi tài liệu
  - **style**: Những thay đổi về style không làm ảnh hưởng đến ý nghĩa của code, ví dụ như khoảng trắng, dấu chấm phẩy .v.v.
  - **refactor**: Đoạn code không phải là thêm tính năng mới, cũng không phải là sửa lỗi. 
  - **test**: Thay đổi, thêm, bớt test.
  - **skip**: Đối với những commits được tạo sau lần commit đầu tiên. Thường dùng cho thay đổi khi code review.

- #### Phần thân
Một đoạn mô tả ngắn về nội dung của lần commit. Một tham chiếu đến issue nên được đặt ở phần thân này, ví dụ như: `Ref #ISSUE-NO`. Ví dụ: Khi commit được thực hiện liên quan đến issue số 20, thì điền 1 đoạn là:
```bash
Ref #20
```


Ví dụ commit log cho việc sửa lỗ:
```bash
Fix(Axis): Correct tick rendering

Update condition of tick to avoide unnecessary tick rendering

Ref #20
```

Ví dụ commit log cho code review (sau commit thứ 1):
> **Note:** Commit log starting with `skip:` type will be ignored by commit hook constraint.
```bash
skip: Applied the review
```


## Bản quyền
---
Một khi đã đóng góp vào blog-app, bạn đồng ý rằng code của bạn sẽ có bản quyền theo nhóm [MIT](https://opensource.org/licenses/MIT).