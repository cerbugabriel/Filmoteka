import getElement from './getElement';

export const changeNoteColor = () => {
  const cardNote = [...document.querySelectorAll('.overlay-text h1')];
  cardNote.forEach(cardNote => {
    let note = cardNote.textContent;
    note = Number(note);
    if (note < 6) {
      cardNote.style.color = '#b92f2c';
    } else if (note >= 6 && note < 8) {
      cardNote.style.color = '#f09b00';
    } else {
      cardNote.style.color = '#0d800d';
    }
    note = note.toFixed(1);
    cardNote.textContent = note;
  });
};
