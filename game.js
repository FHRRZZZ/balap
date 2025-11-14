let correctAnswer = 0;
let currentQuestion = 1;
let progress = [0, 0, 0, 0, 0, 0];

function newQuestion() {
  let a = Math.floor(Math.random() * 20);
  let b = Math.floor(Math.random() * 20);
  correctAnswer = a + b;

  document.getElementById("question").innerText =
    `Soal ${currentQuestion}: ${a} + ${b} = ?`;

  let answers = [correctAnswer];
  while (answers.length < 4) {
    let w = Math.floor(Math.random() * 40);
    if (!answers.includes(w)) answers.push(w);
  }
  answers.sort(() => Math.random() - 0.5);

  for (let p = 1; p <= 5; p++) {
    let div = document.getElementById("p" + p);
    div.innerHTML = "";
    answers.forEach(ans => {
      let btn = document.createElement("button");
      btn.className =
        btn.className = "px-6 py-3 bg-white border-2 border-blue-500 rounded-xl shadow text-blue-700 font-bold hover:bg-blue-500 hover:text-white transition w-24 text-center";

      btn.innerHTML = ans;
      btn.onclick = () => checkAnswer(p, ans);
      div.appendChild(btn);
    });
  }
}

function checkAnswer(player, answer) {
  if (answer === correctAnswer) {
    progress[player]++;
    moveCar(player, progress[player]);
    if (progress[player] >= 5) {
      alert("🎉 Pemain " + player + " menang!");
      return;
    }
  }
  currentQuestion++;
  newQuestion();
}

function moveCar(player, step) {
  const car = document.getElementById("car" + player);
  const percent = step * 18;
  car.style.left = percent + "%";
}

newQuestion();
