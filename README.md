
# CRUD Backend Service

A simple Node.js backend that provides full **CRUD** (Create, Read, Update, Delete) functionality using **MongoDB** and **Mongoose**.  
Perfect for learning REST API development.

---

## 📦 Tech Stack
- **Node.js** – Backend runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **Postman** – API testing

---

## 🚀 Features
- Create a new item
- Retrieve all items
- Retrieve single item by ID
- Update existing item
- Delete item
- Validation & error handling

---

## 📂 Folder Structure
```

project-root/
│
├── config/
│   └── db.js
├── controllers/
│   └── itemController.js
├── models/
│   └── itemModel.js
├── routes/
│   └── itemRoutes.js
├── server.js
├── package.json
├── .env
└── README.md

````

---

## ⚙️ Installation

1. **Clone repository**
```bash
git clone https://github.com/YOUR_USERNAME/crud-backend-service.git
cd crud-backend-service
````

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**
   Create a `.env` file:

```
MONGO_URI=your_mongo_connection_string
```

4. **Run in development mode**

```bash
npm run dev
```

5. **Open your browser or Postman**
   Go to: <br>
   [http://localhost:3000](http://localhost:3000) – You should see **"server is running"**.

---

## 📌 API Endpoints

| Method | Endpoint         | Description           |
| ------ | ---------------- | --------------------- |
| POST   | `/api/items`     | Create new item       |
| GET    | `/api/items`     | Get all items         |
| GET    | `/api/items/:id` | Get single item by ID |
| PUT    | `/api/items/:id` | Update item by ID     |
| DELETE | `/api/items/:id` | Delete item by ID     |

---

## 🧪 Example Request (Create Item)

**POST** `/api/items`

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "type": "personal"
}
```

**Response**:

```json
{
  "_id": "689f2e56ef06d92b0d0ad199",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "type": "personal",
  "createdAt": "2025-08-15T12:55:50.671Z",
  "updatedAt": "2025-08-15T12:55:50.671Z",
  "__v": 0
}
```

---

## 📝 License
This project is licensed under the MIT License — anybody can use, modify, and distribute it freely.

---


