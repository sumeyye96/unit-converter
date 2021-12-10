const Kelvin= 293 ;// bu bir sabit değerdir daha sonra değiştirilemez.
const Celcius= Kelvin-293; // kelvini celciusa dönüştürdük.
const Fahrenheit=  Celsius * (9/5) + 32; // Fahrenheiti celcius cinsinden bulduk.
Fahrenheit= Math.round(Fahrenheit);// değeri yuvarladık.
console.log(Fahrenheit);
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`)