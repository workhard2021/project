
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
     
      if (this.hash !== "") {
      
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
       
      } 
    
    });
    

  });


//   const checked=document.getElementById("checked");
//   const sub_menu=document.querySelectorAll(".sub-menu");
//   const  checked_menu=document.getElementById("checked_menu");
//   checked_menu.addEventListener("click",()=>{
//       if(checked.checked){
//            sub_menu[0].style.display="none"
//       }else{
         
//       }
     
//   })