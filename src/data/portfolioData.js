export const portfolioData = {
  en: {
    personal: {
      name: "Ganna Mohamed Afifi",
      nameAr: "جنة محمد عفيفي",
      role: "UI/UX Designer & Front-End Developer",
      tagline: "Bridging human-centered design with clean React.js engineering & Artificial Intelligence.",
      email: "gannaafifi1582004@gmail.com",
      phone: "+20 112 740 9157",
      phoneClean: "+201127409157",
      location: "Al-Maadi, Cairo, Egypt",
      status: "Open to Opportunities & Creative Collaboration",
      educationShort: "B.Sc. CS (AI Major) @ Thebes Academy (2022-2026)",
      socials: {
        linkedin: "https://www.linkedin.com/in/ganna-afifi",
        behance: "https://www.behance.net/gannaafifi",
        github: "https://github.com/gannaafifi",
        email: "mailto:gannaafifi1582004@gmail.com"
      }
    },
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      hireMe: "Hire Me"
    },
    hero: {
      greeting: "Hello, I am",
      headlinePrefix: "UI/UX Designer",
      headlineConnector: "&",
      headlineSuffix: "Front-End Developer",
      badge: "AI Major • React.js • UI/UX Specialist",
      bio: "Computer Science (AI Major) student at Thebes Academy. I craft accessible, delightful user experiences backed by rigorous user research, wireframing, and production-ready React.js code.",
      ctaPrimary: "Explore Projects",
      ctaSecondary: "Get in Touch",
      techBadge: "Currently building at DEPI"
    },
    about: {
      badge: "Get to know me",
      title: "Where Intelligent Systems Meet Exceptional UX",
      paragraph1: "I am a Computer Science student majoring in Artificial Intelligence at Thebes Academy (2022–2026), deeply passionate about the intersection of design psychology and software engineering.",
      paragraph2: "My workflow spans from deep exploratory user research, empathy mapping, and wireframing in Figma to architecting scalable, responsive React.js web applications styled with Tailwind CSS. Having an AI foundation enables me to design systems that are not only aesthetically sleek but also logically sound and user-centric.",
      paragraph3: "Currently expanding my technical horizons as a Front-End Developer Trainee at the Digital Egypt Pioneers Initiative (DEPI) while collaborating on high-impact design projects.",
      highlights: [
        {
          title: "Artificial Intelligence Focus",
          description: "Applying algorithmic logic and machine learning insights to optimize UX architecture and platform flows.",
          icon: "Sparkles"
        },
        {
          title: "Research-Led Design",
          description: "Grounding every design in usability testing, user interviews, persona creation, and iterative wireframing.",
          icon: "Layout"
        },
        {
          title: "Production React Code",
          description: "Translating Figma components into modular, semantic, and performant React.js components with Tailwind CSS.",
          icon: "Code2"
        }
      ],
      stats: [
        { number: "2026", label: "Graduation Year" },
        { number: "3+", label: "Featured Case Studies" },
        { number: "100%", label: "User-Centered Logic" },
        { number: "10+", label: "Modern Tools & Stacks" }
      ]
    },
    skills: {
      badge: "Technical & Creative Toolkit",
      title: "Skills & Capabilities",
      subtitle: "A balanced hybrid skillset combining rigorous human-centered UX methodology with modern web engineering.",
      categories: [
        {
          id: "ui-ux",
          name: "UI/UX Design",
          icon: "Palette",
          description: "Creating empathetic, intuitive interfaces based on empirical user research and design systems.",
          skills: [
            { name: "Wireframing", level: "Advanced" },
            { name: "Prototyping", level: "Advanced" },
            { name: "Usability Testing", level: "Proficient" },
            { name: "User Research", level: "Proficient" },
            { name: "Market Research", level: "Advanced" },
            { name: "User Flows & Journey Maps", level: "Advanced" },
            { name: "Information Architecture", level: "Proficient" },
            { name: "Design Systems", level: "Proficient" }
          ]
        },
        {
          id: "frontend",
          name: "Front-End & Programming",
          icon: "Code",
          description: "Building responsive, modern, and accessible web experiences with scalable architecture.",
          skills: [
            { name: "React.js", level: "Proficient" },
            { name: "JavaScript (ES6+)", level: "Advanced" },
            { name: "HTML5 & Semantic Web", level: "Advanced" },
            { name: "CSS3 & Flex/Grid", level: "Advanced" },
            { name: "Tailwind CSS", level: "Advanced" },
            { name: "Python", level: "Proficient" },
            { name: "C++", level: "Intermediate" },
            { name: "Dart", level: "Familiar" }
          ]
        },
        {
          id: "tools",
          name: "Tools & Workflow",
          icon: "Cpu",
          description: "Industry-standard design, collaboration, and version control tools.",
          skills: [
            { name: "Figma", level: "Advanced" },
            { name: "FigJam", level: "Advanced" },
            { name: "Miro", level: "Proficient" },
            { name: "Notion", level: "Proficient" },
            { name: "Git", level: "Proficient" },
            { name: "GitHub", level: "Proficient" },
            { name: "VS Code", level: "Advanced" },
            { name: "Google Forms", level: "Proficient" }
          ]
        }
      ]
    },
    projects: {
      badge: "Selected Works",
      title: "Featured Case Studies & Projects",
      subtitle: "A showcase of end-to-end design research, interactive prototypes, and front-end implementations.",
      filterAll: "All Projects",
      filters: [
        { key: "all", label: "All" },
        { key: "ui-ux", label: "UI/UX Design" },
        { key: "react", label: "React.js" },
        { key: "ai", label: "AI & Data" }
      ],
      viewCaseStudy: "View Details",
      viewPrototype: "Prototype",
      closeModal: "Close Details",
      items: [
        {
          id: "dermalyze",
          title: "Dermalyze - Skin Cancer Detection Platform",
          type: "Graduation Project",
          categories: ["ui-ux", "react", "ai"],
          badge: "Graduation Project • AI Powered",
          shortDescription: "An AI-powered clinical web platform for early skin cancer screening, emphasizing high accessibility, clear diagnostics, and simple clinician-patient workflows.",
          fullDescription: "Dermalyze bridges Artificial Intelligence computer vision with an accessible medical-grade web interface. Serving as my graduation project, it addresses the fear and friction patients experience during preliminary dermatological evaluations. The platform allows instant lesion photo uploads, provides AI risk assessments with explainable indicators, and offers seamless booking with dermatologists.",
          role: "Lead UI/UX Designer & React.js Developer",
          tools: ["Figma", "FigJam", "Miro", "React.js", "Tailwind CSS", "Python AI API"],
          deliverables: [
            "Clinical user flows and patient journey maps",
            "Accessible color palette complying with WCAG AAA contrast",
            "Low-fidelity wireframing and high-fidelity interactive Figma prototype",
            "Interactive React.js web dashboard with real-time analysis mockup"
          ],
          metrics: [
            { label: "Design System", value: "30+ Components" },
            { label: "Target Audience", value: "Patients & Clinicians" },
            { label: "AI Integration", value: "Computer Vision API" }
          ],
          accentColor: "from-rose-500 to-indigo-600"
        },
        {
          id: "food-delivery",
          title: "Food Delivery App",
          type: "Route Training Project",
          categories: ["ui-ux"],
          badge: "Route UX Training",
          shortDescription: "Comprehensive mobile UX design and user journey mapping focusing on eliminating checkout friction and personalizing meal recommendations.",
          fullDescription: "Designed during the Route UI/UX program, this case study tackled common pain points in modern on-demand food delivery: confusing cart modifications, hidden delivery fees, and complex tracking. Through user interviews and competitive analysis, I designed an intuitive 3-step checkout flow, real-time visual driver tracker, and dietary filter widgets.",
          role: "UX Researcher & Product Designer",
          tools: ["Figma", "Miro", "Notion"],
          deliverables: [
            "Competitor benchmarking across 4 major delivery apps",
            "User personas (Busy Professional, Budget Student)",
            "Empathy maps and end-to-end task flows",
            "Interactive mobile prototype with micro-interactions"
          ],
          metrics: [
            { label: "Checkout Steps", value: "Reduced to 3" },
            { label: "Tested Users", value: "8 Testers" },
            { label: "Prototype Screens", value: "24 Screens" }
          ],
          accentColor: "from-amber-500 to-orange-600"
        },
        {
          id: "reading-app",
          title: "Reading & Book Community App",
          type: "Route Training Project",
          categories: ["ui-ux"],
          badge: "Route UX Training",
          shortDescription: "Market research, user survey analysis, wireframing, and iterative usability testing to build a distraction-free digital reading companion.",
          fullDescription: "Created to help avid readers track their goals, annotate texts effortlessly, and connect with reading circles without the clutter of conventional social media. Conducted extensive quantitative surveys via Google Forms, followed by low-fidelity paper wireframes and high-fidelity interactive Figma prototypes validated through qualitative user feedback sessions.",
          role: "UI/UX Designer & Researcher",
          tools: ["Figma", "FigJam", "Google Forms"],
          deliverables: [
            "Quantitative survey analysis with 40+ reader responses",
            "Information architecture and reading mode customizer",
            "Wireframes & design system for typography and dark-mode reading",
            "Interactive testing sessions identifying navigation bottlenecks"
          ],
          metrics: [
            { label: "Surveyed Users", value: "40+ Readers" },
            { label: "Usability Score", value: "92% Task Success" },
            { label: "Custom Themes", value: "Sepia / Dark / OLED" }
          ],
          accentColor: "from-emerald-500 to-teal-600"
        }
      ]
    },
    experience: {
      badge: "Trajectory & Milestones",
      title: "Experience & Education",
      subtitle: "My continuous journey in computer science, product design, and modern front-end web development.",
      timeline: [
        {
          period: "08/2026 - Present",
          title: "Front-End Developer Trainee",
          company: "DEPI (Digital Egypt Pioneers Initiative)",
          type: "Professional Traineeship",
          description: "Enrolled in an intensive government-backed initiative mastering cutting-edge front-end engineering.",
          points: [
            "Building dynamic, responsive web applications utilizing React.js and modern state management.",
            "Architecting reusable component libraries with clean props interfaces and Tailwind CSS styling.",
            "Collaborating on agile workflows with Git and GitHub version control."
          ],
          tags: ["React.js", "JavaScript ES6+", "Tailwind CSS", "Git", "Clean Code"],
          active: true
        },
        {
          period: "06/2025 - 09/2025",
          title: "UI/UX Design Fundamentals Trainee",
          company: "Route Academy",
          type: "Design Intensive",
          description: "Hands-on immersion in user experience methodologies, design systems, and usability heuristics.",
          points: [
            "Conducted user research, stakeholder interviews, and competitive analysis for real-world scenarios.",
            "Built wireframes, low-to-high fidelity prototypes, and micro-interactions in Figma.",
            "Conducted usability testing sessions and translated feedback into iterative UX refinements."
          ],
          tags: ["Figma", "FigJam", "Miro", "Usability Testing", "Design Systems"],
          active: false
        },
        {
          period: "2022 - 2026",
          title: "B.Sc. in Computer Science (Artificial Intelligence Major)",
          company: "Thebes Academy",
          type: "Higher Education",
          description: "Comprehensive undergraduate degree bridging computer science fundamentals with advanced AI and software engineering.",
          points: [
            "Specialized in Artificial Intelligence algorithms, machine learning concepts, and data structures.",
            "Studied object-oriented programming (C++, Python), databases, and web architectures.",
            "Graduation Project: Dermalyze — AI Skin Cancer Detection Web Platform."
          ],
          tags: ["Computer Science", "Artificial Intelligence", "Python", "C++", "Software Engineering"],
          active: false
        }
      ]
    },
    contact: {
      badge: "Get in touch",
      title: "Let's Collaborate On Something Meaningful",
      subtitle: "Whether you have an upcoming project, are looking for a UI/UX & React specialist, or just want to say hi, my inbox is always open.",
      emailLabel: "Email Address",
      phoneLabel: "Phone / WhatsApp",
      locationLabel: "Location",
      copyEmail: "Copy",
      copiedEmail: "Copied!",
      form: {
        nameLabel: "Your Name",
        namePlaceholder: "e.g. Sarah Jenkins",
        emailLabel: "Your Email",
        emailPlaceholder: "e.g. sarah@example.com",
        subjectLabel: "Subject",
        subjectPlaceholder: "Project inquiry / Collaboration",
        messageLabel: "Message",
        messagePlaceholder: "Tell me about your idea, project scope, or timeline...",
        submitBtn: "Send Message",
        sendingBtn: "Sending...",
        successTitle: "Message Sent Successfully!",
        successMessage: "Thank you for reaching out, Ganna will respond to you shortly.",
        errorTitle: "Please complete all fields",
        sendAnother: "Send Another Message"
      }
    },
    footer: {
      quote: "Design with purpose. Code with passion. Evolve with intelligence.",
      rights: "All rights reserved.",
      backToTop: "Back to Top",
      designedWith: "Designed in Figma & Developed in React.js by Ganna Afifi"
    }
  },
  ar: {
    personal: {
      name: "جنة محمد عفيفي",
      nameAr: "جنة محمد عفيفي",
      role: "مصممة واجهات وتجربة المستخدم & مطورة واجهات أمامية",
      tagline: "أدمج بين التصميم المتمحور حول المستخدم، هندسة كود React.js النظيف، وخلفية الذكاء الاصطناعي.",
      email: "gannaafifi1582004@gmail.com",
      phone: "+20 112 740 9157",
      phoneClean: "+201127409157",
      location: "المعادي، القاهرة، مصر",
      status: "متاحة لفرص العمل والمشاريع الإبداعية",
      educationShort: "بكالوريوس علوم الحاسب (ذكاء اصطناعي) • أكاديمية طيبة (2022-2026)",
      socials: {
        linkedin: "https://www.linkedin.com/in/ganna-afifi",
        behance: "https://www.behance.net/gannaafifi",
        github: "https://github.com/gannaafifi",
        email: "mailto:gannaafifi1582004@gmail.com"
      }
    },
    nav: {
      about: "عنّي",
      skills: "المهارات",
      projects: "المشاريع",
      experience: "الخبرة والتعليم",
      contact: "تواصل معي",
      hireMe: "وظفني"
    },
    hero: {
      greeting: "مرحباً، أنا",
      headlinePrefix: "مصممة واجهات وتجربة المستخدم",
      headlineConnector: "و",
      headlineSuffix: "مطورة React.js",
      badge: "تخصص ذكاء اصطناعي • React.js • خبيرة UI/UX",
      bio: "طالبة علوم حاسب (تخصص ذكاء اصطناعي) في أكاديمية طيبة. أصمم تجارب رقمية سلسة وجذابة مدعومة بأبحاث المستخدمين، المخططات الهيكلية (Wireframes)، وبناء واجهات ويب تفاعلية عالية الأداء باستخدام React.js.",
      ctaPrimary: "استكشف المشاريع",
      ctaSecondary: "تواصل معي",
      techBadge: "أتدرب حالياً في مبادرة رواد مصر الرقمية (DEPI)"
    },
    about: {
      badge: "نبذة عني",
      title: "حيث تلتقي النظم الذكية مع التصميم الرقمي الاستثنائي",
      paragraph1: "أنا طالبة علوم حاسب متخصصة في الذكاء الاصطناعي بأكاديمية طيبة (2022–2026)، وشغوفة بالدمج بين سيكولوجية المستخدم وهندسة البرمجيات الحديثة.",
      paragraph2: "تغطي دورة عملي كامل مراحل المنتج: بدءاً من أبحاث المستخدمين المعمقة ورسم خرائط التعاطف في Figma وFigJam، وصولاً إلى بناء تطبيقات ويب تفاعلية متجاوبة وعالية الأداء باستخدام React.js وTailwind CSS. تمنحني خلفيتي في الذكاء الاصطناعي قدرة فريدة على تصميم أنظمة ليست فقط جذابة بصرياً، بل منطقية وفعالة للمستخدمين.",
      paragraph3: "أصقل مهاراتي التقنية حالياً كمتدربة في تطوير الواجهات الأمامية ضمن مبادرة رواد مصر الرقمية (DEPI) التابعة لوزارة الاتصالات وتكنولوجيا المعلومات.",
      highlights: [
        {
          title: "خلفية الذكاء الاصطناعي",
          description: "تطبيق التفكير الخوارزمي والرؤية التحليلية لبناء هياكل تجربة مستخدم ذكية وسريعة.",
          icon: "Sparkles"
        },
        {
          title: "تصميم مبني على الأبحاث",
          description: "تأسيس كل قرار تصميمي على اختبارات قابلية الاستخدام ومقابلات المستخدمين والمخططات الهيكلية.",
          icon: "Layout"
        },
        {
          title: "كود React نظيف واحترافي",
          description: "تحويل مكونات Figma بدقة إلى واجهات React.js قابلة لإعادة الاستخدام ومتوافقة مع أعلى معايير الويب.",
          icon: "Code2"
        }
      ],
      stats: [
        { number: "2026", label: "سنة التخرج" },
        { number: "+3", label: "دراسات حالة متكاملة" },
        { number: "100%", label: "تركيز على المستخدم" },
        { number: "+10", label: "أدوات وتقنيات حديثة" }
      ]
    },
    skills: {
      badge: "المهارات والأدوات",
      title: "المهارات والقدرات التقنية",
      subtitle: "مزيج متوازن يجمع بين منهجيات تصميم تجربة المستخدم وهندسة الواجهات الأمامية الحديثة.",
      categories: [
        {
          id: "ui-ux",
          name: "تصميم واجهات وتجربة المستخدم (UI/UX)",
          icon: "Palette",
          description: "ابتكار واجهات بديهية وسهلة الاستخدام ترتكز على دراسة سلوك المستخدم وأنظمة التصميم.",
          skills: [
            { name: "Wireframing (المخططات الهيكلية)", level: "متقدم" },
            { name: "Prototyping (النماذج التفاعلية)", level: "متقدم" },
            { name: "Usability Testing (اختبارات الاستخدام)", level: "متقن" },
            { name: "User Research (أبحاث المستخدمين)", level: "متقن" },
            { name: "Market Research (دراسة السوق)", level: "متقدم" },
            { name: "User Flows (مسارات المستخدم)", level: "متقدم" },
            { name: "Information Architecture (هندسة المعلومات)", level: "متقن" },
            { name: "Design Systems (أنظمة التصميم)", level: "متقن" }
          ]
        },
        {
          id: "frontend",
          name: "تطوير الواجهات الأمامية والبرمجة",
          icon: "Code",
          description: "بناء تطبيقات ويب متجاوبة، سريعة، وسلسة بأحدث التقنيات.",
          skills: [
            { name: "React.js", level: "متقن" },
            { name: "JavaScript (ES6+)", level: "متقدم" },
            { name: "HTML5 المعياري", level: "متقدم" },
            { name: "CSS3 & Flex/Grid", level: "متقدم" },
            { name: "Tailwind CSS", level: "متقدم" },
            { name: "Python", level: "متقن" },
            { name: "C++", level: "متوسط" },
            { name: "Dart", level: "معرفة جيدة" }
          ]
        },
        {
          id: "tools",
          name: "الأدوات وبيئة العمل",
          icon: "Cpu",
          description: "أحدث الأدوات المعتمدة في التصميم، التعاون وإدارة الإصدارات البرمجية.",
          skills: [
            { name: "Figma", level: "متقدم" },
            { name: "FigJam", level: "متقدم" },
            { name: "Miro", level: "متقن" },
            { name: "Notion", level: "متقن" },
            { name: "Git", level: "متقن" },
            { name: "GitHub", level: "متقن" },
            { name: "VS Code", level: "متقدم" },
            { name: "Google Forms", level: "متقن" }
          ]
        }
      ]
    },
    projects: {
      badge: "معرض الأعمال",
      title: "أبرز المشاريع ودراسات الحالة",
      subtitle: "نماذج حية لأبحاث تجربة المستخدم، النماذج التفاعلية، وتطبيقات الويب المطورة.",
      filterAll: "جميع المشاريع",
      filters: [
        { key: "all", label: "الكل" },
        { key: "ui-ux", label: "تصميم واجهات UI/UX" },
        { key: "react", label: "React.js" },
        { key: "ai", label: "ذكاء اصطناعي" }
      ],
      viewCaseStudy: "عرض التفاصيل",
      viewPrototype: "النموذج التفاعلي",
      closeModal: "إغلاق",
      items: [
        {
          id: "dermalyze",
          title: "Dermalyze - منصة الكشف المبكر عن سرطان الجلد",
          type: "مشروع التخرج",
          categories: ["ui-ux", "react", "ai"],
          badge: "مشروع التخرج • مدعوم بالذكاء الاصطناعي",
          shortDescription: "منصة ويب طبية مدعومة بنماذج الرؤية الحاسوبية للكشف المبكر عن سرطان الجلد، تركز على تسهيل رحلة الفحص للمرضى والأطباء بأعلى معايير الإتاحة وسهولة الوصول.",
          fullDescription: "يجمع مشروع درمالايز بين خوارزميات الذكاء الاصطناعي وتصميم واجهات طبية سهلة وبسيطة تخفف من قلق المريض أثناء الفحص الأولي للشامات والآفات الجلدية. يتضمن النظام إمكانية رفع الصور الفورية، تقديم تشخيص مبدئي واضح مع نسب الثقة، ولوحة تحكم للأطباء مع إمكانية حجز المواعيد الفورية.",
          role: "المصممة الرئيسية لتجربة الواجهة ومطورة React.js",
          tools: ["Figma", "FigJam", "Miro", "React.js", "Tailwind CSS", "Python AI API"],
          deliverables: [
            "تصميم مسارات المرضى والأطباء وخرائط رحلة المستخدم",
            "نظام ألوان مريح طبياً يتوافق مع معايير الوصول العالمية WCAG AAA",
            "مخططات هيكلية ونموذج تفاعلي عالي الدقة في Figma",
            "بناء واجهة المستخدم التفاعلية باستخدام React.js وTailwind CSS"
          ],
          metrics: [
            { label: "نظام التصميم", value: "30+ عنصر متناسق" },
            { label: "الجمهور المستهدف", value: "المرضى والأطباء" },
            { label: "تكامل الذكاء الاصطناعي", value: "Computer Vision API" }
          ],
          accentColor: "from-rose-500 to-indigo-600"
        },
        {
          id: "food-delivery",
          title: "تطبيق توصيل الطعام (Food Delivery App)",
          type: "مشروع تدريب أكاديمية راوت",
          categories: ["ui-ux"],
          badge: "تدريب راوت UI/UX",
          shortDescription: "تصميم شامل لتجربة مستخدم تطبيق الهاتف لطلب وتوصيل الطعام مع التركيز على تبسيط إجراءات الدفع وتخصيص التوصيات.",
          fullDescription: "صُمم هذا المشروع خلال التدريب في Route لمعالجة المشكلات الشائعة في تطبيقات التوصيل، مثل تعقيد تعديل سلة التسوق ورسوم التوصيل غير الواضحة. من خلال أبحاث المستخدمين والتحليل التنافسي، تم ابتكار تدفق طلب من 3 خطوات فقط، مع تتبع لحظي لسائق التوصيل وفلاتر ذكية للخيارات الغذائية.",
          role: "باحثة ومصممة تجربة المستخدم (UX Researcher & Designer)",
          tools: ["Figma", "Miro", "Notion"],
          deliverables: [
            "تحليل مقارن مع 4 تطبيقات توصيل رائدة في السوق",
            "تطوير شخصيات المستخدمين (Personas) وسيناريوهات الاستخدام",
            "خرائط التعاطف ومسارات إتمام الطلب",
            "نموذج تفاعلي متكامل للهواتف الذكية مع تفاعلات دقيقة"
          ],
          metrics: [
            { label: "خطوات الدفع", value: "تم اختصارها لـ 3" },
            { label: "المستخدمون المختبرون", value: "8 مستخدمين" },
            { label: "شاشات النموذج", value: "24 شاشة تفاعلية" }
          ],
          accentColor: "from-amber-500 to-orange-600"
        },
        {
          id: "reading-app",
          title: "تطبيق القراءة ومجتمع الكتب (Reading App)",
          type: "مشروع تدريب أكاديمية راوت",
          categories: ["ui-ux"],
          badge: "تدريب راوت UI/UX",
          shortDescription: "أبحاث سوقية واستبيانات مع مستخدمين حقيقيين، تلاها تصميم نماذج أولية واختبارات قابلية استخدام لخلق تجربة قراءة رقمية هادئة.",
          fullDescription: "يهدف التطبيق إلى مساعدة محبي الكتب في تتبع أهداف قراءتهم، تدوين الملاحظات والمقتطفات بسهولة، والتواصل مع أندية القراءة في بيئة خالية من مشتتات شبكات التواصل التقليدية. تضمن المشروع استبياناً كمياً عبر Google Forms واختبارات استخدام نوعية متكررة للوصول لأفضل تجربة قراءة.",
          role: "مصممة وباحثة تجربة المستخدم",
          tools: ["Figma", "FigJam", "Google Forms"],
          deliverables: [
            "تحليل نتائج استبيان شمل أكثر من 40 قارئاً نشطاً",
            "هيكلة المعلومات وخيارات تخصيص وضع القراءة",
            "مخططات أولية وتصميم الوضع الليلي وأوضاع تباين الورق",
            "جلسات اختبار قابلية الاستخدام لتجاوز صعوبات التنقل"
          ],
          metrics: [
            { label: "المستطلعون", value: "+40 قارئ" },
            { label: "معدل نجاح المهام", value: "92% في الاختبار" },
            { label: "أوضاع القراءة", value: "داكن / سيبيا / OLED" }
          ],
          accentColor: "from-emerald-500 to-teal-600"
        }
      ]
    },
    experience: {
      badge: "المسيرة والخبرات",
      title: "الخبرة المهنية والتعليم",
      subtitle: "محطات في رحلة شغفي بعلوم الحاسب وتصميم المنتجات وتطوير الويب الحديث.",
      timeline: [
        {
          period: "08/2026 - حتى الآن",
          title: "متدربة تطوير واجهات أمامية (Front-End Trainee)",
          company: "مبادرة رواد مصر الرقمية (DEPI)",
          type: "برنامج تدريبي احترافي",
          description: "تدريب مكثف تحت مظلة وزارة الاتصالات لتطوير حلول وواجهات ويب حديثة ومتقدمة.",
          points: [
            "تطوير تطبيقات ويب ديناميكية وتفاعلية باستخدام مكتبة React.js وإدارة الحالة الحديثة.",
            "بناء مكونات قابلة لإعادة الاستخدام مع تطبيق مبادئ التصميم المتجاوب باستخدام Tailwind CSS.",
            "العمل بنظام Git وGitHub للتحكم في الإصدارات والعمل الجماعي."
          ],
          tags: ["React.js", "JavaScript ES6+", "Tailwind CSS", "Git", "Clean Code"],
          active: true
        },
        {
          period: "06/2025 - 09/2025",
          title: "متدربة أساسيات تصميم واجهات وتجربة المستخدم",
          company: "أكاديمية راوت (Route)",
          type: "تدريب تصميم مكثف",
          description: "تدريب عملي متعمق على منهجيات تصميم تجربة المستخدم وتطوير أنظمة التصميم الحديثة.",
          points: [
            "إجراء أبحاث المستخدمين، مقابلات أصحاب المصلحة، وتحليل المنافسين لمشاريع واقعية.",
            "بناء النماذج الهيكلية والتفاعلية عالية ومنخفضة الدقة في Figma.",
            "إجراء اختبارات قابلية الاستخدام وتحويل التغذية الراجعة إلى تحسينات تصميمية مدروسة."
          ],
          tags: ["Figma", "FigJam", "Miro", "اختبارات الاستخدام", "أنظمة التصميم"],
          active: false
        },
        {
          period: "2022 - 2026",
          title: "بكالوريوس علوم الحاسب (تخصص الذكاء الاصطناعي)",
          company: "أكاديمية طيبة (Thebes Academy)",
          type: "تعليم جامعي",
          description: "دراسة أكاديمية شاملة تجمع بين أساسيات علوم الحاسب وتطبيقات الذكاء الاصطناعي المتقدمة وهندسة البرمجيات.",
          points: [
            "التخصص في خوارزميات الذكاء الاصطناعي، تعلم الآلة، وهياكل البيانات.",
            "دراسة البرمجة الكائنية (C++, Python)، قواعد البيانات، وتصميم وهندسة البرمجيات.",
            "مشروع التخرج: منصة درمالايز (Dermalyze) للكشف المبكر عن سرطان الجلد بالذكاء الاصطناعي."
          ],
          tags: ["علوم الحاسب", "ذكاء اصطناعي", "Python", "C++", "هندسة البرمجيات"],
          active: false
        }
      ]
    },
    contact: {
      badge: "تواصل معي",
      title: "فلنصنع معاً تجربة رقمية استثنائية",
      subtitle: "سواء كان لديك مشروع جديد، أو تبحث عن متخصصة في UI/UX وتطوير React، أو تود فقط إلقاء التحية، يسعدني دائماً تواصلك.",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف / واتساب",
      locationLabel: "الموقع",
      copyEmail: "نسخ",
      copiedEmail: "تم النسخ!",
      form: {
        nameLabel: "الاسم الكريم",
        namePlaceholder: "مثال: أحمد محمد",
        emailLabel: "البريد الإلكتروني",
        emailPlaceholder: "مثال: ahmed@example.com",
        subjectLabel: "الموضوع",
        subjectPlaceholder: "استفسار عن مشروع / فرصة عمل",
        messageLabel: "رسالتك",
        messagePlaceholder: "اكتب نبذة عن فكرتك أو متطلبات المشروع...",
        submitBtn: "إرسال الرسالة",
        sendingBtn: "جارٍ الإرسال...",
        successTitle: "تم إرسال رسالتك بنجاح!",
        successMessage: "شكراً لتواصلك، ستقوم جنة بالرد عليك في أقرب وقت ممكن.",
        errorTitle: "يرجى ملء جميع الحقول المطلوبة",
        sendAnother: "إرسال رسالة أخرى"
      }
    },
    footer: {
      quote: "صمم بهدف. اكتب الكود بشغف. وتطور بذكاء.",
      rights: "جميع الحقوق محفوظة.",
      backToTop: "للأعلى",
      designedWith: "تم التصميم في Figma والتطوير بـ React.js بواسطة جنة عفيفي"
    }
  }
};
