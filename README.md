<div align="center">

# 📚 1st Year Engineering Notes

### Your study material, organized in one place.

Notes, question papers, assignments, and lab resources for first-year engineering students.

![Static website](https://img.shields.io/badge/website-static-8b5cf6?style=for-the-badge)
![Built with HTML, CSS and JavaScript](https://img.shields.io/badge/built%20with-HTML%20%7C%20CSS%20%7C%20JavaScript-22c55e?style=for-the-badge)
![Study resources](https://img.shields.io/badge/resources-PDFs%20%26%20documents-0ea5e9?style=for-the-badge)

</div>

---

## ✨ What you can do

- 📖 Browse study material organized by subject
- 🔎 Search for notes by name
- 📄 Read PDFs in the built-in viewer or download them
- 📱 Use the site on desktop or mobile
- ⚡ Run it directly—no build step, package manager, or backend required

## 🎓 Subjects and resources

| Subject | Available resources |
| --- | --- |
| 🧪 Engineering Chemistry | Unit notes and important questions |
| ➗ Mathematics I & II | Unit notes, practice material, topics, and question papers |
| 📝 English for Communication | Unit notes and important questions |
| ⚡ Basic Electrical & Electronics Engineering (BEEE) | Unit notes |
| 📐 Engineering Graphics | Unit notes and combined notes |
| 🔬 Engineering Physics | Notes, assignments, lab work, and question papers |
| ⚙️ Basic Mechanical Engineering | Unit notes, lab work, and question papers |
| 🏗️ Basic Civil Engineering | Unit notes, lab work, and topics |
| 💻 Basic Computer Engineering | Unit notes, lab manual, and question papers |
| 🗣️ Language Lab & Seminars | Activities and communication resources |
| 👨‍💻 C and C++ | Language notes |
| 📚 Semester II | Important questions and timetable |

## 🗂️ Project structure

```text
.
├── index.html              # 🏠 Home page and subject list
├── subject.html            # 📚 Subject notes page
├── subject.js              # 🔎 Subject data and search behavior
├── viewer.html             # 📄 PDF viewer and download link
├── style.css               # 🎨 Shared site styles
├── about.html
├── contact.html
├── privacy-policy.html
├── terms.html
└── pdfs/                   # 📁 Study materials grouped by subject
```

## 🚀 Run locally

Open the project folder with a local web server, such as the **Live Server** extension in Visual Studio Code.

Or run this command from the project directory:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

## 🌐 Publish with GitHub Pages

1. Push the project files to a GitHub repository.
2. Open **Settings → Pages** in the repository.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the branch containing the site and the `/ (root)` folder, then save.
5. Open the published URL shown in the Pages settings.

No build command is required. Keep `index.html` in the selected publishing folder.

## ➕ Add or update study material

1. Place the PDF or document in the appropriate folder under `pdfs/`.
2. Add an entry to that subject's `pdfs` list in `subject.js`, using a path relative to the project root:

   ```js
   { name: "Unit 1 Notes", link: "pdfs/chemistry/UnitsNotes/unit1.pdf" }
   ```

3. Match the file and folder names exactly, including capitalization, so links also work on GitHub Pages.

## 🙌 Credits

Maintained by **Krish Soni**. Study materials are shared for educational use; ownership and permissions remain with their respective authors or rights holders.
