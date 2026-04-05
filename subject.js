// ======= GET SUBJECT FROM URL ======
const urlParams = new URLSearchParams(window.location.search);
const sub = urlParams.get('sub')?.toLowerCase();

// ======   NOTES DATA ======
const subjects = {

       chemistry: {
    title: "Engineering Chemistry",
    pdfs: [
        { name: "Unit 1 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/chemistry/UnitsNotes/unit1.pdf"},
        { name: "Unit 2 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/chemistry/UnitsNotes/unit2.pdf" },
        { name: "Unit 3 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/chemistry/UnitsNotes/unit3.pdf" },
        { name: "Unit 4 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/chemistry/UnitsNotes/unit4.pdf" },
        { name: "Unit 5 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/chemistry/UnitsNotes/unit4.pdf" }
    ]
},

        maths1: {
            title: "Mathematics-1",
            pdfs: [
                { name: "Unit 1 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths1/UnitsNotes/unit1.pdf" },
                { name: "Unit 2 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths1/UnitsNotes/unit2.pdf" },
                { name: "Unit 3 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths1/UnitsNotes/unit3.pdf" },
                { name: "Unit 4 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths1/UnitsNotes/unit4.pdf" },
                { name: "Unit 5 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths1/UnitsNotes/unit5.pdf" }
            ]
        },
        
        english: {
            title: "English for Communication",
            pdfs: [
                { name: "Unit 1 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/english/UnitsNotes/unit1.pdf" },
                { name: "Unit 2 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/english/UnitsNotes/unit2.pdf" },
                { name: "Unit 3 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/english/UnitsNotes/unit3.pdf" },
                { name: "Unit 4 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/english/UnitsNotes/unit4.pdf" },
                { name: "Unit 5 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/english/UnitsNotes/unit5.pdf" }
            ]
        },

        beee: {
            title: "Basic Electrical & Electronics",
            pdfs: [
                { name: "Unit 1 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/beee/UnitsNotes/unit1.pdf" },
                { name: "Unit 2 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/beee/UnitsNotes/unit2.pdf" },
                { name: "Unit 3 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/beee/UnitsNotes/unit3.pdf" },
                { name: "Unit 4 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/beee/UnitsNotes/unit4.pdf" },
                { name: "Unit 5 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/beee/UnitsNotes/unit5.pdf" }
            ]
        },

        graphics: {
            title: "Engineering Graphics",
            pdfs: [
                { name: "Unit 1 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/graphics/UnitNotes/unit1.pdf" },
                { name: "Unit 2 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/graphics/UnitNotes/unit2.pdf" },
                { name: "Unit 3 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/graphics/UnitNotes/unit3.pdf" },
                { name: "Unit 4 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/graphics/UnitNotes/unit4.pdf" },
                { name: "All Unit Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/graphics/UnitNotes/AllUnitNotes.pdf" }
            ]
        },

        physics: {
            title: "Engineering Physics",
            pdfs: [
                { name: "Unit 1-2 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/physics/UnitsNotes/unit1-2.pdf" },
                { name: "Unit 1-4 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/physics/UnitsNotes/Unit1-4.pdf" },
                { name: "Unit 3-5 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/physics/UnitsNotes/Unit3-5.pdf" },
                { name: "Unit Electrostatics Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/physics/UnitsNotes/Electrostatics.pdf" },
                { name: "Unit Wave Optics Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/physics/UnitsNotes/WaveOptics.pdf" },
                { name: "Assignment", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/physics/Assignment/assignment.pdf" },
                { name: "Viva Question", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/physics/LabWork/vivaquestions.pdf" },
                { name: "Experiment-2,3,4", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/physics/LabWork/experiment-2,3,4.pdf" },
                { name: "Experiment-5,6,7", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/physics/LabWork/experiment-5,6,7.pdf" },
                { name: "Experiment-1", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/physics/LabWork/experiment-1.pdf" },
                { name: "Lab Manual", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/physics/LabWork/LanManual.docx"},
                { name: "RGPV Q.Paper", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/physics/QPaper/physics.pdf" }
            ]
        },

          maths2: {
            title: "Mathematics-2",
            pdfs: [
                { name: "Unit 01 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/UnitsNotes/M-2Unit-1.pdf" },
                { name: "Unit 02 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/UnitsNotes/M-2Unit-2.pdf" },
                { name: "Unit 04 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/UnitsNotes/M-2Unit-4.pdf" },
                { name: "Unit 1 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/UnitsNotes/unit1.pdf" },
                { name: "Unit 2 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/UnitsNotes/unit2.pdf" },
                { name: "Unit 3 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/UnitsNotes/unit3.pdf" },
                { name: "Unit 4 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/UnitsNotes/unit4.pdf" },
                { name: "Unit 5 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/UnitsNotes/unit5.pdf" },
                { name: "Imp Questions U-1", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/ImpQ/U-1Imp.pdf" },
                { name: "Imp Questions U-2", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/ImpQ/U-2Imp.pdf"},
                { name: "Imp Questions U-3", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/ImpQ/U-3Imp.pdf"},
                { name: "Imp Questions U-4", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/ImpQ/U-4Imp.pdf"},
                { name: "Imp Questions U-5", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/ImpQ/U-5Imp.pdf"},
                { name: "Guidance to Prepare for M2", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/ImpQ/Preparation.pdf" },
                { name: "Imp Questions 1-5", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/ImpQ/ImpQ.pdf" },
                { name: "RGPV Q. Paper", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/QPaper/Mathematics-2.pdf" },
                { name: "m-2-jun-2023-solution", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/QPaper/2023-solution.pdf" },
                { name: "Analytic Function", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/Topics/AnalyticFunction.pdf" },
                { name: "Gauss Divergence & Stokes theorem", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/Topics/GD-ST.pdf" },
                { name: "line integration", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/Topics/lineintegration.pdf" },
                { name: "M-2 Partial differential EQn", link:"https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/Topics/PDEqn.pdf" },
                { name: "Mtd Change of Independent variable", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/Topics/MtdToChangeIV.pdf" },
                { name: "Q. Sec(ax),cosec(2x)", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/Topics/Q.Sec(ax),cosec(2x).pdf" },
                { name: "Q. Tan(ax)", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/Topics/Q.Tan(ax).pdf" },
                { name: "Removal of 1st Derivative Diff. EQn", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/Topics/RemovalofFirstDerivativeEqn.pdf" },
                { name: "Series Solution of diff. EQn singular point", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/Topics/SeriesSolnOfDiffeEqn.pdf" },
                { name: "Surface integration", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/Topics/Surfaceintegration.pdf" },
                { name: "Surface integration By Gauss divergence theorem", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/maths2/Topics/STByGDTheorem.pdf" }
            ]
        },

        mechanical: {
            title: "Basic Mechanical Engineering",
            pdfs: [
                { name: "Unit 1 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/mechanical/UnitNotes/UNIT-1.pdf" },
                { name: "Unit 2 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/mechanical/UnitNotes/UNIT-2.pdf" },
                { name: "Unit 3 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/mechanical/UnitNotes/UNIT-3.pdf" },
                { name: "Unit 4 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/mechanical/UnitNotes/UNIT-4.pdf" },
                { name: "Unit 5 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/mechanical/UnitNotes/UNIT-5.pdf" },
                { name: "Assignment", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/mechanical/UnitNotes/Assignment.pdf" },
                { name: "Classi of Draught", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/mechanical/UnitNotes/ClassiOfDraught.pdf" },
                { name: "Imp Questions", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/mechanical/ImpQ/Unit1-5.pdf" },
                { name: "RGPV Q. Paper", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/mechanical/QPaper/Machanical.pdf" },
                { name: "bme- front page & Index", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/mechanical/LabWork/FrontPage-Index .pdf" },
                { name: "Experiment 1", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/mechanical/LabWork/Experiment1.pdf" },
                { name: "Experiment 6", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/mechanical/LabWork/Experiment6.pdf" },
                { name: "Experiment 4", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/mechanical/LabWork/Experiment4.pdf" },
                { name: "Experiment 3", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/mechanical/LabWork/Experiment3.pdf" },
                { name: "Experiment 5", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/mechanical/LabWork/Experiment5.pdf" },
                { name: "Experiment 7", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/mechanical/LabWork/Experiment7.pdf" },
                { name: "Experiment 10", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/mechanical/LabWork/Experiment10.pdf" }
            ]
        },

        civil: {
            title: "Basic Civil Engineering & Mechanics",
            pdfs: [
                { name: "Unit 1 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/civil/UnitsNotes/unit1.pdf" },
                { name: "Unit 2 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/civil/UnitsNotes/unit2.pdf" },
                { name: "Unit 3 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/civil/UnitsNotes/unit3.pdf" },
                { name: "Unit 4 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/civil/UnitsNotes/unit4.pdf" },
                { name: "Unit 5 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/civil/UnitsNotes/unit5.pdf" },
                { name: "BCEM_Important_QA", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/civil/ImpQ/ImpQA.pdf" },
                { name: "Imp Question", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/civil/ImpQ/U1-5Imp.pdf" },
                { name: "Imp Complete_Answers", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/civil/ImpQ/QAImp.pdf" },
                { name: "BCEM_LAB", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/civil/LabWork/BCEM_LAB.docx" },
                { name: "Reading BT204", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/civil/LabWork/ReadingBT204.pdf" },
                { name: "RGPV Q. Paper", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/civil/QPaper/civil.pdf" },
                { name: "Topics CG & MI", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/civil/Topics/CG-MI.pdf" },
                { name: "Doors & Windows figure", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/civil/Topics/Doors-WindowsFigure.pdf" }
            ]
        },

         computer: {
            title: "Basic Computer Engineering",
            pdfs: [
                { name: "Unit 1 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/computer/UnitsNotes/Unit-1.pdf" },
                { name: "Unit 1 Topics", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/computer/UnitsNotes/Unit-1Topic.pdf" },
                { name: "Unit 1 part2", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/computer/UnitsNotes/Unit-1Part2.pdf" },
                { name: "Unit 2 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/computer/UnitsNotes/Unit-2.pdf" },
                { name: "Unit 3 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/computer/UnitsNotes/Unit-3.pdf" },
                { name: "Unit 4 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/computer/UnitsNotes/Unit-4.pdf" },
                { name: "Unit 5 Notes", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/computer/UnitsNotes/Unit-5.pdf" },
                { name: "RGPV Q. Paper", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/computer/QPaper/Computer.pdf" },
                { name: "Imp Questions", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/computer/ImpQ/ImpQ.pdf" },
                { name: "Imp Questions", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/computer/ImpQ/ImpQ2.pdf" },
                { name: "lab manual front pages", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/computer/LabWork/LabManualFront-Pages.pdf" },
                { name: "Lab Manual", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/computer/LabWork/LabManual.docx"},
            ]
        },

         lls: {
            title: "Language Lab & Seminars",
            pdfs: [
                { name: "Overcome", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/lls/Overcome.pdf" },
                { name: "LLS Activity 1,2", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/lls/Activity-1,2.pdf" },
                { name: "LLS Activity 3, 4, 5, 7, 8", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/lls/Activity-3,4,5,7,8.pdf" },
                { name: "Role play in communication skills", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/lls/RolePlay.pdf" },
                { name: "The_Essential_Collection", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/lls/The_Essential_Collection_.pdf" }
            ]
        },

         lng: {
            title: "C,C++ Langauge Notes",
            pdfs: [
                { name: "History of C, C++ Intro", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/lngnotes/History-Intro.pdf" }
            ]
        },

         sem2: {
            title: "Sem-2 Important",
            pdfs: [
                { name: "Imp que sem II", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/sem2/ImpQ.pdf" },
                { name: "MST paper", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/sem2/MSTQ.pdf" },
                { name: "RGPV Imp Q. 2nd Sem", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/sem2/RGPVVImpQ.pdf" },
                { name: "Study Time Table", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/sem2/StudyTimeTable.pdf" }
            ]
        },

         ImpQ: {
            title: "Imp Q with model paper 2026",
            pdfs: [
                { name: "BCE Imp topics", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/ImpQ/BCEImp.pdf" },
                { name: "BCEM Imp topics", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/ImpQ/BCEMImp.pdf" },
                { name: "BEEE Imp topics", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/ImpQ/BEEEImp.pdf" },
                { name: "BME Imp Topics", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/ImpQ/BMEImp.pdf" },
                { name: "Engg. Chemistry Imp topics", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/ImpQ/ChemistryImp.pdf" },
                { name: "Engg. Graphics Imp topics", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/ImpQ/GraphicsImp.pdf" },
                { name: "Engg. Physics imp topics", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/ImpQ/PhysicsImp.pdf" },
                { name: "English_for_communication_imp_topics", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/ImpQ/EnglishImp.pdf" },
                { name: "Mathematics 1 Imp topics", link: "https://sonikrish920-rgb.github.io/krish-notes/pdfs/ImpQ/M1Imp.pdf" }
            ]
        },

    };

    // ====== SHOW NOTES =======
const pdfList = document.getElementById("pdfList");

if (subjects[sub]) {

    subjectName.textContent = subjects[sub].title;

    subjects[sub].pdfs.forEach(pdf => {

        const card = document.createElement("a");
        card.className = "card";

        const link = pdf.link.toLowerCase();

        // ✅ detect file type
        const isPDF = link.endsWith(".pdf");
        const isDOC = link.endsWith(".doc") || link.endsWith(".docx");

        if (isPDF) {
            // 👉 PDF → viewer
            card.href = `viewer.html?file=${encodeURIComponent(pdf.link)}`;
        } else if (isDOC) {
            // 👉 DOCX → direct open/download
            card.href = pdf.link;
            card.target = "_blank";
        } else {
            // 👉 unknown
            card.href = "#";
            card.style.pointerEvents = "none";
            card.style.opacity = "0.5";
        }

        card.innerHTML = `
            <h2>${pdf.name}</h2>
            <p style="color:#94a3b8;">
                ${isPDF ? "Open PDF" : isDOC ? "Download Document" : "Unsupported File"}
            </p>
        `;

        pdfList.appendChild(card);
    });

} else {

    pdfList.innerHTML = `
        <div class="card">
            <h3>No Notes Found</h3>
            <p>This subject has no uploaded files yet.</p>
        </div>
    `;
}
// ===== SEARCH FUNCTION =====
const searchBox = document.getElementById("searchBox");

if (searchBox) {
  searchBox.addEventListener("input", function () {

    const value = this.value.toLowerCase();

    // ✅ sirf pdfList ke andar ke cards
    const cards = document.querySelectorAll("#pdfList .card");

    cards.forEach(card => {
      const text = card.textContent.toLowerCase();

      if (text.includes(value)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

  });
}
function toggleMenu() {
  document.querySelector(".sidebar").classList.toggle("active");
}












