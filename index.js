window.addEventListener('load', ()=>{
  const sounds=document.querySelectorAll(".sound");
  const pads=document.querySelectorAll(".pads div");

  alert("test")
  if('serviceWorker' in navigator){
    try {
      navigator.serviceWorker.register('serviceWorker.js');
      console.log("Service Worker Registered");
    } catch (error) {
      console.log("Service Worker Registration Failed");
    }
  }

  pads.forEach((pad,index) => {
    pad.addEventListener('click', ()=> {
      // sounds[index].currentTime = 0;
      // sounds[index].play();
      // for(i=1;i<=10;i++){
      //   f1(index);
      // }
      timerId = setInterval(f1(index), 1000);

  
    });
    
    function f1(index){
 

      sounds[index].currentTime = 0;
      sounds[index].play();

      //alert(i)
    }

  });

});



