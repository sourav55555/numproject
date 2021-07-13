const output= document.getElementById('output');
var fir_numt= document.getElementById('1stnum');
const fir_input= document.getElementById('1st-input');
var sec_numt= document.getElementById('2ndnum');
const sou_output= document.getElementById('sou-output');

const sub_btn= document.getElementById('submit-btn');

const getOutput= async(event)=>{
    event.preventDefault();
    
    var fir_numtVal= fir_numt.options[fir_numt.selectedIndex].value;
    let fir_inputVal= fir_input.value;
    var sec_numtVal= sec_numt.options[sec_numt.selectedIndex].value;
    
    if(fir_inputVal==""){
        sou_output.innerText="Please enter the require number first.";
    }
    else if(fir_numtVal==""){
        sou_output.innerText="Select the number type";
    }
    else if(sec_numtVal==""){
        sou_output.innerText="Select the number type";
    }
    else if(fir_numtVal==sec_numtVal){
       sou_output.innerText=fir_inputVal;
    }
    else{
        try{
            let url=`HTTPS://hexabin.herokuapp.com/api/${fir_numtVal}/${fir_inputVal}/convert/${sec_numtVal}`;
           const response= await fetch(url);
           const data= await response.json();
           const arrData= [data];
           
           
           if(arrData[0].error==false){
            sou_output.innerText= arrData[0].result;
           }
           else(
               sou_output.innerText= "Input number is not valid."
           )
        }
        catch{
            sou_output.innerText="There is an error";
        }
    }
}

sub_btn.addEventListener("click", getOutput);