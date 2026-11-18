---
uid: 00000000-0000-4000-8000-000000000102
slug: writing-lessons
title: "Viết một bài học"
estimatedMinutes: 15
objectives:
  - "Dùng được tiêu đề, khối code, bảng và ảnh trong bài học"
# Bài cần học trước, dạng <track>/<module>/<slug>
prerequisites:
  - example-track/getting-started/welcome
authors: [github:TienNHM]
---

# Viết một bài học

Bài học là file Markdown. Phần đầu (giữa hai dòng `---`) là thông tin của bài; phần sau là nội dung.

## Khối code

Luôn ghi ngôn ngữ để được tô màu:

```python
print("Xin chào DSC")
```

## Bảng

| Lệnh | Ý nghĩa |
| --- | --- |
| `git add` | đưa thay đổi vào vùng chờ |
| `git commit` | tạo commit |

## Ảnh

Đặt ảnh trong `assets/` của track, dùng đường dẫn tương đối, mỗi ảnh tối đa 500 KB:

```markdown
![Sơ đồ](../../../assets/diagram.png)
```

## Lưu ý

- Không dùng `<script>`, `<iframe>` hay `onclick=` ngoài khối code.
- Mọi câu lệnh trong bài phải chạy được: thử lại trước khi mở PR.
- Nội dung lấy từ nguồn khác phải ghi nguồn và tác giả.
