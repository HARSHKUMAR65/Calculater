let string="";                                          // create empty string
let buttons=document.querySelectorAll('.button');       // create button  which featch all class name is buttons 
Array.from(buttons).forEach((button)=>{                 // create array from these buttons & apply foreach on it
    button.addEventListener('click',(e)=>{              //name eventlistner as click

        if(e.target.innerHTML == '='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if (e.target.innerHTML=='C'){
            string=""
            document.querySelector('input').value=string;
        }
        else{
            console.log(e.target)
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})
