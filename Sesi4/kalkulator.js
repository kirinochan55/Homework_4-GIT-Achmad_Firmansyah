export function kalkulator(number1,number2,operator){
    switch(operator){
        case("+"):
        return number1+number2;

        case("-"):
        return number1-number2;

        case("*"):
        return number1*number2;

        case("/"):
        if(number2==0){
            return "Tidak terdefinisi";
        }
        else{
            return number1/number2;
        }

        default:
            return "Kalkulator tidak bisa dijalankan"
    }
}