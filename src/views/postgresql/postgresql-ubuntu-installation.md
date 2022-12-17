# Cài đặt postgresql trên ubuntu

Nguồn tham khảo: [Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-22-04-quickstart), [project-open](https://www.project-open.com/en/howto-postgresql-port-secure-remote-access)

### Bước 1: Update và cài đặt postgresql

- Cập nhật local package index

```bash
sudo apt update
```

- Cài postgresql kèm gói `-contrib` cài thêm các tính năng bổ sung

```bash
sudo apt install postgresql postgresql-contrib
```

### Bước 2: Sử dụng Postgresql role và database

- Chuyển qua user `postgres`

```bash
sudo -i -u postgres
```

- Chạy Pg prompt

```bash
psql
```

### Bước 3: Chạy và enable service Postgresql

```bash
sudo systemctl start postgresql.service
```

```bash
sudo systemctl enable postgresql.service
```

### Bước 4 (Optional): Tạo và expose database url

- Tạo mới một database và role. Sau đó cấp quyền của user cho database đó

```bash
postgres=# create database example_db encoding='UTF-8';
CREATE DATABASE
postgres=# create user example_user with password '123456';
CREATE ROLE
postgres=# grant all privileges on database example_db to example_user;
GRANT
```

- Tìm path của file `postgresql.conf`

```bash
sudo -u postgres psql -c 'SHOW config_file'
```

```bash
config_file
-----------------------------------------
 /etc/postgresql/14/main/postgresql.conf
```

- Sửa `listen_addresses` thành `*` để cho phép truy cập từ bất cứ host nào

```bash
#------------------------------------------------------------------------------
# CONNECTIONS AND AUTHENTICATION
#------------------------------------------------------------------------------

# - Connection Settings -

listen_addresses = '*'		# what IP address(es) to listen on;
					# comma-separated list of addresses;
					# defaults to 'localhost'; use '*' for all
					# (change requires restart)
port = 5432				# (change requires restart)
```

- Cấu hình authentication với `pg_hba.conf`file này sẽ cùng chung thư mục với file `postgresql.conf`. Có thể chạy lệnh sau để show path của file `pg_hba.conf`

```bash
sudo -u postgres psql -c 'SHOW hba_file'
```

- Thêm hai dòng này ở cuối file rồi lưu lại

```bash
host    all             all              0.0.0.0/0                       md5
host    all             all              ::/0                            md5
```

- Restart postgresql service để các thay đổi có hiệu lực

```bash
sudo systemctl restart postgresql.service
```