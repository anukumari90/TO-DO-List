const input=document.querySelector("#inp");
const btn=document.querySelector("#btn");
const list=document.querySelector(".list")

btn.addEventListener("click",()=>{
    if(input.value===''){
        alert("type somthing");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
        // let checkbox=document.createElement("input");
        // checkbox.type="checkbox";
        // li.appendChild(checkbox)
 
    }
    input.value=''
})
list.addEventListener("click",function (e){
    
       if(e.target.tagName=="LI"){
           e.target.classList.toggle("checked")
      }
      else if(e.target.tagName==="SPAN"){
          e.target.parentElement.remove()
      }
        
})