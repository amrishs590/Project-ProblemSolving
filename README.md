# 💻 Problem Solving Pathway (DSA Pathway)

**Problem Solving Pathway**, also known as **DSA Pathway**, is an interactive web platform built using **React.js** that helps learners master **Data Structures and Algorithms (DSA)** step-by-step.  
It organizes learning into clear, structured steps — from Arrays to Linked Lists and beyond — with categorized problems (Easy, Medium, Hard) and integrated code solutions.

---

## 🚀 Features

- 🧩 **Structured Learning Path**
  - Stepwise progression through DSA topics (Arrays, Binary Search, Linked List, etc.)
- 📚 **Categorized Problem Sets**
  - Each topic has Easy, Medium, and Hard level problems
- 🧠 **Detailed Problem Pages**
  - Each problem includes question description, sample inputs/outputs, and solutions
- 📝 **Integrated Code Editor**
  - Built-in **Monaco Editor** with Python support for writing and testing code
- 💾 **Local Storage Persistence**
  - Saves last selected question 
- 🧭 **Smooth Navigation**
  - “Next Question” feature for sequential practice
- 🎨 **Modern UI & Animations**
  - Collapsible sections, smooth scroll, active link highlighting, and mobile responsiveness
- 🔒 **User Authentication (via Supabase)**
  - Signup/Login protection for personalized user progress tracking

---

## 🧩 Tech Stack

| Layer | Technology Used |
|--------|------------------|
| **Frontend** | React.js, Tailwind CSS |
| **Authentication** | Supabase Auth |
| **Code Editor** | Monaco Editor |
| **Storage** | LocalStorage (for theme & last question) |
| **Icons & UI** | Lucide-react |
| **Deployment** | Vercel |

---

---

## ⚙️ Setup and Installation

### 1. Clone the repository

git clone https://github.com/amrishs590/DSAPathway.git
cd DSAPathway

**2. Install dependencies**

npm install

**3. Configure Supabase credentials**

Create a .env.local file in the root directory and add:
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

**4. Start the development server**

npm run dev
**
🛡️ Security**

🔐 Protected Routes – Only authenticated users can access learning content
🧱 Supabase Auth ensures secure login and signup
💾 LocalStorage Protection for theme and session state
✅ Follows best practices for safe client-side state handling
🧠 Learning Path Structure

**Each Step represents a major DSA topic with categorized lectures:**

**Step	Topic	Categories**
Step 1	Arrays	Easy, Medium, Hard
Step 2	Binary Search	Easy, Medium, Hard
Step 3	Linked List	Easy, Medium, Hard
Step 4	Sliding Window  Medium, Hard
Step 5	Greedy Medium, Hard
Step 6  Stack & Queue Easy, Medium, Hard
Step 7  Heap Easy, Medium, Hard
Step 8  Binary Tree Easy, Medium, Hard
Step 9  Binary Search Tree Medium
Step 10 Dynamic Programming (upcoming)

