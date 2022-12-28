let input=document.getElementById("input");

function addme(data){
   input.value+=data;
}
function ans(){
   let result=eval(input.value);
   input.value=result;
}
function reset(){
   input.value="";
}