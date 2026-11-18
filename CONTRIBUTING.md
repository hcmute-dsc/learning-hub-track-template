# Đóng góp cho track

Cảm ơn bạn! Track này được nhiều thế hệ thành viên CLB cùng viết và sửa, nên hãy giữ file dễ đọc và có nguồn rõ ràng.

## Quy trình

1. **Có issue trước.** Dùng mẫu "Lỗi nội dung" hoặc "Đề xuất" trong repo này. Tự gán mình, chuyển Status = In progress trên [Project #1](https://github.com/orgs/hcmute-dsc/projects/1). Tìm issue có sẵn trước khi tạo mới.
2. **Tạo nhánh** `<loại>/<số issue>-<mô-tả-ngắn>` từ `main` mới nhất (ví dụ `fix/5-day10-answer`, `feat/6-module-2`), hoặc fork. Sửa hoặc thêm file theo [đặc tả](https://github.com/hcmute-dsc/learning-hub-docs/blob/main/docs/product/CONTENT-SPECIFICATION.md).
3. **Chạy validator** trên máy (lệnh ở [README](README.md#kiểm-tra-trên-máy)).
4. **Commit** dạng `<slug track>: <tóm tắt>`, thân commit ghi lý do và `Refs #<số>`.
5. **Mở Pull Request** theo mẫu, dòng đầu `Closes #<số>`. CI `validate` phải xanh.
6. **Review:** maintainer của track (`maintainers` trong `track.yaml`, xem `CODEOWNERS`) kiểm tra kiến thức đúng, câu lệnh chạy được, văn phong dễ hiểu, rồi **squash merge**. Không đẩy thẳng lên `main`.
7. **Publish:** merge vào đây chưa lên site. Mở PR vào [`learning-hub-content`](https://github.com/hcmute-dsc/learning-hub-content) để đổi `commit` của track trong `tracks.yaml`. Ban chủ nhiệm duyệt rồi publish. Issue chỉ Done khi nội dung đã lên site.

Quy trình chung của dự án (vòng đời bug, review, Definition of Done): [WORKFLOW.md](https://github.com/hcmute-dsc/learning-hub-docs/blob/main/docs/ops/WORKFLOW.md).

## Quy tắc quan trọng

- **`uid` không bao giờ đổi.** Nó là khóa của bài trong database; đổi `uid` làm mất tiến độ của người học. Đổi tên, `slug` hay dời thư mục thì được, giữ nguyên `uid`.
- Bài mới cần `uid` mới: `node -e "console.log(crypto.randomUUID())"`.
- Repo chỉ có **một** thư mục `tracks/<slug>/`, tên trùng `slug` trong `track.yaml`.
- Mỗi bài học và bài tập phải có tên trong `module.yaml`, nếu không sẽ bị lỗi "orphan".
- Không dùng HTML chạy được code (`<script>`, `<iframe>`, `onclick=`…) ngoài khối code.
- Lời giải và test ẩn của bài `code` **không** đặt ở repo công khai này (đặc tả §3.6, §3.8).
- Nội dung lấy từ nguồn khác: ghi nguồn và tác giả trong PR, và trong `track.yaml` (`source`) nếu là cả track.
