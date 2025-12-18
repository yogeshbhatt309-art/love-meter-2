function checkLove() {
  const yourName = document.getElementById("yourName").value;
  const crushName = document.getElementById("crushName").value;

  if (yourName === "" || crushName === "") {
    alert("Please enter both names ❤️");
    return;
  }

  const lovePercent = Math.floor(Math.random() * 101);

  const gifs = [
    "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
    "https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif",
    "https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif",
    "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",
    "https://media.giphy.com/media/3oz8xAFtqoOUUrsh7W/giphy.gif"
  ];

  const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

  const gifElement = document.getElementById("loveGif");
  gifElement.src = randomGif;
  gifElement.style.display = "block";

  document.getElementById("result").innerHTML =
    `${yourName} ❤️ ${crushName}<br>Love is ${lovePercent}% 💕`;
}
