console.log("Hello world!!!");

document.querySelector('.read-rules').onclick = function () {
    console.log('read-rules');
    document.querySelector('.form-slider').
    style.marginLeft = '-250px';
    
}

// document.querySelector('.read-rules-back').onclick = function () {
//     console.log('read-rules-back');
//     document.querySelector('.form-slider').
//     style.marginLeft = '0';
// }

const readRulesBackElements = document.querySelectorAll('.read-rules-back');

readRulesBackElements.forEach(element => {
  element.onclick = function() {
    console.log('read-rules-back');
    document.querySelector('.form-slider').style.marginLeft = '0';
  };
});
