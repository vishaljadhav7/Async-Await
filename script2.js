
  function run1st (whichAsync){
    for(let idx = 0 ; idx < 10000 ; idx++){
      console.log(whichAsync);
    }
  }

  
  function run2nd (whichAsync){
    for(let idx = 0 ; idx < 1000 ; idx++){
      console.log(whichAsync);
    }
  }

 const p1 =  new Promise( function (resolve,reject){ 
     setTimeout(()=>{
         resolve("promise p1 got resolved")
     },10000)
   })

 const p2 =  new Promise( function (resolve,reject){ 
       setTimeout(()=>{
         resolve("promise p2 got resolved")
       },5000)
     })


 const p3 =  new Promise( function (resolve,reject){ 
      setTimeout(()=>{
        resolve("promise p3 got resolved")
      },3000)
    })
 const p4 =  new Promise( function (resolve,reject){ 
     setTimeout(()=>{
           resolve("promise p4 got resolved")
         },2000)
       })

// // console.log( "these are the promise before consumed using await", p1 ,  p2 , p3 , p4 )


// console.log("promise p1" , p1)
// console.log("promise p2" , p2)
// console.log("promise p3" , p3)
// console.log("promise p4" , p4)

 async function getData(){
    let val3 = await p3;
    console.log(val3);

    let val4 = await p4;
    console.log(val4)

    let val = await p1;
    console.log(val);
    
    let val2 = await p2;
    console.log(val2);
 }


 getData();
