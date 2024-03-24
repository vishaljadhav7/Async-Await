function fetchData(url){
    return new Promise(function(resolve,reject){
        console.log("Started downloading from", url)
        setTimeout(function processDwnlding(){
            let data = "dummy data";
            console.log("dowloading completed");
            resolve(data);
        },7000);
    })
}
function writeFile(data){
    return new Promise(function(resolve,reject){
        console.log("Started writing", data, " in a .txt file")
        setTimeout(function processDwnlding(){
            let fileName = "result.txt";
            console.log("file written successfully");
            resolve(fileName);
        },3000)
    })
}
function uploadFile(file, url){
    return new Promise(function(resolve,reject){
        console.log("upload started on url", url, " file is", file)
        setTimeout(function processDwnlding(){
            let result = "SUCCESS";
            console.log("file written successfully");
            resolve(result);
        },5000)
    })
}

 async function getData( ){
 let dwnldedData = await fetchData("www.bgv3.com"); // 7 secs
 console.log("dowloading await completed")

 let file = await writeFile(dwnldedData); // 3 secs
 console.log("writing await completed")

 let uploadResponse = await uploadFile(dwnldedData); // 5 secs
 console.log("uploadFile await completed")
 console.log("completed process with response :" , uploadResponse)
 return true;
 }


 getData()

