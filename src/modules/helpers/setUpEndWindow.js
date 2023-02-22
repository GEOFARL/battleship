import setUpNewGameBtn from './setUpNewGameBtn';

export default function setUpEndWindow(winner) {
  let text;
  if (winner === 'player') {
    text = 'You\'re the winner!';
  } else {
    text = 'Computer won this time';
  }
  const endWindow = document.querySelector('.end-screen');
  endWindow.style.display = 'block';
  endWindow.querySelector('.end-screen__winner').innerHTML = text;
  endWindow.querySelector('.new-game').addEventListener('click', setUpNewGameBtn);
}
