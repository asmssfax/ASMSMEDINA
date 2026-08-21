/*==================================================
atrisk-i18n.js
ترجمة بيانات كشف العقارات المتداعية للسقوط (مالك/عنوان محذوف،
نوع العقار، التشخيص، التدخل المقترح، أسماء الأنهج) إلى الفرنسية
والإنجليزية. النص العربي الأصلي يبقى في atrisk-data.js دون تغيير؛
هذا الملف فقط طبقة ترجمة تُستعمل وقت العرض حسب اللغة المختارة.
==================================================*/

const atriskTypeI18n = {
  "سكن + طابق علوي": { fr:"Habitation + étage supérieur", en:"Residence + upper floor" },
  "سفلي + طابق علوي": { fr:"Rez-de-chaussée + étage supérieur", en:"Ground floor + upper floor" },
  "طابق أول + طابق ثاني": { fr:"1er étage + 2e étage", en:"1st floor + 2nd floor" },
  "طابق علوي": { fr:"Étage supérieur", en:"Upper floor" },
  "معمل حلويات": { fr:"Confiserie", en:"Confectionery workshop" },
  "دكان + طابق علوي بطابقين ارضي": { fr:"Boutique + étage supérieur (2 niveaux rez-de-chaussée)", en:"Shop + upper floor (2 ground levels)" },
  "دكان + عدد 2 طابق علوي": { fr:"Boutique + 2 étages supérieurs", en:"Shop + 2 upper floors" },
  "أرضي + طابق علوي": { fr:"Rez-de-chaussée + étage supérieur", en:"Ground floor + upper floor" },
  "طابق أرضي + طابق علوي": { fr:"Rez-de-chaussée + étage supérieur", en:"Ground floor + upper floor" },
  "مقهى + عدد 2 دكاكين": { fr:"Café + 2 boutiques", en:"Café + 2 shops" },
  "طابق أرضي": { fr:"Rez-de-chaussée", en:"Ground floor" },
  "طابق أرضي + طابق علوي + مطابق": { fr:"Rez-de-chaussée + étage supérieur + annexe", en:"Ground floor + upper floor + adjoining unit" },
  "دكان + طابق أرضي + طابق علوي": { fr:"Boutique + rez-de-chaussée + étage supérieur", en:"Shop + ground floor + upper floor" },
  "دكان": { fr:"Boutique", en:"Shop" },
  "سباط": { fr:"Passage couvert (Sabat)", en:"Covered passage (Sabat)" },
  "غرفة": { fr:"Chambre", en:"Room" },
  "مطبعة + طابق علوي": { fr:"Imprimerie + étage supérieur", en:"Print shop + upper floor" },
  "جامع (معلم ديني)": { fr:"Mosquée (monument religieux)", en:"Mosque (religious landmark)" },
  "طابق علوي + سباط": { fr:"Étage supérieur + passage couvert", en:"Upper floor + covered passage" },
  "مصلى سيدي منصور": { fr:"Oratoire Sidi Mansour", en:"Sidi Mansour prayer room" },
  "حمام سيدي المسندي": { fr:"Hammam Sidi El Mesnaoui", en:"Sidi El Mesnaoui hammam" },
  "مسمى خشبي": { fr:"Structure en bois", en:"Wooden structure" },
  "المسمى الخشبي والدرابزين": { fr:"Structure en bois et balustrade", en:"Wooden structure and railing" },
  "غرفة لصناعة الأحذية": { fr:"Chambre - atelier de chaussures", en:"Room - shoemaking workshop" },
  "مصنع خشبي والدرابزين": { fr:"Atelier de menuiserie et balustrade", en:"Woodworking workshop and railing" },
  "طابق أول + طابق أرضي": { fr:"1er étage + rez-de-chaussée", en:"1st floor + ground floor" },
  "ساحة مسيجة": { fr:"Terrain clôturé", en:"Fenced-off plot" },
  "طابق علوي + طابق أرضي": { fr:"Étage supérieur + rez-de-chaussée", en:"Upper floor + ground floor" },
  "برج من سور المدينة": { fr:"Tour du rempart de la médina", en:"Tower of the medina wall" },
  "منزل ميغم": { fr:"Maison abandonnée et fermée", en:"Abandoned, shuttered house" },
  "زاوية": { fr:"Zaouïa", en:"Zawiya (shrine)" },
  "طابق أول + طابق علوي": { fr:"1er étage + étage supérieur", en:"1st floor + upper floor" },
  "مخزرة": { fr:"Entrepôt", en:"Storage depot" },
  "مسجد": { fr:"Mosquée", en:"Mosque" },
  "حمام السلطان": { fr:"Hammam Essultan", en:"Essultan Hammam" },
  "دكان (مخزن)": { fr:"Boutique (dépôt)", en:"Shop (storage)" },
  "دكان + غرفة": { fr:"Boutique + chambre", en:"Shop + room" },
};

const atriskDiagnosisI18n = {
  "تشققات وتصدعات خطيرة بالجدران والسقوف، جزء من السقف آيل للسقوط بالواجهة العلوية": { fr:"Fissures et lézardes graves sur les murs et plafonds, une partie du toit menace de s'effondrer sur la façade supérieure", en:"Serious cracks and fissures in walls and ceilings; part of the roof is at risk of collapsing on the upper façade" },
  "تصدعات ونشقاقات خطيرة، تهدم جزئي بالسقف": { fr:"Lézardes et fissures graves, effondrement partiel de la toiture", en:"Serious cracks and fissures, partial roof collapse" },
  "عوارض الطابق العلوي حديدية ومتآكلة": { fr:"Poutres de l'étage supérieur métalliques et corrodées", en:"Upper floor beams are metal and corroded" },
  "تصدعات خطيرة بالجدران، السقف من الفوق مائل": { fr:"Fissures graves dans les murs, la toiture est inclinée", en:"Serious wall cracks; the roof above is leaning" },
  "تصدعات بالبناء وحالة سيئة": { fr:"Fissures dans la construction et état général mauvais", en:"Structural cracks and poor overall condition" },
  "شقوق عميقة، سقوط أجزاء من الحائط": { fr:"Fissures profondes, chute de pans de mur", en:"Deep cracks, sections of wall have collapsed" },
  "تصدعات وتشققات خطيرة بالجدران": { fr:"Fissures et lézardes graves dans les murs", en:"Serious cracks and fissures in the walls" },
  "سقوف مهترئة وشقوق بالجدران بسبب تسرب المياه": { fr:"Plafonds détériorés et fissures murales dues aux infiltrations d'eau", en:"Deteriorated ceilings and wall cracks due to water infiltration" },
  "تصدعات خطيرة بالجدران": { fr:"Fissures graves dans les murs", en:"Serious cracks in the walls" },
  "تصدعات خطيرة وجزء من السقوف متهدم": { fr:"Fissures graves, une partie de la toiture est effondrée", en:"Serious cracks; part of the roof has collapsed" },
  "عقار متصدع ومتشقق ومكناس بالجدران، حالة سيئة": { fr:"Bâtiment fissuré et lézardé avec dépôts contre les murs, état mauvais", en:"Cracked and fissured building with debris against the walls, poor condition" },
  "تشققات خطيرة ومناطق بالجدران آيلة للسقوط": { fr:"Lézardes graves, zones des murs menaçant de s'effondrer", en:"Serious fissures, sections of wall at risk of collapse" },
  "تصدعات وتشققات عميقة بالجدران": { fr:"Fissures et lézardes profondes dans les murs", en:"Deep cracks and fissures in the walls" },
  "تصدعات ومناطق خطيرة بالجدران": { fr:"Fissures et zones dangereuses dans les murs", en:"Cracks and hazardous areas in the walls" },
  "العقار مغلق، تصدعات ومناطق للفصلات وحالة سيئة": { fr:"Bâtiment fermé, fissures et zones de gravats, état mauvais", en:"Building closed, cracks and debris areas, poor condition" },
  "العقار مغلق، تصدعات وتشققات بالجدران وحالة سيئة": { fr:"Bâtiment fermé, fissures et lézardes dans les murs, état mauvais", en:"Building closed, wall cracks and fissures, poor condition" },
  "العقار مغلق، تصدعات وحالة البناء سيئة": { fr:"Bâtiment fermé, fissures et état de construction mauvais", en:"Building closed, cracks and poor structural condition" },
  "العقار مغلق، تصدعات ومكناسي للسقوط": { fr:"Bâtiment fermé, fissures et risque imminent d'effondrement", en:"Building closed, cracks and imminent risk of collapse" },
  "العقار مسكونة، شققات وتصدعات عميقة بالجدران وحالة البناء سيئة": { fr:"Bâtiment habité, fissures et lézardes profondes dans les murs, état de construction mauvais", en:"Building occupied, deep cracks and fissures in the walls, poor structural condition" },
  "العقار محل سكني وتشققات وتصدعات بالجدران، حالة سيئة": { fr:"Bâtiment à usage résidentiel, fissures et lézardes murales, état mauvais", en:"Building used as residence, wall cracks and fissures, poor condition" },
  "العقار مغلق، تشققات وتصدعات بالجدران وحالة سيئة": { fr:"Bâtiment fermé, fissures et lézardes murales, état mauvais", en:"Building closed, wall cracks and fissures, poor condition" },
  "تصدعات خطيرة وحالة السقوف منهارة": { fr:"Fissures graves, toitures effondrées", en:"Serious cracks, collapsed roofing" },
  "القارين مغلقان، شققات ووجود مصعدة للعقار حجرة جزئية من السقف الغصء والفتحات": { fr:"Les deux immeubles sont fermés, fissures et partie du toit et des ouvertures endommagée", en:"Both buildings are closed, fissures and a section of the roof and openings damaged" },
  "تشققات وتصدعات بالجدران وحالة بناء سيئة": { fr:"Fissures et lézardes murales, état de construction mauvais", en:"Wall cracks and fissures, poor structural condition" },
  "تصدعات وتشققات عميقة بالجدران والراجعة": { fr:"Fissures et lézardes profondes dans les murs et la façade arrière", en:"Deep cracks and fissures in the walls and rear façade" },
  "تشققات وتصدعات بالجدران وحالة البناء سيئة": { fr:"Fissures et lézardes murales, état de construction mauvais", en:"Wall cracks and fissures, poor structural condition" },
  "محل تجاري (دكان)، تشققات وتصدعات جزئية بالجدران": { fr:"Local commercial (boutique), fissures partielles dans les murs", en:"Commercial premises (shop), partial wall cracks" },
  "غرفة ملحقة بمجمع سكني/حرفي، حالة بناء متوسطة إلى سيئة": { fr:"Chambre annexe à un ensemble résidentiel/artisanal, état de construction moyen à mauvais", en:"Room attached to a residential/craft complex, fair to poor structural condition" },
  "معلم ديني (جامع)، بحاجة إلى صيانة دورية": { fr:"Monument religieux (mosquée), nécessite un entretien régulier", en:"Religious landmark (mosque), requires regular maintenance" },
  "مصلى ديني، حالة عامة تحتاج متابعة": { fr:"Oratoire, état général à surveiller", en:"Prayer room, overall condition requires monitoring" },
  "حمام تاريخي (سيدي المسندي)، تصدعات بالجدران والقبة الجوفية": { fr:"Hammam historique (Sidi El Mesnaoui), fissures dans les murs et la coupole souterraine", en:"Historic hammam (Sidi El Mesnaoui), cracks in the walls and underground dome" },
  "العقار محل نشاط جمعوي، تصدعات وتشققات جزئية": { fr:"Bâtiment utilisé par une association, fissures et lézardes partielles", en:"Building used for association activity, partial cracks and fissures" },
  "العقار أصبح ساحة مسيجة ومصبا للفضلات، جدران متبقية آيلة للسقوط": { fr:"Le bâtiment est devenu un terrain clôturé et un dépotoir, murs restants menaçant de s'effondrer", en:"The building has become a fenced-off dumping ground; remaining walls at risk of collapse" },
  "سوق الأطعمة، تشققات وتصدعات بالجدران وحالة السقوف سيئة": { fr:"Marché alimentaire, fissures et lézardes murales, toitures en mauvais état", en:"Food market, wall cracks and fissures, roofing in poor condition" },
  "ساحة مسيجة نتجت عن هدم عقارات سابقة، تراكم أنقاض ونفايات": { fr:"Terrain clôturé issu de démolitions antérieures, accumulation de gravats et de déchets", en:"Fenced-off plot resulting from earlier demolitions, accumulation of rubble and waste" },
  "برج من سور المدينة العتيقة، تآكل بالحجارة وتشققات": { fr:"Tour du rempart de la médina, érosion de la pierre et fissures", en:"Tower of the old medina wall, stone erosion and cracks" },
  "منزل تقليدي مغلق ومهجور، حالة تدهور عامة": { fr:"Maison traditionnelle fermée et abandonnée, état général dégradé", en:"Traditional house, closed and abandoned, general state of decay" },
  "معلم ديني تاريخي (زاوية سيدي حمدان)، مغلق ومهجور بسبب توقف النشاط": { fr:"Monument religieux historique (Zaouïa Sidi Hamdane), fermé et abandonné suite à l'arrêt de l'activité", en:"Historic religious landmark (Sidi Hamdane Zawiya), closed and abandoned after activity ceased" },
  "مجموعة من العقارات ميغم بابها مطموس أصبحت ساحة مسيجة، تكدست بداخلها بقايا الأنقاض والأوساخ والقوارض وأصبحت مصبا للفضلات والنفايات الصناعية في اتلاع جدير الاختصاص": { fr:"Groupe de bâtiments abandonnés aux accès murés, devenus un terrain clôturé où s'accumulent gravats, saletés et rongeurs, transformé en dépotoir de déchets industriels", en:"A group of abandoned buildings with bricked-up entrances, now a fenced-off plot where rubble, filth and rodents accumulate, turned into a dumping ground for industrial waste" },
  "عقار ميغم بابه مطموس اصبح ساحة مسيجة تكدست بداخلها بقايا انقاض والاوساخ": { fr:"Bâtiment abandonné à l'accès muré, devenu un terrain clôturé où s'accumulent gravats et saletés", en:"Abandoned building with a bricked-up entrance, now a fenced-off plot where rubble and filth accumulate" },
  "مخزرة، عقار ميغم": { fr:"Entrepôt, bâtiment abandonné", en:"Storage depot, abandoned building" },
  "مخزرة، عقار ميغم بابه مطموس": { fr:"Entrepôt, bâtiment abandonné à l'accès muré", en:"Storage depot, abandoned building with bricked-up entrance" },
  "مخزرة مغلقة بابها مطموس اصبحت ساحة مسيجة ومصبا للقوارض": { fr:"Entrepôt fermé à l'accès muré, devenu un terrain clôturé infesté de rongeurs", en:"Closed storage depot with a bricked-up entrance, now a fenced-off plot infested with rodents" },
  "معلم ديني (مسجد سيدي البرشاني)، بحاجة إلى صيانة دورية": { fr:"Monument religieux (mosquée Sidi El Bourchani), nécessite un entretien régulier", en:"Religious landmark (Sidi El Bourchani mosque), requires regular maintenance" },
  "معلم ديني (مسجد سيدي علي غلاب)، بحاجة إلى صيانة دورية": { fr:"Monument religieux (mosquée Sidi Ali Ghlab), nécessite un entretien régulier", en:"Religious landmark (Sidi Ali Ghlab mosque), requires regular maintenance" },
  "حمام تاريخي (حمام السلطان)، معلم عمراني بحالة تستوجب المتابعة": { fr:"Hammam historique (Hammam Essultan), monument urbain dont l'état nécessite un suivi", en:"Historic hammam (Essultan Hammam), urban landmark requiring condition monitoring" },
};

const atriskInterventionI18n = {
  "هدم العقار (الطابق العلوي) وترميم قبل تدهور الحالة": { fr:"Démolition du bâtiment (étage supérieur) et restauration avant aggravation", en:"Demolish the building (upper floor) and restore before further deterioration" },
  "هدم الطابق العلوي وترميم قبل السقوط": { fr:"Démolition de l'étage supérieur et restauration avant effondrement", en:"Demolish the upper floor and restore before collapse" },
  "ترميم الطابق العلوي وتدعيم قبل السقوط": { fr:"Restauration et renforcement de l'étage supérieur avant effondrement", en:"Restore and reinforce the upper floor before collapse" },
  "هدم العقار بالكامل": { fr:"Démolition totale du bâtiment", en:"Full demolition of the building" },
  "إعادة بناء الطابق العلوي وترميم الشبكات": { fr:"Reconstruction de l'étage supérieur et remise en état des réseaux", en:"Rebuild the upper floor and restore utility networks" },
  "هدم الطابق العلوي بالكامل وترميم قبل السقوط": { fr:"Démolition totale de l'étage supérieur et restauration avant effondrement", en:"Full demolition of the upper floor and restoration before collapse" },
  "ترميم الطابق العلوي وترميم قبل السقوط": { fr:"Restauration de l'étage supérieur avant effondrement", en:"Restore the upper floor before collapse" },
  "هدم الطابق العلوي وترميم": { fr:"Démolition de l'étage supérieur et restauration", en:"Demolish the upper floor and restore" },
  "هدم الطابق العلوي وتدعيم وترميم": { fr:"Démolition de l'étage supérieur, renforcement et restauration", en:"Demolish the upper floor, reinforce and restore" },
  "ترميم قبل السقوط": { fr:"Restauration avant effondrement", en:"Restore before collapse" },
  "ترميم قبل السقوط بالكامل": { fr:"Restauration complète avant effondrement", en:"Full restoration before collapse" },
  "ترميم الطابق الثاني ورفع الاختصاص": { fr:"Restauration du 2e étage et levée des empiètements", en:"Restore the 2nd floor and remove encroachments" },
  "ترميم قبل السقوط وحماية الواجهة": { fr:"Restauration avant effondrement et protection de la façade", en:"Restore before collapse and protect the façade" },
  "هدم غير قبل للنقاط وتنظيف بناء الطابق": { fr:"Démolition partielle et nettoyage de la construction de l'étage", en:"Partial demolition and clean-up of the floor's construction" },
  "هدم الطابق الثاني وترميم": { fr:"Démolition du 2e étage et restauration", en:"Demolish the 2nd floor and restore" },
  "ترميم جدار جزئي وحيك البنابة الاحدية": { fr:"Restauration partielle du mur et reprise de la structure attenante", en:"Partial wall restoration and rework of the adjoining structure" },
  "ترميم بجدران للتقص": { fr:"Restauration des murs affaissés", en:"Restore the subsiding walls" },
  "ترميم قبل للتقص": { fr:"Restauration avant affaissement", en:"Restore before subsidence" },
  "متابعة الصيانة الدورية للمعلم": { fr:"Suivi de l'entretien périodique du monument", en:"Follow up on regular maintenance of the landmark" },
  "ترميم وصيانة المصلى": { fr:"Restauration et entretien de l'oratoire", en:"Restore and maintain the prayer room" },
  "ترميم الحمام والسطح، حماية النمط التقليدي": { fr:"Restauration du hammam et de la toiture, préservation du style traditionnel", en:"Restore the hammam and roof, preserve the traditional style" },
  "ترميم قبل تدهور الحالة": { fr:"Restauration avant aggravation de l'état", en:"Restore before the condition worsens" },
  "رفع الأنقاض وتنظيف الفضاء، ترميم الجدران المتبقية أو هدمها": { fr:"Enlèvement des gravats, nettoyage du site, restauration ou démolition des murs restants", en:"Remove rubble, clean up the site, restore or demolish the remaining walls" },
  "ترميم قبل السقوط ومراجعة شبكات البنية التحتية": { fr:"Restauration avant effondrement et révision des réseaux d'infrastructure", en:"Restore before collapse and review infrastructure networks" },
  "رفع الأنقاض وتنظيف الفضاء وإعادة تهيئته": { fr:"Enlèvement des gravats, nettoyage et réaménagement du site", en:"Remove rubble, clean up and redevelop the site" },
  "ترميم البرج والحفاظ على النمط التقليدي للسور": { fr:"Restauration de la tour et préservation du style traditionnel du rempart", en:"Restore the tower and preserve the traditional style of the wall" },
  "رفع الاقتضاض، المحافظة على الحجارة، الحجرة المعمارية": { fr:"Enlèvement des dépôts, préservation de la pierre et des éléments architecturaux", en:"Remove debris, preserve the stonework and architectural elements" },
  "ترميم المعلم وإتمام الأعمال اللازمة لتوفير الاعتمادات": { fr:"Restauration du monument et réalisation des travaux nécessaires sous réserve de financement", en:"Restore the landmark and complete the necessary works once funding is available" },
  "رفع الأنقاض والفضلات وتنظيف الواجهات الداخلية وترميم الاجهزة الحمائية": { fr:"Enlèvement des gravats et déchets, nettoyage des façades intérieures et restauration des dispositifs de protection", en:"Remove rubble and waste, clean the inner façades and restore protective fixtures" },
  "رفع الاقتضاض وتنظيف الفضاء الداخلي وإزالة النخالة": { fr:"Enlèvement des dépôts, nettoyage de l'espace intérieur et élimination des débris", en:"Remove debris, clean the interior space and clear away rubbish" },
  "رفع الاقتضاض وتنظيف الفضاء الداخلي": { fr:"Enlèvement des dépôts et nettoyage de l'espace intérieur", en:"Remove debris and clean the interior space" },
  "رفع الاقتضاض وتنظيف الفضاء وإزالة النخالة": { fr:"Enlèvement des dépôts, nettoyage du site et élimination des débris", en:"Remove debris, clean the site and clear away rubbish" },
  "متابعة الصيانة الدورية للمعلم مع المحافظة على الاعتمادات المعمارية": { fr:"Suivi de l'entretien périodique du monument tout en préservant ses éléments architecturaux", en:"Follow up on regular maintenance while preserving the landmark's architectural elements" },
  "ترميم العمل مع الحفاظ على العناصر المعمارية والعروف التاريخية": { fr:"Restauration de l'ouvrage tout en préservant les éléments architecturaux et le caractère historique", en:"Restore the structure while preserving its architectural elements and historic character" },
};

const atriskWordI18n = {
  "نهج": { fr:"Rue", en:"Street" },
  "زنقة": { fr:"Impasse", en:"Alley" },
  "عدد": { fr:"n°", en:"No." },
  "سباط": { fr:"Passage couvert", en:"Covered passage" },
  "ساحة": { fr:"Place", en:"Square" },
  "سوق": { fr:"Marché", en:"Market" },
  "زاوية": { fr:"Zaouïa", en:"Zawiya" },
  "جامع": { fr:"Mosquée", en:"Mosque" },
  "ركن": { fr:"Angle", en:"Corner of" },
  "بودية": { fr:"Boudia", en:"Boudia" },
  "قصارية": { fr:"Impasse", en:"Cul-de-sac" },
  "مكرر": { fr:"bis", en:"bis" },
  "حمام": { fr:"Hammam", en:"Hammam" },
  "برج": { fr:"Tour", en:"Tower" },
  "منزل": { fr:"Maison", en:"House" },
  "مصلى": { fr:"Oratoire", en:"Prayer room" },
  "مصنع": { fr:"Atelier", en:"Workshop" },
  "قصر": { fr:"Ksar", en:"Ksar" },
  "الجديد": { fr:"Ennejma / Bab Jedid", en:"Bab Jedid" },
  "و": { fr:"et", en:"and" },
  "ورشة صناعة الأحذية": { fr:"atelier de cordonnerie", en:"shoemaking workshop" },
  "محل سكني": { fr:"local à usage résidentiel", en:"residential unit" },
  "مكتبة": { fr:"bibliothèque", en:"library" },
};

const atriskStreetI18n = {
  "جامع سيدي سعادة كاتون / نهج العيساوية": { fr:"Mosquée Sidi Saâda Katoun / Rue El Aïssaouia", en:"Sidi Saada Katoun Mosque / El Aissaouia Street" },
  "ركن نهج المنجي سليم": { fr:"Angle Rue El Mongi Slim", en:"Corner of El Mongi Slim Street" },
  "زاوية سيدي حمدان، نهج القصبة": { fr:"Zaouïa Sidi Hamdane, Rue El Kasbah", en:"Sidi Hamdane Zawiya, El Kasbah Street" },
  "سباط الرومي، نهج باب الجديد الجديد": { fr:"Passage Erroumi, Rue Bab Jedid", en:"Erroumi Passage, Bab Jedid Street" },
  "سباط نهج القائد": { fr:"Passage couvert, Rue El Kaïd", en:"Covered passage, El Kaid Street" },
  "سباط نهج المنجي سليم": { fr:"Passage couvert, Rue El Mongi Slim", en:"Covered passage, El Mongi Slim Street" },
  "سوق العطارين": { fr:"Souk El Attarine", en:"El Attarine Souk" },
  "نهج أحمد باي": { fr:"Rue Ahmed Bey", en:"Ahmed Bey Street" },
  "نهج أحمد غربال": { fr:"Rue Ahmed Gharbal", en:"Ahmed Gharbal Street" },
  "نهج أحمد ملاك": { fr:"Rue Ahmed Mallek", en:"Ahmed Mallek Street" },
  "نهج أملكار": { fr:"Rue Amilcar", en:"Amilcar Street" },
  "نهج ابن رشد": { fr:"Rue Ibn Rochd", en:"Ibn Rochd Street" },
  "نهج ازنريطل": { fr:"Rue Ezenritel", en:"Ezenritel Street" },
  "نهج البساوية": { fr:"Rue El Bassaouia", en:"El Bassaouia Street" },
  "نهج الثنية السلامي": { fr:"Rue Thania Essalami", en:"Thania Essalami Street" },
  "نهج الجامع الكبير": { fr:"Rue de la Grande Mosquée", en:"Great Mosque Street" },
  "نهج الحميدية": { fr:"Rue El Hamidia", en:"El Hamidia Street" },
  "نهج الخلفية": { fr:"Rue El Khalfia", en:"El Khalfia Street" },
  "نهج الدريبة": { fr:"Rue Edriba", en:"Edriba Street" },
  "نهج الربيعة": { fr:"Rue Errabiaa", en:"Errabiaa Street" },
  "نهج السبعي": { fr:"Rue Essebai", en:"Essebai Street" },
  "نهج السماء": { fr:"Rue Essama", en:"Essama Street" },
  "نهج السمراء": { fr:"Rue Essamra", en:"Essamra Street" },
  "نهج السور": { fr:"Rue Essour", en:"Essour Street" },
  "نهج الشيخ التيجاني": { fr:"Rue Cheikh Tijani", en:"Sheikh Tijani Street" },
  "نهج الشيخ السلامي": { fr:"Rue Cheikh Essalami", en:"Sheikh Essalami Street" },
  "نهج الصباغين": { fr:"Rue des Teinturiers (Essabbaghine)", en:"Dyers' Street (Essabbaghine)" },
  "نهج الطاهر المنيف": { fr:"Rue Taher El Manif", en:"Taher El Manif Street" },
  "نهج العيساوية": { fr:"Rue El Aïssaouia", en:"El Aissaouia Street" },
  "نهج القصبة": { fr:"Rue El Kasbah", en:"El Kasbah Street" },
  "نهج القصر": { fr:"Rue El Kasr", en:"El Kasr Street" },
  "نهج المرابطين": { fr:"Rue El Mourabitine", en:"El Mourabitine Street" },
  "نهج المنجي سليم": { fr:"Rue El Mongi Slim", en:"El Mongi Slim Street" },
  "نهج باب الجديد": { fr:"Rue Bab Jedid", en:"Bab Jedid Street" },
  "نهج باب الجديد العيساوية": { fr:"Rue Bab Jedid El Aïssaouia", en:"Bab Jedid El Aissaouia Street" },
  "نهج برج النار": { fr:"Rue Bordj Ennar", en:"Bordj Ennar Street" },
  "نهج بن قدور": { fr:"Rue Ben Guedour", en:"Ben Guedour Street" },
  "نهج بويكر الفقروي": { fr:"Rue Boubaker El Fakroui", en:"Boubaker El Fakroui Street" },
  "نهج بويكر القفروي": { fr:"Rue Boubaker El Kefroui", en:"Boubaker El Kefroui Street" },
  "نهج تبرورة": { fr:"Rue Taberoura", en:"Taberoura Street" },
  "نهج جاكرتة": { fr:"Rue Jakarta", en:"Jakarta Street" },
  "نهج حزون": { fr:"Rue Hzoun", en:"Hzoun Street" },
  "نهج خير الدين": { fr:"Rue Kheireddine", en:"Kheireddine Street" },
  "نهج دار السبعي": { fr:"Rue Dar Essebai", en:"Dar Essebai Street" },
  "نهج سالم البكري": { fr:"Rue Salem El Bakri", en:"Salem El Bakri Street" },
  "نهج سعد خريز": { fr:"Rue Saad Khriz", en:"Saad Khriz Street" },
  "نهج سيدي جبلة": { fr:"Rue Sidi Jebla", en:"Sidi Jebla Street" },
  "نهج سيدي خليل": { fr:"Rue Sidi Khelil", en:"Sidi Khelil Street" },
  "نهج سيدي خليل بن عيسى": { fr:"Rue Sidi Khelil Ben Aïssa", en:"Sidi Khelil Ben Aissa Street" },
  "نهج سيدي سعيد خنفير": { fr:"Rue Sidi Said Khenfir", en:"Sidi Said Khenfir Street" },
  "نهج سيدي عباس": { fr:"Rue Sidi Abbes", en:"Sidi Abbes Street" },
  "نهج سيدي علي النوري": { fr:"Rue Sidi Ali Ennouri", en:"Sidi Ali Ennouri Street" },
  "نهج شرورة": { fr:"Rue Chourourou", en:"Chourourou Street" },
  "نهج عبد العزيز الفراتي": { fr:"Rue Abdelaziz El Frati", en:"Abdelaziz El Frati Street" },
  "نهج عبد القادر": { fr:"Rue Abdelkader", en:"Abdelkader Street" },
  "نهج علي الترخي": { fr:"Rue Ali Etturki", en:"Ali Etturki Street" },
  "نهج علي عبد الناضر": { fr:"Rue Ali Abdennadhir", en:"Ali Abdennadhir Street" },
  "نهج محمد بوزيد": { fr:"Rue Mohamed Bouzid", en:"Mohamed Bouzid Street" },
  "نهج محمد كمون": { fr:"Rue Mohamed Kammoun", en:"Mohamed Kammoun Street" },
  "نهج مكة": { fr:"Rue Mecque", en:"Mecca Street" },
  "نهج الحدادين": { fr:"Rue El Haddadine", en:"El Haddadine Street" },
  "قصارية الجمل": { fr:"Impasse El Jamel", en:"El Jamel cul-de-sac" },
  "قصارية الشيشمة": { fr:"Impasse Chichma", en:"Chichma cul-de-sac" },
  "قصارية القنيقة": { fr:"Impasse El Guenniga", en:"El Guenniga cul-de-sac" },
  "قصارية الربيع": { fr:"Impasse Errabie", en:"Errabie cul-de-sac" },
  "قصارية أمين": { fr:"Impasse Amine", en:"Amine cul-de-sac" },
  "سوق الأطعمة": { fr:"Marché des denrées alimentaires", en:"Food Market" },
};

const atriskRiskLabelI18n = {
  "Red": { fr:"Danger grave", en:"Severe risk" },
  "Orange": { fr:"Intervention requise", en:"Intervention required" },
  "Yellow": { fr:"Sous surveillance", en:"Monitoring" },
  "Unknown": { fr:"Données incomplètes", en:"Incomplete data" },
};


/*=====================================
Helper functions
=====================================*/

// يترجم عبارة عربية (نوع/تشخيص/تدخل) عبر القاموس المناسب،
// ويرجع نفس النص العربي إذا لم يكن هناك مقابل جاهز (حماية من الانهيار).
function atriskTranslateField(dict, arabicValue, lang) {
    if (!arabicValue) return arabicValue;
    if (lang === "ar" || !lang) return arabicValue;
    const entry = dict[arabicValue];
    if (!entry) return arabicValue;
    return entry[lang] || arabicValue;
}

// يترجم عبارة "رقم العقار" / بادئة اسم المالك المعروضة بدل الاسم الحقيقي.
function atriskPropertyLabel(id, lang) {
    if (lang === "fr") return "Bâtiment n° " + id;
    if (lang === "en") return "Building No. " + id;
    return "عقار عدد " + id;
}

// يترجم عنوان عقار كامل (مثال: "نهج القصر زنقة 4 عدد 11 مكرر") بالبحث أولاً
// عن اسم النهج/المعلم الكامل بقاموس الأنهج، ثم استبدال الكلمات الوصلية
// (نهج/زنقة/عدد/مكرر...) المتبقية كلمة بكلمة، مع إبقاء الأرقام كما هي.
function atriskTranslateAddress(address, lang) {
    if (!address) return address;
    if (lang === "ar" || !lang) return address;

    let result = address;

    // رتب أسماء الأنهج من الأطول إلى الأقصر حتى لا يبتلع نهج قصير جزءاً
    // من اسم نهج أطول يحتويه كبادئة.
    const streetKeys = Object.keys(atriskStreetI18n).sort((a, b) => b.length - a.length);
    for (const key of streetKeys) {
        if (result.indexOf(key) !== -1) {
            const entry = atriskStreetI18n[key];
            result = result.split(key).join(entry[lang] || key);
        }
    }

    // استبدال الكلمات الوصلية المتبقية (لو بقيت أي بادئة عربية لم تُستبدل
    // ضمن اسم نهج مركّب أعلاه).
    const wordKeys = Object.keys(atriskWordI18n).sort((a, b) => b.length - a.length);
    for (const key of wordKeys) {
        if (result.indexOf(key) !== -1) {
            const entry = atriskWordI18n[key];
            result = result.split(key).join(entry[lang] || key);
        }
    }

    return result;
}

function atriskTranslateType(value, lang) {
    return atriskTranslateField(atriskTypeI18n, value, lang);
}

function atriskTranslateDiagnosis(value, lang) {
    return atriskTranslateField(atriskDiagnosisI18n, value, lang);
}

function atriskTranslateIntervention(value, lang) {
    return atriskTranslateField(atriskInterventionI18n, value, lang);
}

function atriskTranslateRiskLabel(risk, lang) {
    const fallback = { Red:"خطر جسيم", Orange:"يتطلب تدخل", Yellow:"مراقبة", Unknown:"بيانات ناقصة" };
    if (lang === "ar" || !lang) return fallback[risk] || risk;
    const entry = atriskRiskLabelI18n[risk];
    return entry ? (entry[lang] || fallback[risk] || risk) : (fallback[risk] || risk);
}
