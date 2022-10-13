var description=document.querySelector("#desc");
var price=document.querySelector("#amount");
var unitper=document.querySelector("#units");
var submitt=document.querySelector("#sub1");
var table1=document.querySelector("#tbr");
var maket=document.querySelector('#total');
var array=[];
var html="";
var dp=[];
var alltotal=[];
var number=1;

submitt.addEventListener('click',()=>{
    let total=0     
    total=parseInt(unitper.value)*parseInt(price.value); 
    html=`<tr id=${description.value.trim()}><td>${number}</td><td>${description.value}</td><td>${price.value}</td><td>${unitper.value}</td><td>${total}</td></tr>`   ;
    if (dp.indexOf(description.value.trim())==-1){    
        number+=1
    }   
   
    if (dp.indexOf(description.value.trim())==-1){
    table1.innerHTML+=html;
    dp.push(description.value.trim())
    alltotal.push(total)
    }
    else{
        let newtotal=parseInt(unitper.value)*parseInt(price.value);
        number=dp.indexOf(description.value)+1      
        alltotal[dp.indexOf(description.value)]=newtotal ;      
        document.getElementById(description.value.trim()).innerHTML=`<td>${number}</td><td>${description.value}</td><td>${price.value}</td><td>${unitper.value}</td><td>${total}</td>`
       console.log(newtotal)
    }

});
var totalall=[]
maket.addEventListener('click',()=>{   
   totalall.push( alltotal.reduce(function(a,b){
    return a+b
   },0))
   if (totalall.length==1){
    document.getElementById("gtotal").innerHTML+=`<div ><span id="total0">TOTAL</span><span id="total1">${totalall[0]}</span></div>`
   }
   else if (totalall.length>1){
    document.getElementById("total1").innerText=totalall[totalall.length-1];
   }
})
 console.log(alltotal)
