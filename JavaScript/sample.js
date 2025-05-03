let data = [1,2,3,4,5,6,7,8,9,10,12];
let res=[];
        data.forEach((number,index) => {
            if (number % 2 == 0) {
                res.push(number)
            }
        });
        console.log(res);
        let a= data.filter((number) => {
            if (number % 2 !== 0) {
                return number
            }
        });

        let b= data.filter((number) => {
            if(number % 2 == 0) 
                return number;
        });
        console.log('b',b);
        //console.log(a);
        let res1 = data.find((number) => {
            if (number % 2 !== 0) {
                return number
            }
        });
        console.log(res1);
        

        


