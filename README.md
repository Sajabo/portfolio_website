# **Portfolio Website**  

This is a personal portfolio website designed to showcase projects and skills in software development. The website features a **clean and futuristic design** inspired by Apple's aesthetic and is built using **Tailwind CSS** for styling.  

---

## **Features**  

**Responsive Design:** The site is fully responsive for different screen sizes.  
**Dynamic Project Loading:** Projects are loaded dynamically from a JSON file.  
**Shader Art Background (Removed Three.js):** The site originally used Three.js for WebGL rendering but has since transitioned away from it.  
**All Text is Bold:** Applied global `font-weight: bold;` styling for a uniform text appearance.  

---

## **Technologies Used**  

- **HTML5** – Structure of the website  
- **CSS3 (Tailwind CSS)** – Styling and layout  
- **JavaScript (ES6+)** – Interactive elements  
- **JSON** – Storing and loading project details  
- **Shader Art** – Background visuals  

---

## **File Structure**  

```
/portfolio-project
│── index.html           # Main HTML file  
│── src/  
|    |── input.css        # Tailwind CSS input file
│   ├── output.css       # Tailwind CSS output file  
│   ├── app.js           # JavaScript for dynamic project loading  
│   ├── projects.json    # JSON file containing project details  
│── README.md            # Project documentation  
```

---

## **How to Use**  

### **1. Clone the repository**  
```bash
git clone https://github.com/Sajabo/portfolio-project.git
cd portfolio-project
```

### **2. Open `index.html` in your browser**  
You can simply open the file in any modern browser.

### **3. Customize Your Projects**  
Modify `src/projects.json` to add or update your projects.

---

## **How Projects are Loaded**  

The `app.js` script dynamically loads projects from `projects.json` and adds them to the page.

Example `projects.json` entry:  
```json
[
    {
        "title": "Project Name",
        "summary": "Short description of the project.",
        "technologies": ["HTML", "CSS", "JavaScript"],
        "repo": "https://github.com/your-repo"
    }
]
```

---

## **Future Improvements**  

- [ ] **Add Dark Mode Toggle**  
- [ ] **Enhance the Project Display Layout**  
- [ ] **Improve Animations and UI Effects**  

---

## **Au
