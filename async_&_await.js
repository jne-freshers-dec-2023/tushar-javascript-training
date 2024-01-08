function fetchData(){
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{

            const success = true;

            if(success)
            {
                resolve("Data Fetched Successfully")
            }
            else
            {
                reject("Error Fetching Data")
            }
        }, 3000)
    })
}

async function fetchDataAsync(){

    const result = await fetchData();
    console.log("Success,", result)
    return "Additional Data"
    
}


fetchDataAsync()
.then((result)=>{

    console.log(result)
})
.catch((error)=>{

    console.error("Error : ", error);
})

