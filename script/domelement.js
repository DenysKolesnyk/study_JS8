function DomElement(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    this.blockCreate = function(){
        
        let newBlock;   
        
        if(this.selector.charAt(0) == '.'){
            newBlock = document.createElement('div');
        }else if(this.selector.charAt(0) == '#'){
            newBlock = document.createElement('p');
        }

        newBlock.className = this.selector;

        let text = document.createTextNode('Новый Элемент');
        
        newBlock.appendChild(text);
        
        newBlock.style.cssText = 'height:' + height + 'px; width:' + width + 'px; background:'+ bg + ';' +' font-size:' + fontSize + 'px;';

        document.body.appendChild(newBlock);
    };
};


let divNew = new DomElement('.div', '100','300', 'green', '32');

divNew.blockCreate();

