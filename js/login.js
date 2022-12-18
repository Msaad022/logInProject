var nameUser = document.querySelector("#name-user");

window.onload = function () {

    let getName = sessionStorage.getItem('_login') 
    
    if(getName){
      
      nameUser.querySelector("p").innerText = getName
      nameUser.style.display = 'flex';
  
      nameUser.querySelector("span").addEventListener("click" ,function (){
        
        sessionStorage.removeItem("_login")
        location.reload(); 
  
      })
  
    }else{
      nameUser.style.display = 'none';
    }
  
  }
  