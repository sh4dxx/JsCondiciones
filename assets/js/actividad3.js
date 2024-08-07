
let button = document.querySelector("input");
let parrafoMessage = document.getElementById("act3-message");
let spanIcon = document.getElementById("act3-icon");

button.addEventListener("click", () => {
    
    let selectOne = document.getElementById("select1").value;
    let selectTwo = document.getElementById("select2").value;
    let selectThree = document.getElementById("select3").value;

    let message;
    let icon;
    let isSuccess = true;
    const password = selectOne + selectTwo + selectThree;

    if(password==911){
      message = 'password 1 correcto';
    } else if (password == 714) {
      message = 'password 2 correcto';
    } else {
      message ='password incorrecto';
      isSuccess = false;
    }
    
    if(isSuccess){
      icon = '<span class="success"><i class="fa-solid fa-check"></i></span>';
      parrafoMessage.classList.remove('error');
      parrafoMessage.classList.add('success');
    } else {
      icon = '<span class="error"><i class="fa-solid fa-xmark"></i></span>';
      parrafoMessage.classList.remove('success');
      parrafoMessage.classList.add('error');
    }
    
    parrafoMessage.innerHTML = message;
    spanIcon.innerHTML = icon;

});