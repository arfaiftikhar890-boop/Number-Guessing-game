

 let randomNum =  Math.floor(Math.random() * 100) + 1;
 
let guessInput = document.getElementById('number');
let check = document.getElementById('check');
let result = document.getElementById('result');
let restart = document.getElementById('restart');


check.addEventListener('click', ()=>{
    let guess = Number (guessInput.value);

    if(guess<1 || guess>100){
        result.textContent = "Enter a number between 1 to 100"
        result.style.color = "red";
    }
    else if (guess === randomNum){
    result.textContent = 'Congratulations✨🎊 , you guess it right🎁'
    result.style.color = 'green'
    check.disabled = true;
    restart.style.display = 'block';
}
else{
    result.textContent = guess < randomNum ? 'too low! try again👎' : "too high! try again 👎";
    result.style.color = "orange";
}
     guessInput.value = ""; 
    guessInput.focus();  
   })

    
      restart.addEventListener('click', ()=>{
     randomNum = Math.floor(Math.random() * 100) + 1;
    result.textContent = "";
    check.disabled = false;
    restart.style.display = 'none';
   
    })