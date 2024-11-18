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
                }else{
                document.getElementById("cabeca").style.top="-5";
                document.getElementById("cabeca").style.background ="white";
                }
        }