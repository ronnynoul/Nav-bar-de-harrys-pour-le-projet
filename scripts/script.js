document.querySelector(".commentaire").style.display = "none"
document.querySelector(".chariot").style.display = 'none'
// document.querySelector(".favoris").style.display = 'none'

//reglages du boutton charriot
document.querySelector(".icone-cart").addEventListener("click", function(){
    document.querySelector(".chariot").style.display = "block"
    document.querySelector(".fleche").style.display = "none"
})
//reglages du boutton croix
document.querySelector(".icone-croix").addEventListener("click", function(){
    document.querySelector(".chariot").style.display = 'none'
    document.querySelector(".fleche").style.display = "block"


})
//reglages du boutton fleche
document.querySelector(".fleche").addEventListener("mousedown", function(){
    document.querySelector(".commentaire").style.display = ("block")
    
})
document.querySelector(".fleche").addEventListener("mouseup", function(){
    document.querySelector(".commentaire").style.display = ("none")
    
})
// reglages du boutton favori
// document.querySelector(".icone-star").addEventListener("mousedown", function(){
//     document.querySelector(".favoris").style.display = "block"
//     document.querySelector(".fleche").style.display = "none"
//     document.querySelector(".commentaire").style.display = "none"
// })
