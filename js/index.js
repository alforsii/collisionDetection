const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// canvas.width = innerWidth;
// canvas.height= innerHeight;
class Circle {
  constructor(x, y, r, color) {
    this.x = x;
    this.y = y;
    this.radius = r;
    this.color = color;
  }
  //   update() {
  //     this.draw();
  //   }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

// function mouse(){
let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
document.addEventListener('mousemove', event => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
// }

let smallCircle;
let bigCircle;
function init() {
  smallCircle = new Circle(50, 50, 50, 'red');
  bigCircle = new Circle(350, 250, 100, 'black');
}
let timer = 0;
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  bigCircle.draw();
  smallCircle.draw();
  smallCircle.x = mouse.x;
  smallCircle.y = mouse.y;

  timer++;
  //   console.log('Output for: animate -> timer', timer);
}

init();
animate();