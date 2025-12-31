# New Year 2025 - Memory Universe 🎆

Một trải nghiệm tương tác nghệ thuật biến album ảnh của bạn thành một vũ trụ kỷ niệm đầy ma thuật với hiệu ứng pháo hoa, confetti và điều khiển bằng cử chỉ tay.

## 🌟 Tính năng

- **Chọn ảnh dễ dàng**: Upload từ folder hoặc chọn nhiều files
- **Hiệu ứng Tết 2025 lung linh**:
  - 🎆 Pháo hoa bùng nổ
  - ✨ Confetti vàng, bạc, đỏ rơi
  - 💫 Ánh sáng vàng lấp lánh
  - 🎇 Particles tạo chữ "2025"
  
- **Trải nghiệm tự động**:
  1. Particles tụ lại thành chữ "2025"
  2. "2025" bung nở thành vũ trụ ảnh
  3. Ảnh bay lượn trong không gian 3D
  4. Spotlight tự động làm nổi bật từng ảnh
  
- **Điều khiển bằng cử chỉ tay**:
  - 👐 **Mở tay**: Zoom out, ảnh dàn ra
  - ✊ **Nắm tay**: Zoom in, ảnh lại gần
  - 👈👉 **Vuốt trái/phải**: Chuyển ảnh
  - ☝️ **Chỉ tay**: Chọn ảnh để spotlight

## 🛠️ Công nghệ

- **Three.js**: Đồ họa 3D và hệ thống particles
- **MediaPipe Hands**: Theo dõi cử chỉ tay real-time
- **Vite**: Build tool nhanh và nhẹ
- **Web APIs**: File reading, Canvas, Camera

## 🚀 Cài đặt và Chạy

1. **Cài đặt dependencies:**
   ```bash
   npm install
   ```

2. **Chạy development server:**
   ```bash
   npm run dev
   ```

3. **Mở trình duyệt:**
   - Truy cập `http://localhost:3001`
   - Cấp quyền Camera và Microphone
   - Chọn 10-50 ảnh (khuyến nghị để trải nghiệm tốt nhất)

## 📝 Hướng dẫn sử dụng

1. **Chọn ảnh**: Click "Choose Folder" hoặc "Choose Files"
2. **Đợi load**: Ảnh sẽ được tối ưu hóa tự động
3. **Thưởng thức**:
   - Xem "2025" hiện ra từ particles
   - Ngắm ảnh bay trong không gian 3D
   - Sử dụng tay để zoom và chuyển ảnh
4. **Chụp lại**: Screenshot khung hình đẹp nhất!

## 💝 Perfect For

- 🎊 Đón năm mới 2025
- 💑 Kỷ niệm tình yêu
- 👨‍👩‍👧‍👦 Ảnh gia đình
- 🎉 Bất kỳ dịp đặc biệt nào

## 🎨 Tùy chỉnh

Bạn có thể điều chỉnh trong file `index.html`:

```javascript
const CONFIG = {
    maxPhotos: 100,           // Số ảnh tối đa
    particleCount: 50000,     // Số particles chính
    confettiCount: 3000,      // Số confetti
    goldColor: 0xffd700,      // Màu vàng
    // ... và nhiều hơn nữa
};
```

## 📸 Lưu ý

- Khuyến nghị: 20-50 ảnh cho hiệu suất tốt nhất
- Ảnh sẽ tự động resize về 512px
- Hoạt động tốt nhất trên Chrome/Edge
- Canvas camera có thể kéo và resize

---

**Made with ❤️ for New Year 2025**
