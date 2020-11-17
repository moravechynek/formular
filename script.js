let umera = document.getElementById('umera');
let btn = document.getElementById('vypocet');
let funkce = {
    a: 0,
    b: 0,
    c: 0,
    prima: function(){
        console.log('prima');
        console.log(this.b / this.a * this.c);
        return this.b / this.a * this.c;
    },
    neprima: function(){
        console.log('neprima');
        console.log(this.a / this.b * this.c);
        return this.a / this.b * this.c;
    }
};

btn.addEventListener('click', function(){
    funkce.a = document.getElementById('a').value;
    funkce.b = document.getElementById('b').value;
    funkce.c = document.getElementById('c').value;
    if(umera.value == 'prima'){
        let d = document.getElementById('d').innerHTML = funkce.prima();
    }else{
        let d = document.getElementById('d').innerHTML = funkce.neprima();
    }
});