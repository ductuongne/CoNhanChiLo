# 🔮 CoNhanChiLo - Website Huyền Học

Website cung cấp các dịch vụ và công cụ huyền học bao gồm Lá Số Tử Vi, Thần Số Học, La Bàn Phong Thủy và nhiều tính năng khác.

## ✨ Tính Năng

- 🌟 **Lá Số Tử Vi**: Xem lá số tử vi chi tiết theo ngày giờ sinh
- 🔢 **Thần Số Học**: Khám phá ý nghĩa con số trong cuộc sống
- 🧭 **La Bàn Năng Lượng**: Xác định hướng phong thủy với cảm biến thiết bị
- 📅 **Xem Ngày Đẹp**: Tìm ngày tốt cho các sự kiện quan trọng
- 🎴 **Bói Bài Tarot**: Dịch vụ bói bài tarot trực tuyến
- 💬 **Thông Điệp**: Nhận thông điệp từ vũ trụ

## 🚀 Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Routing**: React Router DOM 7.9.6
- **Styling**: CSS Modules với Custom Properties
- **UI Components**: Reactjs Popup
- **Linting**: ESLint 9

## 📁 Cấu Trúc Project

```
CoNhanChiLo/
├── client/                    # Frontend application
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── assets/          # Images và resources
│   │   │   └── image/
│   │   ├── components/
│   │   │   ├── common/      # Reusable components
│   │   │   │   ├── CustomPopup.jsx
│   │   │   │   ├── Scroll.jsx
│   │   │   │   └── SetTitle.jsx
│   │   │   └── layouts/     # Layout components
│   │   │       ├── CompassSection/
│   │   │       ├── ContactSection/
│   │   │       ├── FeatureSection/
│   │   │       ├── Footer/
│   │   │       ├── Header/
│   │   │       ├── HeroSection/
│   │   │       └── TaoLaSo/
│   │   ├── data/            # Data files
│   │   ├── routes/          # Route configuration
│   │   │   └── index.jsx
│   │   ├── services/        # API services
│   │   ├── styles/          # Global styles
│   │   │   ├── App.css
│   │   │   ├── index.css
│   │   │   └── ...
│   │   ├── views/           # Page components
│   │   │   ├── About.jsx
│   │   │   ├── Compass/
│   │   │   ├── Contact.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── LaSoTuVi.jsx
│   │   │   └── ThanSoHoc.jsx
│   │   └── main.jsx         # Entry point
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/                   # Backend (đang phát triển)
└── README.md
```

## 🛠️ Cài Đặt

### Yêu Cầu

- Node.js >= 16.x
- npm hoặc yarn

### Các Bước Cài Đặt

1. **Clone repository**
```bash
git clone <repository-url>
cd CoNhanChiLo
```

2. **Cài đặt dependencies**
```bash
cd client
npm install
```

3. **Chạy development server**
```bash
npm run dev
```
or
```bash
npm start
```
4. **Mở trình duyệt**
```
http://localhost:5173
```

## 📜 Scripts

```bash
npm run dev      # Chạy development server
npm run build    # Build production
npm run preview  # Preview production build
npm run lint     # Chạy ESLint
```

## 🎨 Design System

### Color Palette

- **Primary Purple**: `#6C5CE7` - Màu chủ đạo
- **Secondary Purple**: `#A29BFE` - Màu phụ
- **Accent Gold**: `#FDCB6E` - Màu nhấn
- **Accent Blue**: `#74B9FF` - Màu phụ
- **Background**: `#FAFAFF` - Nền sáng
- **Text Dark**: `#2D3436` - Text chính
- **Text Light**: `#636E72` - Text phụ

### Typography

- Font chính: System fonts với fallback
- Heading sizes: 2.5rem - 1.5rem
- Body text: 1rem

## 🔐 Environment Variables

Tạo file `.env` trong thư mục `client/`:

```env
VITE_API_URL=your_api_url_here
VITE_APP_NAME=CoNhanChiLo
```

## 🚢 Deployment

### Build Production

```bash
cd client
npm run build
```

## 🤝 Contributing

1. Fork project
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📝 License

Dự án này được phát triển cho mục đích cá nhân/thương mại.

## 👨‍💻 Author

**Ductuongne**

---
