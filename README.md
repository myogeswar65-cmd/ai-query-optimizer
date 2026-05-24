# 🚀 AI-Powered Database Query Optimizer

An intelligent AI-based SQL optimization platform that analyzes slow database queries, detects bottlenecks, recommends indexing strategies, rewrites inefficient queries, and predicts performance improvements before deployment.

---

# 📌 Problem Statement

Slow SQL queries can drastically reduce application performance and increase infrastructure costs.

Debugging and optimizing queries usually requires deep database expertise.

This project solves that problem using AI-powered query analysis and optimization.

---

# 💡 Solution

The AI-Powered Database Query Optimizer:

✅ Detects inefficient SQL patterns  
✅ Suggests optimized queries  
✅ Recommends indexes  
✅ Predicts performance improvements  
✅ Provides modern AI dashboard UI  
✅ Helps developers optimize queries faster  

---

# 🧠 Features

- SQL Query Analysis
- Query Bottleneck Detection
- Automatic Query Rewriting
- Index Recommendation Engine
- Query Health Score
- Performance Gain Prediction
- AI Insights Dashboard
- Monaco SQL Editor
- FastAPI Backend
- React + Tailwind Frontend
- Modern Dark UI

---

# 🖥️ Tech Stack

## Frontend
- React.js
- Tailwind CSS
- Framer Motion
- Monaco Editor
- Axios

## Backend
- FastAPI
- Python
- PostgreSQL

## Database
- PostgreSQL

## AI
- OpenAI API

---

# 📷 UI Features

- Professional dark dashboard
- SQL syntax highlighting
- Animated cards
- Query optimization panels
- Query health metrics
- AI SaaS style interface

---

# ⚡ How It Works

1. User enters SQL query
2. Backend analyzes query
3. System detects bottlenecks
4. AI suggests improvements
5. Optimized query is generated
6. Suggested indexes are displayed
7. Estimated performance gain is calculated

---

# 📊 Example

## Input Query

```sql
SELECT * FROM users
WHERE LOWER(email)='abc@gmail.com';
```

---

## Issues Detected

- SELECT * detected
- LOWER() prevents index usage

---

## Optimized Query

```sql
SELECT id,name,email
FROM users
WHERE email='abc@gmail.com';
```

---

## Suggested Index

```sql
CREATE INDEX idx_users_email
ON users(email);
```

---

## Estimated Gain

🚀 70% Faster

---

# 🛠️ Full Installation Guide

# 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/ai-query-optimizer.git
```

Replace:

```text
YOUR_USERNAME
```

with your GitHub username.

---

# 2️⃣ Backend Setup

Open terminal:

```bash
cd backend
```

---

## Create Virtual Environment

### Windows

```bash
python -m venv venv
```

---

## Activate Virtual Environment

### Windows

```bash
venv\Scripts\activate
```

### Mac/Linux

```bash
source venv/bin/activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Install Additional Packages

```bash
pip install fastapi uvicorn openai python-dotenv psycopg2-binary
```

---

# 3️⃣ OpenAI API Setup

## Create OpenAI API Key

Go to:

https://platform.openai.com/api-keys

Create a new API key.

---

## Create `.env` File

Inside backend folder create:

```text
.env
```

Add:

```env
OPENAI_API_KEY=your_openai_api_key
```

Example:

```env
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxx
```

IMPORTANT:
Do NOT upload `.env` to GitHub.

---

# 4️⃣ PostgreSQL Setup

Install PostgreSQL:

https://www.postgresql.org/download/

---

## Open SQL Shell

Create database:

```sql
CREATE DATABASE optimizerdb;
```

---

## Create Tables

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    created_at TIMESTAMP
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT,
    amount NUMERIC,
    created_at TIMESTAMP
);
```

---

# 5️⃣ Run Backend

Inside backend folder:

```bash
python -m uvicorn app.main:app --reload
```

Backend runs at:

```text
http://127.0.0.1:8000
```

---

# 6️⃣ Frontend Setup

Open NEW terminal:

```bash
cd frontend
```

---

## Install Dependencies

```bash
npm install
```

---

## Install UI Libraries

```bash
npm install axios framer-motion lucide-react @monaco-editor/react
```

---

## Run Frontend

```bash
npm start
```

Frontend runs at:

```text
http://localhost:3000
```

---

# 🔐 Important Security Note

Never upload your real OpenAI API key to GitHub.

Always store secrets inside:

```text
.env
```

Make sure `.gitignore` contains:

```text
.env
venv/
node_modules/
__pycache__/
```

---

# 🧪 Demo Workflow

1. Enter slow SQL query
2. Click "Optimize Query"
3. AI analyzes bottlenecks
4. Optimized query appears
5. Suggested index displayed
6. Performance gain predicted

---

# 🎯 Future Improvements

- Real EXPLAIN ANALYZE support
- Query execution benchmarking
- AI-generated optimization confidence
- Multi-database support
- Natural language query explanation
- Cloud deployment support

---

# Highlights

This project demonstrates:

- AI Integration
- Full Stack Development
- Database Optimization
- Performance Engineering
- Modern UI/UX
- Real-world Problem Solving

---

# 👨‍💻 Author

Built by Yogeswar Maddikuntla

---

# ⭐ Support

If you like this project, give it a star ⭐
