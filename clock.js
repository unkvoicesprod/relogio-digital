function clock() {
  var month = [
    "Janeiro",
    "Fevereiro",
    "March",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  var days = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
  ];
  var today = new Date();

  let date = document.getElementById("date")
date.innerHTML = `${days[today.getDay()]}, ${[today.getDate()]} de ${month[today.getMonth()]} de ${[today.getFullYear()]}  `



  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var day = h < 11 ? "AM" : "PM";

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById("hours").innerHTML = h;
  document.getElementById("min").innerHTML = m;
  document.getElementById("sec").innerHTML = s += day;
}
var inter = setInterval(clock, 500);
