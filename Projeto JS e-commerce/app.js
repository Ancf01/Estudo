var sideBar ="none";

function abrir(){
    
    if(sideBar=== "block"){
        sideBar = "none"
    } else if (sideBar === "none"){
        sideBar = "block"
    }
    document.getElementById("side-bar").style.display = sideBar;
}


window.onscroll = function(){navRolagem()};

            function navRolagem(){
                
                if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
                    document.getElementById("cabeca").style.top = "0px";
                    
                    document.getElementById("cabeca").style.background = "rgba(180, 180, 180, 0.2)";

                    document.getElementById("bar-L").style.top = "0px";
                    
                    document.getElementById("bar-L").style.background = "rgba(180, 180, 180, 0.2)";
                }else{
                document.getElementById("cabeca").style.top="-5";
                document.getElementById("cabeca").style.background ="white";

                document.getElementById("bar-L").style.top="-5";
                document.getElementById("bar-L").style.background ="white";
                }
            }
            
            slideIndex = 1;

            mostrarSlides(slideIndex);
            
            function correrSlide(n){
                mostrarSlides(slideIndex = n);
            }
            
                function mostrarSlides(n){
                    document.getElementsByClassName("carrosel");
            
                    document.getElementsByClassName("dot");
            
                    for (i = 0; i < slides.length; i++)
                        {slides[i].style.display="none";}
                                        
            
                    for (i = 0; i < carrousel.length; i++){carrousel[i].className = carrousel[i].className.replace( "active", "");
            
                    }
            
                    slides[n-1].style.display="block";
                    carrousel[n-1].className += "active";
            
                }



          
        