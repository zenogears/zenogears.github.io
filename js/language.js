// Script for change language

const engJson = {
  "about": {
    "section": "About",
    "myname": "Zen aka Chibiko",
    "location": "Moscow, Russia",
    "about": "Piupiu",
    "focus": "O_o",
  },
  "skills": {
    "section": "Skills",
    0: "Programming Languages & Tools",
  },
  "education": {
    "section": "Education",
    0: "MTI",
  },
  "projects": {
    "section": "Projects",
    "decription": [
      "",
      "Do not Disturb application for Librem 5. Python + GTK4. Compile into flatpak app.",
	  "Smart Home application for Rasberry PI. Python + aiohttp.",
	  "Application to generate character's sprites. GDScript.",
	  "GUI for PowerISO. Converts image from one types to another. BASH + zenity.",
	  ],
  },
};

const rusJson = {
  "about": {
    "section": "Обо мне",
    "myname": "Zen aka Chibiko",
    "location": "Москва, Россия",
    "about": "Руковожу командой разработки. Пишу на Python. В повседневной жизни использую Linux. В свободное время создаю небольшие проекты на Godot.",
    "focus": "Использую в задачах: Python, PostgreSQL/MySQL, Docker, Nginx, Godot, GDScript",
  },
  "skills": {
    "section": "Навыки",
    0: "Используемые технологии",
  },
  "education": {
    "section": "Образование",
    0: "МТИ",
  },
  "projects": {
    "section": "Проекты",
    "decription": [
      "Планировщик режима \"Не беспокоить\" для Librem 5. Python + GTK4. Собирается в flatpak приложение.",
	  "Умный дом - приложение для Rasberry PI. Python + aiohttp.",
	  "Приложения для генерации спрайтов персонажей. GDScript.",
	  "GUI для приложения PowerISO. Позволяет конвертировать образы из одного формата в другой. BASH + zenity.",
	  ],
  },
};

document.querySelector('#eng').onclick = function() {changeLang('eng')};
document.querySelector('#rus').onclick = function() {changeLang('rus')};

function loadLang(lang) {
  document.getElementById('myname0').innerHTML = lang.about.myname.toString();
  document.getElementById('myname1').innerHTML = lang.about.myname.toString();
  // About section
  document.getElementById('ab').innerHTML = lang.about.section.toString();
  document.getElementById('location').innerHTML = lang.about.location.toString();
  document.getElementById('moreabout').innerHTML = lang.about.about.toString();
  document.getElementById('focus').innerHTML = lang.about.focus.toString();
  // Skills section
  document.getElementById('sk').innerHTML = lang.skills.section.toString();
  document.getElementById('moreskills').innerHTML = lang.skills.section.toString();
  document.getElementById('tools').innerHTML = lang.skills[0].toString();
  // Education section
  document.getElementById('ed').innerHTML = lang.education.section.toString();
  document.getElementById('moreeducation').innerHTML = lang.education.section.toString();
  document.getElementById('ed0').innerHTML = lang.education[0].toString();
  document.getElementById('ed1').innerHTML = lang.education[1].toString();
  document.getElementById('ed2').innerHTML = lang.education[2].toString();
  document.getElementById('ed3').innerHTML = lang.education[3].toString();
  // Projects section
  document.getElementById('pr').innerHTML = lang.projects.section.toString();
  document.getElementById('moreprojects').innerHTML = lang.projects.section.toString();
  document.getElementById('desc0').innerHTML = lang.projects.decription[0].toString();
  document.getElementById('desc1').innerHTML = lang.projects.decription[1].toString();
  document.getElementById('desc2').innerHTML = lang.projects.decription[2].toString();
  document.getElementById('desc3').innerHTML = lang.projects.decription[3].toString();
  document.getElementById('desc4').innerHTML = lang.projects.decription[4].toString();
  document.getElementById('desc5').innerHTML = lang.projects.decription[5].toString();
  document.getElementById('desc6').innerHTML = lang.projects.decription[6].toString();
  document.getElementById('desc7').innerHTML = lang.projects.decription[7].toString();
};

function changeLang(current_lang) {
  switch(current_lang) {
    case 'eng':
      loadLang(engJson);
      break
    case 'rus':
      loadLang(rusJson);
      break
    default:
      loadLang(rusJson);
      break
  };
};

changeLang()
