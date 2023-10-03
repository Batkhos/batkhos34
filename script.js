const text = "hello world , it's me Zaoui i am goin to be one of the best in he world <3 ..."

let index = 0;

function writetext(){
    document.body.innerText = text.slice(0, index)

    index++;

    if(index > text.length ){
        index = 0;
    }
}

setInterval(writetext, 100);

