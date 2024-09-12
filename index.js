// 1st question
let arry =[2,7,8,8,]
emp =[],uni=" ",dup =" "
for(i of arry){
    if(!emp.includes(i)){
        emp.push(i)
    }
}
console.log(emp)
for(i of emp){
    c=0
    for(j of arry){
        if(i==j){
            c++
        }
        
    }
   console.log(i+"->"+c);
}



// 2nd question


let array =[1,2,1,4]
emp =[],uni=" ",dup =" "
for(i of array){
    if(!emp.includes(i)){
        emp.push(i)
    }
}

for(i of emp){
    c=0
    for(j of array){
        if(i==j){
            c++
        }
        
    }
    if(c==1){
        uni=uni+i+" "
    }
    else{
        dup+=i+" "
    }
}
console.log("uniques are:"+uni)
console.log("duplicates are:"+dup)