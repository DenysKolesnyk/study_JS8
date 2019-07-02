let textInput = prompt('Введите текс:', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, assumenda vero. Ducimus repellendus odio aut optio excepturi nobis, facere sit, ex soluta repudiandae ipsa obcaecati atque laborum beatae ratione ab vero voluptate voluptatibus possimus inventore!');

function textCrop(item){
    if(typeof item != 'string'){
        return 'Значение введено не как текст!';
    }else{
        if(item.trim().length > 30){
            return item.trim().substring(0,30) + '...';
        } else {
            return item.trim();
        }
    }
}

console.log(textCrop(textInput));