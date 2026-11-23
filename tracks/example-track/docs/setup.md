<!--
Trang "Cài đặt" của track (tuỳ chọn). Site hiện nó ở tab "Cài đặt" của trang track và nhắc
người vừa enroll mở nó trước bài đầu tiên. Markdown thuần: KHÔNG có phần đầu `---` và không cần
tiêu đề `#` (site tự đặt tiêu đề). Track không cần cài gì thì xóa file này.
Đặc tả: CONTENT-SPECIFICATION §3.1b trong learning-hub-docs.
-->

Làm các bước dưới đây **một lần**, trước bài học đầu tiên. Mất khoảng 15 phút.

<!--
Hai mục "Chuẩn bị chung" và "Hỏi ở đâu" là bắt buộc với mọi track (TEACHING.md, tiêu chí T5 và T6).
Giữ nguyên, chỉ sửa tên mentor và kênh. Phần cài công cụ riêng của track viết ở mục 2.
-->

## 1. Chuẩn bị chung

**Terminal.** Trên Windows, track này dùng **PowerShell** (mở Start, gõ "PowerShell"). macOS và Linux dùng **Terminal**. Lệnh nào khác nhau giữa hai loại, bài học sẽ ghi cả hai.

**Git.**

- **Windows**: tải [Git for Windows](https://git-scm.com/download/win), giữ các lựa chọn mặc định.
- **macOS**: chạy `xcode-select --install` trong Terminal.
- **Ubuntu**: `sudo apt install git`.

Rồi khai báo tên và email. Git ghi chúng vào mỗi commit; thiếu thì commit báo lỗi `Author identity unknown`. Dùng email của tài khoản GitHub:

```bash
git config --global user.name "Tên của bạn"
git config --global user.email "email-github-cua-ban@example.com"
```

**Tài khoản GitHub** ([đăng ký](https://github.com/signup)), và tham gia **Discord của CLB** để hỏi bài.

**Mấy lệnh khác nhau trên Windows** (gặp trong bài thì quay lại đây):

| Việc | macOS / Linux | Windows PowerShell |
| --- | --- | --- |
| gọi HTTP | `curl` | `curl.exe` (gõ `curl` sẽ ra lệnh khác) |
| chạy Python | `python3` | `python` hoặc `py` |
| đặt biến môi trường | `export X=1` | `$env:X = "1"` |

## 2. Cài công cụ của track

Ghi từng bước cho mỗi hệ điều hành mà thành viên hay dùng. Ví dụ: Docker Desktop, Node.js, PostgreSQL.

## 3. Tự kiểm tra

Cho một lệnh để thành viên tự biết đã cài đúng, kèm kết quả mong đợi:

```bash
git --version
git config --global user.name
```

Thấy dòng `git version 2.x` và tên của bạn là xong.

## 4. Khi bị lỗi

| Lỗi | Cách sửa |
| --- | --- |
| `git: command not found` | Mở lại Terminal sau khi cài; trên Windows, chọn "Git from the command line" khi cài |
| `Author identity unknown` khi commit | Chạy hai lệnh `git config` ở mục 1 |

## 5. Hỏi ở đâu

**Không có câu hỏi nào là ngớ ngẩn.** Mentor viết track này vì muốn bạn hỏi. Câu bạn đang thắc mắc, chắc chắn có người khác cũng đang thắc mắc.

- **Hỏi chung:** kênh Discord của track trên server CLB. Hỏi ở đây thì người khác cũng học được từ câu trả lời.
- **Hỏi riêng:** ngại hỏi trước mọi người thì nhắn riêng (DM) cho mentor trên Discord: **@ten-mentor** (sửa thành mentor của track). Hỏi riêng cũng hoàn toàn bình thường.
- **Sau khi nộp bài:** trả lời ngay trong mục "Trao đổi với mentor" dưới nhận xét của bài.

Mọi người trong CLB theo [Quy tắc ứng xử](https://github.com/hcmute-dsc/.github/blob/master/CODE_OF_CONDUCT.md): không ai được chê câu hỏi của bạn, và câu hỏi riêng được giữ kín. Bị đối xử không đúng thì nhắn riêng Ban chủ nhiệm trên Discord.

Khi hỏi, gửi kèm: bạn đang ở bài nào, lệnh đã chạy, và ảnh chụp lỗi. Nếu lỗi có token hay webhook URL thì **che phần đó** trước khi gửi.
