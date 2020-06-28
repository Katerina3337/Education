function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





/*
* Вывод в консоль чисел от 1 до 10
*/


// for(var i = 1; i<=10; i++){
// 	console.log(i);
// }





/*
* Вывод в консоль чисел от 1 до 10 С помощью while
*/

// var i = 1;
// while(i<=10){
// 	console.log(i);
// 	i++;
// }





/*
* Возведение num в степень exp
*/

// var num = 2;
// var exp = 3;
// var res = 1;
// for(var count = 0; count < exp; count++){
// 	res = num*res;
// }

// console.log(res);




/*
* Возведение num в степень exp С помощью while
*/

// var num = 2;
// var exp = 3;
// var res = 1;
// var count = 0;
// while(count < exp){
// 	count++;
// 	res *= num;
// }

// console.log(res);


/*
* Построение лесенки из символов symb высотой в height
*/

// var symb = "*";
// var height = 15;
// var str = "";
// for(count = 0; count < height; count++){
// 	str += symb;
// 	console.log(str);
// }





/*
* Условия решения с помошью if
*/

// var money = parseInt(prompt());
// var diet = false;
// if(diet && money >= 3){
//   console.log("Покупаю салат");
// } else{
// 	if(money >= 5 && money < 7){
// 		console.log("Покупаю мороженое")
// 	} else if(money >= 7 && money < 15){
// 		console.log("Покупаю шоколадку")
// 	} else if(money >= 15){
// 		console.log("Покупаю тортик")
// 	} else{
// 		console.log("Неправильное значение")
// 	}

// }




/*
* Подсчёт разных типов с помощью switch case
*/

/**
	1 = овощи
	2 = мясо 
	3 = хлеб 
	4 = молоко
*/

// var i = 0;
// var product_type;
// var vegetables = 0;
// var meat = 0;
// var bread = 0;
// var milk = 0;
// while(i<100){
// 	product_type = getRandomInt(1, 4);
// 	switch(product_type){
// 		case 1 : vegetables++; break;
// 		case 2 : meat++; break;
// 		case 3 : bread++; break;
// 		case 4 : milk++; break;
// 	}


// 	i++;
// }

// console.log('Машин с овощами приехало: ' + vegetables);
// console.log('Машин с мясом приехало: ' + meat);
// console.log('Машин с хлебом приехало: ' + bread);
// console.log('Машин с молоком приехало: ' + milk);




/*
* Алгоритм покупки вкусняшек
*/

/**
	1. Жевачка - 1 рубль
	2. Сухарики - 3 рубля
	3. Мороженое - 5 рублей
	4. Лимонад - 7 рублей
	5. Шоколадка - 10 рублей

	Я игарл с ребятами в футбол и сейчас мне хочеться пить
	Я точно хочу купить лимонад, если у меня на него хватит. 
	Любых вкусностей мне нужно не больше двух
	Лимонад мне нужен только один 
*/

// var money = 21;
// var lemonade = 0;
// var chocolate = 0;
// var ice_cream = 0;
// var biscuits = 0;
// var bubble_gum = 0;

// while(money > 0 && (lemonade+chocolate+ice_cream+biscuits+bubble_gum) < 8 ){
	
// 	if(money >= 7 && lemonade < 1){
//     money -= 7;
//     lemonade++;
// 	} 
  
//   if(money >= 10 && chocolate < 2){
//   	money -= 10;
//   	chocolate++;
//   }

//   if(money >= 5 && ice_cream < 2){
//   	money -= 5;
//   	ice_cream++;
//   }

//   if(money >= 3 && biscuits < 2){
//   	money -= 3;
//   	biscuits++;
//   }

//   if(money >= 1 && bubble_gum < 2){
//   	money -= 1;
//   	bubble_gum++;
//   }
// }

// console.log(money);
// console.log(lemonade + " Лимонад");
// console.log(chocolate + " Шоколад");
// console.log(ice_cream + " Мороженое");
// console.log(biscuits + " Сухарики");
// console.log(bubble_gum + " Жевачка");




/*
* Алгоритм вывод чисел из диапозона за исключением некоторых
*/

// for(var i = 0; i<10; i++){

// 	if(i == 3 || i == 5 || i == 7){
// 		continue;
// 	}
// 	console.log(i);
// }




/*
* Алгоритм выхода из цикла
*/

// for(var i = 0; i<10; i++){
// 	var num = getRandomInt(1,10);
// 	if(num == 7){
// 		break;
// 		console.log('break');
// 	}
// 	console.log(num)
// }




/*
* Схватка героя и монстра 
*/

// var hero = 100;
// var monster = 100;
// while(hero > 0 && monster > 0){
	
// 	if(getRandomInt(1, 20) == 1){
// 		monster = 0;
// 		break;
// 	}
// 	monster -= getRandomInt(5, 10);

// 	if(getRandomInt(1, 20) == 1){
// 		hero = 0;
// 		break;
// 	}
// 	hero -= getRandomInt(5, 10);
// }

// console.log("Hero " + hero);
// console.log("Monster " + monster);

// if( hero > monster){
// 	console.log("Победитель hero ");
// }else{
// 	console.log("Победитель monster ");
// }





function sayHello(num, exp){
	var res = 1;
 	var count = 0;
 	while(count < exp){
		count++;
		res *= num;
 	}
 	console.log(res);
}

sayHello(5, 2);
sayHello(7, 5);
sayHello(8, 3);
