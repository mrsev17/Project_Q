
let detail = {
  length: 350,
  width: 250,
  lt: { radius: 0 },
  lb: { radius: 0 },
  rt: { radius: 50 },
  rb: { radius: 0 }
};

const app = document.getElementById("app");
const heightInput = document.getElementById("heightInput");
const widthInput = document.getElementById("widthInput");
const leftAngleInput = document.getElementById("rightAngleInput");
const rotateZ = document.getElementById("rotateZ");

// ================== //

(() => {

const myDetail = document.getElementById("detail");
const context = myDetail.getContext("2d");

  const roundRect = (x, y, w, h, rad) => {

    let r = x + w;
    let b = y + h;
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = "2";
    context.moveTo(x, y);
    context.lineTo(r, y);
    context.lineTo(r, b - rad);
    context.lineTo(r - rad, b - rad);
    context.lineTo(r - rad, b);
    context.lineTo(x, b);
    context.lineTo(x, y);
    context.closePath();
    context.stroke();

  }
  roundRect(400, 100, detail.width, detail.length, 50);

  let rotation = 0;
  let targetRotate = 90;

  rotateZ.addEventListener("click", () => {

    let newLength = +heightInput.value;
    let newWidth = +widthInput.value;
    let newRadRight = +leftAngleInput.value;

    detail.length = newLength;
    detail.width = newWidth;
    detail.rt.radius = newRadRight;

    rotation = (rotation + targetRotate) % 360;
    myDetail.style.transform = `rotate(${rotation}deg)`;

    context.clearRect(0, 0, myDetail.width, myDetail.height);

    roundRect(400, 100, detail.width, detail.length, detail.rt.radius);
  });
})();

