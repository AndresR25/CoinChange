
 function coinChange(Cents){

    var result = {};
    
     while(Cents !=0){
         if (Cents>=100){
         result['dollars'] = Math.floor(Cents/100);
         Cents = Cents%100;
         }else if (Cents >=25){
             result['quarters'] = Math.floor(Cents/25);
             Cents = Cents%25;
         }else if (Cents>=10){
             result['dimes'] = Math.floor(Cents/10);
             Cents = Cents%10;
         }else if(Cents >=5){
             result['nickles'] = Math.floor(Cents/5);
             Cents = Cents%5;
         }else{
             result['pennies'] = Cents;
             Cents=0;
         }
     }
     return result;
    }

 console.log(coinChange(312));
 console.log(coinChange(78));
