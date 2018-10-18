var timer
function clickIt() {
	document.getElementById("more-results-button").click()
	timer = setTimeout(clickIt, 1000)	
}
clickIt()

clearInterval(timer)