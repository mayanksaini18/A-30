gsap.to(".box1",{
    x:1200,
    duration :5,
    rotate :360,
    backgroundColor :"blue",
    ease :"power3.out",
    radius :"5 0%",
    scale:"1.1"
});

gsap.from(".box2", { opacity: 0, y: 500 ,duration : 5 });

gsap.fromTo(".box3 ",
 {x:-200},
 {x:200 , duration: 4}
);

gsap.from("h1",{
    opacity:0,
    duration:1,
    y:50,
    delay:1,
    stagger:0.7,
})

const tl = gsap.timeline();

tl.to(".box", { x: 200 , duration:1 , radius:"50%" , backgroundColor:"green" , scale:0.5 })
  .to(".box", { y: 10 , backgroundColor:"blue" })
  .to(".box", { rotation: 360  , backgroundColor:"yellow" , scale:1});

gsap.registerPlugin(ScrollTrigger);


