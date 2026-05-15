# 📚 PR Library API

A RESTful backend API for managing a digital library system built using **Node.js**, **Express.js**, and **MongoDB**.
This project includes secure authentication, cloud image upload support, validation, and modern backend security practices.

---

## 🚀 Features

- ⚡ Express.js REST API
- 🗄️ MongoDB Database Integration
- 🔐 JWT Authentication
- 🔒 Password Hashing with Bcrypt
- ☁️ Cloudinary Image Upload
- 📦 Multer File Upload Support
- 🛡️ Helmet Security Middleware
- ✅ Joi Validation
- 🌍 Environment Variable Configuration
- 🔄 Nodemon for Development

---

## 🛠️ Tech Stack

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication & Security

- JWT (JSON Web Token)
- Bcrypt
- Helmet

### File Upload

- Multer
- Cloudinary
- Multer Storage Cloudinary

---

# 📂 Project Structure

```bash
pr_library_api/
│
├── config/
│   └── db.js
│
├── middleware/
│   └── HttpError.js
│
├── routes/
│
├── controllers/
│
├── models/
│
├── .env
├── app.js
├── package.json
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/pr_library_api.git
```

---

## 2️⃣ Move to Project Folder

```bash
cd pr_library_api
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Create `.env` File

Create a `.env` file in the root directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
```

Environment variables are configured using dotenv.

---

# ▶️ Run Project

## Development Mode

```bash
npm run dev
```

## Production Mode

```bash
npm start
```

Scripts are defined in package.json.

---

# 🌐 API Base URL

```bash
http://localhost:5000
```

---

# 📌 Default Route

## GET `/`

### Response

```json
"Hello from server 🚀"
```

The root route is defined in the Express application.

---

# 🔒 Security Features

- Helmet middleware for securing HTTP headers
- JWT authentication support
- Password encryption using bcrypt
- Centralized error handling middleware

---

# 📦 Installed Dependencies

## Main Dependencies

```json
{
  "bcrypt": "^6.0.0",
  "cloudinary": "^1.41.3",
  "cors": "^2.8.6",
  "dotenv": "^17.4.2",
  "express": "^5.2.1",
  "helmet": "^8.1.0",
  "joi": "^18.2.1",
  "jsonwebtoken": "^9.0.3",
  "mongoose": "^9.6.2",
  "multer": "^2.1.1",
  "multer-storage-cloudinary": "^4.0.0"
}
```

Dependencies are listed in package.json.

---

# 🧪 Testing API

You can test APIs using:

- Postman
- Thunder Client
- Insomnia

---

# 📸 Add Postman Screenshots

<img width="1920" height="1080" alt="Screenshot 2026-05-14 153710" src="https://github.com/user-attachments/assets/ddb80ae8-6935-4773-947d-187ad89c8639" />

<img width="1920" height="1080" alt="Screenshot 2026-05-14 153718" src="https://github.com/user-attachments/assets/c666f399-eb7d-4c67-b863-bd4a50934e16" />

<img width="1920" height="1080" alt="Screenshot 2026-05-14 153726" src="https://github.com/user-attachments/assets/3931a564-6c89-401b-82ad-71f77631de01" />

<img width="1920" height="1080" alt="Screenshot 2026-05-14 153732" src="https://github.com/user-attachments/assets/7d7b2575-808e-4d11-930a-1d6c86ae267e" />

<img width="1920" height="1080" alt="Screenshot 2026-05-14 153737" src="https://github.com/user-attachments/assets/1267f373-345e-454c-b2dd-3031ea2318ee" />

<img width="1920" height="1080" alt="Screenshot 2026-05-14 153747" src="https://github.com/user-attachments/assets/9749c0c0-c9df-4449-89c7-998102975dc5" />

<img width="1920" height="1080" alt="Screenshot 2026-05-14 153753" src="https://github.com/user-attachments/assets/d8afb036-edb9-4746-9275-b173bf31f5c2" />

<img width="1920" height="1080" alt="Screenshot 2026-05-14 153803" src="https://github.com/user-attachments/assets/84fd97b8-e762-424d-bc56-54816785d2db" />

<img width="1920" height="1080" alt="Screenshot 2026-05-14 153810" src="https://github.com/user-attachments/assets/ace553d9-db64-4817-878a-36034a6c0f1d" />

<img width="1920" height="1080" alt="Screenshot 2026-05-14 153818" src="https://github.com/user-attachments/assets/7032e8f3-0375-4fe9-a4c5-ac168c2c8b8d" />

<img width="1920" height="1080" alt="Screenshot 2026-05-15 113205" src="https://github.com/user-attachments/assets/1e07620b-7814-454a-bf91-4c6a961d31ae" />

<img width="1920" height="1080" alt="Screenshot 2026-05-15 113205" src="https://github.com/user-attachments/assets/a106eadb-bcb6-459a-865d-dfc7407e95d6" />

<img width="1920" height="1080" alt="Screenshot 2026-05-15 113309" src="https://github.com/user-attachments/assets/b7508e13-ffc1-49f2-bd0b-79e42c64c166" />

<img width="1920" height="1080" alt="Screenshot 2026-05-15 113338" src="https://github.com/user-attachments/assets/2b7f8d4a-4ca0-4367-8814-ac31f26412bf" />

<img width="1920" height="1080" alt="Screenshot 2026-05-15 113351" src="https://github.com/user-attachments/assets/4a8ed5ea-6230-46c0-bd69-652ae9916304" />

---

# 🚧 Future Improvements

- Role-Based Access Control
- Book Borrowing System
- Admin Dashboard
- Pagination & Filtering
- Swagger API Documentation
- Unit Testing

---

# 👨‍💻 Author

Developed by Amit Dabhi

---

# 📄 License

This project is licensed under the ISC License.

---

# ⭐ Support

If you like this project:

- Give it a ⭐ on GitHub
- Fork the repository
- Contribute to improve it

---

# 📥 Package Information

The project uses ES Modules configuration with `"type": "module"` in package.json.
