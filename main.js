let textInput = '';
const encriptar =  () => {
  textInput = document.getElementById('textInput').value;
  const encryptedTe = encryptedText(textInput);
  let valueSvg = document.querySelector('#svgRectangle');
  document.getElementById('buttonRectangle').style.display = 'inline-block';
  let rectangleText = document.querySelector('#rectangleText h2');
  if (valueSvg || rectangleText) {
    valueSvg.remove();
    rectangleText.remove();
  }
  let rectangleP = document.getElementById('rectangleP');
  rectangleP.innerHTML = encryptedTe;
}

const encryptedText = (text) => {
  let textSplit = text.split(' ');
  console.log(textSplit)
  const ber = 'ber';
  const I = 'i';
  const ent = 'ent';
  let resultado = '';
  for (let i = 0; i < textSplit.length; i++) {
    let word = textSplit[i];
    if (word.length % 2 === 0) {
      
    }
    for (let j = 1; j < word.length; j += 2) {
      if (word.length % 2 === 0) {
        word = word.slice(0, j) + ber + word.slice(j);
        j += ber.length;
      } else {
        word = word.slice(0, j) + ent + word.slice(j);
        j += ber.length;
      }
      
    }
    resultado = resultado.concat(word, ' ');
  }
  resultado = resultado.trim();
    
  return resultado;
}

const decryptedText = () => {
  let rectangleP = document.getElementById('rectangleP');
  rectangleP.innerHTML = textInput;
}

const copiar = () => {
  let rectangleP = document.getElementById('rectangleP');
  let range = document.createRange();
  range.selectNodeContents(rectangleP);
  window.getSelection().removeAllRanges();
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  rectangleP.textContent = 'Texto Copiado';
}