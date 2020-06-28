/*=======================================================================================
		
		Типы данных
		
		1. Number 			- Числа ( Положительные, Отрицательные, Целые, Дробные )
		2. Boolean 			- Значение "true or false"
		3. String 			- Строчный тип данных (любой набор символов заключенный в "" или '')
		4. Undefined 		- тип данных неопределено
		5. Array				- Массив
		6. Object				- Объект
*/


/*=======================================================================================

		Операторы

		Ариметические операторы
		1. + 		- Оператор сложения
		2. - 		- Оператор вычитания
		3. * 		- Опретор умножения
		4. / 		- Оператор деления
		5. % 		- Оператор целочисленного остатка деления

		Логические операторы
		1. > 		- Логическое больше
		2. < 		- Логическое меньше
		3. >= 	- Логическое больше или равно
		4. <= 	- Логическое меньше или равно
		5. == 	- Оператор логического равенства
		6. != 	- Оператор логического неравенства
		7. || 	- Логический оператор или
		8. && 	- Логический оператор и
		9. !! 	- Логический оператор не

		Операторы присваивания
		1. = 		- Оператор присваивания
		2. += 	- Оператор сложения и присваивания
		3. -= 	- Оператор вычисления и присваивания
		4. *= 	- Оператор умножения и присваивания
		5. ++ 	- Оператор инкремента (Прибавляет 1 и присваивает значение)
		6. -- 	- Оператор декремента (Отнимает 1 и присваивает значение)

		Оператор конкатенации (склеивание) строк
		1. + 		- Используется лишь тогда, когда один из оперантов - строка

		Операторы доступа 
		1. .		- Используется для доступа к свойству объекта (в случе если свойство выглядит как идентификатор)
		2. []		- Используются для доступа к свойству объекта, либо к элементу массива

*/


/*=======================================================================================
		
		Ключевые слова и управляющие конструкции

		1. var [variable name] 																			- Объявление переменной
		2. while (condition) {cycle body}														- Объявление цыкла
		3. for (variable; condition; increment) {cycle body}				- Объявление цыкла
		4. if (condition){body}else if(condition){body}else{body}		- Объявление Условия
		5. switch(variable){ case val: body; [break;] }							- Объявление Выбора
*/


/*=======================================================================================

		Процедурный подход к программированию 

		Инструкция;
		Инструкция;
		Управляющая конструкция {
			Инструкция;
			Инструкция;
		}
		Инструкция;
		Инструкция;
*/


/*=======================================================================================
		
		Демонстрация управляющих конструкций Циклов

		var count = 0;
		while(count < 100){
			count++;
		}

		for(var count = 0; count < 100; count++){
	
		}
*/


/*=======================================================================================

		Демонстрация управляющей конструкции условия (if{}else if{}else{})

		if(expression){
	
		}else if(expression){
	
		}else{
	
		}
*/


/*=======================================================================================
		
		Демонстрация управляющей конструкции выбора ( switch )


//	User roles
//	1 - guest
//	2 - user
//	3 - admin
//	4 - proger
//	5 - project_manager


user_role = 3;


// if(user_role == 1){
// 	console.log('hello, guest');
// }else if(user_role == 2){
// 	console.log('hello, user');
// }else if (user_role == 3){
// 	console.log('hello, admin');
// }else if (user_role == 4){
// 	console.log('hello, proger');
// }else if (user_role == 5){
// 	console.log('hello, project manager');
// }else{
// 	console.log('hello, unknown');
// }


// switch(user_role){
// 	case 1: console.log('hello, guest'); break;
// 	case 2: console.log('hello, user'); break;
// 	case 3: console.log('hello, admin'); break;
// 	case 4: console.log('hello, proger'); break;
// 	case 5: console.log('hello, project manager'); break;
// }


// var symbol = 'G';
// var size = 5;

// switch (symbol){
// 	case 'G': size*=1024;
// 	case 'M': size*=1024;
// 	case 'K': size*=1024;
// }
// console.log(size +' - bytes');
*/


/*=======================================================================================
		
		Демонстрация ключевых слов для управления циклом

		while(expression){
			continue; - Перенос на следующую итерацию цикла
			break; - Выход из цикла
		} 
*/


/*=======================================================================================
		
		Функции

		function functionName (arguments) {functionBody}
		functionName() - function execution ( вызов функции )