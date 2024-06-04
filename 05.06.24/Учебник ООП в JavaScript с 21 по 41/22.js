 // Задание 1
 class Validator{
            
    constructor(string){
       this.string = string;
        if(string.length <= 3){
            console.log('еще');
        }
        
        else{
            console.log('ок');
        }
    }
    // Задание 2
    isEmail () {
        for(let i = 0; i <this.string.length;i++){
            if(this.string[i] === '@'){
                console.log('')
                break;
            }
            else if(i === this.string.length - 1){
                console.log('не верно');
            }
        }
    }
    // Задание 3
    isDomain(){
        let result = '';
        let test1 = 'https://'
        let a = false;
        
        for(let i = 0; i <8;i++){
            result += this.string[i];
            if(result[i] !== test1[i] ){
                console.log('ссылка неверная');
                a = false;
                break;
            }
            
            else a = true;
        }
        if(a) console.log("Молодец");
    }
    // Задание 4
    isNumber(){
        const arr = ['0','1','2','3','4','5','6','7','8','9'];
        for(let i = 0; i < this.string.length;i++){
            if(arr.includes(this.string[i])){
                console.log('числа');
                break;
            }
            else{
                console.log('Не числа');
                break;
            }
        }
    }
}
let a = new Validator('78789');
a.isEmail();
a.isDomain();
a.isNumber();