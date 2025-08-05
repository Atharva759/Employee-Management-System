
# 🧑‍💼 Employee Management System

A full-stack Employee Management System built using **React**, **Spring Boot**, and **PostgreSQL**. This application provides a complete solution for managing employee data through a RESTful API with full CRUD (Create, Read, Update, Delete) operations. API documentation is integrated using **Swagger UI**.

---

## 🔧 Tech Stack

### 🖥️ Frontend
- **React** 
- **TailwindCSS**

### ⚙️ Backend
- **Spring Boot** (RESTful API)
- **Swagger UI** (OpenAPI Documentation)

### 🛢️ Database
- **PostgreSQL**

---

## 🚀 Features

- Create, Read, Update, Delete employee records
- RESTful API design
- Interactive API documentation via Swagger UI
- Frontend integrated with backend using Axios
- Environment-based configuration

---

## 🗂️ Project Structure
```
employee-management-system/
│
├── backend/                           # Spring Boot project
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/employeesystem/
│   │   │   │   ├── controller/        # REST controllers
│   │   │   │   ├── entity/            # JPA entities
│   │   │   │   ├── repository/        # Spring Data JPA interfaces
│   │   │   │   └── EmployeeSystemApplication.java  # Main class
│   │   │   └── resources/
│   │   │       ├── application.properties  # DB and server config
│   │   │       └── static/             # Optional static files
│   ├── pom.xml                         # Maven dependencies
│   └── README.md
│
├── frontend/                          # React project
│   ├── public/                        # Static files (index.html, favicon, etc.)
│   ├── src/
|   |   ├── assets/                    # Images
│   │   ├── components/                # Reusable React components
│   │   │   ├── EmployeeList.jsx
|   |   |   ├── AddEmployee.jsx
│   │   │   ├── EmployeeForm.jsx
│   │   │   ├── EditEmployee.jsx
│   │   │   └── Navbar.jsx
│   │   ├── service/                   # API service
│   │   │   └── api.js
│   │   ├── pages/                     # Pages
│   │   │   ├── Dashboard.jsx
│   │   │   └── Home.jsx
│   │   ├── App.js                     # Main app component
│   │   └── index.js                   # Entry point
│   ├── package.json                   # Frontend dependencies
│   └── README.md
│
├── .gitignore
└── README.md                          # Project overview (root-level)

```


---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Atharva759/Employee-Management-System.git
```
```
cd employee-management-system
```
### 2. 🖥️ FrontEnd Installation & Run
- Head to Directory
```
cd frontend
```
- Install node packages
```
npm install
````
- Run the development server
```
npm run dev
```
- Server is running on http://localhost/5173


### 3. ⚙️ Backend (Spring Boot)
➤ Prerequisites
- Java 17+
- Maven
- PostgreSQL running locally

➤ Configure PostgreSQL
Update ```src/main/resources/application.properties:```
```
spring.datasource.url=jdbc:postgresql://localhost:5432/employees_db
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

➤ Run Backend
```
cd backend
./mvnw spring-boot:run
```
- Server is running on http://localhost:8080

### 4. 📬 API Endpoints

| Method | Endpoint            | Description           |
| ------ | ------------------- | --------------------- |
| GET    | /api/employees      | Get all employees     |
| GET    | /api/employees/{id} | Get employee by ID    |
| POST   | /api/employees      | Add a new employee    |
| PUT    | /api/employees/{id} | Update employee by ID |
| DELETE | /api/employees/{id} | Delete employee by ID |

### 5. 📘 Swagger API Documentation
Once the backend is running, visit:

🔗 http://localhost:8080/swagger-ui.html

This provides a full interactive UI to test and explore the API.



