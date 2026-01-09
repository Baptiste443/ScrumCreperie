/* --- 1. DICTIONNAIRE DE TRADUCTION --- */
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
        carte_title: "DATA_<span class='highlight'>MENU</span>",
        carte_subtitle: "Chargement du fichier source : carte.png",
        btn_download: "Télécharger (PDF/PNG)",
        menu_title: "// MENU DU JOUR",
        team_hero_title: "DEV_<span class='highlight'>TEAM</span>",
team_hero_subtitle: "Les humains derrière l'algorithme culinaire.",
values_title: "// NOTRE_KERNEL (Valeurs)",
values_subtitle: "Le code source de notre réussite.",
val_1_title: "Sourcing \"LocalHost\"",
val_1_desc: "Pas de Cloud lointain. Tous nos ingrédients proviennent de producteurs situés dans un rayon de 30km (Ping < 30ms).",
val_2_title: "Cuisine Open Source",
val_2_desc: "Transparence totale. Notre cuisine est ouverte sur la salle. Vous pouvez vérifier le code (la recette) en temps réel.",
val_3_title: "Service Agile",
val_3_desc: "Notre équipe s'adapte à vos besoins. Sprint rapide le midi, déploiement tranquille le soir pour une UX optimale.",
team_section_title: "// LES_ADMINS (Staff)",
role_1: "Lead Developer (Chef)",
bio_1: "Expert en architecture de Sarrasin. Compile des galettes sans bug depuis 15 ans.",
role_2: "Product Owner (Gérante)",
bio_2: "Gère le backlog des commandes et s'assure que le serveur ne crash jamais.",
role_3: "Interface Manager (Service)",
bio_3: "Responsable de l'UX client. Transmet les données (assiettes) avec une latence zéro.",
events_hero_title: "SYSTEM_<span class='highlight'>LOGS</span>",
events_hero_subtitle: "Historique des événements et apparitions médiatiques.",
roadmap_title: "// ROADMAP_EVENEMENTS",
roadmap_subtitle: "Prochaines mises à jour de l'ambiance.",
btn_subscribe: "S'inscrire",
ev_1_title: "Noël 2.0 : La Crêpe de Noël",
ev_1_desc: "Soirée spéciale, menu festif et cidre chaud offert à tous les connectés.",
ev_2_title: "Atelier Code & Crêpes",
ev_2_desc: "Apprenez les bases du HTML tout en dégustant une complète. PC requis.",
ev_3_title: "Chandeleur : Stress Test",
ev_3_desc: "Venez défier nos biligs ! Concours de la plus haute pile de crêpes.",
media_title: "// MEDIA_STREAM (Vu à la TV)",
vid_1_title: "Reportage TF1 (13h)",
vid_1_desc: "La meilleure crêperie Geek de France.",
vid_2_title: "Echappées Belles",
vid_2_desc: "Découverte des produits locaux 2.0.",
vid_3_title: "Très Très Bon",
vid_3_desc: "François-Régis Gaudry teste la \"Galette Algorithme\".",
award_1: "Attestation d'Excellence",
award_2: "Recommandé 2024",
award_3: "Coup de Cœur Geek",
legal_hero_title: "LEGAL_<span class='highlight'>PROTOCOL</span>",
legal_hero_subtitle: "Conditions générales d'utilisation du système.",
legal_editor_title: "<i class='fa-solid fa-scale-balanced'></i> Informations Éditeur",
legal_hosting_title: "<i class='fa-solid fa-server'></i> Hébergement",
legal_cookies_title: "<i class='fa-solid fa-cookie-bite'></i> Politique de Cookies",
legal_gdpr_title: "<i class='fa-solid fa-database'></i> Données Personnelles (GDPR)",
        // Ajoute ici les autres textes si besoin
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
        carte_title: "DATA_<span class='highlight'>MENU</span>",
        carte_subtitle: "Loading source file: carte.png",
        btn_download: "Download (PDF/PNG)",
        menu_title: "// DAILY_LOG (Menu)",
        team_hero_title: "DEV_<span class='highlight'>TEAM</span>",
team_hero_subtitle: "The humans behind the culinary algorithm.",
values_title: "// OUR_KERNEL (Values)",
values_subtitle: "The source code of our success.",
val_1_title: "\"LocalHost\" Sourcing",
val_1_desc: "No distant Cloud. All ingredients come from producers within a 30km radius (Ping < 30ms).",
val_2_title: "Open Source Kitchen",
val_2_desc: "Total transparency. Our kitchen is open to the dining room. You can verify the code (recipe) in real-time.",
val_3_title: "Agile Service",
val_3_desc: "Our team adapts to your needs. Fast sprint at lunch, chill deployment in the evening for optimal UX.",
team_section_title: "// THE_ADMINS (Staff)",
role_1: "Lead Developer (Chef)",
bio_1: "Expert in Buckwheat architecture. Compiling bug-free galettes for 15 years.",
role_2: "Product Owner (Manager)",
bio_2: "Manages the order backlog and ensures the server (and waiters) never crash.",
role_3: "Interface Manager (Waiter)",
bio_3: "Responsible for client UX. Transmits data (plates) with zero latency.",
events_hero_title: "SYSTEM_<span class='highlight'>LOGS</span>",
events_hero_subtitle: "Event history and media appearances.",
roadmap_title: "// EVENT_ROADMAP",
roadmap_subtitle: "Upcoming ambiance updates.",
btn_subscribe: "Subscribe",
ev_1_title: "Xmas 2.0: The Christmas Crêpe",
ev_1_desc: "Special night, festive menu and hot cider offered to all connected users.",
ev_2_title: "Code & Crêpes Workshop",
ev_2_desc: "Learn HTML basics while eating a galette. Laptop required.",
ev_3_title: "Candlemas: Stress Test",
ev_3_desc: "Challenge our biligs! Contest for the highest stack of crêpes.",
media_title: "// MEDIA_STREAM (On TV)",
vid_1_title: "TF1 News Report (1pm)",
vid_1_desc: "The best Geek crêperie in France.",
vid_2_title: "Echappées Belles",
vid_2_desc: "Discovering local 2.0 products.",
vid_3_title: "Très Très Bon",
vid_3_desc: "François-Régis Gaudry tests the \"Algorithm Galette\".",
award_1: "Certificate of Excellence",
award_2: "Recommended 2024",
award_3: "Geek's Choice Award",
legal_hero_title: "LEGAL_<span class='highlight'>PROTOCOL</span>",
legal_hero_subtitle: "System Terms and Conditions.",
legal_editor_title: "<i class='fa-solid fa-scale-balanced'></i> Publisher Info",
legal_hosting_title: "<i class='fa-solid fa-server'></i> Hosting",
legal_cookies_title: "<i class='fa-solid fa-cookie-bite'></i> Cookie Policy",
legal_gdpr_title: "<i class='fa-solid fa-database'></i> Personal Data (GDPR)",
    }
};

/* --- 2. GÉNÉRATION DU MENU (HEADER) --- */
function injectNavbar(rootPath) {
    const navbarHTML = `
    <nav class="navbar glass">
        <div class="logo-container">
            <img src="${rootPath}logo/logo.png" alt="Logo" class="logo-img">
            <span class="logo-text">BILLIG_DATA<span class="dot">.</span></span>
        </div>
        <ul class="nav-links">
            <li><a href="${rootPath}index.html" data-lang="nav_home">/Accueil</a></li>
            <li><a href="${rootPath}page/carte.html" data-lang="nav_menu">/La_Carte</a></li>
            <li><a href="${rootPath}page/event.html" data-lang="nav_events">/Événements</a></li>
            <li><a href="${rootPath}page/equipe.html" data-lang="nav_team">/L'Équipe</a></li>
            
            <li class="lang-switch">
                <button onclick="changeLanguage('fr')" id="btn-fr" class="lang-btn">FR</button>
                <span>|</span>
                <button onclick="changeLanguage('en')" id="btn-en" class="lang-btn">EN</button>
            </li>

            <li><a href="#" class="btn-reserver" data-lang="nav_book">Réserver</a></li>
        </ul>
    </nav>
    `;

    // On injecte le code HTML dans la div vide
    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navbarHTML;
    }
}

/* --- 3. FONCTION DE TRADUCTION --- */
function changeLanguage(lang) {
    // 1. Traduire les textes
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'H1' || element.classList.contains('highlight')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.innerText = translations[lang][key];
            }
        }
    });

    // 2. Mettre à jour le style des boutons FR/EN
    const btnFr = document.getElementById('btn-fr');
    const btnEn = document.getElementById('btn-en');
    
    // Vérification de sécurité (si on est sur une page sans menu généré encore)
    if(btnFr && btnEn) {
        if (lang === 'fr') {
            btnFr.classList.add('active-lang');
            btnEn.classList.remove('active-lang');
        } else {
            btnEn.classList.add('active-lang');
            btnFr.classList.remove('active-lang');
        }
    }

    // 3. Sauvegarder
    localStorage.setItem('billig_lang', lang);
}

/* --- 4. FONCTION DE DÉMARRAGE (MAIN) --- */
function initSite(rootPath) {
    // 1. On affiche le menu
    injectNavbar(rootPath);

    // 2. On récupère la langue préférée ou par défaut FR
    const savedLang = localStorage.getItem('billig_lang') || 'fr';
    
    // 3. On lance la traduction (maintenant que le menu existe !)
    changeLanguage(savedLang);
}