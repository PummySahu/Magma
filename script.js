function loco(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
loco();


var clutter = ""
document.querySelector("#page2>h1").textContent.split(" ").forEach(function(dets){
    clutter += `<span> ${dets} </span>`


    document.querySelector("#page2>h1").innerHTML = clutter

})

gsap.to("#page2>h1>span",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page2>h1>span",
    // markers:true,
    start:"top 88%",
    end:"top 30%"

  },
  color:"#fff",
  stagger:.1
})


function canvas(){
const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./frames00007.png
  ./frames00010.png
  ./frames00013.png
  ./frames00016.png
  ./frames00019.png
  ./frames00022.png
  ./frames00025.png
  ./frames00028.png
  ./frames00031.png
  ./frames00034.png
  ./frames00037.png
  ./frames00040.png
  ./frames00043.png
  ./frames00046.png
  ./frames00049.png
  ./frames00052.png
  ./frames00055.png
  ./frames00058.png
  ./frames00061.png
  ./frames00064.png
  ./frames00067.png
  ./frames00070.png
  ./frames00073.png
  ./frames00076.png
  ./frames00079.png
  ./frames00082.png
  ./frames00085.png
  ./frames00088.png
  ./frames00091.png
  ./frames00094.png
  ./frames00097.png
  ./frames00100.png
  ./frames00103.png
  ./frames00106.png
  ./frames00109.png
  ./frames00112.png
  ./frames00115.png
  ./frames00118.png
  ./frames00121.png
  ./frames00124.png
  ./frames00127.png
  ./frames00130.png
  ./frames00133.png
  ./frames00136.png
  ./frames00139.png
  ./frames00142.png
  ./frames00145.png
  ./frames00148.png
  ./frames00151.png
  ./frames00154.png
  ./frames00157.png
  ./frames00160.png
  ./frames00163.png
  ./frames00166.png
  ./frames00169.png
  ./frames00172.png
  ./frames00175.png
  ./frames00178.png
  ./frames00181.png
  ./frames00184.png
  ./frames00187.png
  ./frames00190.png
  ./frames00193.png
  ./frames00196.png
  ./frames00199.png
  ./frames00202.png
 `;
  return data.split("\n")[index];
}

const frameCount = 67;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: .5,
      trigger: `#page3`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

images[1].onload = render;

function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
  
    trigger: "#page3",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
  });
}
  canvas()
  




  var clutter2 = ""
  document.querySelector("#page4>h1").textContent.split(" ").forEach(function(dets2){
      clutter2 += `<span> ${dets2} </span>`
  
  
      document.querySelector("#page4>h1").innerHTML = clutter2
  
  })
  

gsap.to("#page4>h1>span",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page4>h1>span",
    // markers:true,
    start:"top 88%",
    end:"top 30%"

  },
  color:"#fff",
  stagger:.1
})


  function canvas2(){
    const canvas = document.querySelector("#page5>canvas");
    const context = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    
    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });
    
    function files(index) {
      var data = `
      ./bridges00004.png
      ./bridges00007.png
      ./bridges00010.png
      ./bridges00013.png
      ./bridges00016.png
      ./bridges00019.png
      ./bridges00022.png
      ./bridges00025.png
      ./bridges00028.png
      ./bridges00031.png
      ./bridges00034.png
      ./bridges00037.png
      ./bridges00040.png
      ./bridges00043.png
      ./bridges00046.png
      ./bridges00049.png
      ./bridges00052.png
      ./bridges00055.png
      ./bridges00058.png
      ./bridges00061.png
      ./bridges00064.png
      ./bridges00067.png
      ./bridges00070.png
      ./bridges00073.png
      ./bridges00076.png
      ./bridges00079.png
      ./bridges00082.png
      ./bridges00085.png
      ./bridges00088.png
      ./bridges00091.png
      ./bridges00094.png
      ./bridges00097.png
      ./bridges00100.png
      ./bridges00103.png
      ./bridges00106.png
      ./bridges00109.png
      ./bridges00112.png
      ./bridges00115.png
      ./bridges00118.png
      ./bridges00121.png
      ./bridges00124.png
      ./bridges00127.png
      ./bridges00130.png
      ./bridges00133.png
      ./bridges00136.png
      ./bridges00139.png
      ./bridges00142.png
      ./bridges00145.png
      ./bridges00148.png
      ./bridges00151.png
      ./bridges00154.png
      ./bridges00157.png
      ./bridges00160.png
      ./bridges00163.png
      `;
      return data.split("\n")[index];
    }
    
    const frameCount = 55;
    
    const images = [];
    const imageSeq = {
      frame: 1,
    };
    
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }
    
    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
          scrub: .5,
          trigger: `#page5`,
          start: `top top`,
          end: `250% top`,
          scroller: `#main`,
        },
        onUpdate: render,
      });
    
    images[1].onload = render;
    
    function render() {
        scaleImage(images[imageSeq.frame], context);
      }
      
      function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
        );
      }
      ScrollTrigger.create({
      
        trigger: "#page5",
        pin: true,
        scroller: `#main`,
        start: `top top`,
        end: `250% top`,
      });
    }
      canvas2()


var clutter3 = ""
document.querySelector("#page6>h1").textContent.split(" ").forEach(function(dets3){
    clutter3 += `<span> ${dets3} </span>`
      
    document.querySelector("#page6>h1").innerHTML = clutter3
      
})
      

gsap.to("#page6>h1>span",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page6>h1>span",
    // markers:true,
    start:"top 88%",
    end:"top 30%"

  },
  color:"#fff",
  stagger:.1
})


document.querySelectorAll("#page10-left>#topics>.topic").forEach(function(blah){
  gsap.to(blah,{
    scrollTrigger:{
      trigger:blah,
      scroller:"#main",
      start:"top 50%",
      end:"start 30%",
      // markers:true,
      scrub:1
    },
    opacity:1
  })
})



document.querySelectorAll("#page10-right>img").forEach(function(blah){
  gsap.to(blah,{
    scrollTrigger:{
      trigger:blah,
      scroller:"#main",
      start:"top 50%",
      end:"start 30%",
      // markers:true,
      scrub:1
    },
    opacity:1
  })
})



document.querySelector("#box1").addEventListener("mousemove",function(){
  document.querySelector("#box-img1>img").style.scale = 1.1
})

document.querySelector("#box1").addEventListener("mouseleave",function(){
  document.querySelector("#box-img1>img").style.scale = 1
})


document.querySelector("#box2").addEventListener("mousemove",function(){
  document.querySelector("#box-img2>img").style.scale = 1.1
})

document.querySelector("#box2").addEventListener("mouseleave",function(){
  document.querySelector("#box-img2>img").style.scale = 1
})



document.querySelector("#box3").addEventListener("mousemove",function(){
  document.querySelector("#box-img3>img").style.scale = 1.1
})

document.querySelector("#box3").addEventListener("mouseleave",function(){
  document.querySelector("#box-img3>img").style.scale = 1
})



gsap.to("#fixed>i",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#fixed>i",
    // markers:true,
    start:"top -1680%",
    end:"top -1890%",
    scrub:1
  },
  color:"rgb(78, 78, 227)"
})
gsap.to("#fixed>i",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#fixed>i",
    // markers:true,
    start:"top -1895%",
    end:"top -1970%",
    scrub:1
  },
  color:"white"
})

gsap.to("#fixed",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#fixed",
    // markers:true,
    start:"top -1980%",
    end:"top 2000%",
    scrub:1,
  },
  border: "1px solid rgb(154, 154, 154)"
})

gsap.to("#page9>#page9-left>h1",{
  scrollTrigger:{
    trigger:"#page9>#page9-left>h1",
    scroller:"#main",
    start:"top 85%",
    end:"bottom top",

  },
  y:"10%",
  opacity:1,
})




var main = document.querySelector("#main")
document.querySelectorAll("#page9-right>h3").forEach(function(head3){
  gsap.to(head3,{
    scrollTrigger:{
      trigger:head3,
      scroller:main,
      start:"top 88%",
      end:"top 60%",
    },
    x:"-3%",
    opacity:1,
  })
  
})

gsap.to("#page10-left>h1",{
  scrollTrigger:{
    trigger:"#page10-left>h1",
    scroller:"#main",
    start:"top 88%",
    end:"top 70%",
    scrub:1,

  },
  rotate: "0deg",
  opacity:1,
})

gsap.to("#page11>#recent>h1",{
  scrollTrigger:{
    trigger:"#page11>#recent>h1",
    scroller:"#main",
    start:"top 88%",
    end:"top 70%",
    scrub:1,

  },
  rotate: "0deg",
  opacity:1,
})

gsap.to("#feature>h1",{
  scrollTrigger:{
    trigger:"#feature>h1",
    scroller:"#main",
    start:"top 88%",
    end:"top 60%",
    scrub:1,

  },
  rotate: "0deg",
  opacity:1,
})

gsap.to("#page11>button",{
  scrollTrigger:{
    trigger:"#page11>button",
    scroller:"#main",
    start:"top 85%",
    end:"top 60%",
  },
  y:"-30%",
  opacity:1,
})


gsap.to("#feature>h4",{
  scrollTrigger:{
    trigger:"#feature>h4",
    scroller:"#main",
    start:"top 88%",
    end:"top 60%",
  },
  opacity:1,
})


gsap.from("#page1>nav>img",{
  y:"-100%",
  opacity:0,
  duration:1.5,
  delay:1.5
})
gsap.from("#page1>nav>#book",{
  y:"-100%",
  opacity:0,
  duration:1.5,
  delay:1.5
})


gsap.from("#fixed",{
  y:"-200%",
  opacity:0,
  duration:2,
  delay:1.5
})

gsap.to("#firstbut",{
  opacity:1,
  duration:1.5,
  delay:4.6
})
