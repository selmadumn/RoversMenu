// Dil butonu
const languageButton = document.getElementById("languageButton");

// Dil listesi
const languageList = document.getElementById("languageList");

// Seçili dil yazısı
const selectedLanguage = document.getElementById("selectedLanguage");

// Listeyi aç / kapat
if (languageButton) {
    languageButton.addEventListener("click", function (e) {
        e.stopPropagation();
        languageList.classList.toggle("active");
    });
}

// Sayfanın herhangi bir yerine tıklayınca kapansın
document.addEventListener("click", function () {
    if (languageList) {
        languageList.classList.remove("active");
    }
});

// Dil isimleri (buton üzerinde gösterilecek isimler, her zaman kendi dilinde yazılır)
const languageNames = {
    tr: "Türkçe",
    en: "English",
    de: "Deutsch",
    fr: "Français",
    it: "Italiano",
    ru: "Русский",
    fa: "فارسی",
    es: "Español"
};

// Tüm çevrilebilir metinler - id'lere göre
const translations = {
    tr: {
        subtitle: "Dijital Menü",
        enterButton: "MENÜYE GİR",
        campaign: "Kampanyalar",
        pizza: "Pizzalar",
        burger: "Burgerler",
        pasta: "Makarnalar",
        main: "Ana Yemekler",
        salad: "Salatalar",
        snack: "Atıştırmalıklar",
        beer: "Biralar",
        wine: "Şaraplar",
        cocktail: "Kokteyller",
        coffee: "Kahveler",
        spirits: "Ağır Alkoller"
    },
    en: {
        subtitle: "Digital Menu",
        enterButton: "ENTER MENU",
        campaign: "Campaigns",
        pizza: "Pizzas",
        burger: "Burgers",
        pasta: "Pasta",
        main: "Main Courses",
        salad: "Salads",
        snack: "Snacks",
        beer: "Beers",
        wine: "Wines",
        cocktail: "Cocktails",
        coffee: "Coffees",
        spirits: "Spirits"
    },

    de: {
        subtitle: "Digitales Menü",
        enterButton: "MENÜ BETRETEN",
        campaign: "Angebote",
        pizza: "Pizzas",
        burger: "Burgers",
        pasta: "Pasta",
        main: "Hauptgerichte",
        salad: "Salate",
        snack: "Snacks",
        beer: "Biere",
        wine: "Weine",
        cocktail: "Cocktails",
        coffee: "Kaffees",
        spirits: "Spirituosen"
    },

    fr: {
        subtitle: "Menu Numérique",
        enterButton: "ENTRER DANS LE MENU",
        campaign: "Promotions",
        pizza: "Pizzas",
        burger: "Burgers",
        pasta: "Pâtes",
        main: "Plats Principaux",
        salad: "Salades",
        snack: "Snacks",
        beer: "Bières",
        wine: "Vins",
        cocktail: "Cocktails",
        coffee: "Cafés",
        spirits: "Spiritueux"
    },
    it: {
        subtitle: "Menu Digitale",
        enterButton: "ENTRA NEL MENU",
        campaign: "Promozioni",
        pizza: "Pizze",
        burger: "Hamburger",
        pasta: "Pasta",
        main: "Piatti Principali",
        salad: "Insalate",
        snack: "Snack",
        beer: "Birre",
        wine: "Vini",
        cocktail: "Cocktail",
        coffee: "Caffè",
        spirits: "Superalcolici"
    },
    ru: {
        subtitle: "Цифровое Меню",
        enterButton: "ВОЙТИ В МЕНЮ",
        campaign: "Акции",
        pizza: "Пицца",
        burger: "Бургеры",
        pasta: "Паста",
        main: "Основные Блюда",
        salad: "Салаты",
        snack: "Закуски",
        beer: "Пиво",
        wine: "Вино",
        cocktail: "Коктейли",
        coffee: "Кофе",
        spirits: "Крепкие Напитки"
    },
    fa: {
        subtitle: "منوی دیجیتال",
        enterButton: "ورود به منو",
        campaign: "پیشنهادهای ویژه",
        pizza: "پیتزا",
        burger: "برگر",
        pasta: "پاستا",
        main: "غذاهای اصلی",
        salad: "سالادها",
        snack: "میان‌وعده‌ها",
        beer: "آبجو",
        wine: "شراب",
        cocktail: "کوکتل",
        coffee: "قهوه",
        spirits: "مشروبات الکلی"
    },
    es: {
        subtitle: "Menú Digital",
        enterButton: "ENTRAR AL MENÚ",
        campaign: "Promociones",
        pizza: "Pizzas",
        burger: "Hamburguesas",
        pasta: "Pastas",
        main: "Platos Principales",
        salad: "Ensaladas",
        snack: "Aperitivos",
        beer: "Cervezas",
        wine: "Vinos",
        cocktail: "Cócteles",
        coffee: "Cafés",
        spirits: "Licores"
    }
};


// Sayfadaki metinleri seçilen dile göre günceller
function applyTranslations(lang) {

    const dict = translations[lang];

    if (!dict) return;

    Object.keys(dict).forEach(function (id) {

        const el = document.getElementById(id);

        if (el) {
            el.textContent = dict[id];
        }

    });

    // HTML dil attribute'unu da güncelle
    document.documentElement.setAttribute("lang", lang);

}

// Tüm dil seçenekleri
const languageItems = document.querySelectorAll(".language-item");

languageItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const lang = this.dataset.lang;

        // Buton üzerindeki yazıyı değiştir
        if (selectedLanguage) {
            selectedLanguage.textContent = languageNames[lang];
        }

        // Hafızaya kaydet
        localStorage.setItem("language", lang);

        // Sayfa metinlerini çevir
        applyTranslations(lang);

        // Listeyi kapat
        languageList.classList.remove("active");

    });

});

// Sayfa açılınca kayıtlı dili yükle
window.addEventListener("load", function () {

    const savedLanguage = localStorage.getItem("language") || "tr";

    if (selectedLanguage) {
        selectedLanguage.textContent = languageNames[savedLanguage];
    }

    applyTranslations(savedLanguage);

});
