// 設問1
var button = document.getElementById('displaybutton');
var display = document.getElementById('display');
var output = document.getElementById('output');

button.addEventListener('click', function() {
  var text = display.value;
  output.textContent = text;
  if (text.trim() === "") {
    alert('入力値が空です。');
  }
});

// 設問2
var button = document.getElementById('back');
var colors = ['lightblue','lightgreen','lightcoral'];
let colorIndex = 0;

button.addEventListener('click', function() {
  document.body.style.backgroundColor = colors[colorIndex];

  colorIndex++;

  if (colorIndex >= colors.length) {
    colorIndex = 0;
  }

  setTimeout(function() {
    document.body.style.backgroundColor = "";
    document.body.classList.remove('highlighted');
  }, 3000);
});

// 設問3
var toggleButton = document.getElementById('togglebutton');
var contentArea = document.getElementById('contentArea');
let isHighlighted = false;

togglebutton.addEventListener('click', () => {
  if (isHighlighted) {
    contentArea.style.display = "none";
    contentArea.textContent = "ハイライトOFF";
  } else {
    contentArea.style.display = "block";
    contentArea.textContent = "ハイライトON";
  }
  isHighlighted = !isHighlighted;
});

// 設問4、5
var addButton4 = document.getElementById('addButton4');
var input4 = document.getElementById('input4');
var output4 = document.getElementById('output4');

addButton4.addEventListener('click', function() {
  var text4 = input4.value;

  if (text4 === '') {
    return;
    }

  var tr = document.createElement('tr');
  tr.className = 'newTr';

  var textTd = document.createElement('td');
  textTd.textContent = text4;

  var buttonTd = document.createElement('td');
  var deleteButton = document.createElement('button');
  deleteButton.textContent = '削除';

  deleteButton.addEventListener('click', function() {
    tr.remove();
    checkCount();
  });

  buttonTd.appendChild(deleteButton);

  tr.appendChild(textTd);
  tr.appendChild(buttonTd);
  output4.appendChild(tr);

  input4.value = '';

  checkCount();
  });

function checkCount() {
  var count = document.querySelectorAll('.newTr').length;

  if (count >= 3) {
    addButton4.style.display = 'none';
  } else {
    addButton4.style.display = 'inline-block';
  }
}

// 設問6
var input6 = document.getElementById("input6");
var addButton6 = document.getElementById("addButton6");
var output6 = document.getElementById("output6");

var MAX_COUNT = 3;

addButton6.addEventListener("click", function () {
  var text = input6.value;
  if (text === "") {
    return;
  }

  if (output6.children.length >= MAX_COUNT) {
    output6.removeChild(output6.firstElementChild);
  }

  var tr = document.createElement("tr");
  var td = document.createElement("td");
  td.textContent = text;

  tr.appendChild(td);
  output6.appendChild(tr);

  input6.value = "";
});

// 設問7
for (let i = 0; i< 5; i++) {
  console.count('i');
}