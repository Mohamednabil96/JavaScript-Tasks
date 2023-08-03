let mywindow,
    string = `Your message will be displayed character by character :)            
    Few seconds and this window will terminate ...               
    `,
    array = string.split(""),
    timer;
function openNewTab(){
    mywindow = window.open("message.html", "", "width=800, height=200;")
} 

function frameLooper () {
	if (array.length > 0) {
		document.getElementById("text").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
        mywindow = window.close()
	}
	loopTimer = setTimeout('frameLooper()',100); 
}
frameLooper();



