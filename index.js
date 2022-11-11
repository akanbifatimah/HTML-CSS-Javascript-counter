let counter = 0;
const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn')

buttons.forEach((function(btn){
    btn.addEventListener('click', function(e){
        const classStyles=e.currentTarget.classList
        if(classStyles.contains('decrement')){
            counter--
        }
        else if(classStyles.contains('increment')){
            counter++
        }
        else{
            counter =0
        }
        value.textContent =counter;
        if(counter > 0){
            value.style.color= "#89cff0"
        }
        if(counter < 0){
            value.style.color = '#ff0000'
        }
        if(counter === 0){
            value.style.color = '#222'
        }
    })
    
}))