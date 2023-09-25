function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init()
var menuicon = document.querySelector("#menu");
var cut = document.querySelector("#cut");
var navlinks = document.querySelector(".nav-links");


menuicon.addEventListener("click",function(){
   navlinks.style.right= 0;
})
cut.addEventListener("click",function(){
    navlinks.style.right = "-100%";
})

gsap.from("#heading h1", {
  y: 100,
  opacity: 0,
  delay:1,
  scrub: 3
})
gsap.to("#fimg img", {
  y:"-20%",
  scrollTrigger: {
    trigger: "#fimg img",
    scroller: "#main",
    // markers:true,
    start: "top 30%",
    end: "top -20%",
    scrub:4,
    // pin: true
  }
})
gsap.to("#simg img", {
  y:"20%",
  scrollTrigger: {
    trigger: "#simg img",
    scroller: "#main",
    // markers:true,
    start: "top 50%",
    end: "top -20%",
    scrub:3,
    // pin: true
  }
})
gsap.to("#man img", {
  y:"-20%",

  scrollTrigger: {
    trigger: "#man img",
    scroller: "#main",
    // markers:true,
    start: "top 50%",
    end: "top 0%",
    scrub:3,
    // pin: true
  }
})
gsap.to("#icon img", {
  y:"-20%",
  scrollTrigger: {
    trigger: "#icon img",
    scroller: "#main",
    // markers:true,
    start: "top 85%",
    end: "top 0%",
    scrub:3,
    // pin: true
  }
})
gsap.to("#page5 img", {
  y:"-20%",
  scrollTrigger: {
    trigger: "#page5 img",
    scroller: "#main",
    // markers:true,
    start: "top 50%",
    end: "top -100%",
    scrub:5,
    // pin: true
  }
})
gsap.to("#imgs img", {
  y:"-20%",
  scrollTrigger: {
    trigger: "#imgs img",
    scroller: "#main",
    // markers:true,
    start: "top 50%",
    end: "top -80%",
    scrub:5,
    // pin: true
  }
})
gsap.to("#miximage img", {
  y:"-20%",
  scrollTrigger: {
    trigger: "#miximage img",
    scroller: "#main",
    // markers:true,
    start: "top 50%",
    end: "top -100%",
    scrub:5,
    // pin: true
  }
})
gsap.to("#page8 img", {
  y:"-20%",
  scrollTrigger: {
    trigger: "#page8 img",
    scroller: "#main",
    // markers:true,
    start: "top 50%",
    end: "top -100%",
    scrub:5,
    // pin: true
  }
})
gsap.from("#history h1", {
  y: 100,
  opacity: 0,
  stagger: 1,
  scrollTrigger: {
    trigger: "#history",
    scroller: "#main",
    // markers: true,
    start: "top 70%",
    end: "top 40%",
    scrub: 3
  }
})
gsap.from("#page2head h1", {
  // rotate: 5,
  y: 100,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#page2head h1",
    scroller: "#main",
    // markers: true,
    start: "top 90%",
    end: "top 80%",
    scrub: 3,
  }
})

var heading = document.querySelector("#heading")
heading.addEventListener("mouseenter",function(){
  cur.style.scale = 6
  cur.style.backgroundColor = "#cc9f75"
  
})
heading.addEventListener("mouseleave",function(){
  cur.style.scale = 1
  cur.style.backgroundColor = "transparent"
})


var image = document.querySelector("#images")
image.addEventListener("mouseenter",function(){
  cur.style.scale = 6
  cur.innerHTML = "DRAG"
  cur.style.backgroundColor = "#cc9f75"
  
})
image.addEventListener("mouseleave",function(){
  cur.style.scale = 1
  cur.innerHTML = ""
  cur.style.backgroundColor = "transparent"
})

gsap.from("#para", {
  y: 100,
  opacity: 0,
  stagger: 1,
  scrollTrigger: {
    trigger: "#para",
    scroller: "#main",
    // markers: true,
    start: "top 70%",
    end: "top 40%",
    // scrub: 3
  }
})

gsap.from("#upper", {
  y: 90,
  opacity: 0,
  stagger: 1,
  scrollTrigger: {
    trigger: "#upper",
    scroller: "#main",
    // markers: true,
    start: "top 80%",
    end: "top 50%",
    // scrub: 3
  }
})

gsap.from("#service", {
  y: -80,
  opacity: 1,
  stagger: 1,
  scrollTrigger: {
    trigger: "#service",
    scroller: "#main",
    // markers: true,
    start: "top 80%",
    end: "top 50%",
    // scrub: 3
  }
})



