function login(){

    var player1name=document.getElementById("player1name_input").value
    var player2name=document.getElementById("player2name_input").value
    localStorage.setItem("player1name",player1name)
    localStorage.setItem("player2name",player2name)
    window.location="game_page.html"
    }
    