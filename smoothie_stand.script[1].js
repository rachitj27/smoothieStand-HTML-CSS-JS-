var strawberry = 0;
var mango = 0;
var banana = 0;
var picker = 0;
var blending = 0;
var money = 0;
var cashiers = 0;
var smoothie = 0;
var strawberryPar = document.getElementById("strawberryPar");
var mangoPar = document.getElementById("mangoPar");
var bananaPar = document.getElementById("bananaPar");
var smoothiePar = document.getElementById("smoothiePar");
var strawberryImage = document.getElementById("strawberryImage");
var mangoImage = document.getElementById("mangoImage");
var bananaImage = document.getElementById("bananaImage");
var blenderImage = document.getElementById("blenderImage");
var pickerPar = document.getElementById("pickerPar");
var moneyPar = document.getElementById("moneyPar");
var pickingButton = document.getElementById("pickingButton");
var blenderOperater = document.getElementById("blenderButton");
var blenderPar = document.getElementById("blenderPar");
var cashierPar = document.getElementById("cashierPar");
var cashierButton = document.getElementById("cashierButton");
var moneyImage = document.getElementById("moneyImage");
cashierButton.addEventListener("click", autoBlend);
strawberryImage.addEventListener("click", pickStrawberry);
mangoImage.addEventListener("click", pickMango);
bananaImage.addEventListener("click", pickBanana);
blenderImage.addEventListener("click", makeSmoothie);
pickingButton.addEventListener("click", autoPick);
blenderOperater.addEventListener("click", operatingBlender);
moneyImage.addEventListener("click", makeMoney);

function pickStrawberry() {
  strawberry = strawberry + 1;
  strawberryPar.innerHTML = "Strawberries: " + strawberry;
}

function pickMango() {
  mango = mango + 1;
  mangoPar.innerHTML = "Mangoes: " + mango;
}

function pickBanana() {
  banana = banana + 1;
  bananaPar.innerHTML = "Bananas: " + banana;
}

function autoPick() {
  setInterval(startCounter, 1000);
  picker = picker + 1;
  pickerPar.innerHTML = "Pickers: " + picker;

}

function startCounter() {
  strawberry = strawberry + 1;
  banana = banana + 1;
  mango = mango + 1;
  mangoPar.innerHTML = "Mangoes: " + mango;
  strawberryPar.innerHTML = "Strawberries: " + strawberry;
  bananaPar.innerHTML = "Bananas: " + banana;
  money = money - 0.1;
  moneyPar.innerHTML = "Money: $" + money.toFixed(2)
}

function makeSmoothie() {
  smoothie = smoothie + 1;
  smoothiePar.innerHTML = "Smoothies " + smoothie;

}

function operatingBlender() {
  blending = blending + 1;
  blenderPar.innerHTML = "Blender Operator: " + blending;
}

function autoBlend() {
  cashiers = cashiers + 1;
  cashierPar.innerHTML = "Cashier: " + cashiers;
}
function makeMoney() {
  if (smoothie <= 0) {
    smoothiePar.innerHTML = "You don't have any"
  }
  else {
    smoothie = smoothie - 1;
    money = money + 2.0;
    moneyPar.innerHTML = "Money: $" + money;
    smoothiePar.innerHTML = "Smoothies: " + smoothie;
  }



}

