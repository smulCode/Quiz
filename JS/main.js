const startGameBtn = document.getElementById("startgame-btn");

startGameBtn.addEventListener("click", function () {
  (async () => {
    try {
      let app = await import("./game.js");
      console.log("startgame");
      
      // startGameBtn.classList.add('display-none')
    } catch (error) {
      console.log(error);
    }
  })();
});
