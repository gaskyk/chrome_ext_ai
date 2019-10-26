/* Create Chrome extension to replace AI with fancy maths */


// This makes an array of everything inside the body tag
var elementsInsideBody = [...document.body.getElementsByTagName('*')];

// A function that loops through every single item
function findAndReplace(){
  elementsInsideBody.forEach(element =>{
    element.childNodes.forEach(child =>{
      if(child.nodeType === 3){
        replaceText(child);
      }
    });

  });
}

// \b accounts for a word boundary (regular expression)
function replaceText (node) {
  let value = node.nodeValue;
  value = value.replace(/\bAI\b/gi, 'fancy maths');
  value = value.replace(/Artificial intelligence/gi, 'Fancy maths');
  value = value.replace(/artificial intelligence/gi, 'fancy maths');
  node.nodeValue = value;
}

window.onload = findAndReplace();