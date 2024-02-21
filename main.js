let textInput;
const encriptar =  () => {
  textInput = document.getElementById('textInput').value;
  const encryptedTe = encryptedText(textInput);
  let valueSvg = document.querySelector('#svgRectangle');
  valueSvg.remove();
  document.getElementById('buttonRectangle').style.display = 'inline-block';
  let rectangleText = document.querySelector('#rectangleText h2');
  rectangleText.remove();

  let rectangleP = document.getElementById('rectangleP');
  rectangleP.innerHTML = encryptedTe;
}

const encryptedText = (text) => {
  let textSplit = text.split('');
  const desorText =  textSplit.sort(() => Math.random() - 0.5);
  const finallyText = desorText.join('');   
  return finallyText;
}
const decryptedText = () => {
  let rectangleP = document.getElementById('rectangleP');
  rectangleP.innerHTML = textInput;
}