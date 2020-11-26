var i;
var a=[10,60,50,15,20];
var b=[0,0,0,0,0];
var n=2;
var sum=0;

for(i=0;i<5;i++)
{
    if(a[i]<=50){
         n=Math.floor(n/2);
         
        
        
    }
    else if(a[i]>50) {
       n= Math.floor(2*n+1);
      
    }
    else if(n==0)
    {
       n=n+1
    }
  
    
}

if(n==0)
{
n=n+1
console.log(n)
}
else{
console.log(n);
}
 
