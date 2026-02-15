/**
 * Fathi Khalifa - Portfolio Scripts
 * Handles: Theme Toggle, Language Switching (i18n), Mobile Menu, Scroll Reveal
 */

document.addEventListener('DOMContentLoaded', () => {
    /* =========================================
       1. DOM ELEMENTS
       ========================================= */
    const html = document.documentElement;
    const body = document.body;
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.getElementById('navMenu');
    const themeToggle = document.getElementById('themeToggle');
    const langToggle = document.getElementById('langToggle');
    const langText = langToggle.querySelector('.btn-text');
    const yearSpan = document.getElementById('year');
    const themeText = themeToggle.querySelector('.btn-text');

    /* =========================================
       2. TRANSLATIONS (i18n)
       ========================================= */
    const translations = {
        en: {
            theme_btn: "Theme",
            name_full: "FATHI KHALIFA MOHAMED",
            title_short: "PLANNING ENGINEER | ROAD ENGINEER",
            nav_about: "About",
            nav_skills: "Skills",
            nav_exp: "Experience",
            nav_edu: "Education",
            nav_cert: "Certificates",
            nav_cv: "CV",
            nav_contact: "Contact",
            hero_kicker: "Professional Portfolio",
            hero_title: "PLANNING ENGINEER | ROAD ENGINEER | SAFETY-ORIENTED | POWER BI & DATA ANALYSIS",
            hero_intro: "Civil Engineer specialized in road infrastructure planning and project control, with a strong background in data analysis, schedule, and cost performance management. I support sustainable construction by integrating technology, data analytics, and smart planning into road projects to improve efficiency, reduce environmental impact, and deliver inclusive infrastructure.",
            hero_cta_exp: "View Experience",
            hero_cta_contact: "Contact Me",
            hero_cta_download: "Download CV",
            m1: "Planning & Scheduling",
            m2: "Dashboards & Reporting",
            m3: "Data + Automation",
            quick_title: "Quick Info",
            loc_lbl: "Location:",
            email_lbl: "Email:",
            wa_lbl: "WhatsApp (KSA):",
            pill_cv: "CV in site",
            pill_cert: "Certificates",
            pill_contact: "Contact",
            availability: "Available for planning support, project control, performance reporting, and data-driven decision support.",
            about_title: "Profile Summary",
            about_sub: "Planning discipline + data clarity + safety mindset — focused on reliable project delivery.",
            about_body: "I am a Civil Engineer specialized in road infrastructure planning and project control, with a strong background in data analysis, schedule, and cost performance management. I aim to support sustainable construction by integrating technology, data analytics, and smart planning into road projects to improve efficiency, reduce environmental impact, and deliver inclusive infrastructure that serves all users. I believe that project success depends on the commitment and collaboration of all stakeholders, not only operational or construction teams. Likewise, environmental responsibility is a shared effort that extends beyond the construction sector to include planners, regulators, decision-makers, and the community.",
            h1_t: "Core Focus",
            h1_d: "Roads & Infrastructure • Planning • Project Control",
            h2_t: "Data Stack",
            h2_d: "Power BI • Excel • SQL Server • Python • n8n",
            h3_t: "Mindset",
            h3_d: "Safety • Quality • Documentation • Continuous improvement",
            vision_title: "Professional Vision",
            vision_body: "I seek an opportunity in a professional environment where I can continuously develop my engineering and technical skills, apply data-driven and sustainable approaches to infrastructure projects, work with integrity and technical excellence, and contribute to delivering smart, sustainable, and resilient infrastructure.",
            sust_title: "Sustainability & Inclusive Road Networks",
            sust_1: "Serve all users (vehicles, pedestrians, public transport, people with disabilities).",
            sust_2: "Integrate green spaces and environmentally responsible solutions.",
            sust_3: "Reduce long-term operational and environmental costs.",
            sust_4: "Enhance urban livability and safety.",
            skills_title: "Technical Skills",
            skills_sub: "A practical skill set built for execution, control, and decision-grade reporting.",
            s1: "Planning & Project Control",
            s2: "Data Analysis & Reporting",
            s3: "Databases & Automation",
            exp_title: "Professional Experience",
            exp_sub: "Roles and responsibilities based on your CV content.",
            edu_title: "Education & Details",
            edu_sub: "Education, languages, and personal details.",
            edu_block_title: "Education",
            lang_title: "Languages",
            lang_1: "Arabic: Native",
            lang_2: "English: Conversational",
            lang_3: "German: Basic",
            personal_title: "Personal Details",
            p_addr: "Address:",
            p_dob: "Date of Birth:",
            p_ms: "Marital Status:",
            p_mil: "Military Status:",
            p_cit: "Citizenship:",
            courses_title: "Courses",
            courses_sub: "Training and learning path.",
            cert_title: "Professional Certificates",
            cert_desc: "Certificates embedded as a PDF inside the website. You can open or download the full file.",
            cert_open: "Open Certificates PDF",
            cert_download: "Download PDF",
            cv_title: "CV",
            cv_desc: "View my CV inside the website or download it.",
            cv_download: "Download CV",
            cv_open: "Open in new tab",
            contact_title: "Contact",
            contact_sub: "WhatsApp and email are the fastest ways to reach me.",
            f_name: "Full Name",
            f_email: "Email",
            f_msg: "Message",
            send: "Send Message",
            form_note: "This form is front-end only. Use WhatsApp or email for direct contact.",
            direct_title: "Direct Contact",
            social_title: "Social",
            social_note: "Replace placeholder social links when ready.",
            footer_copy: "Fathi Khalifa. All rights reserved.",
            back_top: "Back to top ↑",

            // Items I need to add keys for in HTML to match full text if they are lists
            // For now, I'll rely on the existing keys and manual object mapping
            s1_1: "Primavera P6", s1_2: "Microsoft Project", s1_3: "Project Control & Progress Tracking", s1_4: "Performance Analysis", s1_5: "Cost Control", s1_6: "BOQ Management", s1_7: "Interim & Final Payments", s1_8: "Professional Documentation",
            s2_1: "Excel (Advanced)", s2_2: "Power BI", s2_3: "Dashboard Development", s2_4: "Data Visualization", s2_5: "Data Validation & Accuracy Control", s2_6: "Planned vs Actual KPIs", s2_7: "EVM Analysis",
            s3_1: "SQL Server", s3_2: "Data Extraction & Cleaning", s3_3: "Python Automation", s3_4: "Workflow Automation (n8n)", s3_5: "Web Scraping", s3_6: "AI Tools for Forecasting & Decision Support", s3_7: "System Integration",

            // Experience Timeline
            exp1_title: "Abo Azzam Company — Site Engineer / Planning Engineer",
            exp1_date: "Jan 2025 – Apr 2025 • Taif, Saudi Arabia",
            exp1_d1: "Supervised construction activities and coordinated site works according to approved drawings.",
            exp1_d2: "Prepared daily and weekly reports for quantities, manpower, and progress.",
            exp1_d3: "Ensured compliance with safety regulations and quality standards.",
            exp1_d4: "Coordinated labor, subcontractors, and suppliers to support schedule requirements.",

            exp2_title: "Al-Saqr Al-Abyad Contracting Company — Planning Engineer (Roads & Infrastructure)",
            exp2_date: "Jun 2024 – Nov 2024 • Egypt",
            exp2_d1: "Prepared and updated detailed project schedules using Primavera P6.",
            exp2_d2: "Monitored progress and analyzed schedule deviations and productivity rates.",
            exp2_d3: "Developed Power BI dashboards to track project performance indicators.",
            exp2_d4: "Coordinated with surveying and site teams for layer handover and progress verification.",
            exp2_d5: "Supported PM team in reporting, planning updates, and decision support.",

            exp3_title: "General Contracting Company — Project Control & Planning Engineer (Roads Projects)",
            exp3_date: "Jan 2023 – Feb 2024 • Egypt",
            exp3_d1: "Planned and monitored road project schedules using Primavera P6 aligned with milestones.",
            exp3_d2: "Supervised execution of road layers (subgrade, base course, asphalt) with site & technical teams.",
            exp3_d3: "Analyzed delays and variances between planned and actual progress to support corrective actions.",
            exp3_d4: "Updated BOQ quantities based on actual progress and prepared progress reports.",
            exp3_d5: "Analyzed project data using SQL Server and built Power BI dashboards to track KPIs.",
            exp3_d6: "Supported cost control and performance analysis to improve project efficiency.",

            exp4_title: "Engineering Contracting Office — Site Engineer (Construction Projects)",
            exp4_date: "Apr 2021 – Dec 2022 • Egypt",
            exp4_d1: "Supervised works in accordance with structural and architectural drawings.",
            exp4_d2: "Followed reinforced concrete works (formwork, reinforcement, concrete casting).",
            exp4_d3: "Coordinated drawings and site activities to ensure quality compliance.",
            exp4_d4: "Prepared daily and weekly quantity and progress reports.",
            exp4_d5: "Ensured compliance with quality and safety requirements on site.",

            // Education Details
            edu_degree: "Bachelor’s Degree in Civil Engineering",
            edu_year: "Graduation Year: <strong>2021</strong>",
            edu_uni: "New Cairo Academy for Engineering and Technology",
            edu_dept: "Department: Civil Engineering",
            edu_proj: "Graduation Project: Recycling of Concrete Materials — Grade: <strong>Excellent</strong>",

            // Personal
            p_addr_v: "Makkah, Kingdom of Saudi Arabia",
            p_ms_v: "Single",
            p_mil_v: "Completed",
            p_cit_v: "Egyptian",

            // Courses
            c1: "<strong>Primavera P6 Planning Course</strong> — Civil Academy (2023)",
            c2: "<strong>AutoCAD Civil 3D</strong> — Civil Academy (2023)",
            c3: "<strong>Power BI Course</strong> — YouTube (Data Preparation, Modeling, Dashboards) (2023–2024)",
            c4: "<strong>Power BI Data Analysis Course</strong> — Coursera (2026)",
            c5: "<strong>Project Management Course</strong> — University of California, Irvine (UCI) (2026)",
            c6: "<strong>Occupational Safety and Health Fundamentals (OSHA)</strong> — Coursera (2026)",
            c7: "<strong>Earned Value Management (EVM) Course</strong> — Coursera (2026)",

            // Certificates
            cert1_t: "Introduction to OSHA: Safety Standards and Compliance",
            cert1_d: "Coursera • Issue Date: Jan 2026 • Credential ID: FZFCVTIGY3FS",

            cert2_t: "Project Management: Foundations for Success",
            cert2_d: "University of California, Irvine • Credential ID: PYPLWEJPZ22X",

            cert3_t: "Project Management: Control using the Earned Value and Risk",
            cert3_d: "Politecnico di Milano • Issue Date: Jan 2026 • Credential ID: C8FJ7WAQRCXI"
        },
        ar: {
            theme_btn: "المظهر",
            name_full: "فتحي خليفة محمد",
            title_short: "مهندس تخطيط | مهندس طرق",
            nav_about: "عني",
            nav_skills: "المهارات",
            nav_exp: "الخبرة",
            nav_edu: "التعليم",
            nav_cert: "الشهادات",
            nav_cv: "السيرة الذاتية",
            nav_contact: "تواصل معي",
            hero_kicker: "ملف أعمال احترافي",
            hero_title: "مهندس تخطيط | مهندس طرق | مهتم بالسلامة | تحليل بيانات و Power BI",
            hero_intro: "مهندس مدني متخصص في تخطيط البنية التحتية للطرق والتحكم بالمشاريع، مع خلفية قوية في تحليل البيانات، وإدارة الجدول الزمني، وأداء التكلفة. أعمل على دعم البناء المستدام بدمج التكنولوجيا، وتحليل البيانات، والتخطيط الذكي في مشاريع الطرق لرفع الكفاءة، وتقليل الأثر البيئي، وتقديم بنية تحتية شاملة تخدم الجميع.",
            hero_cta_exp: "شاهد الخبرة",
            hero_cta_contact: "تواصل معي",
            hero_cta_download: "تحميل السيرة الذاتية",
            m1: "تخطيط وجدولة",
            m2: "لوحات وتقارير",
            m3: "بيانات وأتمتة",
            quick_title: "معلومات سريعة",
            loc_lbl: "الموقع:",
            email_lbl: "البريد:",
            wa_lbl: "واتساب (السعودية):",
            pill_cv: "عرض السيرة الذاتية",
            pill_cert: "الشهادات",
            pill_contact: "تواصل",
            availability: "متاح لدعم التخطيط، والتحكم بالمشاريع، وتقارير الأداء، ودعم القرارات المستندة للبيانات.",
            about_title: "ملخص الملف الشخصي",
            about_sub: "انضباط في التخطيط + وضوح في البيانات + عقلية سلامة — التركيز على تسليم موثوق للمشاريع.",
            about_body: "أنا مهندس مدني متخصص في تخطيط البنية التحتية للطرق والتحكم بالمشاريع، مع خلفية قوية في تحليل البيانات، وإدارة الجدول الزمني، وأداء التكلفة. أهدف لدعم البناء المستدام بدمج التكنولوجيا، وتحليل البيانات، والتخطيط الذكي في مشاريع الطرق لرفع الكفاءة، وتقليل الأثر البيئي، وتقديم بنية تحتية شاملة تخدم جميع المستخدمين. أؤمن بأن نجاح المشروع يعتمد على التزام وتعاون جميع المعنيين، وليس فقط فرق التشغيل أو التنفيذ. وبالمثل، المسؤولية البيئية هي جهد مشترك يمتد إلى ما بعد قطاع البناء ليشمل المخططين، والجهات التنظيمية، وصناع القرار، والمجتمع.",
            h1_t: "التركيز الأساسي",
            h1_d: "طرق وبنية تحتية • تخطيط • تحكم بالمشاريع",
            h2_t: "أدوات البيانات",
            h2_d: "Power BI • Excel • SQL Server • Python • n8n",
            h3_t: "العقلية",
            h3_d: "سلامة • جودة • توثيق • تحسين مستمر",
            vision_title: "الرؤية المهنية",
            vision_body: "أسعى لفرصة في بيئة احترافية حيث يمكنني تطوير مهاراتي الهندسية والتقنية باستمرار، وتطبيق نهج مستند للبيانات ومستدام في مشاريع البنية التحتية، والعمل بنزاهة وتميز فني، والمساهمة في تقديم بنية تحتية ذكية ومستدامة ومرنة.",
            sust_title: "الاستدامة وشبكات الطرق الشاملة",
            sust_1: "خدمة جميع المستخدمين (مركبات، مشاة، نقل عام، ذوي الإعاقة).",
            sust_2: "دمج المساحات الخضراء والحلول المسؤولة بيئيًا.",
            sust_3: "تقليل تكاليف التشغيل والأثر البيئي على المدى الطويل.",
            sust_4: "تحسين جودة الحياة والأمان في المناطق الحضرية.",
            skills_title: "المهارات التقنية",
            skills_sub: "مجموعة مهارات عملية مبنية للتنفيذ، والتحكم، وتقارير تدعم القرار.",
            s1: "التخطيط والتحكم بالمشاريع",
            s2: "تحليل البيانات والتقارير",
            s3: "قواعد البيانات والأتمتة",
            exp_title: "الخبرة المهنية",
            exp_sub: "الأدوار والمسؤوليات بناءً على سيرتك الذاتية.",
            edu_title: "التعليم والتفاصيل",
            edu_sub: "التعليم، اللغات، والتفاصيل الشخصية.",
            edu_block_title: "التعليم",
            lang_title: "اللغات",
            lang_1: "العربية: اللغة الأم",
            lang_2: "النجيليزية: محادثة",
            lang_3: "الألمانية: أساسيات",
            personal_title: "بيانات شخصية",
            p_addr: "العنوان:",
            p_dob: "تاريخ الميلاد:",
            p_ms: "الحالة الاجتماعية:",
            p_mil: "الموقف العسكري:",
            p_cit: "الجنسية:",
            courses_title: "الدورات التدريبية",
            courses_sub: "المسار التدريبي والتعليمي.",
            cert_title: "الشهادات المهنية",
            cert_desc: "الشهادات مضمنة كملف PDF داخل الموقع. يمكنك فتح الملف أو تحميله.",
            cert_open: "فتح ملف الشهادات",
            cert_download: "تحميل PDF",
            cv_title: "السيرة الذاتية",
            cv_desc: "عرض السيرة الذاتية داخل الموقع أو تحميلها.",
            cv_download: "تحميل السيرة الذاتية",
            cv_open: "فتح في نافذة جديدة",
            contact_title: "تواصل معي",
            contact_sub: "الواتساب والبريد الإلكتروني هما أسرع وسيلة للوصول إلي.",
            f_name: "الاسم الكامل",
            f_email: "البريد الإلكتروني",
            f_msg: "الرسالة",
            send: "إرسال الرسالة",
            form_note: "هذا النموذج واجهة أمامية فقط. استخدم واتساب أو البريد للتواصل المباشر.",
            direct_title: "تواصل مباشر",
            social_title: "تواصل اجتماعي",
            social_note: "استبدل الروابط المؤقتة عند الجاهزية.",
            footer_copy: "فتحي خليفة محمد. جميع الحقوق محفوظة.",
            back_top: "العودة للأعلى ↑",

            s1_1: "Primavera P6", s1_2: "Microsoft Project", s1_3: "التحكم بالمشروع وتتبع التقدم", s1_4: "تحليل الأداء", s1_5: "التحكم بالتكلفة (Cost Control)", s1_6: "إدارة جداول الكميات (BOQ)", s1_7: "المستخلصات الجارية والختامية", s1_8: "التوثيق الاحترافي",
            s2_1: "Excel (متقدم)", s2_2: "Power BI", s2_3: "تطوير لوحات المعلومات (Dashboards)", s2_4: "تصوير البيانات (Data Visualization)", s2_5: "التحقق من صحة ودقة البيانات", s2_6: "مقارنة المخطط بالفعلي (KPIs)", s2_7: "تحليل القيمة المكتسبة (EVM)",
            s3_1: "SQL Server", s3_2: "استخراج وتنظيف البيانات", s3_3: "الأتمتة باستخدام Python", s3_4: "أتمتة سير العمل (n8n)", s3_5: "Web Scraping", s3_6: "أدوات الذكاء الاصطناعي للتنبؤ ودعم القرار", s3_7: "تكامل الأنظمة (Integration)",

            exp1_title: "شركة أبو عزام — مهندس موقع / مهندس تخطيط",
            exp1_date: "يناير 2025 – أبريل 2025 • الطائف، السعودية",
            exp1_d1: "الإشراف على أنشطة البناء وتنسيق أعمال الموقع وفقًا للمخططات المعتمدة.",
            exp1_d2: "إعداد تقارير يومية وأسبوعية للكميات، والعمالة، والتقدم.",
            exp1_d3: "ضمان الامتثال للوائح السلامة ومعايير الجودة.",
            exp1_d4: "تنسيق العمالة، والمقاولين من الباطن، والموردين لدعم متطلبات الجدول الزمني.",

            exp2_title: "شركة الصقر الأبيض للمقاولات — مهندس تخطيط (طرق وبنية تحتية)",
            exp2_date: "يونيو 2024 – نوفمبر 2024 • مصر",
            exp2_d1: "إعداد وتحديث الجداول الزمنية التفصيلية للمشروع باستخدام Primavera P6.",
            exp2_d2: "مراقبة التقدم وتحليل انحرافات الجدول الزمني ومعدلات الإنتاجية.",
            exp2_d3: "تطوير لوحات Power BI لتتبع مؤشرات أداء المشروع.",
            exp2_d4: "التنسيق مع فرق المساحة والموقع لتسليم الطبقات والتحقق من التقدم.",
            exp2_d5: "دعم فريق إدارة المشروع في التقارير، وتحديثات التخطيط، ودعم القرار.",

            exp3_title: "الشركة العامة للمقاولات — مهندس تخطيط وتحكم بالمشروع (مشاريع طرق)",
            exp3_date: "يناير 2023 – فبراير 2024 • مصر",
            exp3_d1: "تخطيط ومراقبة جداول مشاريع الطرق باستخدام Primavera P6 بما يتماشى مع المعالم الرئيسية.",
            exp3_d2: "الإشراف على تنفيذ طبقات الطريق (الأساس، الأساس المساعد، الأسفلت) مع الفرق الفنية.",
            exp3_d3: "تحليل التأخيرات والانحرافات بين التقدم المخطط والفعلي لدعم الإجراءات التصحيحية.",
            exp3_d4: "تحديث كميات BOQ بناءً على التقدم الفعلي وإعداد تقارير الإنجاز.",
            exp3_d5: "تحليل بيانات المشروع باستخدام SQL Server وبناء لوحات Power BI لتتبع KPIs.",
            exp3_d6: "دعم التحكم بالتكلفة وتحليل الأداء لتحسين كفاءة المشروع.",

            exp4_title: "مكتب مقاولات هندسية — مهندس موقع (مشاريع إنشائية)",
            exp4_date: "أبريل 2021 – ديسمبر 2022 • مصر",
            exp4_d1: "الإشراف على الأعمال وفقًا للمخططات الإنشائية والمعمارية.",
            exp4_d2: "متابعة أعمال الخرسانة المسلحة (النجارة، الحدادة، الصب).",
            exp4_d3: "تنسيق المخططات وأنشطة الموقع لضمان الامتثال للجودة.",
            exp4_d4: "إعداد التقارير اليومية والأسبوعية للكميات والتقدم.",
            exp4_d5: "ضمان الامتثال لمتطلبات الجودة والسلامة في الموقع.",

            edu_degree: "درجة البكالوريوس في الهندسة المدنية",
            edu_year: "سنة التخرج: <strong>2021</strong>",
            edu_uni: "أكاديمية القاهرة الجديدة للهندسة والتكنولوجيا",
            edu_dept: "القسم: هندسة مدنية",
            edu_proj: "مشروع التخرج: إعادة تدوير مواد الخرسانة — التقدير: <strong>امتياز</strong>",

            p_addr_v: "مكة المكرمة، المملكة العربية السعودية",
            p_ms_v: "أعزب",
            p_mil_v: "معافى / أتم الخدمة",
            p_cit_v: "مصري",

            c1: "<strong>دورة تخطيط Primavera P6</strong> — أكاديمية السيفيل (2023)",
            c2: "<strong>AutoCAD Civil 3D</strong> — أكاديمية السيفيل (2023)",
            c3: "<strong>دورة Power BI</strong> — يوتيوب (إعداد البيانات، النمذجة، اللوحات) (2023–2024)",
            c4: "<strong>دورة تحليل بيانات Power BI</strong> — Coursera (2026)",
            c5: "<strong>دورة إدارة المشاريع</strong> — جامعة كاليفورنيا، إرفاين (UCI) (2026)",
            c6: "<strong>أساسيات السلامة والصحة المهنية (OSHA)</strong> — Coursera (2026)",
            c7: "<strong>دورة إدارة القيمة المكتسبة (EVM)</strong> — Coursera (2026)",

            cert1_t: "مقدمة في OSHA: معايير السلامة والامتثال",
            cert1_d: "Coursera • تاريخ الإصدار: يناير 2026 • معرف الاعتماد: FZFCVTIGY3FS",

            cert2_t: "إدارة المشاريع: أسس النجاح",
            cert2_d: "جامعة كاليفورنيا، إرفاين (UCI) • معرف الاعتماد: PYPLWEJPZ22X",

            cert3_t: "إدارة المشاريع: التحكم باستخدام القيمة المكتسبة والمخاطر",
            cert3_d: "جامعة بوليتكنيكو دي ميلانو • تاريخ الإصدار: يناير 2026 • معرف الاعتماد: C8FJ7WAQRCXI"
        }
    };

    /* =========================================
       3. FUNCTIONS
       ========================================= */

    // --- LANGUAGE HANDLER ---
    let currentLang = localStorage.getItem('lang') || 'en';

    const updateLanguage = (lang) => {
        // 1. Set DOM attributes
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        currentLang = lang;
        localStorage.setItem('lang', lang);

        // 2. Update Button Text
        if (langText) langText.textContent = lang === 'en' ? 'AR' : 'EN';

        // 3. Update Text Content
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                // Use innerHTML to support <strong> tags in content
                el.innerHTML = translations[lang][key];
            }
        });

        // 4. Update Placeholders
        const formName = document.getElementById('fullName');
        const formEmail = document.getElementById('email');
        const formMsg = document.getElementById('message');

        if (formName) formName.placeholder = lang === 'ar' ? 'اسمك' : 'Your name';
        if (formEmail) formEmail.placeholder = lang === 'ar' ? 'بريدك الإلكتروني' : 'you@example.com';
        if (formMsg) formMsg.placeholder = lang === 'ar' ? 'حدثني عن مشروعك...' : 'Tell me about your project...';
    };

    // --- THEME HANDLER ---
    const updateTheme = (theme) => {
        if (theme === 'light') {
            body.classList.remove('theme-dark');
            body.classList.add('theme-light');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('theme-light');
            body.classList.add('theme-dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    // --- INIT ---
    // Initial Language
    updateLanguage(currentLang);

    // Initial Theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        updateTheme(savedTheme);
    } else {
        // Default is provided in HTML class="theme-dark", so just ensure variable matches
        if (body.classList.contains('theme-dark')) {
            localStorage.setItem('theme', 'dark');
        }
    }

    // Footer Year
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    /* =========================================
       4. EVENT LISTENERS
       ========================================= */

    // Language Toggle
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'ar' : 'en';
            updateLanguage(newLang);
        });
    }

    // Theme Toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = body.classList.contains('theme-dark');
            updateTheme(isDark ? 'light' : 'dark');
        });
    }

    // Mobile Menu Toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('open');
            // No active class needed for navToggle in new CSS, but we keep aria-expanded
        });

        // Close menu on link click
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Scroll Reveal Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    /* =========================================
       5. CUSTOM ANIMATIONS (KPIs & Skills)
       ========================================= */

    // --- SKILLS PROGRESS ---
    // 1. Reset widths to 0 initially
    const progressBars = document.querySelectorAll('.fill');
    progressBars.forEach(bar => {
        bar.dataset.width = bar.style.width; // Store original width
        bar.style.width = '0';
    });

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                bar.style.width = bar.dataset.width; // Restore width to trigger transition
                skillObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => skillObserver.observe(bar));

    // --- KPI COUNTERS ---
    const counters = document.querySelectorAll('.kpi-number');

    const kpiObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const targetText = counter.innerText;
                const targetValue = parseInt(targetText.replace(/\D/g, '')); // Extract number
                const suffix = targetText.replace(/[0-9]/g, ''); // Extract suffix (+, %)

                let start = 0;
                const duration = 2000;
                const startTime = performance.now();

                const animateCount = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const easeOut = 1 - Math.pow(1 - progress, 3); // Cubic ease out

                    const currentVal = Math.floor(easeOut * targetValue);
                    counter.innerText = currentVal + suffix;

                    if (progress < 1) {
                        requestAnimationFrame(animateCount);
                    } else {
                        counter.innerText = targetText; // Ensure exact final value
                    }
                };

                requestAnimationFrame(animateCount);
                kpiObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => kpiObserver.observe(counter));
});
