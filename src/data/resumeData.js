const resumeData = {
  name: "Умутай Сатарова",
  title: "Frontend-разработчик",
  avatar: null, // Можно вставить URL фото: "https://..."

  contacts: {
    phone: "+996 (XXX) XX-XX-XX",
    email: "umut@email.com",
    telegram: "@umutay_dev",
    github: "github.com/umkasatarova8-lab",
    city: "Кыргызстан",
  },

  about:
    "Начинающий frontend-разработчик с опытом создания веб-приложений на React и HTML/CSS. Увлечён разработкой удобных и красивых интерфейсов. Готов к обучению и командной работе.",

  skills: {
    hard: [
      "HTML5 / CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Git / GitHub",
      "Figma",
      "REST API",
      "Node.js (базовый)",
    ],
    soft: [
      "Командная работа",
      "Внимание к деталям",
      "Самообучение",
      "Ответственность",
      "Коммуникабельность",
    ],
  },

  languages: [
    { lang: "Кыргызский", level: "Родной" },
    { lang: "Русский", level: "Второй родной" },
    { lang: "Английский", level: "B1 (Intermediate)" },
    { lang: "Немецкий", level: "B1 (Intermediate)" },
  ],

  education: [
    {
      institution: "КГИПИ",
      faculty: "Программные технологии",
      degree: "Бакалавр",
      years: "2025 - 2029",
    },
  ],

  experience: [
    {
      company: "ООО «ВебСтарт»",
      position: "Junior Frontend-разработчик (стажировка)",
      years: "Июнь 2025 - Август 2025",
      duties: [
        "Разработка компонентов интерфейса на React",
        "Вёрстка адаптивных страниц по макетам Figma",
        "Интеграция REST API",
        "Code review и работа в команде по Agile",
      ],
    },
  ],

  projects: [
    {
      name: "To-Do List App",
      description: "Приложение для управления задачами с фильтрацией и сохранением в localStorage",
      tech: ["React", "CSS Modules"],
      link: "github.com/alexeyivanov/todo-app",
    },
    {
      name: "Портфолио сайт",
      description: "Личный сайт-портфолио с анимациями и адаптивной вёрсткой",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "github.com/umkasatarova8-lab/portfolio",
    },
  ],
};

export default resumeData;

