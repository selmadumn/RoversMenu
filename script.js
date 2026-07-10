// Dil butonu
const languageButton = document.getElementById("languageButton");

// Dil listesi
const languageList = document.getElementById("languageList");

// Seçili dil yazısı
const selectedLanguage = document.getElementById("selectedLanguage");

// Listeyi aç / kapat
languageButton.addEventListener("click", function (e) {

    e.stopPropagation();

    languageList.classList.toggle("active");

});

// Sayfanın herhangi bir yerine tıklayınca kapansın
document.addEventListener("click", function () {

    languageList.classList.remove("active");

});

// Dil isimleri
const languageNames = {

    tr: "Türkçe",

    en: "English",

    fr: "Français",

    it: "Italiano",

    ru: "Русский",

    fa: "فارسی",

    es: "Español"

};

// Tüm dil seçenekleri
const languageItems = document.querySelectorAll(".language-item");

languageItems.forEach(function(item){

    item.addEventListener("click", function(){

        const lang = this.dataset.lang;

        // Buton üzerindeki yazıyı değiştir
        selectedLanguage.textContent = languageNames[lang];

        // Hafızaya kaydet
        localStorage.setItem("language", lang);

        // Listeyi kapat
        languageList.classList.remove("active");

    });

});

// Sayfa açılınca kayıtlı dili yükle
window.addEventListener("load", function(){

    const savedLanguage = localStorage.getItem("language");

    if(savedLanguage){

        selectedLanguage.textContent = languageNames[savedLanguage];

    }

});