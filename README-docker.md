# TypeORM with MySQL Docker Setup

## Cách khởi chạy MySQL Database

### 1. Khởi động MySQL container
```bash
# Khởi động MySQL database
docker-compose up -d

# Xem logs để kiểm tra
docker-compose logs mysql

# Kiểm tra container đang chạy
docker ps
```

### 2. Kết nối đến database
Thông tin kết nối đã được cấu hình trong `data-source.ts`:
- **Host**: localhost
- **Port**: 3306
- **Database**: test
- **Username**: test
- **Password**: test

### 3. Chạy ứng dụng TypeORM
```bash
npm run start
```

### 4. Các lệnh Docker hữu ích

```bash
# Dừng container
docker-compose down

# Dừng và xóa volumes (reset database)
docker-compose down -v

# Kết nối vào MySQL shell
docker exec -it typeorm_mysql mysql -u test -p test

# Xem logs real-time
docker-compose logs -f mysql
```

### 5. Cấu trúc Database
- Database sẽ tự động tạo bảng `user` từ Entity User.ts
- Có sẵn bảng `health_check` để test kết nối

### Troubleshooting
- Nếu port 3306 đã được sử dụng, thay đổi trong docker-compose.yml: `"3307:3306"`
- Nếu lỗi authentication, restart container: `docker-compose restart mysql`
