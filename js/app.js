var data;
axios.get("https://covid19.mathdro.id/api/").then(response => {
  document.querySelector('#global-confirmed').innerHTML = data.confirmed.value;
  document.querySelector('#global-death').innerHTML = data.deaths.value;
  document.querySelector('#global-recovered').innerHTML = data.recovered.value;
});
var georgia_data;
axios.get("https://covid19.mathdro.id/api/countries/georgia").then(response => {
  georgia_data = response.data;
  console.log(georgia_data)
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
// count(document.querySelector('#number'),120)