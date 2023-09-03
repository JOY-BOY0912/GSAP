
var tl = gsap.timeline()

tl.from("#watchex",{
    y:-80,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.2
})

tl.from(" #nav li , #nav hr",{
    x:100,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.2
})

tl.from("#content h1, #content p , #content .btn , #content .btn1 , .brand-items" , {
    x:-100,
    opacity:0,
    stagger:0.2,
})

gsap.from("#watcheximg",{
    x:100,
    duration:0.5,
    opacity:0,
    scale:0,
    delay:3
})

tl.from("#buy-now",{
    scale:0,
    opacity:0
})

tl.to("#buy-now",{
    scale:1.3,
    duration:1,
    repeat:-1,
    yoyo:true,
})

tl.from("#page2",{
    y:-80,
    opacity:0,
    duration:0.5,
})

gsap.from("#best",{
    y:-80,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#best",
        scroll:"body",
        start:"top 50%",
        end:"top 40%",
        scrub:3,
    }
})

gsap.from(".box p",{
    x:-100,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:".box p",
        scroll:"body",
        duration:3,
        delay:0.5,
        //markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:5,
    }
})

gsap.from(".footer a ,.gmail",{
    y:50,
    opacity:0,
    duration:2,
    delay:0.5,
    scrollTrigger:{
        trigger:".footer a",
        scroll:"body",
        duration:5,
        delay:0.5,
        //markers:true,
        start:"top 115%",
        end:"top 80%",
        scrub:2,
    }

})