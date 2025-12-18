function checkLove(){
  let name1 = document.getElementById("name1").value.trim();
  let name2 = document.getElementById("name2").value.trim();

  if(name1 === "" || name2 === ""){
    alert("Please enter both names ❤️");
    return;
  }

  // 🔀 RANDOM PERCENT
  let percent = Math.floor(Math.random() * 101);

  let result = document.getElementById("result");
  let gif = document.getElementById("gif");

  // 🔀 RANDOM GIF + MESSAGE DATA
  const data = [
    {
      gif: "gifs/low.gif",
      msg: "😢 Thoda mushkil hai"
    },
    {
      gif: "gifs/love.gif",
      msg: "😊 Accha chance hai"
    },
    {
      gif: "gifs/high.gif",
      msg: "😍 Perfect match!"
    }
  ];

  // 🔀 RANDOM PICK
  let randomPick = data[Math.floor(Math.random() * data.length)];

  // APPLY
  gif.src = randomPick.gif;

  result.innerHTML = `
    ${name1} ❤️ ${name2}<br>
    💖 Love Percentage: ${percent}%<br>
    ${randomPick.msg}
  `;
}
