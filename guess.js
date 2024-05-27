let number = document.querySelector('.number');
const check = document.querySelector('.check');
const again = document.querySelector('.again');
let Nscore = 20;
let Nhighscore = 0;
const score = document.querySelector('.score');
const message = document.querySelector('.message');
let highscore = document.querySelector('.highscore');

// random number
let Rnumber = Math.trunc(Math.random() * 20 + 1);

// click check transmit input() to div.number
check.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // *no number
  if (!guess) {
    message.textContent = '⛔️ No Number';

    //  * win
  } else if (guess === Rnumber) {
    message.textContent = '🎉 Correct Number';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    number.textContent = Rnumber;
    if (Nscore > Nhighscore) {
      Nhighscore = Nscore;
      highscore.textContent = Nhighscore;
    }

    // *high
  } else if (guess > Rnumber) {
    if (Nscore > 1) {
      message.textContent = '📈 Too High';
      Nscore--;
      score.textContent = Nscore;
    } else {
      message.textContent = '💥 You Lost Game';
      score.textContent = 0;
    }

    // *low
  } else if (guess < Rnumber) {
    if (Nscore > 1) {
      message.textContent = '📈 Too Low';
      Nscore--;
      score.textContent = Nscore;
    } else {
      message.textContent = '💥 You Lost Game';
      score.textContent = 0;
    }
  }
});

// again
again.addEventListener('click', function () {
  message.textContent = 'Start guessing...';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  Rnumber = Math.trunc(Math.random() * 20 + 1);
  score.textContent = 20;
  Nscore = 20;
  document.querySelector('.guess').value = '';
  number.textContent = '?';
});
