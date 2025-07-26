# Employee Management CRUD Web App

This is a simple full-stack backend-only application built using **Node.js**, **Express**, and **MongoDB** to perform CRUD (Create, Read, Update, Delete) operations on employee data.

## 🛠️ Features

- Add new employee details
- View all employees
- View a single employee by ID
- Update employee information
- Delete employee records

## 📁 Project Structure

```
employee-crud-app/
├── server.js
├── config/
│   └── db.js
├── models/
│   └── Employee.js
└── routes/
    └── employees.js
```

## 🧪 Installation & Running

1. Clone the repo or download the ZIP
2. Run `npm install` to install dependencies
3. Make sure MongoDB is running locally on `mongodb://localhost:27017/employeeDB`
4. Run the server:
   ```bash
   node server.js
   ```
5. Use Postman or browser to test the API at:
   - `GET    /api/employees`
   - `POST   /api/employees`
   - `GET    /api/employees/:id`
   - `PUT    /api/employees/:id`
   - `DELETE /api/employees/:id`

## 🔗 Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

## 📄 License

MIT License