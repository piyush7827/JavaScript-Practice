var randomItems = document.querySelectorAll(".randomItem");

var randomSelector = randomNoRepeats([...randomItems]);

const randomSelectorInterval = setInterval(function () {
  randomSelector();
}, 2000);

function randomNoRepeats(array) {
  var copy = array.slice(0);

  return function () {
    array.forEach(function (el) {
      el.classList.remove("active");
    });

    if (copy.length < 1) {
      copy = array.slice(0);
    }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];

    copy.splice(index, 1);
    item.classList.add("active");
    return item;
  };
}
