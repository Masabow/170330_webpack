import {Bounce, Cubic} from 'gsap/EasePack';
import TimelineMax from 'gsap/TimelineMax';
import TweenMax from 'gsap/TweenMax';

// 適当に要素をたくさん用意する
const rects = [];
for (let i = 0; i < 50; i++) {
  const rect = document.createElement('div');
  rect.className = 'rect';
  rect.style.left = `calc(100vw * ${Math.random()})`;
  rect.style.top = `-100px`;
  rect.style.transform = `rotateZ(${Math.random() * 360}deg)`;
  document.body.appendChild(rect);
  rects.push(rect);
}

// タイムラインを作成する
const tl = new TimelineMax({repeat: -1, yoyo: true});
rects.forEach((rect, index) => {
  // トゥイーンインスタンスを追加する
  tl.add(TweenMax.to(rect, 3, {
    y: window.innerHeight * 3 / 4,
    rotationZ: 0,
    ease: Bounce.easeOut,
    delay: index * 0.02
  }), 0);
});

