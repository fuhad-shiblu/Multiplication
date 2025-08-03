const fuhadShiblu_inputDom      = document.querySelector('.fuhadShiblu_input');
const fuhadShiblu_buttonDom     = document.querySelector('.fuhadShiblu_button');
const fuhadShiblu_multiplyDDom  = document.querySelector('.fuhadShiblu_multiply');
const fuhadShiblu_errDom        = document.querySelector('.fuhadShiblu_err');

fuhadShiblu_buttonDom.addEventListener('click' , (e)=>{
    e.preventDefault()
    if(fuhadShiblu_inputDom.value == ''){
        fuhadShiblu_errDom.innerHTML = 'Pease enter a value'
    }else{
        fuhadShiblu_multiplyDDom.innerHTML = ''
        for(let c = 1 ; c < 11 ; c++){
            fuhadShiblu_multiplyDDom.innerHTML += fuhadShiblu_inputDom.value + ' X ' + c + ' = ' + fuhadShiblu_inputDom.value*c + '<br>'
        }
        fuhadShiblu_inputDom.value = ''
    }
})