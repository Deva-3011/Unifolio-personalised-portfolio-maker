# 🌟 Unifolio – Personalized Portfolio Builder

**Unifolio** is a powerful and beginner-friendly portfolio generation platform designed to help students, freshers, and professionals create a clean, impressive portfolio in minutes – without writing a single line of code.

Whether you're applying for internships, jobs, or showcasing your personal brand, Unifolio helps you stand out with beautiful, pre-designed portfolio templates — instantly generated using the details you provide.

---

## 📌 Why Unifolio?

Building a good-looking, structured portfolio is challenging for non-technical users or those unfamiliar with web development tools. That's where **Unifolio** comes in — it simplifies the entire portfolio creation process into a smooth, form-based flow.

### ✅ Who is it for?

- 🎓 College students and freshers applying for internships/jobs  
- 👨‍💻 Developers and tech professionals building personal brand  
- 🚀 Hackathon participants and self-learners needing quick showcase  
- 💼 Anyone looking to create a stylish, professional online presence

---

## 🚀 Features

- 🔐 **Firebase Authentication** – Secure login and account management  
- 📋 **Dynamic Form Builder** – Collects complete user data via guided steps  
- 🎨 **Template Gallery** – Choose from 15+ beautifully styled portfolio templates  
- 📄 **Auto-Filled Portfolio Pages** – Each template auto-populates with your data  
- 🧾 **One-Click PDF Generation** – Download your portfolio as a PDF  
- 📊 **Progress Tracker** – Visual chart of your portfolio completion  
- 🤝 **Confidence Booster Page** – Fun motivators, quotes, and meme sections  
- 💬 **Feedback Collection** – Option to skip or submit feedback at the end  
- 🧠 **Reusable Components & Responsive UI** – DRY code & mobile friendly  
- 📦 **Firebase Firestore + Express Backend API** – Robust backend integration

---

## 🛠 Tech Stack

- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Node.js, Express.js  
- **Database**: Firebase Firestore  
- **Authentication**: Firebase Auth  
- **Hosting**: Firebase Hosting  
- **PDF Generation**: html2pdf.js  
- **Charts**: Chart.js  
- **Version Control**: Git + GitHub

---

## 🧭 Project Walkthrough

### 🔹 1. Home Page  
- Intro to Unifolio with a catchy tagline and “Get Started” option  
- Users can read about the purpose, features, and tech behind Unifolio  
- Directs users to **login/signup**

### 🔹 2. Authentication  
- Login/Signup with email and password using Firebase Auth  
- Once logged in, users are redirected to the profession selection page

### 🔹 3. Profession Selection  
- Users choose their profession (e.g., Developer, Designer, Marketer)  
- This filters the relevant portfolio templates to choose from

### 🔹 4. Template Selection  
- Displays a **gallery of 15+ unique templates**  
- Users preview and select their favorite portfolio style

### 🔹 5. Portfolio Form  
- Structured form sections:
  - 👤 **Personal Info**: Name, email, phone, DOB, address, social links  
  - 🧑‍💼 **About**: Short bio/summary  
  - 🎓 **Education**: Degree, institution, years  
  - 💻 **Skills**: List of technical or soft skills  
  - 📁 **Projects**: Title, description, stack, GitHub/demo links  
  - 📜 **Certifications**: Name, organization, year  
  - 🏅 **Achievements**: Title and description  
  - 📩 **Contact**: Alternate email and support message

- All data is saved in **Firestore**

### 🔹 6. Portfolio Preview  
- Displays the selected template with all user data filled in  
- Options:  
  - 🖨️ **Generate PDF**  
  - ✏️ **Edit Portfolio**

### 🔹 7. Feedback Page  
- After PDF generation, user is redirected to leave feedback  
- Options:  
  - 🔁 **Skip and Logout**  
  - ✅ **Submit and Logout**  

### 🔹 8. Confidence Booster Page  
- Fun, interactive page with:
  - 🔮 Portfolio Fortunes  
  - 🚀 Motivational Quotes  
  - 💼 Fictional Recruiter Reviews  
  - 😂 Developer Memes  
  - ✨ Compliment Generator  
  - 💡 Random Advice (via external API)

### 🔹 9. Progress Tracker  
- Visual donut chart powered by **Chart.js**  
- Displays how much of the portfolio the user has completed

---

Made with ❤️ by Devendiran AP
Made with ❤️ at Skillmate AI
