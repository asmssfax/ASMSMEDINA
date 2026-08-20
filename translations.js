/* =====================================================================
   translations.js
   Sfax Medina Heritage — GIS Platform
   Handles switching the interface between English, French and Arabic.
   Works with the data-lang / data-lang-placeholder attributes already
   present in index.html, plus a couple of elements (footer notes) that
   contain nested <strong> tags and are translated via innerHTML.
   ===================================================================== */

const translations = {

  en: {
    // Header / Nav
    home: "Home",
    statistics: "Statistics",
    map: "Map",
    contact: "Contact",

    // Hero
    hero_title: "SFAX MEDINA HERITAGE",
    hero_subtitle: "Professional GIS Platform for Monitoring Historic Buildings inside the Medina of Sfax.",
    explore_map: "Explore Map",
    dashboard: "Dashboard",

    // Statistics cards
    total: "Buildings",
    safe: "Safe",
    monitoring: "Monitoring",
    risk: "Critical",

    // Map section
    mapSubtitle: "Explore all historic buildings of the Medina of Sfax.",
    search: "Search Building...",

    // Filters
    filter_all_risk: "All Risk Levels",
    risk_green: "Green",
    risk_yellow: "Yellow",
    risk_orange: "Orange",
    risk_red: "Red",
    filter_all_types: "All Types",
    type_mosque: "Mosque",
    type_residential: "Residential",
    type_commercial: "Commercial",
    type_fortification: "Fortification",
    reset: "Reset",

    // Sidebar
    sidebarTitle: "Building Information",
    empty: "Click on any building to display its complete information.",
    reference: "Reference :",
    field_type: "Type",
    field_year: "Construction Year",
    field_floors: "Floors",
    field_condition: "Condition",
    field_ownership: "Ownership",
    encrypted: "Encrypted",
    encrypted_note: "Accessible only with an authorized login",
    field_coordinates: "Coordinates",
    field_last_inspection: "Last Inspection",
    description_title: "Description",
    historic_photo_title: "Historic Photograph",

    // About
    about: "About The Project",
    aboutText: "Sfax Medina Heritage is a Professional Geographic Information System (GIS) developed to monitor, document and preserve the historic buildings of the Medina of Sfax. The platform centralizes geographic, historical and technical information to support heritage management and decision-making.",

    // Contact
    contact_gis: "Need a Professional GIS Platform?",
    contact_website: "Need a Professional Website?",
    contact_software: "Need Custom Software?",

    // Footer
    footer_gis: "Professional GIS Platforms",
    footer_webdev: "Web Development",
    footer_software: "Software Engineering",
    footer_security_title: "Data Security",
    footer_security_html: "Building owner identities are <strong>encrypted</strong> and are <strong>accessible only with an authorized login.</strong>",
    footer_designed_html: "Designed & Developed by <strong>LS Programming Company</strong>",

    // At-risk buildings survey (KPI cards + map section)
    kpi_total_label: "Buildings at risk of collapse",
    kpi_safe_label: "Complete records",
    kpi_monitoring_label: "Needs intervention / monitoring",
    kpi_risk_label: "Severe risk (urgent demolition/restoration)",
    atrisk_title: "Survey of Buildings at Risk of Collapse",
    atrisk_subtitle: "Official field survey (August 2018) — Association for the Preservation of the Medina of Sfax. Click any number to view the property's details.",
    atrisk_sidebar_title: "Property Information",
    atrisk_empty: "Click any number on the plan to view its full information.",
    atrisk_field_number: "Property No.",
    atrisk_field_address: "Address",
    atrisk_field_type: "Property Type",
    atrisk_field_diagnosis: "Diagnosis of Defects",
    atrisk_field_intervention: "Proposed Intervention",
    atrisk_nav: "At-Risk Survey"
  },

  fr: {
    // Header / Nav
    home: "Accueil",
    statistics: "Statistiques",
    map: "Carte",
    contact: "Contact",

    // Hero
    hero_title: "SFAX MEDINA HERITAGE",
    hero_subtitle: "Plateforme SIG Professionnelle pour le Suivi des Bâtiments Historiques de la Médina de Sfax.",
    explore_map: "Explorer la carte",
    dashboard: "Tableau de bord",

    // Statistics cards
    total: "Bâtiments",
    safe: "Sûrs",
    monitoring: "Sous surveillance",
    risk: "Critiques",

    // Map section
    mapSubtitle: "Explorez tous les bâtiments historiques de la Médina de Sfax.",
    search: "Rechercher un bâtiment...",

    // Filters
    filter_all_risk: "Tous les niveaux de risque",
    risk_green: "Vert",
    risk_yellow: "Jaune",
    risk_orange: "Orange",
    risk_red: "Rouge",
    filter_all_types: "Tous les types",
    type_mosque: "Mosquée",
    type_residential: "Résidentiel",
    type_commercial: "Commercial",
    type_fortification: "Fortification",
    reset: "Réinitialiser",

    // Sidebar
    sidebarTitle: "Informations sur le bâtiment",
    empty: "Cliquez sur un bâtiment pour afficher toutes ses informations.",
    reference: "Référence :",
    field_type: "Type",
    field_year: "Année de construction",
    field_floors: "Étages",
    field_condition: "État",
    field_ownership: "Propriété",
    encrypted: "Crypté",
    encrypted_note: "Accessible uniquement avec un identifiant autorisé",
    field_coordinates: "Coordonnées",
    field_last_inspection: "Dernière inspection",
    description_title: "Description",
    historic_photo_title: "Photographie historique",

    // About
    about: "À propos du projet",
    aboutText: "Sfax Medina Heritage est un Système d'Information Géographique (SIG) professionnel développé pour surveiller, documenter et préserver les bâtiments historiques de la Médina de Sfax. La plateforme centralise les informations géographiques, historiques et techniques afin de faciliter la gestion du patrimoine et la prise de décision.",

    // Contact
    contact_gis: "Besoin d'une plateforme SIG professionnelle ?",
    contact_website: "Besoin d'un site web professionnel ?",
    contact_software: "Besoin d'un logiciel sur mesure ?",

    // Footer
    footer_gis: "Plateformes SIG professionnelles",
    footer_webdev: "Développement web",
    footer_software: "Ingénierie logicielle",
    footer_security_title: "Sécurité des données",
    footer_security_html: "L'identité des propriétaires des bâtiments est <strong>cryptée</strong> et <strong>accessible uniquement avec un identifiant autorisé.</strong>",
    footer_designed_html: "Conçu et développé par <strong>LS Programming Company</strong>",

    // Recensement des bâtiments menaçant ruine (cartes KPI + section carte)
    kpi_total_label: "Bâtiments menaçant ruine",
    kpi_safe_label: "Fiches complètes",
    kpi_monitoring_label: "Nécessite intervention / surveillance",
    kpi_risk_label: "Danger grave (démolition/restauration urgente)",
    atrisk_title: "Recensement des bâtiments menaçant ruine",
    atrisk_subtitle: "Relevé de terrain officiel (août 2018) — Association de sauvegarde de la médina de Sfax. Cliquez sur un numéro pour voir les détails du bien.",
    atrisk_sidebar_title: "Informations sur le bien",
    atrisk_empty: "Cliquez sur un numéro du plan pour afficher toutes ses informations.",
    atrisk_field_number: "N° du bien",
    atrisk_field_address: "Adresse",
    atrisk_field_type: "Type de bien",
    atrisk_field_diagnosis: "Diagnostic des désordres",
    atrisk_field_intervention: "Intervention proposée",
    atrisk_nav: "Bâtiments menaçant ruine"
  },

  ar: {
    // Header / Nav
    home: "الرئيسية",
    statistics: "الإحصائيات",
    map: "الخريطة",
    contact: "اتصل بنا",

    // Hero
    hero_title: "تراث مدينة صفاقس",
    hero_subtitle: "منصة نظم معلومات جغرافية احترافية لمراقبة المباني التاريخية داخل مدينة صفاقس العتيقة.",
    explore_map: "استكشاف الخريطة",
    dashboard: "لوحة التحكم",

    // Statistics cards
    total: "المباني",
    safe: "آمنة",
    monitoring: "قيد المراقبة",
    risk: "حرجة",

    // Map section
    mapSubtitle: "استكشف جميع المباني التاريخية بمدينة صفاقس العتيقة.",
    search: "البحث عن مبنى...",

    // Filters
    filter_all_risk: "جميع مستويات الخطورة",
    risk_green: "أخضر",
    risk_yellow: "أصفر",
    risk_orange: "برتقالي",
    risk_red: "أحمر",
    filter_all_types: "جميع الأنواع",
    type_mosque: "جامع",
    type_residential: "سكني",
    type_commercial: "تجاري",
    type_fortification: "تحصينات",
    reset: "إعادة التعيين",

    // Sidebar
    sidebarTitle: "معلومات المبنى",
    empty: "انقر على أي مبنى لعرض كامل معلوماته.",
    reference: "المرجع :",
    field_type: "النوع",
    field_year: "سنة البناء",
    field_floors: "عدد الطوابق",
    field_condition: "الحالة",
    field_ownership: "الملكية",
    encrypted: "مُشفّر",
    encrypted_note: "الوصول متاح فقط بمعرّف مصرّح به",
    field_coordinates: "الإحداثيات",
    field_last_inspection: "آخر معاينة",
    description_title: "الوصف",
    historic_photo_title: "صورة تاريخية",

    // About
    about: "حول المشروع",
    aboutText: "تراث مدينة صفاقس هو نظام معلومات جغرافية احترافي طُوّر لمراقبة وتوثيق والحفاظ على المباني التاريخية بمدينة صفاقس العتيقة. تجمّع المنصة المعلومات الجغرافية والتاريخية والتقنية لدعم إدارة التراث واتخاذ القرار.",

    // Contact
    contact_gis: "بحاجة إلى منصة نظم معلومات جغرافية احترافية؟",
    contact_website: "بحاجة إلى موقع ويب احترافي؟",
    contact_software: "بحاجة إلى برمجيات مخصصة؟",

    // Footer
    footer_gis: "منصات نظم معلومات جغرافية احترافية",
    footer_webdev: "تطوير المواقع",
    footer_software: "هندسة البرمجيات",
    footer_security_title: "أمن البيانات",
    footer_security_html: "هوية مالكي المباني <strong>مُشفّرة</strong> ولا يمكن الوصول إليها <strong>إلا بمعرّف مصرّح به.</strong>",
    footer_designed_html: "تصميم وتطوير <strong>LS Programming Company</strong>",

    // كشف العقارات المتداعية للسقوط (بطاقات الإحصائيات + قسم الخريطة)
    kpi_total_label: "عقار متداعي للسقوط",
    kpi_safe_label: "بيانات مكتملة",
    kpi_monitoring_label: "يتطلب تدخل / مراقبة",
    kpi_risk_label: "خطر جسيم (هدم/ترميم عاجل)",
    atrisk_title: "كشف العقارات المتداعية للسقوط",
    atrisk_subtitle: "مخطط ميداني رسمي (أوت 2018) — جمعية صيانة المدينة العتيقة بصفاقس. اضغط على أي رقم لعرض تفاصيل العقار.",
    atrisk_sidebar_title: "معلومات العقار",
    atrisk_empty: "اضغط على أي رقم بالمخطط لعرض معلوماته الكاملة.",
    atrisk_field_number: "رقم العقار",
    atrisk_field_address: "العنوان",
    atrisk_field_type: "نوع العقار",
    atrisk_field_diagnosis: "تشخيص الاختلالات",
    atrisk_field_intervention: "التدخل المقترح",
    atrisk_nav: "كشف المتداعية للسقوط"
  }

};

/**
 * Switches the whole interface to the given language code ("en" | "fr" | "ar").
 * - Updates every element tagged with data-lang / data-lang-placeholder.
 * - Updates the two footer lines that contain nested <strong> tags via innerHTML.
 * - Flips <html lang> and <html dir> (Arabic = RTL).
 * - Highlights the active flag button and remembers the choice in localStorage.
 *
 * NOTE: this function is intentionally NOT named "translate". Every HTML
 * element has a built-in native property called `translate` (part of the
 * browser's own page-translation API). An inline onclick="translate(...)"
 * resolves to that native element property before it reaches our function,
 * so it silently fails with "translate is not a function". setLanguage()
 * avoids the collision entirely.
 */
function setLanguage(lang) {

  if (!translations[lang]) {
    lang = "en";
  }

  const dict = translations[lang];

  // Plain text nodes
  document.querySelectorAll("[data-lang]").forEach(function (el) {
    const key = el.getAttribute("data-lang");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Placeholder attributes (e.g. the search input)
  document.querySelectorAll("[data-lang-placeholder]").forEach(function (el) {
    const key = el.getAttribute("data-lang-placeholder");
    if (dict[key] !== undefined) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  // Footer lines containing nested <strong> tags
  const securityText = document.getElementById("footer-security-text");
  if (securityText && dict.footer_security_html) {
    securityText.innerHTML = dict.footer_security_html;
  }

  const designedBy = document.getElementById("footer-designed-by");
  if (designedBy && dict.footer_designed_html) {
    designedBy.innerHTML = dict.footer_designed_html;
  }

  // Direction + lang attribute on <html>
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  // Highlight the active language flag
  document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
    btn.classList.toggle("active-lang", btn.getAttribute("data-lang-btn") === lang);
  });

  // Re-render any building details currently shown in the sidebar (if
  // buildings.js / script.js expose a refresh hook), so labels like the
  // risk badge stay translated too.
  if (typeof window.refreshInspectedBuilding === "function") {
    window.refreshInspectedBuilding(lang);
  }

  // Persist the choice
  try {
    localStorage.setItem("smh-lang", lang);
  } catch (e) {
    /* localStorage unavailable — ignore silently */
  }
}

// Apply the saved language (or default to English) as soon as the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  let savedLang = "en";
  try {
    savedLang = localStorage.getItem("smh-lang") || "en";
  } catch (e) {
    savedLang = "en";
  }
  setLanguage(savedLang);
});
