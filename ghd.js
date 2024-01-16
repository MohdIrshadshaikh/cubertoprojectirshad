
function mainname(){
    setTimeout(() => {
        gsap.from(".we,.dev,#digital,#scartch",{
          y:100,
         
          duration:1,
        })
        
    }, 2600);

}
mainname();

function page3(){

    gsap.from(".page3 .right1,.right2 button",{
    scale:0,
      duration:1,
      delay:0.2,
     
      opacity:0,
      scrollTrigger:{
        trigger:".page3 .right1",
        scroller:"body"
      }
    })
}
page3();
function feau(){
    gsap.from(".page4 .feau,.page4 h2,.page4 .video2 video",{
        x:-100,
        duration:1,
        opacity:0,
    
        scrollTrigger:{
            trigger:".page4 .feau",
            scroller:"body",
            start:"top 50%",
        }
    })

}
feau();

function page6(){

    gsap.from(".page6 .deve,.page6 h5,.page6 h3",{
        x:-1000,
        duration:1.1,
        stagger:0.6,
        opacity:0,
        scrollTrigger:{
            trigger:".page6 .deve,.page6 h5,.page6 h3",
            scroller:"body"
        }
    
    
    })
}
page6();
function social(){

    gsap.from(".page7 .instagram h1",{
        y:100,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".page7 .instagram h1",
            scroller:"body",
            start:"top 65%",
       
        }
    })
}
social();
function social2(){
    gsap.from(".socialdetail .right00,.socialdetail .left00",{
        y:100,
        duration:1,
        opacity:0,
       
        scrollTrigger:{
            trigger:".socialdetail .right00,.socialdetail .left00",
            scroller:"body",
            start:"top 76%",
       
       
        }
    })

}
social2();
function footer(){
    
    gsap.from(".foootervideo .have,.foootervideo .an,.foootervideo .tell",{
        y:500,
        duration:1,
        stagger:1,
        opacity:0,
        scrollTrigger:{
                trigger:".foootervideo .have,.foootervideo .an,.foootervideo .tell",
                scroller:"body",
            
     
           
           
            
        }
    
    })
}
footer();
function timeload(){

    var t = gsap.timeline()
    t.from(".loader h3",{
        x:40,
        opacity:0,
        duration:1,
        stragger:0.3,
    })
    t.to(".loader h3",{
        opacity:0,
        x:-40,
        duration:1,
        stagger:0.1,
    
    })
    t.to(".loader",{
    opacity:0
    })
    t.to(".loader",{
        display:"none"
    })
    
    
    
    

}    
timeload();










