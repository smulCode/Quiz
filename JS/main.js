const game = document.getElementById("game");
const scoreDisplay = document.getElementById("score");

const film = 11;
const levels = ["easy", "medium", "hard"];

const addGenre = () => {
  const column = document.createElement("div");
  column.classList.add("genre-column");
  column.innerHTML = "this is a genre";
  game.append(column);

  levels.forEach(level => {
      const card = document.createElement('div')
      card.classList.add("card")
      column.append(card);
      fetch(`https://opentdb.com/api.php?amount=1&category=11&difficulty=${level}&type=boolean`)
        .then(response => response.json())
        .then(data => console.log(data));
  })
};
addGenre();