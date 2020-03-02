function czasDoWydarzenia(rok, miesiac, dzien, godzina, minuta, sekunda, milisekunda)
{
	var aktualnyCzas = new Date();
	var dataWydarzenia = new Date(rok, miesiac, dzien, godzina, minuta, sekunda, milisekunda);
	var pozostalyCzas = dataWydarzenia.getTime() - aktualnyCzas.getTime();
	
	if (pozostalyCzas > 0)
	{						
		var s = pozostalyCzas / 1000;	// sekundy
		var min = s / 60;				// minuty
		var h = min / 60;				// godziny
		var d = h /24 ;					// dni
		
		var sLeft = Math.floor(s  % 60);	// pozostało sekund		
		var minLeft = Math.floor(min % 60);	// pozostało minut
		var hLeft = Math.floor(h%24);			// pozostało godzin	
		var daysLeft = Math.floor(d); //pozostalo dni
		
		
		if (minLeft < 10)
		  minLeft = "0" + minLeft;
		if (sLeft < 10)
		  sLeft = "0" + sLeft;
		
		return  daysLeft + " dni " + hLeft + " : " + minLeft + " : " + sLeft;
	}
}
	function licz(rok1, miesiac1, dzien1, godzina1, minuta1, sekunda1, milisekunda1)
{
	var timeNow = new Date();
	var eventTime = new Date(rok1, miesiac1, dzien1, godzina1, minuta1, sekunda1, milisekunda1);
	var timerstart = timeNow.getTime()-eventTime.getTime();
	
	if (timerstart > 0)
	{						
		var s1 = timerstart / 1000;	// sekundy
		var min1 = s1 / 60;				// minuty
		var h1 = min1 / 60;				// godziny
		var d1 = h1 /24 ;					// dni
		
		var sLeft1 = Math.floor(s1  % 60);	// pozostało sekund		
		var minLeft1 = Math.floor(min1 % 60);	// pozostało minut
		var hLeft1 = Math.floor(h1%24);			// pozostało godzin	
		var daysLeft1 = Math.floor(d1); //pozostalo dni
		
		
		if (minLeft1 < 10)
		  minLeft1 = "0" + minLeft1;
		if (sLeft1 < 10)
		  sLeft1 = "0" + sLeft1;
		
		return  daysLeft1 + " dni " + hLeft1 + " : " + minLeft1 + " : " + sLeft1;
	}
}
								
window.onload = function()
{	idElement1 = "element1";
	document.getElementById(idElement1).innerHTML = licz(2020, 1, 10, 0, 0, 0, 0);
	setInterval("document.getElementById(idElement1).innerHTML = licz(2020, 1, 10, 0, 0, 0, 0)", 1000);
	
	idElement = "element2";
	document.getElementById(idElement).innerHTML = czasDoWydarzenia(2020, 3, 30, 0, 0, 0, 0);
	setInterval("document.getElementById(idElement).innerHTML = czasDoWydarzenia(2020, 3, 30, 0, 0, 0, 0)", 1000);
};
