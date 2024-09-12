<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <script>
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
    </script>
</body>
</html>