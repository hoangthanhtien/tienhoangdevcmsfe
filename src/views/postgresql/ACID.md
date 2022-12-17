# ACID trong database managment

Nguồn: [Wikipedia](https://en.wikipedia.org/wiki/Isolation_(database_systems)), [Geeksforgeeks](https://www.geeksforgeeks.org/acid-properties-in-dbms/)

![https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191121102921/ACID-Properties.jpg](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191121102921/ACID-Properties.jpg)

## [Atomicity - Tính nguyên tử](https://en.wikipedia.org/wiki/ACID#Atomicity)

Các transaction trong DB thường bao gồm từ nhiều statement. Atomicity đảm bảo rằng mỗi transaction sẽ được coi như một unit độc lập, khi transaction được thực thi thì nó phải thành công hoàn toàn, hoặc fail hoàn toàn (Khi fail thì phải có khả năng rollback và DB sẽ quay về trạng thái trước khi thực thi transaction đó)

Ví dụ: `A` có 100k trong tài khoản ngân hàng. `A` thực hiện một transaction: chuyển 50k tới tài khoản ngân hàng của `B` với các statement:

1. Trừ 50k trong tài khoản của `A`
2. Cộng thêm 50k vào trong tài khoản của `B`
3. Kết thúc transaction

Khi transaction đó vừa thực thi xong statement 1 thì có lỗi xảy ra. Để đảm bảo tính `Atomicity` thì phải có phương án rollback lại để cộng lại 50k vào tải khoản của `A`.

Atomicity phải đảm bảo việc rollback trong tất cả các trường hợp fail:

- failures
- errors
- crashes

## **Consistency - Tính bất biến**

Tính chất Consistency đảm bảo rằng một transaction chỉ có thể đưa DB từ trạng thái ổn định này qua trạng thái ổn định khác, đảm bảo tính bất biến của database. Bất cứ data nào được write vào database phải tuân theo các `constrain`, `cascade`, `trigger` được đặt ra từ trước. Điều này giúp loại bỏ nguy cơ xảy ra lỗi bởi các transaction không hợp lệ.

## Isolation - Tính độc lập

Các transaction thường được thực thi đồng thời (Ví dụ trong một thời điểm, có thể có nhiều transaction cùng ghi dữ liệu vào database). Isolation đảm bảo rằng việc thực thi đồng thời các transaction sẽ giữ DB ở trạng thái giống như khi thực hiện các transaction đó một cách tuần tự. Để đạt được Isolation, sẽ cần sử dụng hợp lý concurrency control. Tuỳ thuộc vào từng mức isolation level mà tác động của nó lên các `incomplete transaction` có thể khác nhau.

### Concurrency control

******************************Read phenomena:******************************

- Dirty reads: Xảy ra khi một transaction nhận được một row đã được update bởi một transaction chưa được commit khác (incomplete transaction)
    
    ![Untitled](ACID/Untitled.png)
    
- Non-repeatable reads: Xảy ra khi một transaction thực hiện query trên một row hai lần và giữa hai lần đó, row đó được update bởi một transaction được commit ở giữa
    
    ![Untitled](ACID/Untitled%201.png)
    
- Phantom reads: Xảy ra khi một transaction nhận được một tập các row khi thực thi hai lần. Và giữa hai lần đó có một transaction thực thi làm thay đổi (thêm hoặc bớt row) số lượng row có trong tập đó
    
    ![Untitled](ACID/Untitled%202.png)
    

****Isolation levels:****

- Serializable: Đây là isolation level cao nhất, sẽ chiếm cả `read locks` và `write locks` và release khi kết thúc transaction. `range-locks` cũng bị chiếm khi một thực thi câu lệnh query `SELECT` kèm `WHERE` clause, điều này giúp tránh được `phantom reads`
- Repeatable reads: `read locks` và `write locks` cũng bị chiếm cho tới khi transaction kết thúc giống Serializable, tuy nhiên `range-locks` không được quản lý nên có khả năng xảy ra `phantom reads`
- Read committed: Sẽ chỉ chiếm `write-locks` cho tới khi transaction kết thúc, không chiếm `read locks` và `range-locks` nên có thể xảy ra `non-repeatable reads` và `phantom reads`. Đây là isolation level mặc định của nhiều DBMS
- Read uncommitted: Isolation level thấp nhất, không chiếm locks nào cả khi thực thi transaction, `dirty reads` được cho phép

![Untitled](ACID/Untitled%203.png)
