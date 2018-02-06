

## QUY CHUẨN VIẾT CODE
---
### Linting và quy chuẩn viết code

Để bảo trì code, chúng tôi sử dụng [ESLint](http://eslint.org/) để đảm bảo chất lượng các đoạn code. 

Các quy định được dựa trên [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript). 

### Hướng dẫn khi Commit Code
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

## Làm sao để tạo Pull Requests?

Cách để gửi pull request:

1. Fork `blog-app` về repository của bạn
2. Tạo một branch mới trong branch blog-app master của bạn (luôn phải đảm bảo là branch master của bạn là cập nhật nhất)
3. Thay đổi code bạn mong muốn
4. Viết test cho phần bạn thêm vào (nếu có thể)
5. Chạy `npm run lint` để kiểm tra định dạng code. Nếu có cảnh báo hoặc báo lỗi thì sửa đến khi hết hoàn toàn.
6. Chạy `npm test` hoặc `npm test:chrome` để  chạy test trên trình duyệt Chrome. Hãy đảm bảo mọi test phải passed trên trình duyệt Chrome (mobile/ hoặc desktop).
7. Viết commit log theo quy định nói trên, sau đó push lên repository của bạn.
8. Tạo một Pull Request từ branch của bạn đến blog-app.
9. Đợi reviews. Khi mà đoạn code của bạn được chấp nhận, nó sẽ được merged vào branch của chúng tôi.
10. Xong!

