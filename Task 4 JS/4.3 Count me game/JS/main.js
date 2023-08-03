let tags = document.querySelector("#tags"),
classes = document.querySelector("#classes"),
ids = document.querySelector("#ids"),
names = document.querySelector("#names"),
showBtn = document.querySelector("#showBtn");

showBtn.addEventListener("click", function(){
    let output ={
     All : document.getElementsByTagName(tags.value).length,
     Class : document.getElementsByClassName(classes.value).length,
     Id : document.getElementById(ids.value)? true:false,
     Name : document.getElementsByName(names.value).length,
    }
    document.getElementById("output").innerHTML = JSON.stringify(output);
})



