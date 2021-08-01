 namearray=[];
 function submit1(){
 for (i=1; i<=4; i++){
    var firstvar=document.getElementById("name_of_the_student_"+i).value;
    namearray.push(firstvar)
 }
 namearray2=[];
 for(j=0; j<namearray.length; j++){
     namearray2.push("<h4>name-  "+namearray[j]+"</h4>")
 }
 
 
 document.getElementById("display_name_with_commas").innerHTML=namearray2;
    
 var removecomma=namearray2.join(" ");
 document.getElementById("display_name_without_commas").innerHTML=removecomma;
}
function sort()