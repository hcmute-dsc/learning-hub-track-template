# Chuẩn dạy dễ hiểu

Chuẩn này đến từ góp ý của thành viên mới sau **Git & GitHub Study Jam 2026** ([learning-hub-track-template#7](https://github.com/hcmute-dsc/learning-hub-track-template/issues/7)). Người học không than bài khó. Họ than ba điều: học lệnh mà không hiểu chữ, phải hỏi AI mới hiểu bài, và ngại hỏi người dạy.

Mỗi bài học và bài tập trong track phải đạt **6 tiêu chí** dưới đây. Người review kiểm tra theo checklist trong mẫu Pull Request. Bài mẫu áp dụng đủ 6 tiêu chí: [`03-teaching-standard.md`](tracks/example-track/modules/01-getting-started/lessons/03-teaching-standard.md).

| # | Tiêu chí | Một câu để nhớ |
| --- | --- | --- |
| T1 | Từ vựng | Chữ tiếng Anh nào mới cũng được dịch nghĩa, không chỉ nói tác dụng |
| T2 | Giải thích trước khi thực hành | Bài tập chỉ dùng những gì bài học **đã** giải thích |
| T3 | Mô hình tư duy | Khái niệm cốt lõi có sơ đồ hoặc bảng so sánh, kèm ví dụ |
| T4 | Quy trình thực tế | Nói rõ ngoài đời, khi làm nhóm, người ta dùng nó thế nào |
| T5 | Cài đặt | Mọi thứ cần cài, cần cấu hình đều có trong `docs/setup.md`, làm trước khi cần |
| T6 | Hỏi bài | Người học biết hỏi ở đâu, **kể cả hỏi riêng**, và biết hỏi là bình thường |

## T1. Từ vựng

**Yêu cầu.** Khi một lệnh, cờ (flag), từ khóa hay thuật ngữ tiếng Anh xuất hiện **lần đầu**, ghi:

1. chữ đầy đủ nếu là viết tắt (`ps` = **p**rocess **s**tatus);
2. nghĩa đen bằng tiếng Việt (init = initialize = *khởi tạo*);
3. một câu nói nó làm gì.

Mỗi bài có hộp **"Từ mới trong bài"** liệt kê 3–7 từ bài đó giới thiệu. Không viết hộp bằng tay: khai báo từ như mục "Khai báo từ vựng" bên dưới, site tự tạo hộp.

| Sai | Đúng |
| --- | --- |
| "`git init` tạo repo." | "`init` là viết tắt của *initialize*, nghĩa là *khởi tạo*. `git init` tạo thư mục ẩn `.git`, từ đó Git bắt đầu theo dõi thư mục này." |
| "`docker ps -a` để xem container." | "`ps` = *process status* (trạng thái tiến trình); `-a` = *all*. `docker ps -a` liệt kê mọi container, kể cả đã dừng." |

**Giữ tiếng Anh cho thuật ngữ.** Viết "commit", không viết "cam kết". Người học sẽ gặp chữ "commit" ở mọi nơi khác. Chỉ thêm nghĩa tiếng Việt để họ hiểu chữ đó.

**Tự kiểm tra:** đọc lại bài như người chưa biết tiếng Anh chuyên ngành. Chữ nào bạn phải tra từ điển thì chưa đạt.

**Khai báo từ vựng** ([learning-hub#106](https://github.com/hcmute-dsc/learning-hub/issues/106)):

1. Ghi mỗi từ một lần trong `tracks/<slug>/glossary.yaml`: `term`, `expansion` (chữ đầy đủ), `literal` (nghĩa đen), `meaning`, `example`, `see`. Mẫu: `tracks/example-track/glossary.yaml`.
2. Trong front matter của bài, liệt kê từ bài đó giới thiệu: `terms: [repository, init, commit]`.
3. Viết từ đó trong **câu văn** ở lần đầu nó xuất hiện, không chỉ trong khối code.

Site làm phần còn lại: hộp "Từ mới trong bài" thu gọn ở cuối bài để ôn lại, gạch chân chấm và chú thích ở lần đầu từ xuất hiện (chạm vào là thấy nghĩa), và tab **Từ vựng** của track (A–Z, ô tìm, "Học ở bài …"). Validator báo lỗi nếu một từ trong `terms:` không có trong `glossary.yaml`. Mẫu đầy đủ: bài `03-teaching-standard.md`.

## T2. Giải thích trước khi thực hành

**Yêu cầu.**

- Mỗi lệnh hay khái niệm được giải thích **trước** khi bài tập, quiz hay dự án dùng nó. Giải thích gồm: nó làm gì, vì sao cần, chạy xong thì cái gì thay đổi.
- Sau mỗi khối lệnh có phần **"Đọc hiểu"**: giải thích từng dòng, từng cờ.
- Bài tập gắn với bài học nào (`lesson:` trong `exercise.yaml`) thì chỉ dùng kiến thức tới bài đó.
- Không có bài "ôn tập tổng hợp" chỉ toàn lệnh. Ôn tập thì nhắc lại *vì sao*, không chỉ *gõ gì*.
- Cần kiến thức của track khác thì giải thích ngắn **tại chỗ** (3–5 dòng), rồi mới link sang track kia để đọc thêm.

| Sai | Đúng |
| --- | --- |
| Bài 1 dạy `run`, bài tập của bài 1 yêu cầu thêm `logs`, `exec` | Bài tập chỉ dùng `run`; `logs`, `exec` để cho bài tập của bài 2 |
| "Dùng secret như ở track Discord." | Ba dòng: secret là gì, tạo ở đâu, dùng trong `env:` thế nào; rồi link track Discord |

**Tự kiểm tra:** làm thử bài tập chỉ với những gì bài học đã viết, không tra Google, không hỏi AI. Bị kẹt chỗ nào thì bài học thiếu chỗ đó.

## T3. Mô hình tư duy

**Yêu cầu.** Khái niệm cốt lõi của track (những thứ có **trạng thái** hoặc dễ nhầm với nhau) phải có:

- **sơ đồ** (Mermaid hoặc ảnh), với mỗi mũi tên ghi lệnh làm chuyển trạng thái;
- **bảng so sánh** khi có hai thứ dễ nhầm;
- **một ví dụ đi qua từng bước**: chạy lệnh, xem kết quả thật, chỉ ra trạng thái đã đổi.

Ví dụ những thứ cần mô hình: trạng thái file trong Git (untracked → staged → committed → modified), vòng đời container (created → running → exited → removed), máy mình hay runner hay container, lúc build hay lúc chạy, các nơi một secret có thể nằm.

**Tự kiểm tra:** hỏi một người mới "X khác Y chỗ nào?". Nếu họ không trả lời được sau khi đọc bài thì cần thêm sơ đồ hoặc bảng.

## T4. Quy trình thực tế

**Yêu cầu.** Mỗi chương có ít nhất một đoạn **"Ngoài thực tế"**:

- khi làm nhóm hoặc ở công ty, người ta dùng nó thế nào. Ví dụ: tạo nhánh → mở PR → CI chạy → review → merge → tự deploy;
- vì sao làm vậy, và bỏ bước đó thì chuyện gì xảy ra.

Dự án cuối track nên có ít nhất một lần làm theo quy trình nhóm: nộp bằng PR, hoặc review PR của bạn khác.

**Tự kiểm tra:** người học xong chương có trả lời được câu "ở công ty, việc này ai làm, lúc nào" không?

## T5. Cài đặt

**Yêu cầu.** `docs/setup.md` có đủ mọi thứ track cần, theo thứ tự làm, cho Windows, macOS và Linux. Lấy hai mục **"Chuẩn bị chung"** và **"Hỏi ở đâu"** từ [`docs/setup.md` mẫu](tracks/example-track/docs/setup.md), rồi thêm phần riêng của track.

Những chỗ hay bị quên:

- Git đã cài và đã chạy `git config --global user.name` / `user.email`;
- tài khoản (GitHub, Discord, Docker Hub…) và quyền cần có;
- chọn terminal: trên Windows, ghi rõ dùng PowerShell hay Git Bash, và viết lệnh cho đúng loại đó;
- lệnh khác nhau giữa các hệ điều hành:
  - `curl` trong PowerShell 5.1 là một lệnh khác, nên dùng `curl.exe`;
  - `python` hay `python3`;
  - Windows không có sẵn `openssl`;
  - `export X=1` (bash) hay `$env:X = "1"` (PowerShell).

**Tự kiểm tra:** cài từ đầu trên một máy (hoặc tài khoản người dùng) mới, chỉ theo `docs/setup.md`. Thiếu bước nào thì thêm bước đó.

## T6. Hỏi bài

**Yêu cầu.**

- `docs/setup.md` có mục **"Hỏi ở đâu"**: kênh chung, **tên mentor để nhắn riêng**, và một câu mời hỏi kiểu "không có câu hỏi nào là ngớ ngẩn".
- Bảng "Khi bị lỗi" của mỗi bài kết thúc bằng một dòng nhắc hỏi mentor, kể cả hỏi riêng.
- Bài tập yêu cầu đăng công khai (ảnh chụp, link) thì cho phép **gửi riêng cho mentor** thay vì đăng công khai.
- Lời giải để mở sau ("Đáp án") có thêm câu: "Đọc đáp án vẫn chưa hiểu? Nhắn mentor, đừng chỉ hỏi AI."
- Track có secret (webhook URL, token) thì dạy cách **che** secret khi gửi lỗi, để người học không sợ đến mức không dám hỏi.

- Mục "Hỏi ở đâu" link tới [Quy tắc ứng xử](https://github.com/hcmute-dsc/.github/blob/master/CODE_OF_CONDUCT.md) của CLB: câu hỏi cơ bản được chào đón và câu hỏi riêng được giữ kín.

**Vì sao:** người mới ngại hỏi trước đám đông. Họ hỏi bạn bè trong nhóm riêng hoặc hỏi AI, và mentor không biết bài nào đang khó.

**Tự kiểm tra:** một người mới, bị kẹt ở bất kỳ bài nào, có biết trong 10 giây phải nhắn ai không?
