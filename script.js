//your JS code here. If required.
function numberlo(){

return new Promise((resolve,reject)=>{
// document.getElementById("output")
setTimeout(()=>{
resolve([1,2,3,4])
},3000)
});
}



numberlo()
.then((koi_value_pass_kro)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
const evenNumber= koi_value_pass_kro.filter((pass_the_value)=>pass_the_value % 2 === 0);
document.getElementById("output").textContent =evenNumber.join(", ");
resolve(evenNumber);
},1000)
    })
})

.then((multiply)=>{
return  new Promise((resolve,reject)=>{
setTimeout(()=>{
const multi = evenNumber.map((pass_any_value)=>pass_any_value*2);
document.getElementById("output").textContent=multi.join(", ");
resolve(multi);
},2000)
});
})
.catch((error)=>{
console.log(error);
})