var a=prompt("Enter the password");
document.write("The given password is "+a+"<br>");
var c=[];
var b=a.split("");
console.log(b);
for(let i=0;i<a.length;i++){
    if(b[i]==" "){
        document.write("The password is not accepted because it has space");
        c.push(b[i]);
    }
    
}
if(c!=" "){
    document.write("The password is correct");
}