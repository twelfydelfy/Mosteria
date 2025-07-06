//Deserturi sa fie penultimele

let aperitive = [
    {
        id: 100,
        imagine: "Assets/images/100.jpg",
        nume: "Bruschete",
        numeeng: "Bruschettes",
        numerus: "Брускетты",
        pret: 60,
        gramaj: 100,
        descriere: "(roșii, mozzarella și sos pesto)",
        descriereeng: "(tomatoes, mozzarella and pesto sauce)",
        descriererus: "(помидор, моцарелла,соус песто)"
    },
    {
        id: 101,
        imagine: "Assets/images/101.jpg",
        nume:"Bruschete",
        numeeng: "Bruschettes",
        numerus: "Брускетты",
        pret: 50,
        gramaj: 100,
        descriererus:"(перец капия,маслины, оливки, крем сыр)",
        descriere:"(ardei capia, măsline și cremă de brânză)",
        descriereeng:"(capsicum, olives and cream cheese)"
    },
    {
        id: 102,
        imagine: "Assets/images/102.jpg",
        nume:"Bruschete",
        numeeng: "Bruschettes",
        numerus: "Брускетты",
        pret: 60,
        gramaj: 100,
        descriererus:"(прошутто, маслины, крем сыр)",
        descriere:"(proșoto, măsline și cremă de brânză)",
        descriereeng: "(prosciuto, black olives and creme cheese)"
    },
    {
        id: 104,
        imagine: "Assets/white.jpg",
        nume:"Aripi Pane",
        numeeng: "Wedge wings",
        numerus: "Куриные крылышки в панировке",
        pret: 60,
        gramaj: 180,
        descriererus:"",
        descriere:"",
        descriereeng:""
    },
    {
        id: 105,
        imagine: "Assets/white.jpg",
        nume:"Nuggets",
        numeeng:"Nuggets",
        numerus: "Наггетсы",
        pret: 70,
        gramaj: 140,
        descriererus:"",
        descriere:"",
        descriereeng:""
    },
    {
        id: 106,
        imagine: "Assets/white.jpg",
        nume:"Cartofi pai",
        numeeng:"French fries",
        numerus: "Картошка фри",
        pret: 35,
        gramaj: 130,
        descriererus:"",
        descriere:"",
        descriereeng:""
    },
    {
        id: 107,
        imagine: "Assets/white.jpg",
        nume:"Cartofi în stil rustic",
        numeeng:"Rustic style potatoes",
        numerus:"Картошка по деревенски",
        pret: 45,
        gramaj: 135,
        descriererus:"",
        descriere:"",
        descriereeng:"",
    },
    {
        id: 114,
        imagine: "Assets/white.jpg",
        nume:"Mix de cărnuri",
        numeeng:"Mixed Meats",
        numerus:"Микс Мясной",
        pret: 120,
        gramaj: 150,
        descriererus:"(вяленая грудка, вяленая бастурма,вяленые колбаски, чипсы)",
        descriereeng:"(dried chicken breast, dried basturma, dried sausages, chips)",
        descriere:"(piept de pui uscat, pastramă uscată, salam uscat, cipsuri)",
    },
    {
        id: 115,
        imagine: "Assets/white.jpg",
        nume:"Mix de nuci",
        numeeng:"Mixed Nuts",
        numerus:" Микс Орешки",
        pret: 100,
        gramaj: 200,
        descriereeng:"(cashew, roasted cashew, almond, pistachio, chips)",
        descriererus:"(кешью, кешью жареный, миндаль, фисташка, чипсы)",
        descriere:"(caju, caju prăjite, migdalre, fistic, cipsuri)",
        
    },
    {
        id: 103,
        imagine: "Assets/white.jpg",
        nume:"Anchous",
        numeeng: "Anchovies",
        numerus:"Анчоусы",
        pret: 50,
        gramaj: 250,
        descriererus:"",
        descriere:"",
        descriereeng:""
    },
    {
        id: 118,
        imagine: "Assets/white.jpg",
        nume:"Cipsuri naturale",
        numeeng:"Natural chips",
        numerus:"Натуральные чипсы",
        pret: 60,
        gramaj: 100,
        descriereeng:"",
        descriererus:"",
        descriere:"",
        
    },
    {
        id: 108,
        imagine: "Assets/white.jpg",
        nume:"Cezar",
        numeeng:"Cesar",
        numerus:"Цезарь",
        pret: 80,
        gramaj: 340,
        descriererus:"(зелень, куриная грудка, помидоры черри, перепелиные яйца, пармезан, соус, сухарики чиабатта)",
        descriere:"(verdeață, fileu de pui, roșii cherry, ouă de prepeliță, parmezan, sos, pesmeți ciabatta)",
        descriereeng:"(greens, chicken fillet, cherry tomatoes, quail eggs, parmesan cheese, sauce, ciabatta breadcrumbs)"
    },
    {
        id: 109,
        imagine: "Assets/white.jpg",
        nume:"Salată caldă, cu carne de vită",
        numeeng:"Warm salad with beef",
        numerus:"Тёплый салат с говядиной",
        pret: 110,
        gramaj: 320,
        descriererus:"(говядина в вине,грибы, помидоры, сладкий перец,соус терияки,соевый соус, грецкий орех, баклажан, кунжут)",
        descriereeng:"(beef in wine, mushrooms, cherry tomatoes, sweet pepper, teriaki sauce, soy sauce, wallnut, eggplant, susane)",
        descriere:"(carne de vită în vin, ciuperci, roșii cherry, ardei dulce, sos teriaki, sos de soia, nuci, vânătă, susan)"
    },
    {
        id: 110,
        imagine: "Assets/white.jpg",
        nume:"Grecească",
        numeeng:"Greek",
        numerus:"Греческий",
        pret: 70,
        gramaj: 320,
        descriererus:"(помидоры, сладкий перец, огурцы,лук, брынза, маслины)",
        descriereeng:"(tomatoes, cucumbers, bell peppers, onions, cheese, olives)",
        descriere:"(roșii, castraveți, ardei dulce, ceapă, brânză, măsline)"
    }

];
let supe = [
    {
        id:200,
        imagine: "Assets/white.jpg",
        nume:"Supă cu cașcaval și ciuperci",
        numeeng: "Cheese and mushroom Soup",
        numerus:"Сырно-грибной суп",
        pret: 60,
        gramaj: 400,
        descriere:"cașcaval topit, file de pui, ciuperci, frișcă",
        descriereeng: "melted cheese, chicken fillet, mushrooms, whipped cream",
        descriererus: "плавленый сыр, куриное филе, грибы, взбитые сливки"
    },
    {
        id:201,
        imagine: "Assets/white.jpg",
        nume:"Soleancă cu carne de vită și salam",
        numeeng: "Beef and salami stew",
        numerus:"Тушеная говядина с салями",
        pret: 70,
        gramaj: 400,
        descriere:"carne de vită, mix salam, roșii, ardei capia",
        descriereeng: "beef, salami mix, tomatoes, bell peppers",
        descriererus: "говядина, смесь салями, помидоры, болгарский перец"
    }
];
let suplemente = [
    {
        id:999,
        imagine: "Assets/white.jpg",
        nume:"Pâine în asortiment",
        numeeng:"Assorted bread",
        numerus:"Хлеб в ассортименте",
        pret: 30,
        gramaj: "30-40",
        descriereeng:"",
        descriere:""
    },
    {
        id:301,
        imagine: "Assets/white.jpg",
        nume:"Sos cu usturoi",
        numeeng:"Garlic sauce",
        numerus:"Соус чесночный",
        pret: 10,
        gramaj: 40,
        descriereeng:"",
        descriere:""
    },
    {
        id:302,
        imagine: "Assets/white.jpg",
        nume:"Sos tartar",
        numeeng:"Tartar sauce",
        numerus:"Соус тартар",
        pret: 10,
        gramaj: 40,
        descriereeng:"",
        descriere:""
    },
    {
        id:303,
        imagine: "Assets/white.jpg",
        nume:"Sos din cașcaval",
        numeeng:"Cheese sauce",
        numerus:"Соус сырный",
        pret: 10,
        gramaj: 40,
        descriereeng:"",
        descriere:""
    },
    {
        id:304,
        imagine: "Assets/white.jpg",
        nume:"Ketchup",
        numeeng:"Ketchup",
        numerus:"Кетчуп",
        pret: 10,
        gramaj: 40,
        descriereeng:"",
        descriere:""
    },
    {
        id:305,
        imagine: "Assets/white.jpg",
        nume:"Smântână",
        numeeng:"Smântână",
        numerus:"Сметана",
        pret: 10,
        gramaj: 40,
        descriereeng:"",
        descriere:""
    },
];

let pizza = [
    {
        id:400,
        imagine: "Assets/white.jpg",
        nume:"Super Express",
        numeeng:"Super Express",
        numerus:"Супер Экспресс",
        pret: 110,
        gramaj: 620,
        descriererus:"корж, соус, майонез, ветчина, баклажан, грибы, моцареллa",
        descriereeng:"dough, sauce, mayonnaise, ham, mushrooms, eggplant, mozzarella",
        descriere:"blat, sos, maioneză, șuncă, ciuperci, vânătă, mozzarella"
    },
    {
        id:401,
        imagine: "Assets/white.jpg",
        nume:"Țărănească",
        numeeng:"Țărănească",
        numerus:"Цэрэняскэ",    
        pret: 110,
        gramaj: 620,
        descriererus:"корж, соус, майонез, говядина, помидоры черри, сладкий перец, лук, моцарелла",
        descriereeng:"dough, sauce, mayonnaise, beef, cherry tomatoes, sweet pepper, onion, mozzarella",
        descriere:"blat, sos, maioneză, carne de vită, roșii cherry, ardei dulce, ceapă, mozzarella"
    },
    {
        id:402,
        imagine: "Assets/white.jpg",
        nume:"Mexicană",
        numeeng:"Mexican",
        numerus:"Мексиканская",
        pret: 110,
        gramaj: 490,
        descriererus:"корж, моцарелла, соус, солями, сладкий перец, кукуруза",
        descriereeng:"dough, mozzarella, sauce, salami, sweet pepper, corn",
        descriere:"blat, mozzarella, sos, salam, ardei dulce, porumb"
    },
    {
        id:403,
        imagine: "Assets/white.jpg",
        nume:"Lights",
        numeeng:"Lights",
        numerus:"Лёгкая",
        pret: 110,
        gramaj: 550,
        descriererus:"корж, соус, майонез,  моцарелла, сладкий перец, куриная грудка, грибы",
        descriereeng:"dough, sauce, mozzarella, sweet pepper, chicken fillet, mushrooms, mayonnaise",
        descriere:"blat, sos, mozzarella, ardei dulce, fileu de pui, ciuperci, maioneză"
    },
    {
        id:404,
        imagine: "Assets/white.jpg",
        nume:"Express",
        numeeng:"Express",
        numerus:"Экспресс",
        pret: 110,
        gramaj: 540,
        descriererus:"корж, соус, майонез, ветчина, грибы, моцарелла",
        descriereeng:"dough, sauce, ham, mushrooms, olives, mozzarella",
        descriere:"blat, sos, șuncă, ciuperci, măsline, mozzarella"
    },
    {
        id:406,
        imagine: "Assets/white.jpg",
        nume:"Margarita",
        numeeng:"Margarita",
        numerus:"Маргарита",
        pret: 95,
        gramaj: 480,
        descriererus:"корж, соус, моцарелла, помидоры, базилик",
        descriereeng:"dough, sauce, mozzarella, parmesan, tomatoes, basil",
        descriere:"blat, sos, mozzarella, parmezan, roșii, busioc"
    },
    {
        id:407,
        imagine: "Assets/white.jpg",
        nume:"Cu ton",
        numeeng:"With Tuna",
        numerus:"Пицца с тунцом",
        pret: 110,
        gramaj: 630,
        descriererus:"корж, соус, моцарелла, тунец, лук, рукола, оливки",
        descriereeng:"dough, sauce, mozzarella, tuna, onion, olives, arugula",
        descriere:"blat, sos, mozzarella, ton, ceapă, olivie, rucolla"
    },
    {
        id:408,
        imagine: "Assets/white.jpg",
        nume:"Cu pere",
        numeeng: "With Pears",
        numerus:"Пицца с грушей ",
        pret: 110,
        gramaj: 480,
        descriererus:"корж, моцарелла, груши, орехи, горгондзола",
        descriereeng:"dough, sauce, mozzarella, pears, nuts, gorgonzola",
        descriere:"blat, sos, mozzarella, pere, nuci, gorgonzola"
    },
    {
        id:409,
        imagine: "Assets/white.jpg",
        nume:"Cu ananas",
        numeeng: "With Pineapple",
        numerus:"Пицца с ананасом",
        pret: 110,
        gramaj: 600,
        descriererus:"корж, моцарелла, ананас, куриная грудка",
        descriereeng:"dough, mozzarella, pineapple, chicken breast",
        descriere:"blat, mozzarella, ananas, piept de pui"
    },
    {
        id:410,
        imagine: "Assets/white.jpg",
        nume:"Quattro Carni",
        numeeng:"Quattro Carni",
        numerus:"Пицца 4 мяса",
        pret: 120,
        gramaj: 630,
        descriererus:"корж, моцарелла, наполи, пеперони, свиная шейка, прошутто, рукола",
        descriereeng:"dough, mozzarella, Napoli, pepperoni, pork neck, prosciutto, arugula",
        descriere:"blat, mozzarella, Napoli, Pepperoni, ceafă de porc, prosciutto, rucola"
    },
    {
        id:411,
        imagine: "Assets/white.jpg",
        nume:"Pepperoni",
        numeeng: "Pepperoni",
        numerus:"Пеперони",
        pret: 110,
        gramaj: 560,
        descriererus:"корж,соус, моцарелла, пеперони,  перец",
        descriereeng:"dough, sauce, mozzarella, pepperoni, chili peppers",
        descriere:"blat, sos, mozzarella, pepperoni, ardei chili"
    },
    {
        id:413,
        imagine: "Assets/white.jpg",
        nume:"Quattro Formaggi",
        numeeng:"Quattro Formaggi",
        numerus:"Пицца четыре сыра",
        pret: 120,
        gramaj: 600,
        descriererus:"корж, моцарелла, пармезан, эмменталь, горгонзола",
        descriereeng:"dough, mozzarella, gorgonzola, parmesan, enumenta ler",
        descriere:"blat, mozzarella, gorgonzola, parmezan, enumenta ler"
    }
];

let burger = [
    {
        id:500,
        imagine: "Assets/white.jpg",
        nume:"De vită",
        numeeng:"Beef Burger",
        numerus:"Бургер с говяжьим мясом",
        pret: 80,
        gramaj: 380,

        descriere:"" ,
        descriereeng:""
    },
    {
        id:501,
        imagine: "Assets/white.jpg",
        nume:"De porc",
        numeeng:"Pork Burger",
        numerus:"Бургер с свиным мясом",
        pret: 80,
        gramaj: 380,
        descriereeng:"",
        descriere:"" 
    },
    {
        id:502,
        imagine: "Assets/white.jpg",
        nume:"De pui",
        numeeng:"Chicken Burger",
        numerus:"Бургер с курицей",
        pret: 80,
        gramaj: 400,
        descriereeng:"",
        descriere:"" 
    },
    
];
let desert = [
    {
        id:602,
        imagine: "Assets/white.jpg",
        nume:"Pară cu cașcaval Dor-blue și nuci",
        numeeng:"Pear with gorgonzola and walnuts",
        numerus:"Груша с горгонзолой и орехами",
        pret:60,
        gramaj: 150,
        descriereeng:"",
        descriere:"" 
    },
    {
        id:606,
        imagine: "Assets/white.jpg",
        nume:"Clătite cu brânză", 
        numeeng:"Pancakes with cheese",
        numerus:"Блинчики с сыром",
        pret:65,
        gramaj: 200,
        descriereeng:"",
        descriere:"" 
    },
    {
        id:607,
        imagine: "Assets/white.jpg",
        nume:"Clătite cu dulceață", 
        numeeng:"Pancakes with jam",
        numerus:"Блинчики с вареньем",
        pret:40,
        gramaj: 200,
        descriereeng:"",
        descriere:"" 
    },
    {
        id:608,
        imagine: "Assets/white.jpg",
        nume:"Muffin cu ciocolată", 
        numeeng:"Chocolate muffin",
        numerus:"Шоколадный маффин",
        pret:17,
        gramaj: 50,
        descriereeng:"",
        descriere:"" 
    },
    {
        id:603,
        imagine: "Assets/white.jpg",
        nume:"Înghețată de vanilie cu topping",
        numeeng:"Vanilla ice cream with topping",
        numerus:"Ванильное мороженное (топпинг на выбор)",
        pret:40,
        gramaj: 150,
        descriereeng:"",
        descriere:"" 
    },
    {
        id:604,
        imagine: "Assets/white.jpg",
        nume:"Înghețată cu ciocolată",
        numeeng:"Chocolate ice cream",
        numerus:"Шоколадное мороженное",
        pret:40,
        gramaj: 150,
        descriereeng:"",
        descriere:"" 
    },
    {
        id:605,
        imagine: "Assets/white.jpg",
        nume:"Brânzoaice",
        numeeng:"Cheese Pancakes",
        numerus:"Сырники",
        pret:45,
        gramaj: 150,
        descriereeng:"",
        descriere:"" 
    },
];
let carne = [
    
    {
        id:715,
        imagine: "Assets/white.jpg",
        nume: "Frigarui de porc",
        numeeng: "Pork skewers",
        numerus: "Шашлык из свинины",
        pret: 190,
        gramaj: 380,
        descriere:"(Carne de porc, dovlecei, roșii cherry, brânză de oi, mujdei, sos)",
        descriereeng: "(Pork, zucchini, cherry tomatoes, sheep's cheese, scallions, sauce)",
        descriererus: "(Свинина, кабачки, помидоры черри, брынза, зеленый лук, соус)",
    },
    {
        id: 716,
        imagine:"Assets/white.jpg",
        nume: "Frigarui de pui",
        numeeng: "Chicken skewers",
        numerus: "Куриные шашлычки",
        pret: 195,
        gramaj: 490,
        descriere: "(Carne de pui, pita, cartofi, roșii la grătar, ceapă roșie, sos)",
        descriereeng: "(Chicken, pita, potatoes, grilled tomatoes, red onion, sauce)",
        descriererus: "(Курица, пита, картофель, помидоры гриль, красный лук, соус)"
    },
    {
        id: 717,
        imagine:"Assets/white.jpg",
        nume: "Piept de rață",
        numeeng: "Duck breast",
        numerus: "Утиная грудка",
        pret: 200,
        gramaj: 320,
        descriere: "(Piept de rață, pară, cașcaval dor-blue, nuci, rucola)",
        descriereeng: "(Duck breast, without, dor blue cheese, walnuts, arugula)",
        descriererus: "(Утиная грудка без, сыр дор блю, грецкие орехи, руккола)"
    },
    {
        id:701,
        imagine: "Assets/white.jpg",
        nume:"Steak de porc cu cartofi în stil rustic",
        numeeng:"Pork steak with rustic style potatoes",
        numerus:"Стейк свиной с картошкой по деревенский",
        pret:180,
        gramaj: 360,
        descriereeng:"(pork, potatoes, tomatoes, cucumbers, onions, sauce)",
        descriere:"(carne de porc, cartofi, roșii, castraveți, ceapă, sous)",
        descriererus: "(свинина, картофель, помидоры, огурцы, лук, соус)"
    },
    {
        id:719,
        imagine: "Assets/white.jpg",
        nume:"Ribeye de vită",
        numeeng:"Beef Ribeye",
        numerus:"Говяжий Рибай",
        pret:280,
        gramaj: 400,
        descriereeng:"(Ribeye beef, cherry tomatoes, rosemary)",
        descriere:"(carne de vită Ribeye, roșii cherry, rozmarin)",
        descriererus: "(Рибай говяжий, помидоры черри, розмарин)"
    },
    {
        id:704,
        imagine: "Assets/white.jpg",
        nume:"Doradă cu legume",
        numeeng:"Seabream with vegetables",
        numerus:"Дорадо с овощами",
        pret:180,
        gramaj: 500,
        descriereeng:"(Sea bream, grilled tomatoes, grilled mushrooms, tartar sauce, lemon, arugula)",
        descriere:"(Doradă, roșii la grătar, ciuperci la grătar, sos tartar, lămâie, rucola)", 
        descriererus:"(Дорада,помидоры на гриле,грибы на гриле,лимон, лук,соус тартар)"
    },
    {
        id:1001,
        imagine: "Assets/white.jpg",
        nume:"Frigărui de somon cu broccoli și cherry",
        numeeng:"Salmon skewers with broccoli and cherry",
        numerus:"Шашлык из лосося с брокколи и cherry",
        pret:220,
        gramaj: 320,
        descriereeng:"(Salmon, cherry tomatoes, broccoli, tartar sauce, lemon, arugula)",
        descriere:"(Somon, roșii cherry, brocolli, sos tartar, lămâie, rucola)",
        descriererus:"(Лосось, помидоры черри, брокколи, соус тартар, лимон, руккола)"
    },   
    {
        id:711,
        imagine: "Assets/white.jpg",
        nume:"Ciolan de porc cu varză înăbușită",
        numeeng:"Pork knuckle with sauteed cabbage",
        numerus:"Свиная рулька с тушеной капустой",
        pret:200,
        gramaj: 700,
        descriereeng:"",
        descriere:"",
        descriererus:""
    },
    {
        id:702,
        imagine: "Assets/white.jpg",
        nume:"Legume grill",
        numeeng:"Grilled vegetables",
        numerus:"Овощи на гриле",
        pret:90,
        gramaj: 250,
        descriereeng:"(zucchini, eggplant, mushrooms, peppers, onions, sesame)",
        descriere:"(dovlecel, vânătă, ciuperci, ardei, ceapă, susan)", 
        descriererus:"(кабачки, баклажаны, грибы, перец, лук, кунжут)"
    },
    {
        id:718,
        imagine: "Assets/white.jpg",
        nume:"Cașcaval Bri copt la cuptor",
        numeeng:"Baked brie cheese",
        numerus:"Запеченный сыр бри",
        pret:110,
        gramaj: 265,
        descriereeng:"(brie cheese, cherry tomatoes, garlic, ciabatta, olive oil)",
        descriere:"(cașcaval bri, roșii cherry, usturoi, cebata, ulei de măsline)", 
        descriererus:"(сыр бри, помидоры черри, чеснок, чиабатта, оливковое масло)"
    },
    {
        id:713,
        imagine: "Assets/white.jpg",
        nume:"Crevete cu ciabatta la grill",
        numeeng:"Grilled shrimp with ciabatta",
        numerus:"Креветки с чиабаттой на гриле",
        pret:100,
        gramaj: 220,
        descriereeng:"(Shrimp, butter, garlic, ciabatta)",
        descriere:"(Creveți, unt, usturoi, ceabata)", 
        descriererus:"(Креветки, сливочное масло, чеснок, чиабатта)"
    },
    {
        id:712,
        imagine: "Assets/white.jpg",
        nume:"Gyros de pui cu legume proaspete",
        numeeng:"Chicken gyros with fresh vegetables",
        numerus:"Куриный гирос со свежими овощами",
        pret:110,
        gramaj: 410,
        descriereeng:"(Chicken, pita, potatoes, red onion, cucumber, tomato, sauce)",
        descriere:"(Carne de pui, pita, cartofi, ceapă roșie, castraveți, roșii, sos)",
        descriererus:"(Курица, пита, картофель, красный лук, огурец, помидор, соус)"
    },
];

let bauturi = [
    {
        id:841,
        nume:"Espresso",
        numeeng:"Espresso",
        numerus:"Эспрессо",
        pret:25,
        gramaj: 30,
        descriereeng:"",
        descriere:""
    },
    {
        id:842,
        nume:"Americano",
        numeeng:"Americano",
        numerus:"Американо",
        pret:25,
        gramaj: 90,
        descriereeng:"",
        descriere:""
    },
    {
        id:843,
        nume:"Cappucino",
        numeeng:"Cappucino",
        numerus:"Капучино",
        pret:30,
        gramaj: 200,
        descriereeng:"",
        descriere:""
    },
    {
        id:844,
        nume:"Latte",
        numeeng:"Latte",
        numerus:"Латте",
        pret:33,
        gramaj: 300,
        descriereeng:"",
        descriere:""
    },
    {
        id:844,
        nume:"Raf Latte",
        numeeng:"Raf Latte",
        numerus:"Raf Latte",
        pret:35,
        gramaj: 300,
        descriereeng:"",
        descriere:""
    },
    {
        id:843,
        nume:"Flat White",
        numeeng:"Flat White",
        numerus:"Flat White",
        pret:45,
        gramaj: 200,
        descriereeng:"",
        descriere:""
    },
    {
        id:847,
        nume:"Ice Coffee",
        numeeng:"Ice Coffee",
        numerus:"Ice Coffee",
        pret:33,
        gramaj: 300,
        descriereeng:"",
        descriere:""
    },
    {
        id:848,
        nume:"Ceai Julius Meinl în asortiment",
        numeeng:"Julius Mein tea in assortment",
        numerus:"Чай Julius Meinl в асортименте",
        pret:45,
        gramaj: 400,
        descriereeng:"",
        descriere:""
    },
    {
        id:854,
        nume:"Borjomi",
        numeeng:"Borjomi",
        numerus:"Боржоми",
        pret:30,
        gramaj: 330,
        descriereeng:"",
        descriere:""
    },
    {
        id:849,
        nume:"Pepsi, Miranda, 7UP, Evervess",
        numeeng:"Pepsi, Miranda, 7UP, Evervess",
        numerus:"Пепси, Миринда, 7Up, Evervess",
        pret:17,
        gramaj: 250,
        descriereeng:"",
        descriere:""
    },
    {
        id:850,
        nume:"Моршинська plată, slab gazată",
        numeeng:"Моршинська still, sparkling",
        numerus:"Моршинская без газа, слаба газированная",
        pret:20,
        gramaj: 330,
        descriereeng:"",
        descriere:""
    },
    {
        id:851,
        nume:"Моршинська plată, slab gazată",
        numeeng:"Моршинська still, sparkling",
        numerus:"Моршинская без газа, слаба газированная",
        pret:35,
        gramaj: 750,
        descriereeng:"",
        descriere:""
    },
    {
        id:852,
        nume:"Bucovina plată, slab gazată",
        numeeng:"Bucovina still, sparkling",
        numerus:"Буковина  без газа, газированная",
        pret:20,
        gramaj: 330,
        descriereeng:"",
        descriere:""
    },
    {
        id:853,
        nume:"Bucovina plată, slab gazată",
        numeeng:"Bucovina still, sparkling",
        numerus:"Буковина  без газа, газированная",
        pret:35,
        gramaj: 750,
        descriereeng:"",
        descriere:""
    },
    {
        id:800,
        imagine: "Assets/white.jpg",
        nume:"Jaffa în asortiment",
        numeeng:"Jaffa in assortment",
        numerus:"Jaffa в ассортименте",
        pret:15,
        gramaj: 240,
        descriereeng:"",
        descriere:"" 
    },
    {
        id:801,
        imagine: "Assets/white.jpg",
        nume:"Tymbark în asortiment",
        numeeng:"Tymbark in assortment",
        numerus:"Tymbark в ассортименте",
        pret:15,
        gramaj: 240,
        descriereeng:"",
        descriere:"" 
    },
    {
        id:803,
        imagine: "Assets/white.jpg",
        nume:"Lemonadă Classic",
        numeeng:"Classic lemonade",
        numerus:"Классический Лимонад",
        pret:40,
        gramaj: 350,
        descriereeng:"",
        descriere:"" 
    },
    {
        id:804,
        imagine: "Assets/white.jpg",
        nume:"Lemonadă Orange",
        numeeng:"Orange Lemonade",
        numerus:"Апельсиновый Лимонад",
        pret:40,
        gramaj: 350,
        descriereeng:"",
        descriere:"" 
    },
    {
        id:805,
        imagine: "Assets/white.jpg",
        numeeng:"Wil Berries Lemonade",
        nume:"Lemonadă Wild Berries",
        numerus:"Лимонад Лесные Ягоды",
        pret:40,
        gramaj: 350,
        descriereeng:"",
        descriere:"" 
    }
];
let alcool = [
    {
        id:818,
        imagine: "Assets/images/818.jpg",
        nume:"Keller Holz",
        numeeng:"Keller Holz",
        numerus:"Keller Holz",
        pret:20,
        gramaj: 330,
        descriere:""
    },
    {
        id:819,
        imagine: "Assets/images/819.jpg",
        nume:"Keller Holz",
        numeeng:"Keller Holz",
        numerus:"Keller Holz",
        pret:30,
        gramaj: 500,
        descriere:""
    },
    {
        id:820,
        imagine: "Assets/images/820.jpg",
        nume:"Keller Holz N.A.",
        numeeng:"Keller Holz N.A.",
        numerus:"Keller Holz (безалкогольное)",
        pret:35,
        gramaj: 330,
        descriere:""
    },
    {
        id:821,
        imagine: "Assets/white.jpg",
        nume:"Prosecco",
        numeeng:"Prosecco",
        numerus:"Просекко",
        pret:40,
        gramaj: 250,
        descriere:""
    },
    {
        id:822,
        imagine: "Assets/white.jpg",
        nume:"Vin alb sec",
        numeeng:"Dry white wine",
        numerus:"Вино белое сухое",
        pret:40,
        gramaj: 150,
        descriere:""
    },
    {
        id:823,
        imagine: "Assets/white.jpg",
        nume:"Vin roșu sec",
        numeeng:"Dry red wine",
        numerus:"Вино красное сухое",
        pret:40,
        gramaj: 150,
        descriere:""
    },

    {
        id:807,
        imagine: "Assets/white.jpg",
        nume:"Mojito",
        numeeng:"Mojito",
        numerus:"Mojito",
        pret:65,
        gramaj: 350,
        descriere:""
    },
    {
        id:808,
        imagine: "Assets/white.jpg",
        nume:"Mojito N.A.",
        numeeng:"Mojito N.A.",
        numerus:"Mojito (безалкогольное)",
        pret:45,
        gramaj: 350,
        descriere:""
    },  
    {
        id:810,
        imagine: "Assets/white.jpg",
        nume:"Daiquiri",
        numeeng:"Daiquiri",
        numerus:"Daiquiri",
        pret:75,
        gramaj: 200,
        descriere:""
    },
    {
        id:815,
        imagine: "Assets/white.jpg",
        nume:"Pina Colada",
        numeeng:"Pina Colada",
        numerus:"Pina Colada",
        pret:65,
        gramaj: 350,
        descriere:""
    },
    {
        id:816,
        imagine: "Assets/white.jpg",
        nume:"Pina Colada N.A.",
        numeeng:"Pina Colada N.A.",
        numerus:"Pina Colada (безалкогольное)",
        pret:40,
        gramaj: 350,
        descriere:""
    },
    {
        id:817,
        imagine: "Assets/white.jpg",
        nume:"Aperol Spritz",
        numeeng:"Aperol Spritz",
        numerus:"Aperol Spritz",
        pret:65,
        gramaj: 350,
        descriere:""
    },
    {
        id:812,
        imagine: "Assets/white.jpg",
        nume:"Tequila Sunrise",
        numeeng:"Tequila Sunrise",
        numerus:"Tequila Sunrise",
        pret:65,
        gramaj: 360,
        descriere:""
    },

    
    {
        id:1002,
        imagine: "Assets/white.jpg",
        nume:"Blue Hawaii",
        numeeng:"Blue Hawaii",
        numerus:"Blue Hawai",
        pret:75,
        gramaj: 260,
        descriere:""
    },
    {
        id:1002,
        imagine: "Assets/white.jpg",
        nume:"Blue Hawaii N.A",
        numeeng:"Blue Hawaii N.A",
        numerus:"Blue Hawai безалкогольная",
        pret:75,
        gramaj: 260,
        descriere:""
    },   
    {
        id:824,
        imagine: "Assets/white.jpg",
        nume:"Martini Bianco",
        numeeng:"Martini Bianco",
        numerus:"Martini Bianco",
        pret:30,
        gramaj: 40,
        descriere:""
    },
    {
        id:825,
        imagine: "Assets/white.jpg",
        nume:"Martini Fiero",
        numeeng:"Martini Fiero",
        numerus:"Martini Fiero",
        pret:35,
        gramaj: 40,
        descriere:""
    },
    {
        id:826,
        imagine: "Assets/white.jpg",
        nume:"Bacardi Carta Blanca",
        numeeng:"Bacardi Carta Blanca",
        numerus:"Bacardi Carta Blanca",
        pret:40,
        gramaj: 40,
        descriere:""
    },
    {
        id:827,
        imagine: "Assets/white.jpg",
        nume:"Whiskey Glenfiddich",
        numeeng:"Whiskey Glenfiddich",
        numerus:"Whiskey Glenfiddich",
        pret:90,
        gramaj: 40,
        descriere:""
    },
    {
        id:828,
        imagine: "Assets/white.jpg",
        nume:"Whiskey Monkey Shoulder",
        numeeng:"Whiskey Monkey Shoulder",
        numerus:"Whiskey Monkey Shoulder",
        pret:60,
        gramaj: 40,
        descriere:""
    },
    {
        id:829,
        imagine: "Assets/white.jpg",
        nume:"Whiskey Tullamore",
        numeeng:"Whiskey Tullamore",
        numerus:"Whiskey Tullamore",
        pret:40,
        gramaj: 40,
        descriere:""
    },
    {
        id:830,
        imagine: "Assets/white.jpg",
        nume:"Whiskey Jack Daniels",
        numeeng:"Whiskey Jack Daniels",
        numerus:"Whiskey Jack Daniels",
        pret:50,
        gramaj: 40,
        descriere:""
    },
    {
        id:831,
        imagine: "Assets/white.jpg",
        nume:"Хортниця Premium",
        numeeng:"Хортниця Premium",
        numerus:"Хортниця Premium",
        pret:25,
        gramaj: 40,
        descriere:""
    },
    {
        id:832,
        imagine: "Assets/white.jpg",
        nume:"Tequila Milagro Silver",
        numeeng:"Tequila Milagro Silver",
        numerus:"Tequila Milagro Silver",
        pret: 50,
        gramaj: 40,
        descriere:""
    },
    {
        id:833,
        imagine: "Assets/white.jpg",
        nume:"Tequila Jose Cuervo Reposado",
        numeeng:"Tequila Jose Cuervo Reposado",
        numerus:"Tequila Jose Cuervo Reposado",
        pret:45,
        gramaj: 40,
        descriere:""
    },
    {
        id:834,
        imagine: "Assets/white.jpg",
        nume:"Gin Tanqueray",
        numeeng:"Gin Tanqueray",
        numerus:"Gin Tanqueray",
        pret:40,
        gramaj: 40,
        descriere:""
    },
    {
        id:835,
        imagine: "Assets/white.jpg",
        nume:"Campari Bitter",
        numeeng:"Campari Bitter",
        numerus:"Campari Bitter",
        pret:40,
        gramaj: 40,
        descriere:""
    },
    {
        id:836,
        imagine: "Assets/white.jpg",
        nume:"Jagermeister",
        numeeng:"Jagermeister",
        numerus:"Jagermeister",
        pret:35,
        gramaj: 40,
        descriere:""
    },
    {
        id:837,
        imagine: "Assets/white.jpg",
        nume:"Liqueur Molinari sambuca",
        numeeng:"Liqueur Molinari sambuca",
        numerus:"Liqueur Molinari sambuca",
        pret:40,
        gramaj: 40,
        descriere:""
    },
    {
        id:838,
        imagine: "Assets/white.jpg",
        nume:"Baileys",
        numeeng:"Baileys",
        numerus:"Baileys",
        pret:35,
        gramaj: 40,
        descriere:""
    },
    {
        id:839,
        imagine: "Assets/white.jpg",
        nume:"Hennessy",
        numeeng:"Hennessy",
        numerus:"Hennessy",
        pret:70,
        gramaj: 40,
        descriere:""
    },
    {
        id:840,
        imagine: "Assets/white.jpg",
        nume:"Divin Speranța X.O.",
        numeeng:"Divin Speranța X.O.",
        numerus:"Divin Speranța X.O.",
        pret:45,
        gramaj: 40,
        descriere:""
    },
];
export {aperitive};
export {supe};
export {suplemente};
export {pizza};
export {burger};
export {desert};
export {carne};
export {bauturi};
export {alcool};
