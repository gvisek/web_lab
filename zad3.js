let generateFirst = async () => {
    let first = await fetch("first.json");
    if(!first.ok){throw error;}
    return await first.json();
}
let generateSecond = async () => {
    let first = await fetch("second.json");
    if(!first.ok){throw error;}
    return await first.json();
}

let func = async () => {
    let firstArray = await generateFirst();
    let secondArray = await generateSecond();
    let array = [];
    for(number1 of firstArray){
        for(number2 of secondArray){
            if(number1 === number2 ){
                array.push(number1);
                break;
            }
        }
    }
    return Promise.resolve(array);
}

func().then(
    (array) => {console.log(array);}
)