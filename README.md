# 1st Year Engineering Notes

A simple, static website for browsing first-year engineering study materials. Notes, question papers, assignments, and lab resources are organized by subject and opened in a built-in PDF viewer.

## Features

- Subject-wise study material
- Search notes by name
- In-browser PDF viewer with a download option
- Responsive layout for desktop and mobile
- No build step, package manager, or backend required

## Subjects

The site currently includes materials for:

- Engineering Chemistry
- Mathematics I and II
- English for Communication
- Basic Electrical and Electronics Engineering (BEEE)
- Engineering Graphics
- Engineering Physics
- Basic Mechanical Engineering
- Basic Civil Engineering
- Basic Computer Engineering
- Language Lab and Seminars
- C and C++ language notes
- Semester II and important-question collections

## Project structure

```text
.
├── index.html              # Home page and subject list
├── subject.html            # Subject notes page
├── subject.js              # Subject data and search behavior
├── viewer.html             # PDF viewer and download link
├── style.css               # Shared site styles
├── about.html
├── contact.html
├── privacy-policy.html
├── terms.html
└── pdfs/                   # Study materials grouped by subject
```

## Run locally

This is a static website. Open the project folder with a local web server, such as the **Live Server** extension in Visual Studio Code, then open `index.html` in the browser.

Alternatively, from the project directory run:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Deploy with GitHub Pages

1. Push the project files to a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the branch containing the site and the `/ (root)` folder, then save.
5. Open the published URL shown in the Pages settings.

No build command is needed. Keep `index.html` in the selected publishing folder.

## Add or update study materials

1. Add the PDF or document under the appropriate folder in `pdfs/`.
2. Add or update its entry in the corresponding subject's `pdfs` array in `subject.js`. The link should be relative to the project root, for example:

   ```js
   { name: "Unit 1 Notes", link: "pdfs/chemistry/UnitsNotes/unit1.pdf" }
   ```

3. Use the exact file and folder names, including capitalization, so links also work when deployed on GitHub Pages.

## Credits and content

This site is maintained by Krish Soni. Study materials are provided for educational use; ownership and permissions remain with their respective authors or rights holders.
