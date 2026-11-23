# Track mẫu

Repo nội dung của **một track** trên [HCMUTE DSC Learning Hub](https://learn.hcmute-dsc.io.vn). Mỗi track một repo `hcmute-dsc/learning-hub-track-<slug>`, cùng tạo từ template [`learning-hub-track-template`](https://github.com/hcmute-dsc/learning-hub-track-template) ([ADR-10](https://github.com/hcmute-dsc/learning-hub-docs/blob/main/docs/product/DECISIONS.md#adr-10--mỗi-track-một-repo-learning-hub-content-thành-registry)).

## Cấu trúc

```
tracks/example-track/        # đúng MỘT thư mục, tên = slug của track
  track.yaml                 # thông tin track + danh sách chương
  docs/setup.md              # tuỳ chọn: trang "Cài đặt" (cài công cụ, tự kiểm tra bài)
  docs/resources.md          # tuỳ chọn: trang "Tài liệu thêm"
  glossary.yaml              # tuỳ chọn: trang "Từ vựng" (chữ tiếng Anh, chữ đầy đủ, nghĩa đen)
  assets/                    # ảnh (≤ 500 KB/ảnh)
  modules/01-getting-started/
    module.yaml              # danh sách bài học và bài tập của chương
    lessons/*.md             # bài học: thông tin ở đầu file + Markdown
    exercises/<slug>/
      exercise.yaml          # loại bài, độ khó, đề/đáp án (quiz), checklist, rubric
      statement.md           # đề bài
      mentor-notes.md        # tuỳ chọn: ghi chú cho mentor khi review (công khai, không ghi đáp án)
tools/init-track.mjs         # chạy một lần sau khi tạo repo từ template
```

Mỗi file mẫu có comment giải thích từng trường. Viết bài theo [chuẩn dạy dễ hiểu](TEACHING.md) (6 tiêu chí rút ra từ góp ý của người học). Đặc tả đầy đủ: [CONTENT-SPECIFICATION](https://github.com/hcmute-dsc/learning-hub-docs/blob/main/docs/product/CONTENT-SPECIFICATION.md).

## Tạo track mới (cho mentor)

Hướng dẫn đầy đủ, kể cả phần của Ban chủ nhiệm và các lỗi thường gặp: [NEW-TRACK.md](https://github.com/hcmute-dsc/learning-hub-docs/blob/main/docs/ops/NEW-TRACK.md). Dùng agent (Claude Code…) thì gọi skill `new-track`.

1. Mở issue "Đề xuất bài mới hoặc lộ trình mới" trong [learning-hub-content](https://github.com/hcmute-dsc/learning-hub-content/issues/new/choose) để Ban chủ nhiệm biết và tạo repo cho bạn.
2. Ban chủ nhiệm tạo repo `hcmute-dsc/learning-hub-track-<slug>` bằng nút **Use this template** của repo này, cấp quyền cho bạn.
3. Clone repo về, rồi chạy (cần Node 22):

   ```bash
   node tools/init-track.mjs <slug> "<Tên track>" <github-của-bạn>
   ```

   Lệnh này đổi tên thư mục, slug, tên track, người phụ trách và sinh `uid` mới cho mọi bài.
4. Đọc [TEACHING.md](TEACHING.md). Sửa `track.yaml`, viết bài học và bài tập theo các file mẫu (bài `03-teaching-standard` là ví dụ đạt chuẩn). Xóa những bài mẫu không dùng (nhớ xóa cả tên trong `module.yaml`).
5. Kiểm tra trên máy, rồi mở Pull Request theo [CONTRIBUTING.md](CONTRIBUTING.md). CI `validate` phải xanh.
6. **Đưa lên site:** mở PR vào `learning-hub-content`, đổi `commit` của track trong `tracks.yaml` sang commit mới nhất trên `main` của repo này. Ban chủ nhiệm duyệt PR đó rồi publish.

## Kiểm tra trên máy

```bash
git clone https://github.com/hcmute-dsc/learning-hub ../learning-hub
cd ../learning-hub && npx -y pnpm@9.15.4 install --filter @hub/content... && npx -y pnpm@9.15.4 --filter @hub/content build && cd -
node ../learning-hub/packages/content/dist/cli.js .
```
