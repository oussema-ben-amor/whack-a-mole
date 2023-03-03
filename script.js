var $body=$("body")
$body.css({
    background: "url('picture/images.jpg')",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover"
})
$(document).ready(function() {
  var score = 0
  var moles = $(".mole")

  moles.click(function() {
    $(this).addClass("hit")
    score++
    setTimeout(function(){
      $(this).removeClass("hit")
    }, 500)
  })

  
  $("#start-game").click(function() {
    $(this).hide()
    startGame()
  })

  function startGame() {
    moles.click(function() {
      $(this).addClass("hit")
      score++
      setTimeout(function() {
        $(this).removeClass("hit")
      }, 500)
    })

    setInterval(function() {
      var randomMole = moles.eq(Math.floor(Math.random() * moles.length))
      randomMole.fadeIn(800).fadeOut(400)
    }, 500)

    setTimeout(function() {
      if (score >= 5)
        alert("Time's up! Your score is " + score + ". " + " Congrulation you won")
      else alert("Time's up! Your score is " + score + ". " + " Sorry you lost ")
    }, 10000)
  }
})



  
