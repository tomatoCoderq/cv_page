const translations = {
    en: {
        aboutmetitle: "About me",
        name: "Khasan Sadykov",
        age: "Age: 18",
        aboutme: `Innopolis University student. Below you can see my stack, projects, and achievments`,
        techstack: "Tech Stack",
        pythoninfo: "Actively used for robotics, CV, and bots",
        aiogram_info: "Created bots for hackathons and singletone orders",
        go_info: "My current main backend tool",
        cpp_info: "CF contests and university assignments",
        github_info: "Kinda obviously",
        psql_info: "DB for most of the projects",
        arduino_info: "For robotics competitions and hobby",
        fastapi_info: "In progress...",
        projectsc: "Projects",
        projects: "Projects",
        gitnotes: "CLI Tool made with Cobra to keep notes connected to branch/version",
        kach: "Small lightweight proxy created for notification bot",
        queue_bot: "Bot for school robotics department to control printer usage, tasks, and penalties",
        dnd_bot: "Bot for hackathon that simplifies running a D&D session for masters",
        portfolio_info: "This website you're looking at right now :)",
        achievements: "Achievements",
        moreTitle: "More",
        contact_title: "Contact",
        profiles_title: "Profiles",
        ending: "Thanks for attention!",
        ai_arrow: 'Hackathon "AI-Arrow"',
        deadline: 'Case-Championship "Deadline" by T-bank',
        bolshie_vyzovy: 'All-Russian regional stage competition "Bolshie vyzovy" (nanotechnology project)',
        robofinal: 'National final of Russian Robotics Olympiad',
        school_comp: 'All-Russian Robotics Olympiad',
        place_3: "3rd place",
        participant: "Participant",
        place_4: "4th"
    },
    ru: {
        aboutmetitle: "Обо мне",
        name: "Хасан Садыков",
        age: "Возраст: 18",
        aboutme: `Студент университета Иннополис. Ниже вы можете посмотреть мой стэк, проекты и достижения`,
        techstack: "Стэк",
        pythoninfo: "Активно использую для робототехники, компьютерного зрения и ботов",
        aiogram_info: "Создавал ботов для хакатонов и отдельных заказов",
        go_info: "Мой основной инструмент для backend-разработки",
        cpp_info: "Контесты на CF и университетские домашки",
        github_info: "Ну очевидно :)",
        psql_info: "БД для большинства проектов",
        arduino_info: "Для соревнований по робототехнике и хобби",
        fastapi_info: "В процессе освоения...",
        projectsc: "Проекты",
        projects: "Проекты",
        gitnotes: "CLI-инструмент на Cobra для заметок, привязанных к ветке/версии",
        kach: "Лёгкий прокси для бота-уведомителя о билетах в театре",
        queue_bot: "Бот для кружка робототехники в школе: очередь, задания и штрафы",
        dnd_bot: "Бот для хакатона, упрощающий ведение D&D-сессий для мастеров",
        portfolio_info: "Этот сайт, на который ты сейчас смотришь :)",
        achievements: "Достижения",
        moreTitle: "Еще",
        contact_title: "Контакты",
        profiles_title: "Профили",
        ending: "Спасибо за внимание!",
        ai_arrow: 'Хакатон "AI-Arrow"',
        deadline: 'Кейс-чемпионат "Deadline" от Т-банка',
        bolshie_vyzovy: 'Всероссийский региональный этап конкурса "Большие вызовы" (нанотехнологии)',
        robofinal: 'Финал Всероссийской олимпиады по робототехнике',
        school_comp: 'Всероссийская олимпиада по робототехнике',
        place_3: "3 место",
        participant: "Участник",
        place_4: "4 место"
    }
};

function setLanguage(lang) {
    const langMap = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (langMap[key]) {
            el.textContent = langMap[key];
        }
    });
}

// Set default language
document.addEventListener("DOMContentLoaded", () => {
    setLanguage("en");
});