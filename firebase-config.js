// ============================================================
//  CẤU HÌNH FIREBASE — dự án "Checkin" (checkin-fd363)
// ============================================================
// Lấy từ Firebase → Settings → Project settings → Your apps → FSC Check-in.
// Các giá trị này là thông tin công khai của ứng dụng web, không phải mật khẩu;
// dữ liệu được bảo vệ bằng Rules trong Firestore.
window.FSC_FIREBASE_CONFIG = {
  apiKey: "AIzaSyBKQJ9zgA64DuuxNqikkhWOfuNspCUlX70",
  authDomain: "checkin-fd363.firebaseapp.com",
  projectId: "checkin-fd363",
  storageBucket: "checkin-fd363.firebasestorage.app",
  messagingSenderId: "968541399477",
  appId: "1:968541399477:web:21566e1335a2be1eed11fc",
  measurementId: "G-6YNJP6SGT1"
};

// Email Google của Ban tổ chức (được vào Check-in, Quản trị, xem ảnh khách).
// Phải giống hệt danh sách trong Rules của Firestore.
window.FSC_ADMIN_EMAILS = [
  "oanhnn4@fpt.edu.vn"
];
