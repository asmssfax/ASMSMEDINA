/*==================================================
SFAX MEDINA HERITAGE
كشف العقارات المتداعية للسقوط — خريطة تفاعلية مبنية على
صورة المخطط الأصلي (PLAN DE LA MEDINA) بدل خرائط GPS،
لأن المخطط رسم يدوي بدون إحداثيات جغرافية حقيقية.

يستعمل Leaflet مع CRS.Simple: الصورة نفسها هي "الخريطة"،
وكل نقطة موقعها بالبكسل (x,y) داخل الصورة.
==================================================*/

let atriskMap;
let atriskMarkersLayer;
let atriskImageBounds;
// ⚠️ الصورة مدورة 90° عكس عقارب الساعة — لازم ملف images/atrisk/medina_plan.jpg
// يكون مدوراً بنفس الزاوية (بديل الملف بصورة مدورة بنفس الاسم)، غير كذلك
// الأرقام ما تنطبقش فوق مكانها الصحيح بالصورة المعروضة.
let atriskImageWidth = 3368;   // عرض الصورة بعد الدوران (كان 2380 قبل الدوران)
let atriskImageHeight = 2380;  // ارتفاع الصورة بعد الدوران (كان 3368 قبل الدوران)

// الإحداثيات: مأخوذة من الملف الجاهز atrisk-coordinates.js (258 نقطة محددة
// مسبقاً بأداة Plan Digitizer).
let atriskCoords = (typeof atriskCoordinates !== "undefined") ? atriskCoordinates : {};

/*=====================================
INITIALIZATION
=====================================*/

function initAtriskMap(){

    const container = document.getElementById("atrisk-map-container");
    if (!container) return;

    atriskMap = L.map("atrisk-map-container", {
        crs: L.CRS.Simple,
        minZoom: -2,
        maxZoom: 3,
        zoomControl: true,
        attributionControl: false
    });

    // حدود الصورة بنظام CRS.Simple: [ [0,0], [height, width] ]
    atriskImageBounds = [[0,0],[atriskImageHeight, atriskImageWidth]];

    L.imageOverlay("images/atrisk/medina_plan.jpg", atriskImageBounds).addTo(atriskMap);

    atriskMap.fitBounds(atriskImageBounds);

    atriskMarkersLayer = L.layerGroup().addTo(atriskMap);

    // في هذه المرحلة يكون translations.js قد طبّق اللغة المحفوظة مسبقاً
    // (DOMContentLoaded الخاص به يُسجَّل ويُنفَّذ قبل هذا الملف)، لذا نقرأ
    // lang من <html> لنعرض بطاقات العقارات مباشرة بنفس اللغة الحالية.
    const htmlLang = document.documentElement.getAttribute("lang");
    if (htmlLang) atriskCurrentLang = htmlLang;

    renderAtriskMarkers();
}

/*=====================================
MARKERS (normal display)
=====================================*/

function atriskRiskColor(risk){
    switch(risk){
        case "Red": return "#C62828";
        case "Orange": return "#EF6C00";
        case "Yellow": return "#F9A825";
        case "Unknown": return "#9E9E9E";
        default: return "#8B5E3C";
    }
}

function renderAtriskMarkers(){

    if (!atriskMarkersLayer) return;
    atriskMarkersLayer.clearLayers();

    atriskBuildingsData.forEach(building => {

        const coord = atriskCoords[building.id];
        if (!coord) return; // لم تتم معايرة موقعه بعد

        const icon = L.divIcon({
            className: "atrisk-marker",
            html: `<div class="atrisk-marker-inner" style="background:${atriskRiskColor(building.risk)}">${building.id}</div>`,
            iconSize: [30,30],
            iconAnchor: [15,15]
        });

        // ملاحظة هامة: فـLeaflet CRS.Simple، القيمة "lat" تزيد كي نطلعو للأعلى،
        // بينما y بالبكسل (فالصورة) تزيد كي ننزلو للأسفل. لازم نقلبها هنا
        // (ارتفاع الصورة - y) حتى تتطابق النقاط بصرياً مع الصورة المعروضة.
        const flippedLat = atriskImageHeight - coord.y;
        const marker = L.marker([flippedLat, coord.x], { icon });

        marker.on("click", () => {
            displayAtriskBuilding(building);
        });

        marker.addTo(atriskMarkersLayer);
    });
}

/*=====================================
SIDEBAR DISPLAY
=====================================*/

let atriskLastBuilding = null;
let atriskCurrentLang = "ar";

function displayAtriskBuilding(building, lang){

    atriskLastBuilding = building;
    if (lang) atriskCurrentLang = lang;
    else lang = atriskCurrentLang;

    document.getElementById("atrisk-sidebar-empty").style.display = "none";
    const panel = document.getElementById("atrisk-sidebar-details");
    panel.style.display = "block";

    const hasData = building.owner !== null && building.owner !== undefined;
    const noDataLabel = { ar:"لم يُدخل بعد", fr:"Non renseigné", en:"Not entered yet" }[lang] || "لم يُدخل بعد";

    const propLabel = atriskPropertyLabel(building.id, lang);
    document.getElementById("atrisk-title").textContent = propLabel;
    document.getElementById("atrisk-owner").textContent = propLabel;
    document.getElementById("atrisk-address").textContent = hasData ? atriskTranslateAddress(building.address, lang) : noDataLabel;
    document.getElementById("atrisk-type").textContent = hasData ? atriskTranslateType(building.type, lang) : noDataLabel;
    const gapNoteTexts = {
        ar: "لا يوجد هذا الرقم في الكشف البياني الأصلي (فجوة في الترقيم من 211 إلى 220).",
        fr: "Ce numéro n'existe pas dans le relevé original (lacune de numérotation entre 211 et 220).",
        en: "This number does not exist in the original survey (numbering gap between 211 and 220)."
    };
    document.getElementById("atrisk-diagnosis").textContent = hasData ? atriskTranslateDiagnosis(building.diagnosis, lang) : (building.note ? (gapNoteTexts[lang] || gapNoteTexts.ar) : noDataLabel);
    document.getElementById("atrisk-intervention").textContent = hasData ? atriskTranslateIntervention(building.intervention, lang) : "—";

    const badge = document.getElementById("atrisk-badge");
    badge.textContent = atriskTranslateRiskLabel(building.risk, lang);
    badge.style.background = atriskRiskColor(building.risk);

    const verifyTexts = {
        ar: "هذه البيانات مستخرجة آلياً من وثيقة ممسوحة ضوئياً ولم تُراجع بعد — يرجى التحقق من الأصل قبل الاعتماد عليها.",
        fr: "Ces données sont extraites automatiquement d'un document numérisé et n'ont pas encore été vérifiées — veuillez vous référer à l'original avant de vous y fier.",
        en: "This data was automatically extracted from a scanned document and has not yet been reviewed — please verify against the original before relying on it."
    };
    const noDataNoteTexts = {
        ar: building.note ? gapNoteTexts.ar : "موقع هذا العقار محدد على الخريطة، لكن بياناته التفصيلية لم تُدخل بعد من الكشف الأصلي.",
        fr: building.note ? gapNoteTexts.fr : "L'emplacement de ce bien est indiqué sur la carte, mais ses données détaillées n'ont pas encore été saisies.",
        en: building.note ? gapNoteTexts.en : "This property's location is marked on the map, but its detailed data has not yet been entered."
    };
    const verifyNote = document.getElementById("atrisk-verify-note");
    verifyNote.style.display = (building.verified && hasData) ? "none" : "flex";
    verifyNote.querySelector("span").textContent = hasData
        ? (verifyTexts[lang] || verifyTexts.ar)
        : (noDataNoteTexts[lang] || noDataNoteTexts.ar);
}

// يُستدعى من translations.js عند كل تبديل للغة، حتى تتحدث بطاقة العقار
// المعروضة حالياً (إن وجدت) بنفس اللغة الجديدة فوراً.
window.refreshInspectedBuilding = function(lang){
    atriskCurrentLang = lang;
    if (atriskLastBuilding) {
        displayAtriskBuilding(atriskLastBuilding, lang);
    }
};

/*=====================================
KPI STATISTICS (بطاقات الإحصائيات بأعلى الصفحة)
=====================================*/

function updateAtriskStatistics(){

    const total = atriskBuildingsData.length;
    const hasDataCount = atriskBuildingsData.filter(b => b.owner !== null && b.owner !== undefined).length;
    const monitoring = atriskBuildingsData.filter(b => b.risk === "Orange" || b.risk === "Yellow").length;
    const critical = atriskBuildingsData.filter(b => b.risk === "Red").length;

    const setKpi = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
    };

    setKpi("kpi-total", total);
    setKpi("kpi-safe", hasDataCount);
    setKpi("kpi-monitoring", monitoring);
    setKpi("kpi-risk", critical);
}

/*=====================================
BOOT
=====================================*/

document.addEventListener("DOMContentLoaded", () => {
    initAtriskMap();
    updateAtriskStatistics();
});
