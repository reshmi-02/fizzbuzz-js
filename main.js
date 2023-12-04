let arr=[1,2,3,6,5,10,15,30];


for(let i=0;i<arr.length;i++){
    
     if(arr[i]%3==0 && arr[i]%5==0){
        document.write(" Fizzbuzz ")
    }
    else if(arr[i]%3==0){
       document.write(" Fizz ")
    }

    else if(arr[i]%5==0){
        document.write(" Buzz ")
    }
   
    else{
        document.write(arr[i]+" ")
    }
}