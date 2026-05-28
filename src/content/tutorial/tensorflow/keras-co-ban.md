---
title: 'TensorFlow Keras cơ bản: Phân loại ảnh với MNIST'
description: 'Hướng dẫn sử dụng TensorFlow và Keras để xây dựng mô hình học sâu đơn giản với ví dụ phân loại chữ số viết tay'
pubDate: 2026-05-28
category: 'tensorflow'
tags: ['tensorflow', 'keras', 'deep-learning', 'python', 'ai']
coverImage: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800'
---

## Giới thiệu

TensorFlow là thư viện mã nguồn mở của Google dành cho machine learning. **Keras** là API cao cấp chạy trên TensorFlow, giúp xây dựng và huấn luyện mô hình dễ dàng hơn.

Bài này sẽ hướng dẫn bạn xây dựng một mô hình phân loại chữ số viết tay từ bộ dữ liệu MNIST, từ A tới Z.

![TensorFlow + Keras](https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800)

---

## 1. Cài đặt

Trước tiên, cài TensorFlow:

```bash
pip install tensorflow
```

Kiểm tra cài đặt:

```python
import tensorflow as tf
print(tf.__version__)
```

Nếu thấy phiên bản (ví dụ `2.17.0`) là thành công.

---

## 2. Tải và khám phá dữ liệu

MNIST là bộ dữ liệu kinh điển gồm 70.000 ảnh chữ số viết tay (28x28 pixel, đen trắng).

```python
from tensorflow.keras.datasets import mnist

# Tải dữ liệu
(x_train, y_train), (x_test, y_test) = mnist.load_data()

# Kiểm tra kích thước
print(f'Train: {x_train.shape}, Test: {x_test.shape}')
# Output: Train: (60000, 28, 28), Test: (10000, 28, 28)
```

Mỗi ảnh là một mảng 28x28, giá trị pixel từ 0 đến 255.

![MNIST dataset](https://upload.wikimedia.org/wikipedia/commons/2/27/MnistExamples.png)

---

## 3. Tiền xử lý dữ liệu

Trước khi huấn luyện, cần chuẩn hoá dữ liệu:

```python
# Chuẩn hoá pixel về khoảng [0, 1]
x_train = x_train.astype('float32') / 255.0
x_test = x_test.astype('float32') / 255.0

# Reshape thêm chiều kênh màu (1 kênh grayscale)
x_train = x_train.reshape(-1, 28, 28, 1)
x_test = x_test.reshape(-1, 28, 28, 1)
```

Giải thích:
- Chia cho 255 để đưa giá trị pixel về [0, 1], giúp mô hình hội tụ nhanh hơn
- Reshape thêm chiều thứ 4 vì Keras yêu cầu đầu vào dạng `(số_lượng, cao, rộng, kênh)`

---

## 4. Xây dựng mô hình với Keras

Dùng Sequential API của Keras để xếp các layer tuần tự:

```python
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout

model = Sequential([
    # Layer tích chập thứ nhất
    Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
    MaxPooling2D((2, 2)),

    # Layer tích chập thứ hai
    Conv2D(64, (3, 3), activation='relu'),
    MaxPooling2D((2, 2)),

    # Làm phẳng và kết nối đầy đủ
    Flatten(),
    Dense(64, activation='relu'),
    Dropout(0.5),
    Dense(10, activation='softmax')  # 10 lớp (0-9)
])
```

### Giải thích kiến trúc

| Layer | Chức năng |
|-------|-----------|
| **Conv2D** | Trích xuất đặc trưng từ ảnh (cạnh, góc, đường nét) |
| **MaxPooling2D** | Giảm kích thước ảnh, giữ lại đặc trưng quan trọng |
| **Flatten** | Chuyển ma trận 2D thành vector 1D |
| **Dense** | Kết nối đầy đủ, học tổ hợp đặc trưng |
| **Dropout** | Bỏ ngẫu nhiên 50% neuron khi train, chống overfitting |
| **Softmax** | Xuất xác suất cho 10 lớp (tổng = 1) |

---

## 5. Compile mô hình

```python
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

model.summary()
```

- **optimizer**: Adam tự động điều chỉnh learning rate
- **loss**: sparse_categorical_crossentropy phù hợp với nhãn là số nguyên (0-9)
- **metrics**: theo dõi accuracy trong quá trình train

Kết quả `model.summary()` sẽ hiển thị kiến trúc và số tham số.

---

## 6. Huấn luyện

```python
history = model.fit(
    x_train, y_train,
    epochs=10,
    batch_size=128,
    validation_data=(x_test, y_test)
)
```

Quá trình train sẽ hiển thị:

```
Epoch 1/10
469/469 ━━━━━━━━━━━━━━━━━━━━ 12s 24ms/step - accuracy: 0.8872 - loss: 0.3784 - val_accuracy: 0.9841 - val_loss: 0.0512
Epoch 2/10
469/469 ━━━━━━━━━━━━━━━━━━━━ 10s 22ms/step - accuracy: 0.9823 - loss: 0.0582 - val_accuracy: 0.9875 - val_loss: 0.0402
...
Epoch 10/10
469/469 ━━━━━━━━━━━━━━━━━━━━ 10s 22ms/step - accuracy: 0.9928 - loss: 0.0238 - val_accuracy: 0.9910 - val_loss: 0.0272
```

Sau 10 epoch, độ chính xác trên tập kiểm tra đạt khoảng **99%**.

![Training curve](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800)

---

## 7. Đánh giá

```python
test_loss, test_acc = model.evaluate(x_test, y_test, verbose=0)
print(f'Độ chính xác trên tập test: {test_acc:.4f}')
# Output: Độ chính xác trên tập test: 0.9910
```

### Dự đoán một ảnh cụ thể

```python
import numpy as np

# Lấy ảnh đầu tiên từ tập test
image = x_test[0]
true_label = y_test[0]

# Thêm chiều batch (1, 28, 28, 1)
prediction = model.predict(np.expand_dims(image, axis=0))
predicted_label = np.argmax(prediction)

print(f'Thực tế: {true_label}, Dự đoán: {predicted_label}')
```

---

## 8. Trực quan hoá kết quả

Dùng matplotlib để xem ảnh và kết quả dự đoán:

```python
import matplotlib.pyplot as plt

# Hiển thị một số ảnh kèm dự đoán
fig, axes = plt.subplots(2, 5, figsize=(12, 6))
for i, ax in enumerate(axes.flat):
    ax.imshow(x_test[i].reshape(28, 28), cmap='gray')
    pred = np.argmax(model.predict(np.expand_dims(x_test[i], axis=0), verbose=0))
    ax.set_title(f'True: {y_test[i]}, Pred: {pred}')
    ax.axis('off')
plt.show()
```

![Kết quả dự đoán](https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800)

---

## 9. Lưu và tải mô hình

```python
# Lưu mô hình
model.save('mnist_classifier.keras')

# Tải lại sau
loaded_model = tf.keras.models.load_model('mnist_classifier.keras')
```

---

## 10. Lưu ý

- Nếu không có GPU, mô hình vẫn chạy trên CPU nhưng chậm hơn
- Có thể tăng accuracy bằng cách tăng epoch, thêm layer Conv2D, hoặc dùng data augmentation
- MNIST là dataset đơn giản. Khi làm việc với ảnh thực tế, cần tiền xử lý phức tạp hơn

## Tổng kết

Bạn vừa xây dựng xong một mô hình phân loại ảnh với TensorFlow và Keras:

1. Tải và khám phá dữ liệu MNIST
2. Tiền xử lý ảnh (chuẩn hoá, reshape)
3. Xây dựng CNN với Keras Sequential API
4. Compile và huấn luyện mô hình
5. Đánh giá và dự đoán
6. Lưu mô hình để dùng sau

Toàn bộ code mẫu có thể chạy trong một file Python duy nhất.

*Bài viết được cập nhật lần cuối ngày 28/05/2026.*
