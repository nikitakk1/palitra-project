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
        ge: "გამოწერები",
        en: "Subscribes",
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
        en: "Male",
    },
    female:{
        ge: "მდედრობითი",
        en:"Female",
    },
    other:{
        ge: "სხვა",
        en:"Other",
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
    haveacc: {
        ge: 'გაქვთ ექაუნთი? <a href="login.html" >შესვლა</a>',
        en: 'Already have an account? <a href="login.html">Login</a>',
    },
    shedi: {
        ge: "შესვლა",
        en: "Log in",
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
    info7:{
        ge: '<b> „გამომცემლობა პალიტრა L“</b>2005 წელს დაარსდა და ძალიან მალე დაიმკვიდრა საქართველოს საგამომცემლო სფეროში წამყვანი პოზიცია. ამ წლების განმავლობაში გამომცემლობამ არაერთი საეტაპო მნიშვნელობის პროექტი განახორციელა. მან საშუალება მისცა ქართველ მკითხველს, გაეცნო თანამედროვე მსოფლიო მნიშვნელობის ავტორები, გაეახლებინა მოძველებული საოჯახო ბიბლიოთეკა ახალი, მაღალპოლიგრაფიული გამოცემებით, თვალი მიედევნებინა მსოფლიო ლიტერატურაში მიმდინარე ტენდენციებისთვის და მხარი დაეჭირა თანამედროვე ქართველი ავტორებისთვის.',
        en: '<b>,,Publishing House Palitra L"</b> was founded in 2005 and quickly established itself as a leading entity in Georgia"s publishing industry. Over the years, the publishing house has implemented numerous landmark projects. It has provided Georgian readers with the opportunity to discover contemporary globally significant authors, refresh outdated family libraries with new, high-quality publications, follow trends in world literature, and support contemporary Georgian authors.',
    },
    info8:{
        ge: '<b> „გამომცემლობა პალიტრა L“</b> ქართულ საგამომცემლო სივრცეში ინოვაციების მთავარი დამნერგავია. ამ სივრცეში პირველებმა ჩვენ შევქმენით ორიგინალური სამგანზომილებიანი წიგნები და ახალი ტექნოლოგიის გამოყენებით განსაკუთრებული მიმზიდველობა მივანიჭეთ საყმაწვილო-შემეცნებით გამოცემებს. გამომცემლობა უდიდესი პასუხისმგებლობით ეკიდება კლასიკური თუ თანამედროვე ქართული ლიტერატურის პოპულარიზაციას. ჩვენი გამოცემების დიდ ნაწილს სწორედ ქართველი ავტორების შემოქმედება შეადგენს.',
        en: '<b>,,Publishing House Palitra L"</b> is a pioneer of innovation in the Georgian publishing space. We were the first to create original three-dimensional books in this field, adding unique appeal to children"s educational publications through the use of new technologies. The publishing house is deeply committed to promoting both classical and contemporary Georgian literature. A significant portion of our publications consists of works by Georgian authors.',
    },
    info9:{
        ge: "თანამედროვე ლიტერატურული პროცესის გააქტიურებას ემსახურება ჩვენი გამომცემლობის მიერ დაწესებული ლიტერატურული კონკურსი ,გახდი ბესტსელერის ავტორი', რომელმაც უკვე არაერთი საინტერესო და ნიჭიერი ავტორი აღმოაჩინა. <b> ,გამომცემლობა პალიტრა L'</b> გამოსცემს ყველაზე მრავალფეროვან ლიტერატურას და მას აჯგუფებს თემატურ თუ ჟანრობრივ სერიებად, რითაც მკითხველს სასურველი არჩევანის გაკეთებას უადვილებს. ამასთან, ზრუნავს, რომ მან ხელმისაწვდომ ადგილას და პირობებში მიიღოს თავისივე გემოვნებით შერჩეული ხარისხიანი ბეჭდური, ელექტრონული და აუდიოწიგნები, რითაც ხელს უწყობს ცოდნის გავრცელებასა და წიგნიერების ამაღლებას.",
        en: "Our publishing house's literary competition, Become a Bestseller Author, aims to invigorate the contemporary literary process and has already discovered numerous talented and promising authors. <b>'Publishing House Palitra L'</b> publishes a wide variety of literature, categorizing it into thematic and genre-based series, making it easier for readers to find their preferred choices. Additionally, it ensures that readers can access high-quality printed, electronic, and audiobooks in convenient locations and under favorable conditions, thereby promoting the dissemination of knowledge and the advancement of literacy.",
    },
    info10:{
        ge: " ,გამომცემლობა პალიტრა L“</b>ბაზარზე ლიდერის პოზიციის დამკვიდრებისა და შენარჩუნების პარალელურად, მუდმივად იზრდება და ვითარდება. ამ ხნის განმავლობაში გამომცემლობამ მოიპოვა საიმედო პარტნიორის რეპუტაცია და სტაბილური საქმიანი ურთიერთობა დაამყარა ისეთ წამყვან გამომცემლობებთან თუ სააგენტოებთან, როგორებიცაა: Disney, Penguin Random House, Harper Collins, Curtis Brown, Bloomsbury, Oxford, Scolastic და სხვ. გამომცემლობის უმთავრესი ამოცანაა, მაქსიმალურად გაითვალისწინოს თანამედროვე მკითხველის ინტერესები და შესაძლებლობები. ამ პრინციპისადმი ერთგულებას ადასტურებს ჩვენი მასშტაბური პროექტები ,გუდას აუდიოწიგნები, და ,მაკულიტერატურა'. ჩვენს მკითხველს უკვე შეუძლია ასობით კლასიკოსი თუ თანამედროვე ავტორის წიგნებს, უმაღლესი ხარისხის ჩანაწერით, მისთვის მოსახერხებულ დროსა და გარემოში მოუსმინოს, ძველი და გამოუსადეგარი წიგნებისა თუ ჟურნალ-გაზეთების ახალ წიგნებში გადაცვლით კი ჩვენ უკვე 150.000-ზე მეტი ხე გადავარჩინეთ. ",
        en:  "<b>'Publishing House Palitra L'</b>, while establishing and maintaining its position as a market leader, continues to grow and evolve. Over the years, the publishing house has earned a reputation as a reliable partner and established stable business relationships with leading publishers and agencies such as Disney, Penguin Random House, HarperCollins, Curtis Brown, Bloomsbury, Oxford, Scholastic, and others. The primary goal of the publishing house is to carefully consider the interests and needs of modern readers. This commitment is evidenced by our large-scale projects, Guda Audiobooks and Makuliteratura. Through these initiatives, our readers can now listen to books by hundreds of classic and contemporary authors, recorded with the highest quality, at a time and place convenient for them. Moreover, by exchanging old and unusable books, magazines, and newspapers for new ones, we have already saved over 150,000 trees.",
    }, 
    werili:{
        ge: "მოგვწერე წერილი",
        en: "Write us a letter",
    },
    shesaxel:{
        ge: "შეიყვანე შენი სახელი",
        en: "Enter your name",
    },
    shesaemail:{
        ge: "შეიყვანე შენი ემაილი",
        en: "Enter your email",
    },
    sheazri:{
        ge: "გაგვიზიარე შენი აზრი",
        en: "Express your opinion",
    },
    gagzavna:{
        ge: "გაგზავნა",
        en: "Send",
    },
     chabua:{
        ge: "ჭაბუა ამირეჯიბი",
        en: "Chabua Amirejibi",
     },
     new:{
        ge: "ახალი",
        en: "New",
     },
     tve:{
        ge: "/ თვე",
        en: "/ Month",
     },
     saba:{
        ge: "სულხან-საბა ორბელიანი",
        en: "Sulkhan-Saba Orbeliani",
     },
     klasik:{
        ge: "პალიტრა კლასიკა",
        en: "Palitra Classic",
    },
    legadam:{
        ge: "ლეგენდარული ადამიანები",
        en: "Legendary People",
    },
    book:{
        ge:"წიგნი",
        en:"Book",
    },
    agata:{
        ge: "აგათა კრისტი",
        en: "Agatha Christie",
    },
    kartuli:{
        ge: "XXI საუკუნის ქართული მოთხრობა",
        en: "XXI century Georgian storys",
    },
    privacy1:{
        ge: "პალიტრა L - კონფიდენციალურობის პოლიტიკა",
        en: "Palitra L - Privacy Policy",
    },
    purpose: {
        ge: "მიზანი",
        en: "Purpose"
    },
    purpose1: {
        ge: "ვებგვერდ <span class='highlight'>palitra-ზე</span> ვიზიტის დროს ვალდებული ხართ გაეცნოთ ჩვენს კონფიდენციალურობის პოლიტიკას. შესაძლებელია წინამდებარე კონფიდენციალურობის პოლიტიკაში განხორციელდეს ცვლილებები და დამატებები, შესაბამისად Palitra მოგიწოდებთ, რომ პერიოდულად გადაამოწმოთ კონფიდენციალურობის პოლიტიკა.",
        en: "While visiting the <span class='highlight lng-palitra-site'>palitra</span> website, you are required to review our privacy policy. Changes and additions may be made to this privacy policy; therefore, Palitra encourages you to periodically review the privacy policy.",
    },
    personal1:{
        ge: "პერსონალური მონაცემების დამუშავება",
        en: "Personal Data Processing"
    },
    personal2:{
        ge:" მომხმარებელი, რომელიც <span class='highlight'>Palitra-ს</span> საკუთარი სურვილით მიაწოდებს პერსონალური ხასიათის ინფორმაციას, ის ავტომატურად ანიჭებს უფლებამოსილებას <span class='highlight'>Palitra-ს</span> გამოიყენოს მომხმარებლის პერსონალური მონაცემები შენახვისა და დამუშავების მიზნით.", 
        en:"A user who voluntarily provides personal information to <span class='highlight lng-palitra-brand'>Palitra</span> automatically grants permission for <span class='highlight lng-palitra-brand'>Palitra</span> to use the user's personal data for storage and processing purposes.",
    },
    cookie1:{
        ge: "Cookies და ლოგ ფაილები",
        en: "Cookies and Log Files",
    },
    cookie2:{
        ge: "<span class='highlight'>Palitra</span>  სარგებლობს ლოგ ფაილების სტანდარტული პროცედურით. სხვა ვებგვერდების მსგავსად, <span class='highlight'>Palitra </span>იყენებს Cookies. ლოგ ფაილები და Cookies გამოიყენება იმისთვის, რომ ვებგვერდმა შეინახოს ინფორმაცია მომხმარებლების ქცევის შესახებ და გააუმჯობესოს მომსახურების ხარისხი.",
        en: "<span class='highlight'>Palitra</span> follows standard log file procedures. Like many other websites, <span class='highlight lng-palitra-brand'>Palitra</span> uses cookies. Log files and cookies are used to store information about users' preferences and to improve the quality of service.",
    },
    user1:{
        ge: "მომხმარებლის მონაცემების გაზიარება",
        en: "Sharing of User Data",
    },
    user2:{    
         ge: "პერსონალური მონაცემების გაზიარება ხორციელდება პარტნიორი საკურიერო მომსახურების გამწევი კომპანიებისათვის, რომლებიც უზრუნველყოფენ მომხმარებლისათვის შეძენილი პროდუქციის მიწოდებას მის მიერ მითითებულ მისამართზე.",
         en: "  Personal data sharing is carried out with partner courier service providers who ensure the delivery of products purchased by the user to the address specified by them.",
    },
    privacy2:{
        ge: "© 2025 Palitra L. ყველა უფლება დაცულია.",
        en: "© 2025 Palitra L. All rights reserved.",
    },
    webcok:{
        ge: "ვებსაიტი იყენებს cookie ფაილებს",
        en: "The website uses cookie files",
    },
    wetax1:{
        ge:"ვეთანხმები",
        en: "I agree",
    },
    wetax2:{
        ge:"არ ვეთანხმები",
        en: "I dont agree",
    },
    avtori:{
        ge: "კვირის ავტორი",
        en: "Weekly Author",
    },
    avtori1:{
        ge: "ჯეინ ოსტინი",
        en: "Jane austen",
    },
    avtori2:{
        ge: "ინგლისელი მწერალი, რომანისტი, ინგლისური ლიტერატურის თვალსაჩინო წარმომადგენელი, რომელიც ცნობილია თავისი 6 ძირითადი რომანით. ჯეინ ოსტინს მოიხსენიებენ, როგორც სენტიმენტალიზმის სკოლის უბდალო წარმომადგენლად ასევე ინგლისური რეალიზმის წინამორბედად.",
        en: "An English writer, novelist, and a prominent representative of English literature, who is known for her six major novels. Jane Austen is referred to as a leading representative of the school of sentimentalism, as well as a precursor to English realism.",
    },
     book12:{
        ge: "გონების ხმა",
        en: "voice of the mind.",
    },
    book13:{
        ge: "გონება და გრძნობა",
        en: "Mind and feeling",
    },
    book14:{
        ge: "ამპარტავნობა და ამოჩემება",
        en: "pride and favoritism",
    },
    book15:{
        ge: "ემა",
        en: "Emma",
    }



};


// გამოიყენება, რათა მოისმინოს "change" მოვლენა იმ ელემენტზე, რომლის კლასიც არის 
document.querySelector('.change-lang').addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    const lang = document.querySelector('.change-lang').value;
    if (allLang.includes(lang)) {
        location.hash = lang; // 
        changeLanguage(lang); // Apply language change
    }
}

function changeLanguage(lang = window.location.hash.substr(1)) { // ფუნქცია იღებს ენას, თუ არ არის მიცემული, მაშინ ენა იღება URL-დან (ჰეშისგან)
    if (!allLang.includes(lang)) {
        lang = 'ge'; //  დეფოლტური ენა იქნება "ge" (ქართული)
        location.hash = lang;
    }


    // ვაყენებთ language-selector-ის ველზე ენის მნიშვნელობას
    document.querySelector('.change-lang').value = lang;

    // ენის შეცვლის შემდეგ, ყოველი ელემენტის ტექსტის განახლება
    Object.keys(langArr).forEach(key => {
        document.querySelectorAll(`.lng-${key}`).forEach(element => { // // პოულობს კლას რომელიც იწყება "lng-" და ემთხვევა ამ კლავიშს
            element.innerHTML = langArr[key][lang];
        });
    });
}changeLanguage(); 
