/*
    Name       Lovish Sekhri 
    Student ID : 100767562
    This is an Animated intro for the upcoming portfolio development.
*/

window.onload = function () {
    // reference the svg
    let myObj = document.getElementById('obj').contentDocument;
    let lovish = myObj.getElementById('lovish');
    let rectLeft=myObj.getElementById('rectLeft');
    let rectRight=myObj.getElementById('rectRight');
    let displayText=document.getElementById("displayText")
    let words = ["Lovish.","a Designer","a Developer.","a Pioneer."]
    //gsap

    gsap.from(rectLeft,{
        x:"-1200px",
        duration:1
    });
    gsap.from("#button",{
        opacity:0,
        delay:4
    })
    gsap.from(rectRight,{
        x:"1200px",
        delay:1,
        duration:1
    });
    gsap.fromTo(lovish,{
        transformOrigin:"center center",
        opacity:0,
        delay:2,
        duration:2,
        scale:0
    },{
        scale:0.65,
        opacity:1,
        delay:2,
        duration:2,
    })
    gsap.from(displayText,{
        opacity:0,
        delay:3
    })
    gsap.fromTo(".underscore",{
        opacity:1,
        ease:"power2.inOut",
        repeat:-1,
    },{
        opacity:0,
        ease:"power2.inOut",
        repeat:-1,
    })
    let boxTl = gsap.timeline()
    
    boxTl.from(".box",{
        duration:1,
        width:"1.2vh",
        delay:3.5,
        ease:"power2.inOut"
    })
    .from(".hi",{
        duration:1,
        y:"11vw",
        ease:"power3.out",
        onComplete: () => majorTl.play()
    })
    let majorTl = gsap.timeline({repeat:-1}).pause()

    words.forEach(word => {
        let tl = gsap.timeline({repeat:1, yoyo:true, repeatDelay:1.5})
        tl.to(".text",{
            duration:1,
            text:word,
            css:{color:"#000"}
        })
        majorTl.add(tl)
    })
    let buttonHover = gsap.to("#button",{
        scaleX:1.12, 
        scaleY:1.12, 
        scaleZ:1.5,
        color: "white",
        backgroundColor:"black",
        duration: 0.2,
        paused: true,
        ease: "ease-in-out"
    })
    let button = document.getElementById("button");
        button.addEventListener("mouseenter",()=>buttonHover.play());
        button.addEventListener("mouseleave",()=>buttonHover.reverse());
        button.addEventListener("onscroll",animateExit())

        header = document.getElementById("header");




    // reference specific target

    // register GSAP MotionPath Plugin
    gsap.registerPlugin(MotionPathPlugin);
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);

}