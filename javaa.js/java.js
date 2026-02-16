(() => {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Mobile menu
    const toggle = document.querySelector(".nav-toggle");
    const menu = document.querySelector(".nav-menu");
    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            const isOpen = menu.classList.toggle("open");
            toggle.setAttribute("aria-expanded", String(isOpen));
        });

        // close on link click (mobile)
        menu.querySelectorAll("a").forEach(a => {
            a.addEventListener("click", () => {
                menu.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // i18n dictionary (minimal — تقدر تزود لاحقًا)
    const dict = {
        ar: {
            name: "فتحي خليفة محمد",
            role: "مهندس تخطيط | مهندس طرق",
            kicker: "بورتفوليو مهندس تخطيط",
            heroSub: "مهندس مدني متخصص في تخطيط البنية التحتية للطرق وإدارة المشاريع، مع خلفية قوية في تحليل البيانات، وإدارة الجداول الزمنية، وتقييم أداء التكلفة.",
            nav_about: "نبذة",
            nav_skills: "المهارات",
            nav_projects: "المشاريع",
            nav_contact: "تواصل",
            btn_projects: "عرض المشاريع",
            btn_cv: "تحميل السيرة الذاتية",
            qi_location: "الموقع:",
            qi_exp: "الخبرة:",
            qi_email: "البريد:",
            qi_whats: "واتساب:",
            kpi_years: "سنوات خبرة",
            kpi_projects: "مشروع",
            kpi_certs: "شهادة",
            kpi_ontime: "انضباط",
            about_title: "نبذة عني",
            about_sub: "أركز على تخطيط الطرق وإدارة المشاريع مع دمج تحليل البيانات لإنتاج تقارير دقيقة.",
            about_c1_title: "ما الذي أقدمه",
            about_c1_1: "إعداد وإدارة الجداول الزمنية (Primavera P6).",
            about_c1_2: "تحليل الأداء والتكلفة والتقارير الدورية.",
            about_c1_3: "لوحات Power BI وربط البيانات (SQL/Python).",
            about_c2_title: "رؤيتي",
            about_c2_text: "دعم مشاريع البنية التحتية بقرارات مبنية على البيانات، وتقليل المخاطر، وتحسين الكفاءة، مع جودة تسليم عالية.",
            skills_title: "المهارات",
            skills_sub: "أدوات تخطيط + تحليل بيانات + تقارير تنفيذية.",
            skills_p6: "WBS, Baseline, Critical Path, Progress.",
            skills_bi: "Dashboards, DAX, Modeling.",
            skills_sql: "Queries, Joins, Reporting tables.",
            skills_py: "Automation, data cleaning.",
            projects_title: "مشاريع مختارة",
            projects_sub: "نماذج عمل يمكن تطويرها وإضافة تفاصيل وصور لاحقًا.",
            proj1_title: "Road Infrastructure Upgrade",
            proj1_desc: "إدارة الجدولة وتوزيع الموارد لمشروع توسعة طريق.",
            proj2_title: "Project Control Dashboard",
            proj2_desc: "لوحة Power BI لمتابعة الأداء والتكلفة.",
            proj3_title: "Automated Reporting System",
            proj3_desc: "أتمتة تقارير أسبوعية باستخدام Python.",
            contact_title: "تواصل",
            contact_sub: "يمكنك مراسلتي مباشرة عبر البريد أو واتساب.",
            contact_card1: "بيانات التواصل",
            contact_card2: "رسالة سريعة",
            form_name: "الاسم",
            form_msg: "الرسالة",
            form_send: "إرسال",
            form_note: "(يمكنك لاحقًا ربط الفورم بخدمة إرسال مثل Formspree)",
            back_top: "العودة للأعلى ↑"
        },
        en: {
            name: "Fathi Khalifa Mohamed",
            role: "Planning Engineer | Road Engineer",
            kicker: "Planning Engineer Portfolio",
            heroSub: "Civil Engineer specialized in road infrastructure planning and project control, with a strong background in data analysis, scheduling, and cost performance evaluation.",
            nav_about: "About",
            nav_skills: "Skills",
            nav_projects: "Projects",
            nav_contact: "Contact",
            btn_projects: "View Projects",
            btn_cv: "Download CV",
            qi_location: "Location:",
            qi_exp: "Experience:",
            qi_email: "Email:",
            qi_whats: "WhatsApp:",
            kpi_years: "Years Experience",
            kpi_projects: "Projects",
            kpi_certs: "Certifications",
            kpi_ontime: "On-time",
            about_title: "About",
            about_sub: "I focus on road planning and project control, integrating data analytics for accurate reporting.",
            about_c1_title: "What I Do",
            about_c1_1: "Schedule development & control (Primavera P6).",
            about_c1_2: "Performance, cost control and reporting.",
            about_c1_3: "Power BI dashboards + data integration (SQL/Python).",
            about_c2_title: "Vision",
            about_c2_text: "Support infrastructure projects with data-driven decisions, reduce risk, improve efficiency, and deliver high-quality outcomes.",
            skills_title: "Skills",
            skills_sub: "Planning tools + data analytics + executive reporting.",
            skills_p6: "WBS, Baseline, Critical Path, Progress.",
            skills_bi: "Dashboards, DAX, Modeling.",
            skills_sql: "Queries, Joins, Reporting tables.",
            skills_py: "Automation, data cleaning.",
            projects_title: "Selected Projects",
            projects_sub: "Samples you can expand later with screenshots and details.",
            proj1_title: "Road Infrastructure Upgrade",
            proj1_desc: "Scheduling and resource allocation for a road expansion project.",
            proj2_title: "Project Control Dashboard",
            proj2_desc: "Power BI dashboard for cost & performance tracking.",
            proj3_title: "Automated Reporting System",
            proj3_desc: "Weekly reporting automation using Python.",
            contact_title: "Contact",
            contact_sub: "Reach me via email or WhatsApp.",
            contact_card1: "Contact Details",
            contact_card2: "Quick Message",
            form_name: "Name",
            form_msg: "Message",
            form_send: "Send",
            form_note: "(You can connect the form later using Formspree)",
            back_top: "Back to top ↑"
        }
    };

    // Map data-i18n keys to dict keys
    const map = {
        name_ar: "name",
        role_ar: "role",
        kicker_ar: "kicker",
        hero_sub_ar: "heroSub",
        nav_about_ar: "nav_about",
        nav_skills_ar: "nav_skills",
        nav_projects_ar: "nav_projects",
        nav_contact_ar: "nav_contact",
        btn_projects_ar: "btn_projects",
        btn_cv_ar: "btn_cv",
        qi_location_ar: "qi_location",
        qi_exp_ar: "qi_exp",
        qi_email_ar: "qi_email",
        qi_whats_ar: "qi_whats",
        kpi_years_ar: "kpi_years",
        kpi_projects_ar: "kpi_projects",
        kpi_certs_ar: "kpi_certs",
        kpi_ontime_ar: "kpi_ontime",
        about_title_ar: "about_title",
        about_sub_ar: "about_sub",
        about_card1_title_ar: "about_c1_title",
        about_c1_1_ar: "about_c1_1",
        about_c1_2_ar: "about_c1_2",
        about_c1_3_ar: "about_c1_3",
        about_card2_title_ar: "about_c2_title",
        about_card2_text_ar: "about_c2_text",
        skills_title_ar: "skills_title",
        skills_sub_ar: "skills_sub",
        skills_p6_ar: "skills_p6",
        skills_bi_ar: "skills_bi",
        skills_sql_ar: "skills_sql",
        skills_py_ar: "skills_py",
        projects_title_ar: "projects_title",
        projects_sub_ar: "projects_sub",
        proj1_title_ar: "proj1_title",
        proj1_desc_ar: "proj1_desc",
        proj2_title_ar: "proj2_title",
        proj2_desc_ar: "proj2_desc",
        proj3_title_ar: "proj3_title",
        proj3_desc_ar: "proj3_desc",
        contact_title_ar: "contact_title",
        contact_sub_ar: "contact_sub",
        contact_card1_ar: "contact_card1",
        contact_card2_ar: "contact_card2",
        form_name_ar: "form_name",
        form_msg_ar: "form_msg",
        form_send_ar: "form_send",
        form_note_ar: "form_note",
        back_top_ar: "back_top"
    };

    // Language toggle
    const langBtn = document.getElementById("langBtn");
    const langChip = document.getElementById("langChip");
    const html = document.documentElement;

    function applyLang(lang) {
        const isAr = lang === "ar";
        html.lang = isAr ? "ar" : "en";
        html.dir = isAr ? "rtl" : "ltr";
        langChip.textContent = isAr ? "AR" : "EN";

        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            const dictKey = map[key];
            if (!dictKey) return;
            el.textContent = dict[lang][dictKey] ?? el.textContent;
        });

        // Save
        localStorage.setItem("lang", lang);
    }

    // Theme toggle
    const themeBtn = document.getElementById("themeBtn");
    const themeChip = document.getElementById("themeChip");

    function applyTheme(theme) {
        document.body.classList.toggle("theme-light", theme === "light");
        document.body.classList.toggle("theme-dark", theme !== "light");
        themeChip.textContent = (theme === "light") ? "Light" : "Dark";
        localStorage.setItem("theme", theme);
    }

    // Init from storage
    const savedLang = localStorage.getItem("lang") || "ar";
    const savedTheme = localStorage.getItem("theme") || "dark";
    applyLang(savedLang);
    applyTheme(savedTheme);

    if (langBtn) {
        langBtn.addEventListener("click", () => {
            const next = (html.lang === "ar") ? "en" : "ar";
            applyLang(next);
        });
    }

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            const next = document.body.classList.contains("theme-light") ? "dark" : "light";
            applyTheme(next);
        });
    }
})();
