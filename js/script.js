const translations = {
    ar: {
        name: "م. فتحي خليفة",
        role_badge: "مهندس تخطيط",
        nav_home: "الرئيسية",
        nav_exp: "الخبرات",
        nav_skills: "المهارات",
        nav_certs: "الشهادات",
        nav_contact: "تواصل معي",
        hero_title: "مهندس تخطيط وبنية تحتية",
        hero_desc: "مهندس مدني متخصص في تخطيط البنية التحتية للطرق، مراقبة المشاريع، وتحليل البيانات باستخدام Power BI و Primavera P6.",
        loc: "مكة المكرمة، السعودية",
        download_cv: "تحميل السيرة الذاتية",
        contact_btn: "تواصل معي",
        projects_stat: "مشروع ناجح",

        section_exp: "الخبرة العملية",
        job1_title: "مهندس موقع وتخطيط",
        job1_company: "شركة أبو عزام - الطائف، السعودية",
        job1_desc: "الإشراف على الأعمال الإنشائية، إعداد التقارير الدورية للكميات والعمالة، وتنسيق الأعمال لضمان الجدول الزمني.",
        job2_title: "مهندس تخطيط (طرق وبنية تحتية)",
        job2_company: "شركة الصقر الأبيض - مصر",
        job2_desc: "إعداد وتحديث الجداول الزمنية باستخدام Primavera P6، وتحليل معدلات الإنتاجية وتطوير لوحات تحكم Power BI.",
        job3_title: "مهندس تحكم بالمشروع",
        job3_company: "شركة المقاولات العامة - مصر",
        job3_desc: "متابعة جداول مشاريع الطرق، تحليل التأخيرات، إدارة الكميات (BOQ)، وتحليل البيانات باستخدام SQL Server.",
        job4_title: "مهندس موقع",
        job4_company: "مكتب المقاولات الهندسية - مصر",
        job4_desc: "الإشراف على أعمال الخرسانة المسلحة والتشطيبات وضمان تطبيق معايير الجودة والسلامة.",

        section_skills: "المهارات التقنية",
        section_certs: "الشهادات والدورات",
        cert1_title: "إدارة المشاريع (PM Foundations)",
        cert2_title: "معايير السلامة (OSHA)",
        cert3_title: "إدارة القيمة المكتسبة (EVM)",
        cert4_title: "بكالوريوس الهندسة المدنية",
        grade_ex: "مشروع التخرج: ممتاز",
        view_cert: "عرض الشهادة",

        contact_title: "جاهز للعمل على مشروعك القادم؟",
        contact_desc: "تواصل معي لمناقشة الفرص الوظيفية أو المشاريع."
    },
    en: {
        name: "Fathi Khalifa",
        role_badge: "Planning Engineer",
        nav_home: "Home",
        nav_exp: "Experience",
        nav_skills: "Skills",
        nav_certs: "Certificates",
        nav_contact: "Contact",
        hero_title: "Planning & Infrastructure Engineer",
        hero_desc: "Civil Engineer specialized in road infrastructure planning, project control, and data analysis using Power BI & P6.",
        loc: "Makkah, KSA",
        download_cv: "Download CV",
        contact_btn: "Contact Me",
        projects_stat: "Projects Done",

        section_exp: "Work Experience",
        job1_title: "Site & Planning Engineer",
        job1_company: "Abo Azzam Company - Taif, KSA",
        job1_desc: "Supervised construction activities, prepared daily/weekly reports, and coordinated labor and subcontractors.",
        job2_title: "Planning Engineer (Roads)",
        job2_company: "Al-Saqr Al-Abyad - Egypt",
        job2_desc: "Prepared P6 schedules, monitored progress, analyzed deviations, and developed Power BI dashboards.",
        job3_title: "Project Control Engineer",
        job3_company: "General Contracting Company - Egypt",
        job3_desc: "Planned road schedules, analyzed delays, updated BOQ quantities, and analyzed data using SQL Server.",
        job4_title: "Site Engineer",
        job4_company: "Engineering Contracting Office - Egypt",
        job4_desc: "Supervised reinforced concrete works, finishing, and ensured quality & safety compliance.",

        section_skills: "Technical Skills",
        section_certs: "Certificates & Education",
        cert1_title: "Project Management Foundations",
        cert2_title: "OSHA Standards",
        cert3_title: "Earned Value Management (EVM)",
        cert4_title: "B.Sc. in Civil Engineering",
        grade_ex: "Grade: Excellent",
        view_cert: "View Certificate",

        contact_title: "Ready for your next project?",
        contact_desc: "Contact me to discuss job opportunities or projects."
    }
};

const themeBtn = document.getElementById('theme-btn');
const langBtn = document.getElementById('lang-btn');
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const htmlEl = document.documentElement;

// Theme Toggle
themeBtn.addEventListener('click', () => {
    const currentTheme = htmlEl.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', newTheme);
    themeBtn.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Language Toggle
langBtn.addEventListener('click', () => {
    const currentLang = htmlEl.getAttribute('lang');
    const newLang = currentLang === 'ar' ? 'en' : 'ar';

    htmlEl.setAttribute('lang', newLang);
    htmlEl.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
    langBtn.textContent = newLang === 'ar' ? 'EN' : 'عربي';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[newLang][key]) {
            el.textContent = translations[newLang][key];
        }
    });
});

// Mobile Menu
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});