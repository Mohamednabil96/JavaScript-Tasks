var userNameRegex = /^[a-zA-Z]{3,}$/gm
var userName = prompt("Please, Enter your name") 
while (!userNameRegex.test(userName)) {
   userName = prompt("Please, enter your name again!")
}

var userPhoneNumberRegex = /^[0-9]{8}$/gm
var userPhoneNumber = prompt("Please, Enter your phone number")
while (!userPhoneNumberRegex.test(userPhoneNumber)) {
   userPhoneNumber =prompt("Please, enter your phone number again!")
}

var userMobileNumberRegex = /^01[0125][0-9]{8}$/gm
var userMobileNumber = prompt("Please, Enter your mobile number")
while (!userMobileNumberRegex.test(userMobileNumber)){
   userMobileNumber = prompt("Please, enter your mobile number again!")
}

var userEmailRegex = /^[a-zA-Z]{3,}@[0-9]{3,}.com$/gm
var userEmail = prompt("Please, Enter your e-mail ex : abc@123.com ")
while (!userEmailRegex.test(userEmail)){
   userEmail = prompt("Please, enter your email again! ex : abc@123.com")
}

var userColor = prompt("Please, enter a color")
document.getElementById("userName").innerHTML = userName
document.getElementById("userPhoneNumber").innerHTML = userPhoneNumber
document.getElementById("userMobileNumber").innerHTML = userMobileNumber
document.getElementById("userEmail").innerHTML = userEmail
var coloredSentence = document.getElementsByClassName("coloredSentence")
for (var i=0; i< coloredSentence.length ; i++){
   coloredSentence[i].style.color = `${userColor}`
}

// .addEventListener("style", `color = "${userColor}"`)