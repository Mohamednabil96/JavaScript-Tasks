var flyQuestion = confirm("Do you fly?")
if (flyQuestion){
    var wildQuestion = confirm("Are you wild?")
    if(wildQuestion){
        // Yes .. Yes --> Eagle
        document.writeln(`<h1>Eagle</h1><br><img src="./images/eagle.jpg" alt="Eagle">`)
    }else{
        // Yes .. No --> Parrot
        document.writeln(`<h1>Parrot</h1><br><img src="./images/parrot.jpg" alt="Parrot">`)
    }
}else {
    var liveUnderSeaQuestion = confirm("Do you live under sea?")

    if(liveUnderSeaQuestion){
        // NO .. Yes 
        var wildQuestion = confirm("Are you wild?")
        if(wildQuestion){
            // No .. Yes .. Yes --> Shark
            document.writeln(`<h1>Shark</h1><br><img src="./images/shark.jpg" alt="Shark">`)
        }else{
            // No .. Yes .. No  --> Dolphin
            document.writeln(`<h1>Dolphin</h1><br><img src="./images/dolphin.jpg" alt="Dolphin">`)   
        }
    }else{
        // No .. No
        var wildQuestion = confirm("Are you wild?")
        if (wildQuestion){
            // No .. No .. Yes --> Lion
            document.writeln(`<h1>Lion</h1><br><img src="./images/lion.jpg" alt="Lion">`)   

        }else{
            // NO .. No .. No --> Cat
            document.writeln(`<h1>Cat</h1><br><img src="./images/cat.jpg" alt="Cat">`)   

        }
    }
}