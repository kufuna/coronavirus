var data;
axios.get("https://covid19.mathdro.id/api/").then(response => {
  data = response.data
  // console.log(data)
  document.querySelector('#global-confirmed').innerHTML = data.confirmed.value;
  document.querySelector('#global-death').innerHTML = data.deaths.value;
  document.querySelector('#global-recovered').innerHTML = data.recovered.value;
});
var georgia_data;
axios.get("https://covid19.mathdro.id/api/countries/georgia").then(response => {
  georgia_data = response.data;
  document.querySelector('#goergia-confirmed').innerHTML = georgia_data.confirmed.value;
  document.querySelector('#georgia-death').innerHTML = georgia_data.deaths.value;
  document.querySelector('#georgia-recovered').innerHTML = georgia_data.recovered.value;
});

var x;
var sum = 0;;
axios.get("https://covid19.mathdro.id/api/daily/4-2-2020").then(response => {
  x = response.data;
  console.log(x)
  for (var i = 0; i < x.length; i++) {
  	sum = sum + Number(x[i].confirmed);
  }
  console.log(sum)
  document.querySelector('#goergia-confirmed').innerHTML = georgia_data.confirmed.value;
  document.querySelector('#georgia-death').innerHTML = georgia_data.deaths.value;
  document.querySelector('#georgia-recovered').innerHTML = georgia_data.recovered.value;
});

function count(elem,speed){
	var number = elem.dataset.number;
	var num = 0;

	function animNumber(){
		elem.innerHTML = Math.round(num);
		num = num + 1;
		if (num > number) {
			return
		}
		requestAnimationFrame(animNumber)
	}
	animNumber();
	elem.innerHTML = number;
	console.log(number)
}

window.onload = function(){
	document.body.classList.add('loaded')
}
