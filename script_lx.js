'use strict'
let myDate = new Date (),
yearGlobal = myDate.getFullYear(),
monthGlobal = myDate.getMonth(),
dayGlobal = myDate.getDate();
function createMonth(year1,month1,day1) {
	let date = new Date(year1,month1,day1);
	let year = date.getFullYear();
	let month = date.getMonth();
	let today = date.getDate();
	let textMonth = date.toLocaleString('ru',{month: 'long'})[0].toUpperCase() + date.toLocaleString('ru',{month: 'long'}).slice(1);
	let lastDay = new Date(year,month+1,0).getDate(); // для получения последнего числа в месяце
	let day_Of_Week_First_Day_In_Month = new Date(year,month,1).getDay(); // для получения дня недели первого дня месяца
	
	

	let itMonth = document.createElement('h1'),
		div = document.createElement('div'),
		ulWeekend = document.createElement('ul'),
		ulDays = document.createElement('ul'),
		arrowLeft = document.createElement('i'),
		arrowRight = document.createElement('i');


	itMonth.innerHTML = `${textMonth} ${year}`;
	document.body.append(itMonth);
	itMonth.prepend(arrowLeft);
	itMonth.append(arrowRight);
	document.body.append(div);
	div.append(ulWeekend);
	div.append(ulDays);
	arrowLeft.className = 'fas fa-arrow-circle-left';
	arrowRight.className = 'fas fa-arrow-circle-right';
	ulWeekend.className = 'daysOfWeekand';
	ulDays.className = 'daysOfMonth';
	itMonth.className = 'mainContent';

	arrowRight.addEventListener('click', function () {
		div.remove();
		itMonth.remove();
		createMonth(year,++month,today);
	});
	arrowLeft.addEventListener('click', function () {
		div.remove();
		itMonth.remove();
		createMonth(year,--month,today);
	});
																// создание дней недели 
	let arrryOfWeekands = ['Пн','Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
for(let i = 0; i < 7; i++){
	let li = document.createElement('li');
	li.innerHTML = arrryOfWeekands[i];
	ulWeekend.append(li);
}

															// создание дней месяца
	let emptyLi = 0; // к-во пустых лишек, что бы соответствовал 1-е число дню недели
	let start = 1;
		if (day_Of_Week_First_Day_In_Month == 0) {
			emptyLi = 6;
		}
		if(day_Of_Week_First_Day_In_Month > 1){
			emptyLi = day_Of_Week_First_Day_In_Month - 1;
		}
	
	for(let i = 0;i < lastDay + emptyLi; i++){
		let li = document.createElement('li');
		if(i < emptyLi)
			li.innerHTML = '&nbsp';
		else 
			li.innerHTML = start++;
		if(dayGlobal == today && monthGlobal == month && today == i &&  yearGlobal == year)
			li.className = 'today';
		ulDays.append(li);
	}
}

createMonth(yearGlobal,monthGlobal,dayGlobal);

// function weatherCall(){
//     let cityId = 703447;
//     let units = 'metric';
//     let apiKey = '286e0e247b1e430ff91e8bbb945cf78d';

//     let requestString = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=${units}`;
//     request = new XMLHttpRequest();
//     request.open("get", requestString, true);
//     request.send();
//     let weatherObject;
//     request.onload = function (){
//         weatherObject = JSON.parse(this.responseText);
//         document.querySelector(".weather__span").innerHTML = Math.round(weatherObject.main.temp) + 'º';
    
//     }

// }

// setInterval(weatherCall(), 1000*60*15);
