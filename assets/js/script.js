let input               = document.querySelector('.input')
let button              = document.querySelector('.button')
let fuhadShiblu_result  = document.querySelector('.fuhadShiblu_result')

button.addEventListener('click' , (e)=>{
    e.preventDefault()
    if(input.value == ''){
        alert('Please enter a number')
    }else{
        if(input.value < 1){
            alert('Please enter a number within 1-1000')
        }else{
            if(input.value > 1000){
                alert('Please enter a number within 1-1000')
            }else{
                fuhadShiblu_result.innerHTML = ''
                    for(let i = 1 ; i < 11 ; i++){
                        fuhadShiblu_result.innerHTML += input.value  + ' x ' + i + ' = ' + input.value*i + '<br>'
                    }
                    input.value = ''
            }
        }
    }
})