// Make M+, M-, MC, functionl;
let string="";
let memory=0;
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        // console.log(e.target); // console mai check krne ke liye ...agr koi bhi button per click krenge toh conse mai dikhega

        if(e.target.innerHTML=='='){
            try{
            string=eval(string);
            document.querySelector('input').value=string;
            }catch{
                document.querySelector('input').value="Error";
            }
        }
        else if(e.target.innerHTML=='C'){
            string="";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='X'){
            string=string.slice(0,-1);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='M+'){
            try {
                memory += Number(eval(string));
                console.log("Memory =", memory);
            } catch {}
        }
        else if(e.target.innerHTML=='M-'){
            try {
                memory -= Number(eval(string));
                console.log("Memory =", memory);
            } catch {}
        }
        else{
        string+=e.target.innerHTML;
        document.querySelector('input').value=string;
        }
    })
})