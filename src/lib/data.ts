export const personalInfo = {
  name: "Raka Aprianto",
  role: "Creative Developer",
  bio: "Fresh graduate yang passionate dalam pengembangan web, IoT, dan machine learning. Selama masa perkuliahan, saya aktif membangun berbagai proyek nyata untuk mengasah kemampuan teknis dan problem-solving. Saya menikmati proses mengubah ide menjadi solusi digital yang fungsional, efisien, dan berdampak.",
  email: "rakaaaprianto09@gmail.com",
  location: "Jakarta, Indonesia",
  availability: "Available for freelance",
};

export const navigation = [
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Happy Clients", value: "10+" },
  { label: "Technologies", value: "20+" },
];

export const techStack = [
  "Laravel",
  "Next.js",
  "React",
  "Flutter",
  "TypeScript",
  "Python",
  "PHP",
  "Node.js",
  "Tailwind CSS",
  "MySQL",
  "Git",
  "Three.js",
  "Framer Motion",
  "PyTorch",
  "TensorFlow",
];

export const projects = [
  {
    id: 1,
    title: "iGlass Clean - IoT Smart Wiper System",
    category: "IoT & Mobile",
    description:
      "Complete IoT ecosystem with Flutter mobile app, Laravel backend dashboard, and ESP32 microcontroller integration. Features real-time monitoring, MQTT communication, and automated control system.",
    image: "/images/logo_iglasscleane.webp",
    tags: ["Flutter", "Laravel", "IoT", "MQTT", "ESP32", "Three.js"],
    features: [
      "Real-time sensor monitoring (Rain detection)",
      "4 control modes: Manual, Auto, Schedule, Demo",
      "Flutter mobile app with live data visualization",
      "Laravel dashboard with REST API",
      "MQTT Protocol for IoT communication",
      "Chart.js data visualization",
    ],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    id: 2,
    title: "Bengkel Las - Company Profile Website",
    category: "Web App",
    description:
      "Modern company profile website for welding workshop with portfolio management system, WhatsApp integration, and admin panel for content management.",
    image: "/images/logo_kanallas.jpeg",
    tags: ["Laravel 12", "PHP 8.2", "MySQL", "Vite", "Tailwind"],
    features: [
      "Portfolio gallery with multiple images",
      "Dynamic pricing system",
      "Contact form with notifications",
      "Admin panel CRUD operations",
      "WhatsApp API integration",
      "Responsive design",
    ],
    links: {
      github: "https://github.com/RakaAprianto/bengkel_las_kanal_baja",
      demo: "#",
    },
  },
  {
    id: 3,
    title: "Digital Library System - SMPN 57 Bandung",
    category: "Web App",
    description:
      "Comprehensive digital library management system for school with e-book support, borrowing system, and member dashboard.",
    image: "/images/logo_smpn57.webp",
    tags: ["CodeIgniter 4", "PHP", "MySQL", "Bootstrap"],
    features: [
      "Physical & e-book management",
      "Borrowing & return system",
      "Member & admin dashboards",
      "Category, publisher, author management",
      "User authentication & authorization",
      "Student class management",
    ],
    links: {
      github: "https://github.com/RakaAprianto/library-management-smpn57bandung",
      demo: "#",
    },
  },
  {
    id: 4,
    title: "Mosque Financial Management System",
    category: "Web App",
    description:
      "Financial management module for mosque operations focusing on expense tracking, category management, and reporting with PDF export functionality.",
    image: "/images/logo_masjid.png",
    tags: ["Laravel 10", "PHP 8.1", "DomPDF", "Chart.js", "Alpine.js"],
    features: [
      "Expense transaction CRUD with receipts",
      "Dynamic category management",
      "Real-time dashboard with charts",
      "PDF report generation",
      "Role & permission system",
      "Activity logging",
    ],
    links: {
      github: "https://github.com/Zulfan15/manajemen_masjid/tree/fitur-pengeluaran-b10",
      demo: "#",
    },
  },
  {
    id: 5,
    title: "Sentiment Analysis - IndoBERT",
    category: "Machine Learning",
    description:
      "Advanced sentiment analysis system for Indonesian text using IndoBERT with comparison of 6 fine-tuning methods. Achieved 68.87% accuracy with AdamW optimizer.",
    image: "/images/logo_machinelearning.webp",
    tags: ["Python", "PyTorch", "IndoBERT", "NLP", "Jupyter"],
    features: [
      "Complete preprocessing pipeline",
      "6 optimizer comparison (Adam, AdamW, SGD, RAdam, LAMB)",
      "3-class sentiment classification",
      "Confusion matrix visualization",
      "Best performance: 68.87% with AdamW",
      "Indonesian language support",
    ],
    links: {
      github: "https://github.com/RakaAprianto/sentiment-analysis-nlp",
      demo: "#",
    },
  },
  {
    id: 6,
    title: "iGlass Clean - Backend Dashboard",
    category: "Web App",
    description:
      "Laravel-based monitoring dashboard and REST API backend for IoT Smart Wiper system with real-time data visualization and device management.",
    image: "/images/logo_iglasscleane.webp",
    tags: ["Laravel 12", "MySQL", "Chart.js", "REST API"],
    features: [
      "Real-time sensor data monitoring",
      "Interactive charts & statistics",
      "Schedule management system",
      "Activity & sensor history logs",
      "REST API for ESP32 & Flutter",
      "Settings configuration",
    ],
    links: {
      github: "#",
      demo: "#",
    },
  },
];

export const experience = [
  {
    year: "2019 - 2026",
    title: "Mahasiswa Teknik Informatika",
    company: "Institut Teknologi Nasional Bandung",
    description:
      "Menempuh pendidikan S1 Teknik Informatika dengan fokus pada pengembangan web, IoT, dan machine learning. Aktif mengembangkan berbagai proyek teknologi untuk mengasah kemampuan teknis dan problem-solving.",
  },
  {
    year: "Juli 2023 - September 2023",
    title: "Web Developer Intern",
    company: "PT. Vaganza Solusi Internasional",
    description:
      "Mengembangkan sistem Point of Sale (POS) berbasis web untuk memfasilitasi transaksi penjualan. Bertanggung jawab dalam implementasi fitur-fitur utama dan integrasi database menggunakan teknologi web modern.",
  },
  {
    year: "Oktober 2024 - Desember 2024",
    title: "PKM - Program Pengabdian Masyarakat",
    company: "SMPN 57 Bandung",
    description:
      "Membangun Website Perpustakaan Digital untuk SMPN 57 Bandung sebagai bagian dari program pengabdian masyarakat. Sistem mencakup manajemen buku fisik & e-book, sistem peminjaman, dan dashboard untuk anggota serta admin.",
  },
];

export const services = [
  {
    title: "Web Development",
    description:
      "Building modern, responsive web applications using Next.js, React, Laravel, and other cutting-edge technologies.",
    icon: "Code",
    features: [
      "Custom Web Apps",
      "E-commerce",
      "CMS Development",
      "API Integration",
    ],
  },
  {
    title: "Mobile Development",
    description:
      "Creating beautiful, performant mobile applications with Flutter for both iOS and Android platforms.",
    icon: "Smartphone",
    features: [
      "Cross-platform Apps",
      "Native Performance",
      "UI/UX Design",
    ],
  },
  {
    title: "IoT Solutions",
    description:
      "Developing complete IoT ecosystems with hardware integration, cloud connectivity, and real-time monitoring.",
    icon: "Cpu",
    features: [
      "ESP32/Arduino",
      "MQTT Protocol",
      "Real-time Data",
      "Cloud Integration",
    ],
  },
  {
    title: "Machine Learning",
    description:
      "Implementing ML models for text analysis, prediction, and intelligent automation using Python and PyTorch.",
    icon: "Brain",
    features: [
      "NLP Models",
      "Sentiment Analysis",
      "Data Preprocessing",
      "Model Training",
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive, modern interfaces with focus on user experience and aesthetic appeal.",
    icon: "Palette",
    features: [
      "Responsive Design",
      "Prototyping",
      "Design Systems",
      "User Research",
    ],
  },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/RakaAprianto", icon: "Github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/raka-aprianto-3a053a3a5", icon: "Linkedin" },
  { name: "Twitter", url: "https://x.com/rakaapriant", icon: "Twitter" },
  { name: "WhatsApp", url: "https://wa.me/6289515910216", icon: "MessageCircle" },
  { name: "Email", url: "mailto:rakaaaprianto09@gmail.com", icon: "Mail" },
];
