# FSC Check-in — Hội thảo tháng 12, FSC Tây Hà Nội

Trang web dùng để khách mời tự đăng ký khuôn mặt trước hội thảo và check-in bằng khuôn mặt tại cổng trường. Ban tổ chức theo dõi ai đã đến, ai chưa đến, và đối chiếu ảnh check-in với ảnh đăng ký.

- **Giao diện:** tự co giãn trên điện thoại, iPad và máy tính.
- **Lưu trữ:** trang chạy trên **GitHub Pages**, dữ liệu lưu trên **Firebase**. Cả hai đều miễn phí.

Làm lần lượt 4 phần dưới đây, tổng cộng khoảng 20 phút.

---

## Phần 1. Tạo dự án Firebase

1. Vào https://console.firebase.google.com, đăng nhập bằng tài khoản Google của trường.
2. Bấm **Create a project** (hoặc **Add project**), đặt tên `fsc-checkin`. Tắt Google Analytics rồi bấm **Create project**.
3. **Bật đăng nhập:**
   1. Ở menu trái, chọn **Build → Authentication → Get started**.
   2. Mở thẻ **Sign-in method**.
   3. Bật **Anonymous**. Khách mời đăng ký không cần tài khoản nên cần mục này.
   4. Bật **Google**, chọn email hỗ trợ là email của bạn, bấm **Save**. Mục này để Ban tổ chức đăng nhập.
4. **Tạo cơ sở dữ liệu:**
   1. Ở menu trái, chọn **Build → Firestore Database → Create database**.
   2. Chọn vị trí `asia-southeast1 (Singapore)`.
   3. Chọn **Start in production mode**, bấm **Create**.
5. **Dán quy tắc bảo mật:**
   1. Trong Firestore, mở thẻ **Rules**.
   2. Xoá hết nội dung đang có.
   3. Dán toàn bộ nội dung file `firestore.rules` trong thư mục này vào, bấm **Publish**.
6. **Lấy cấu hình:**
   1. Bấm bánh răng ⚙ cạnh *Project Overview*, chọn **Project settings**.
   2. Kéo xuống mục *Your apps*, bấm biểu tượng **</>** (Web).
   3. Đặt tên `FSC Check-in`, không chọn Hosting, bấm **Register app**.
   4. Chép đoạn `firebaseConfig = { ... }` hiện ra.

## Phần 2. Điền cấu hình

Mở file `firebase-config.js` bằng Notepad hoặc ngay trên GitHub ở Phần 3. Thay các giá trị `DIEN_...` bằng giá trị vừa chép ở bước 6.

Danh sách `FSC_ADMIN_EMAILS` là email Google của những người trong Ban tổ chức. Nếu thêm người, thêm email ở **cả hai nơi**:

- file `firebase-config.js`
- file `firestore.rules`, sau đó bấm **Publish** lại Rules trên Firebase

## Phần 3. Đưa lên GitHub Pages

1. Vào https://github.com/new và điền:
   - **Repository name:** `fsc-checkin`
   - Chọn **Public**. Bản miễn phí của GitHub Pages yêu cầu kho công khai. Trong mã không có mật khẩu; cấu hình Firebase là thông tin công khai theo thiết kế, dữ liệu được bảo vệ bằng Rules.
   - Bấm **Create repository**.
2. **Tải file lên:**
   1. Bấm vào dòng **uploading an existing file**.
   2. Kéo **toàn bộ nội dung** thư mục `fsc-checkin` vào: các file `index.html`, `firebase-config.js`, `firestore.rules`, `README.md`, `.nojekyll` và hai thư mục `model`, `vendor`.
   3. Đợi tải xong rồi bấm **Commit changes**.
   - Nếu không thấy file `.nojekyll` (file ẩn) thì có thể bỏ qua.
3. **Bật trang web:**
   1. Vào **Settings → Pages**.
   2. Ở mục *Source*, chọn **Deploy from a branch**, nhánh **main**, thư mục **/ (root)**, rồi bấm **Save**.
   3. Sau 1–2 phút, trang hiện địa chỉ dạng `https://<tên-github>.github.io/fsc-checkin/`.
4. Nếu chưa điền cấu hình ở Phần 2: mở file `firebase-config.js` trên GitHub, bấm biểu tượng bút chì, dán cấu hình rồi bấm **Commit changes**.

## Phần 4. Cho phép tên miền GitHub đăng nhập

Trên Firebase, vào **Authentication → Settings → Authorized domains → Add domain**. Thêm `<tên-github>.github.io`, ví dụ `fptschool.github.io`.

Xong. Mở địa chỉ trang web để dùng thử.

---

## Dùng thử

**Khách mời**
1. Mở link trên điện thoại.
2. Điền họ tên, chức vụ, trường/đơn vị công tác.
3. Chạm vào 3 ô ảnh để chụp bằng camera trước.
4. Đánh dấu đồng ý rồi bấm **Gửi đăng ký**.

Khách chỉ thấy trang đăng ký. Mục Check-in và Tài liệu chỉ mở trên điện thoại của khách sau khi khách check-in tại cổng **đúng ngày 04/12/2026** (giờ Việt Nam).

**Ban tổ chức**
1. Kéo xuống cuối trang, bấm **Đăng nhập bằng Google** bằng email đã khai báo. Thanh trên cùng sẽ hiện thêm Check-in, Tài liệu, Quản trị.
2. **Check-in:** máy đặt ở cổng mở tab này. Khách chụp một ảnh và được nhận diện. Trước ngày 04/12, máy chạy *chế độ thử*: vẫn nhận diện nhưng không ghi check-in.
3. **Quản trị:** mã PIN mặc định là `1234`, nên đổi ngay trong mục Cài đặt. Tại đây có:
   - số khách đã đến, chưa đến;
   - đối chiếu 3 ảnh đăng ký với ảnh check-in, đánh dấu *Đúng người* hoặc *Không khớp*;
   - check-in thủ công, đăng ký hộ;
   - tải danh sách CSV.
4. **Tài liệu:** vào **Quản trị → Tài liệu**. Lần đăng nhập đầu tiên, trang tự nạp sẵn 4 tài liệu mẫu: Chương trình, Kế hoạch bài dạy, Checklist sự kiện, Thông tin chung. Sửa chữ trực tiếp trong từng ô rồi bấm **Lưu tài liệu**. Cách viết trong ô:
   - **Lịch trình:** mỗi dòng `07:30 | Đón khách | Cổng chính`.
   - **Văn bản:** `# Tiêu đề mục`, `- gạch đầu dòng`, `= Nhãn | Giá trị` (dòng bảng), `@ Tên nút | https://…` (link). Dòng thường là đoạn văn.
   - **Danh sách việc:** `# Tên nhóm`, `- Việc cần làm | Người phụ trách`.
   - Dòng bắt đầu bằng `>` là mô tả ngắn dưới tiêu đề.
   - Có nút thêm, xoá, đổi thứ tự tab. Ô *Link tài liệu đầy đủ* để dán link Google Drive; sau khi check-in, trang hiện mã QR để khách quét.
5. Muốn thử trọn luồng trước ngày hội thảo: vào **Quản trị → Cài đặt**, đổi tạm ngày hội thảo thành hôm nay. Thử xong, đổi lại 04/12/2026 và bấm **Đặt lại toàn bộ check-in**.

## Lưu ý

- **Thiết bị đăng ký:** khách được nhận biết theo trình duyệt dùng lúc đăng ký. Khách nên đăng ký bằng chính điện thoại mang theo ngày hội thảo, để sau khi check-in tài liệu tự mở trên máy đó. Nếu khách đổi máy hoặc xoá dữ liệu trình duyệt, máy ở cổng vẫn nhận diện và hiện tài liệu bình thường.
- **Lần mở đầu tiên:** mỗi máy tải mô hình nhận diện khoảng 8 MB.
- **Bảo mật dữ liệu:** ảnh khuôn mặt chỉ Ban tổ chức xem được. Khách chỉ đọc và sửa hồ sơ của chính mình, không tự đánh dấu check-in được, và không sửa được sau khi đã check-in.
- **Tài liệu được giữ kín:** nội dung tài liệu không nằm trong mã nguồn GitHub mà lưu trên Firebase. Quy tắc bảo mật chỉ cho Ban tổ chức và khách đã được check-in tại cổng đúng ngày hội thảo đọc.
- **Sau hội thảo:** xoá dữ liệu khuôn mặt trong Firebase (Firestore → xoá các collection `regs`, `regphotos`, `checkins`).
