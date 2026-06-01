
// 🔥 ТВОЙ ПОЛНЫЙ АССОРТИМЕНТ ✔️Актуальное наличие✔️
const products = [
    // ⚡ ЭНЕРГИТКИ (16💸)
    { id: 1, name: "D.L.T.A ☠️", price: 16, category: "snus", brand: "jord", description: "Энергетик, 250мл" },
    { id: 2, name: "Red Bull 🐂", price: 16, category: "snus", brand: "jord", description: "Энергетик, 250мл" },
    { id: 3, name: "Adrenaline RUSH PEPSI 💙", price: 16, category: "snus", brand: "jord", description: "Кола + энергетик, 250мл" },
    { id: 4, name: "Adrenaline RUSH LIMITED EDITION ICE EFFECT 🔳", price: 16, category: "snus", brand: "jord", description: "Ледяной эффект, 250мл" },
    { id: 5, name: "Adrenaline RUSH 🤩", price: 16, category: "snus", brand: "jord", description: "Классика, 250мл" },
    { id: 6, name: "Adrenaline VITAMIN POWER 🙃", price: 16, category: "snus", brand: "jord", description: "С витаминами, 250мл" },
    { id: 7, name: "MONSTER ENERGY 🖤", price: 16, category: "snus", brand: "jord", description: "Энергетик, 250мл" },

    // 🌼 BJORN LONG 80mg (20💸) - 13 вкусов
    { id: 8, name: "BJORN LONG 80mg 🧛 — Виноград арбуз 🍉", price: 20, category: "liquid",Image:"1.jpg.jpg", brand: "jord", description: "80mg, 30мл" },
    { id: 9, name: "BJORN LONG 80mg 🧛 — Виноградный чупа-чупс 🪡", price: 20, category: "liquid", brand: "jord", description: "80mg, 30мл" },
    { id: 10, name: "BJORN LONG 80mg 🧛 — Вишня Dr Pepper ❤️", price: 20, category: "liquid", brand: "jord", description: "80mg, 30мл" },
    { id: 11, name: "BJORN LONG 80mg 🧛 — Киви яблоко 🍎", price: 20, category: "liquid", brand: "jord", description: "80mg, 30мл" },
    { id: 12, name: "BJORN LONG 80mg 🧛 — Клубника банан 🍌", price: 20, category: "liquid", brand: "jord", description: "80mg, 30мл" },
    { id: 13, name: "BJORN LONG 80mg 🧛 — Клюква апельсин 🍊", price: 20, category: "liquid", brand: "jord", description: "80mg, 30мл" },
    { id: 14, name: "BJORN LONG 80mg 🧛 — Малиновая газировка 🥤", price: 20, category: "liquid", brand: "jord", description: "80mg, 30мл" },
    { id: 15, name: "BJORN LONG 80mg 🧛 — Мандарин персик 🍑", price: 20, category: "liquid", brand: "jord", description: "80mg, 30мл" },
    { id: 16, name: "BJORN LONG 80mg 🧛 — Мята спрайт ❤️", price: 20, category: "liquid", brand: "jord", description: "80mg, 30мл" },
    { id: 17, name: "BJORN LONG 80mg 🧛 — Персик абрикос 🍑", price: 20, category: "liquid", brand: "jord", description: "80mg, 30мл" },
    { id: 18, name: "BJORN LONG 80mg 🧛 — Фруктовый мармелад 🍑", price: 20, category: "liquid", brand: "jord", description: "80mg, 30мл" },
    { id: 19, name: "BJORN LONG 80mg 🧛 — Ягодная жвачка 🍬", price: 20, category: "liquid", brand: "jord", description: "80mg, 30мл" },
    { id: 20, name: "BJORN LONG 80mg 🧛 — Арбузная жвачка 🍬", price: 20, category: "liquid", brand: "jord", description: "80mg, 30мл" },

    // 🔥 BJORN V МЁД 60mg (18💸) - 6 вкусов
    { id: 21, name: "BJORN V МЁД 60mg 🔥 — Арбузная жвачка 🤩", price: 18, category: "liquid", brand: "jord", description: "60mg, 30мл" },
    { id: 22, name: "BJORN V МЁД 60mg 🔥 — Вишневая кола 🍒", price: 18, category: "liquid", brand: "jord", description: "60mg, 30мл" },
    { id: 23, name: "BJORN V МЁД 60mg 🔥 — Клубника банан 🍌", price: 18, category: "liquid", brand: "jord", description: "60mg, 30мл" },
    { id: 24, name: "BJORN V МЁД 60mg 🔥 — Клубника малина вишня со льдом ❄️", price: 18, category: "liquid", brand: "jord", description: "60mg, 30мл" },
    { id: 25, name: "BJORN V МЁД 60mg 🔥 — Клюквенный ред булл 🐂", price: 18, category: "liquid", brand: "jord", description: "60mg, 30мл" },
    { id: 26, name: "BJORN V МЁД 60mg 🔥 — Мятная вишнёвая жвачка 🤩", price: 18, category: "liquid", brand: "jord", description: "60mg, 30мл" },

    // 🦴 ANNIMA LOVE MISIDE (16💸)
    { id: 27, name: "ANNIMA LOVE MISIDE 🦴 — Добрый арбуз 🍉", price: 16, category: "liquid", brand: "jord", description: "30мл" },

    // 🔥 ANNIMA & САМОУБИЙЦА 80 MG (18💸)
    { id: 28, name: "ANNIMA & САМОУБИЙЦА 80MG — Арбуз малина 🍓", price: 18, category: "liquid", brand: "jord", description: "80mg, 30мл" },
    { id: 29, name: "ANNIMA & САМОУБИЙЦА 80MG — Скитлс 🍬", price: 18, category: "liquid", brand: "jord", description: "80mg, 30мл" },

    // ☠️ ГРЕХ САМОУБИЙЦА (18💸)
    { id: 30, name: "ГРЕХ САМОУБИЙЦА ☠️ — Сок земляники и смородины лед 🧊", price: 18, category: "liquid", brand: "jord", description: "30мл" },
    { id: 31, name: "ГРЕХ САМОУБИЙЦА ☠️ — Холодный фруктовый скитлс 🍭", price: 18, category: "liquid", brand: "jord", description: "30мл" },
    { id: 32, name: "ГРЕХ САМОУБИЙЦА ☠️ — Барбарис малина лед 🥶", price: 18, category: "liquid", brand: "jord", description: "30мл" },
    { id: 33, name: "ГРЕХ САМОУБИЙЦА ☠️ — Клюква+красная смородина+лайм 🤩", price: 18, category: "liquid", brand: "jord", description: "30мл" },

    // 🤩 HOTSPOT ICE (14💸)
    { id: 34, name: "HOTSPOT ICE 🤩 — Кола 🥤", price: 14, category: "liquid", brand: "jord", description: "30мл" },

    // ⚠️ САМОУБИЙЦА V2 DANGER (18💸)
    { id: 35, name: "САМОУБИЙЦА V2 DANGER ⚠️ — Малина виноград 🍇", price: 18, category: "liquid", brand: "jord", description: "30мл" },

    // ⚡ LIT ENERGY CLASSIK (18💸)
    { id: 36, name: "LIT ENERGY CLASSIK ⚡️ — Арбузно дынный фреш 🤩", price: 18, category: "liquid", brand: "jord", description: "30мл" },
    { id: 37, name: "LIT ENERGY CLASSIK ⚡️ — Вишня виноград 🍇", price: 18, category: "liquid", brand: "jord", description: "30мл" },

    // ☠️ ЗЛАЯ МОНАШКА x TPL (18💸)
    { id: 38, name: "ЗЛАЯ МОНАШКА x TPL ☠️ — Кислый арбуз земляника 🍓", price: 18, category: "liquid", brand: "jord", description: "30мл" },
    { id: 39, name: "ЗЛАЯ МОНАШКА x TPL ☠️ — Кислые вишневые червячки 🍒", price: 18, category: "liquid", brand: "jord", description: "30мл" },
    { id: 40, name: "ЗЛАЯ МОНАШКА x TPL ☠️ — Кислые земляничные червячки 🤩", price: 18, category: "liquid", brand: "jord", description: "30мл" },

    // 🧊 ЗЛАЯ МОНАШКА ICE (18💸)
    { id: 41, name: "ЗЛАЯ МОНАШКА ICE 🧊 — Лимонад из малины и черники 🫐", price: 18, category: "liquid", brand: "jord", description: "30мл" },
    { id: 42, name: "ЗЛАЯ МОНАШКА ICE 🧊 — Малина арбуз лед 🥶", price: 18, category: "liquid", brand: "jord", description: "30мл" },
    { id: 43, name: "ЗЛАЯ МОНАШКА ICE 🧊 — Клубничный коктейль 🍸", price: 18, category: "liquid", brand: "jord", description: "30мл" },
    { id: 44, name: "ЗЛАЯ МОНАШКА ICE 🧊 — Морс из красных ягод 🥶", price: 18, category: "liquid", brand: "jord", description: "30мл" },
    { id: 45, name: "ЗЛАЯ МОНАШКА ICE 🧊 — Виноградные леденцы лед 🧊", price: 18, category: "liquid", brand: "jord", description: "30мл" },

    // 🔧 КАРТРИДЖИ И ИСПАРИТЕЛИ (13💸)
    { id: 46, name: "Картридж xros 0.8 (3мл)", price: 13, category: "coils", brand: "vaporesso", description: "Оригинал, 3мл" },
    { id: 47, name: "Картридж xros 0.6 (3мл)", price: 13, category: "coils", brand: "vaporesso", description: "Оригинал, 3мл" },
    { id: 48, name: "Картридж xros 0.4 (3мл)", price: 13, category: "coils", brand: "vaporesso", description: "Оригинал, 3мл" },
    { id: 49, name: "Картридж xros 0.6 (2мл)", price: 13, category: "coils", brand: "vaporesso", description: "Оригинал, 2мл" },
    { id: 50, name: "Испаритель Aegis Coil B0 (50-58w)", price: 13, category: "coils", brand: "geekvape", description: "0.2Ω, 5 шт" },

    // 💊 НИКОБУСТЕР (3💸)
    { id: 51, name: "НИКОБУСТЕР SALT (+20мг на 30 мл)", price: 3, category: "consumables", brand: "jord", description: "Для самостоятельного миксования" },

    // 🚬 СИГАРЕТЫ MARLBORO
    { id: 52, name: "Marlboro Red (KING SIZE)", price: 14, category: "cigarettes", brand: "marlboro", description: "Классика, полная пачка" },
    { id: 53, name: "Marlboro Premium Black (KING SIZE)", price: 15, category: "cigarettes", brand: "marlboro", description: "Премиум, полная пачка" },
    { id: 54, name: "Marlboro Gold (KING SIZE)", price: 14, category: "cigarettes", brand: "marlboro", description: "Золотая, полная пачка" },
    { id: 55, name: "Marlboro Flavor code (KING SIZE)", price: 15, category: "cigarettes", brand: "marlboro", description: "Со вкусом, полная пачка" },
    { id: 56, name: "Marlboro Vista (COMPACT)", price: 13, category: "cigarettes", brand: "marlboro", description: "Компакт, полная пачка" },
    { id: 57, name: "Marlboro Brown (COMPACT)", price: 13, category: "cigarettes", brand: "marlboro", description: "Коричневая, полная пачка" },

    // ☁️ LOST MARY
    { id: 58, name: "LOST MARY 5к — Клубничное мороженое", price: 20, category: "pod", brand: "lostmary", description: "5000 тяг" },
    { id: 59, name: "LOST MARY 5к — Клубника гуава мята", price: 20, category: "pod", brand: "lostmary", description: "5000 тяг" },
    { id: 60, name: "LOST MARY 5к — Клубника арбуз", price: 20, category: "pod", brand: "lostmary", description: "5000 тяг" },
    { id: 61, name: "LOST MARY 10к — Матча мята со льдом", price: 30, category: "pod", brand: "lostmary", description: "10000 тяг" },

    // ☁️ UÐN
    { id: 62, name: "UÐN 12к — Табак", price: 30, category: "pod", brand: "udn", description: "12000 тяг" },

    // ☁️ PODONKI
    { id: 63, name: "PODONKI 11к — Белый виноград", price: 30, category: "pod", brand: "podonki", description: "11000 тяг" },
    { id: 64, name: "PODONKI 11к — Клубника с бананом", price: 30, category: "pod", brand: "podonki", description: "11000 тяг" },
    { id: 65, name: "PODONKI 10к — Клубничное мороженое", price: 30, category: "pod", brand: "podonki", description: "10000 тяг" },
    { id: 66, name: "PODONKI BAR 7к — Тутовый виноград", price: 25, category: "pod", brand: "podonki", description: "7000 тяг" },
    { id: 67, name: "PODONKI BAR 9к — Нуга", price: 25, category: "pod", brand: "podonki", description: "9000 тяг" },

    // ☁️ DUFT
    { id: 68, name: "DUFT 7к — Клубничный милкшейк", price: 20, category: "pod", brand: "duft", description: "7000 тяг" },
    { id: 69, name: "DUFT 7к — Пина колада", price: 20, category: "pod", brand: "duft", description: "7000 тяг" },
    { id: 70, name: "DUFT 7к — Клубничная Маргарита", price: 20, category: "pod", brand: "duft", description: "7000 тяг" },

    // ☁️ PUFFMI
    { id: 71, name: "PUFFMI 10к — Ванильное мороженое", price: 20, category: "pod", brand: "puffmi", description: "10000 тяг" },

    // ☁️ HUSKY
    { id: 72, name: "HUSKY 8к — Клубничный молочный коктейль, холодок", price: 30, category: "pod", brand: "husky", description: "8000 тяг" },
    { id: 73, name: "HUSKY 8к — Клубничное мороженое холодок", price: 30, category: "pod", brand: "husky", description: "8000 тяг" },

    // ☁️ PLONQ
    { id: 74, name: "PLONQ 6к — Мускатный табак", price: 35, category: "pod", brand: "plonq", description: "6000 тяг" },

    // ☁️ SOAK
    { id: 75, name: "SOAK 7к — Имбирная хурма", price: 15, category: "pod", brand: "soak", description: "7000 тяг" }
];
const folderPath=  "/images";
products.forEach(item=>{
    item.photo=`${folderPath}${item.id}.jpg`;
});