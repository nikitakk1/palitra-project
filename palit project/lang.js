const allLang = ['ge', 'en'];
const langArr = {
    main: {
        ge: "მთავარი",
        en: "Main",
    },
    about: {
        ge: "ძირითადი ინფორმაცია",
        en: "About Us",
    },
    login: {
        ge: "ავტორიზაცია",
        en: "Login",
    },
    reg: {
        ge: "რეგისტრაცია",
        en: "Sign up",
    },
    cont: {
        ge: "კონტაქტი",
        en: "Contact",
    },
    sub: {
        ge: "გამოწერა",
        en: "Subscribe",
    },
    buy: {
        ge: "როგორ შევიძინო",
        en: "How to buy",
    },
    or: {
        ge: "ან",
        en: "or",
    },
    name: {
        ge: "მომხამრებლის სახელი",
        en: "Username",
    },
    password: {
        ge: "პაროლი",
        en: "Password",
    },
    passwordconf: {
        ge: "დაადასტურეთ პაროლი",
        en: "Confirm Password",
    },
    shesvla: {
        ge: "შესვლა",
        en: "Login",
    },
    phone: {
        ge: "მობილური",
        en: "Phone",
    },
    regdate: {
        ge: "რეგისტაციის თარიღი",
        en: "Registration Date",
    },
    country: {
        ge: "ქვეყანა",
        en: "Country",
    },
    city: {
        ge: "ქალაქი",
        en: "City",
    },
    gender:{
        ge: "სქესი",
        en:"gender",
    },
    male:{
        ge: "მამრობითი",
        en: "male",
    },
    female:{
        ge: "მდედრობითი",
        en:"female",
    },
    other:{
        ge: "სხვა",
        en:"other",
    },
    crea:{
        ge: "შექმნა",
        en: "Create",
    },
    address: {
        ge: "მისამართი",
        en: "Address",
    },
    address1: {
        ge: "იოსებიძის ქ. №49",
        en: "Iosebidze st 49",
    },
    address2: {
        ge: "0160, თბილისი, საქართველო",
        en: "0160 ,Tbilisi, Georgia",
    },
    email: {
        ge: "ელ. ფოსტა",
        en: "Email",
    },
    sign_up: {
        ge: 'არ გაქვთ ექაუნთი? <a href="registration.html" >რეგისრაცია</a>',
        en: 'Don’t have an account? <a href="registration.html">Sign up</a>',
    },
    siaxle:{
        ge: "სიახლე",
        en: "New",
    },
    vlog:{
        ge: "ვლოგები",
        en: "Vlogs",
    },
    blog:{
        ge: "ბლოგი",
        en: "Blogs",
    },
    beste:{
        ge: "თვის ბესტსელერები",
        en: "Bestsellers of the month",
    },
    bestseller_la:{
        ge: "ბესტსელერი",
        en: "Bestseller",
    },
    book1:{
        ge: "წიგნი -  A Little Life",
        en: "Book -  A Little Life",
    },
    book2:{
        ge: "წიგნი  - ლეთარგია",
        en: "Book  - Lethargy",
    },
    book3:{
        ge: "დღიური 2025",
        en: "Diary 2025",
    },
    book4:{
        ge: "ჩვეულებრივი ადამიანები",
        en: "Normal people",
    },
    book5:{
        ge: "ძალაუფლების 48 კანონი",
        en: "48 laws of power",
    },
    book6:{
        ge: "ყველაფერი მთავრდება ჩვენით",
        en: "Its ends with us",
    },
    book7:{
        ge: "იკიგაი",
        en: "Ikigai",
    },
    book8:{
        ge: "ეველინ ჰიუგოს შვიდი ქმარი",
        en: "The Seven Husbands of Evelyn Hugo",
    },

    tshirt1:{
        ge: "მაისური - 'თავისუფლება' - შავი",
        en: "T-shirt - 'Freedom' - Black",
    },
    tshirt2:{
        ge: "ჰუდი - 'ერი' - ლურჯი - L",
        en: "Hoodie - 'Eri' - Dark blue - L",
    },
    info1:{
        ge: "ცხოველების ფერმა",
        en: "Animal farm",
    },
    info2:{
        ge: "ოლანი ბიწაძე — ახალი ხმა ქართულ ლიტერატურაში",
        en: "Olani Bichadze - New voice in Georgian literature",
    },
    info3:{
        ge: "ნიკოლოზ ცისკარიშვილის ,არიდელები' პრესში",
        en: "Nikoloz Tsiskarishvili's 'Arideli' in the press",
    },
    info4:{
        ge: "რატი რატიანი ,მკვლელობა სადგურის უბანში'",
        en: "Rati Ratian 'Murder in the station area'"
    },
    info5:{
        ge: "ლიტერატურული სამკუთხედი - მარიამ გურგენიშვილის 'მარგალიტები'",
        en: "Literary triangle - 'Pearls' by Mariam Gurgenishvili"
    },
    info6:{
        ge: "განახლებული ლიტერატურული პროექტი",
        en: "Updated literary project"
    },

  
};


// Change URL language when select is changed
document.querySelector('.change-lang').addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    const lang = document.querySelector('.change-lang').value;
    if (allLang.includes(lang)) {
        location.hash = lang; // Update URL hash
        changeLanguage(lang); // Apply language change
    }
}

function changeLanguage(lang = window.location.hash.substr(1)) {
    if (!allLang.includes(lang)) {
        lang = 'ge'; // Default to Georgian if no valid language is found
        location.hash = lang;
    }

    // Set the selected language in the dropdown
    document.querySelector('.change-lang').value = lang;

    // Update text content for each element with a matching key
    Object.keys(langArr).forEach(key => {
        document.querySelectorAll(`.lng-${key}`).forEach(element => {
            element.innerHTML = langArr[key][lang];
        });
    });
}

// Initialize language on page load
changeLanguage();
