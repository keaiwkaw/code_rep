var main = document.getElementById("main");
var showcanvas = true;
var speed=300;
var timer;
function star(){
    clearInterval(timer);
  timer = setInterval(function () {
      snake.run();
  },speed);
}
document.getElementById("begin").onclick = function () {
  clearInterval(timer);
  timer = setInterval(function () {
      snake.run();
  },speed);
};
document.getElementById("pause").onclick=function(){
    clearInterval(timer);}
function Map(atom, xnum, ynum) {
  this.atom = atom;
  this.xnum = xnum;
  this.ynum = ynum;
  this.canvas = null;
  this.create = function () {
    this.canvas = document.createElement("div");
    this.canvas.style.cssText = "border:solid 1px red ;position:relative";
    this.canvas.style.background = "pink";
    this.canvas.style.height = this.atom * this.ynum + "px";
    this.canvas.style.width = this.atom * this.xnum + "px";
    main.appendChild(this.canvas);
    if (showcanvas) {
      for (let y = 0; y < ynum; y++) {
        for (let x = 0; x < xnum; x++) {
          let sq = document.createElement("div");
          sq.style.cssText = "position:absolute;border:1px solid yellow";
          sq.style.width = this.atom + "px";
          sq.style.height = this.atom + "px";
          sq.style.left = x * this.atom + "px";
          sq.style.top = y * this.atom + "px";
          this.canvas.appendChild(sq);
        }
      }
    }
  };
}
function Food() {}
let map = new Map(20, 20, 20);
map.create();
function Food(map) {
  this.width = map.atom;
  this.height = map.atom;
  this.bgcolor =
    "rgb(" +
    Math.floor(Math.random() * 200) +
    "," +
    Math.floor(Math.random() * 200) +
    "," +
    Math.floor(Math.random() * 200) +
    ")";
  this.x = Math.floor(Math.random() * map.xnum);
  this.y = Math.floor(Math.random() * map.ynum);
  this.flag = document.createElement("div");
  this.flag.style.width = this.width + "px";
  this.flag.style.height = this.height + "px";
  this.flag.style.backgroundColor = this.bgcolor;
  this.flag.style.position = "absolute";
  this.flag.style.left = this.x * this.width + "px";
  this.flag.style.top = this.y * this.height + "px";
  map.canvas.appendChild(this.flag);
}
let food = new Food(map);
function Snake(map) {
  this.width = map.atom;
  this.height = map.atom;
  this.direction = "right";
  this.body = [
    { x: 2, y: 0 }, //头
    { x: 1, y: 0 }, //身体
    { x: 0, y: 0 }, //尾
  ];
  //显示蛇
  this.display = function () {
    for (let i = 0; i < this.body.length; i++) {
      if (this.body[i] != null) {
        var s = document.createElement("div");
        this.body[i].flag = s;
        s.style.width = this.width + "px";
        s.style.height = this.height + "px";
        s.style.backgroundColor =
          "rgb(" +
          Math.floor(Math.random() * 200) +
          "," +
          Math.floor(Math.random() * 200) +
          "," +
          Math.floor(Math.random() * 200) +
          ")";
        s.style.position = "absolute";
        s.style.left = this.body[i].x * this.width + "px";
        s.style.top = this.body[i].y * this.height + "px";

        map.canvas.appendChild(s);
      }
    }
  };
  this.run = function () {
    for (let i = this.body.length - 1; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }
    switch (this.direction) {
      case "left":
        this.body[0].x -= 1;
        break;
      case "up":
        this.body[0].y -= 1;
        break;
      case "right":
        this.body[0].x += 1;
        break;
      case "down":
        this.body[0].y += 1;
        break;
    }
    if (this.body[0].x == food.x && this.body[0].y == food.y) {
        num++;
        if(num%2==0){
            var span=document.getElementById('pass')
            
            if(speed<90){
               speed=speed;
               t=t; 
               span.innerHTML="超鬼";
            }
            else {speed-=60;t+=1;span.innerHTML=t;}
           
            star();
          
        }
      this.body.push({ x: null, y: null, flag: null });
      map.canvas.removeChild(food.flag);
      food = new Food(map);
    }
    if (
      this.body[0].x < 0 ||
      this.body[0].x > map.xnum - 1 ||
      this.body[0].y < 0 ||
      this.body[0].y > map.ynum - 1
    ) {
      clearInterval(timer);
      alert("把自己撞死，你是第一个人");
      location.reload();
      return;
    }
    for (let i = 4; i < this.body.length; i++) {
      if (
        this.body[0].x == this.body[i].x &&
        this.body[0].y == this.body[i].y
      ) {
        alert("好蠢哦，把自己咬死了");
        location.reload();
        return;
      }
    }

    // this.body[0].y += 1;
    for (let i = 0; i < this.body.length; i++) {
      if (this.body[i].flag != null) {
        map.canvas.removeChild(this.body[i].flag);
      }
    }
    this.display();
  };
}
var snake = new Snake(map);
snake.display();
window.onkeydown = function (e) {
  let event = e || window.event;
  switch (event.keyCode) {
    case 37:
      if (snake.direction != "right") {
        snake.direction = "left";
      }

      break;
    case 38:
      if (snake.direction != "down") {
        snake.direction = "up";
      }

      break;
    case 39:
      if (snake.direction != "left") {
        snake.direction = "right";
      }

      break;
    case 40:
      if (snake.direction != "up") {
        snake.direction = "down";
      }

      break;
  }
};

var num=0;
var t=1;