let result = document.getElementById('input-text')

let calculate = (number) => {  
    result.value+=number;
}

let equal =() => {
    try {
        result.value = eval(result.value)
    } catch (error) {
        result.value = alert("Error !!!");
        result.value = " ";
    }
}

function clr(){ 
    result.value = " ";
};

function del(){
    result.value = result.value.slice(0, -1)
}

 