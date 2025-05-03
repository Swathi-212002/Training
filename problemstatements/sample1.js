let n1= 50;
let n2 = 100;
function checkodd(n1,n2){
        for(let i=n1;i<=n2;i++){
            if(i%2 !==0){
                console.log(i);
            }
    }
}
checkodd(n1,n2);

//ckeck odd numbers between 50 to 100 and print upto 70
let n4= 50;
let n5 = 100;
function checkodd(n4,n5){
        for(let i=n4;i<=n5;i++){
            if(i%2 !==0 && i<=70){

                console.log(i);
            }
    }
}
checkodd(n4,n5);



let n;
function days(n){
    if(n==0){
            console.log("sunday");
        }else if(n==1){
            console.log("monday");
        }else if(n==2){
            console.log("tuesday");
        }else if(n==3){
            console.log("wednesday");
        }else if(n==4){
            console.log("thursday");
        }else if(n==5){
            console.log("friday");
        }else if(n==6){
            console.log("saturday");
        }


}days(n=5);



let daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getDay(a) {
    if (a >= 0 && a <= 6
    ) {
        return daysArray[a]; // Directly access the array using the index
    } else {
        return "Invalid input"; // Handles unexpected values
    }
}
let a = 3; // Example input
console.log(getDay(a)); // Output: Wednesday

let Days={0:"sunday",1:"monday",2:"tuesday",3:"wednesday",4:"thursday",5:"friday",6:"saturday"}
console.log(Days[1]);


