// Dictionnaire des traductions
const translations = {
    fr: {
        nav_home: "/Accueil",
        nav_menu: "/La_Carte",
        nav_events: "/Événements",
        nav_team: "/L'Équipe",
        nav_book: "Réserver",
        
        hero_title: "LA TRADITION <br><span class='highlight'>ENCODÉE</span>",
        hero_subtitle: "Dégustez nos galettes bretonnes compilées avec des produits frais et locaux.",
        btn_menu: "Voir le Menu",
        btn_news: "Newsletter",
        
        menu_title: "// MENU DU JOUR",
        menu_desc: "Compilation du midi • Lun-Ven",
        
        footer_desc: "La première crêperie connectée de l'Ouest. Sarrasin local, compilation maison et open-source.",
        quick_links: "Quick_Links",
        server_info: "Server_Info"
    },
    en: {
        nav_home: "/Home",
        nav_menu: "/The_Menu",
        nav_events: "/Events_Log",
        nav_team: "/The_Team",
        nav_book: "Book_Table",
        
        hero_title: "TRADITION <br><span class='highlight'>ENCODED</span>",
        hero_subtitle: "Taste our Breton galettes compiled with fresh, local ingredients.",
        btn_menu: "See Menu",
        btn_news: "Newsletter",
        
        menu_title: "// DAILY_LOG (Menu)",
        menu_desc: "Lunch compilation • Mon-Fri",
        
        footer_desc: "The first connected crêperie in the West. Local buckwheat, homemade compilation, open-source.",
        quick_links: "Quick_Links",
        server_info: "Server_Info"
    }
};

// Fonction pour changer la langue
function changeLanguage(lang) {
    // 1. On met à jour tous les textes qui ont l'attribut data-lang
    const elements = document.querySelectorAll('[data-lang]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            // Si c'est du HTML (avec des spans), on utilise innerHTML, sinon innerText
            if (element.tagName === 'H1' || element.classList.contains('highlight')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.innerText = translations[lang][key];
            }
        }
    });

    // 2. On change le style des boutons (optionnel)
    document.getElementById('btn-fr').classList.toggle('active-lang', lang === 'fr');
    document.getElementById('btn-en').classList.toggle('active-lang', lang === 'en');

    // 3. (Bonus) On sauvegarde le choix dans le navigateur
    localStorage.setItem('billig_lang', lang);
}

// Au chargement de la page, on vérifie s'il y a une langue sauvegardée
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('billig_lang') || 'fr';
    changeLanguage(savedLang);
});