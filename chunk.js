const chunkeArr=(arr,len)=>{
    //init cunked array

    const chunkedArr=[]
    arr.forEach(val => {
        //get last element
        const last=chunkedArr[chunkedArr.length-1]

        //check if last and if last length is equal to chunk len
        if(!last || last.length===len){
            chunkedArr.push([val])
 
        }else{
            last.push(val)
        }
    });
    return chunkedArr;
}

module.exports=chunkeArr;