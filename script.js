// Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Magnetic buttons
document.querySelectorAll(".btn").forEach(btn=>{
  btn.addEventListener("mousemove",(e)=>{
    const rect=btn.getBoundingClientRect();
    const x=e.clientX-rect.left-rect.width/2;
    const y=e.clientY-rect.top-rect.height/2;
    btn.style.transform=`translate(${x*0.2}px,${y*0.2}px)`;
  });
  btn.addEventListener("mouseleave",()=>{
    btn.style.transform="translate(0,0)";
  });
});

// Particles
particlesJS("particles-js",{
  particles:{
    number:{value:50},
    move:{speed:1},
    line_linked:{enable:true,color:"#38bdf8"}
  }
});