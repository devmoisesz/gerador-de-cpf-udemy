export default class ValidateCpf{
    constructor(cpfSent){
        Object.defineProperty(this, 'cpfClean', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfSent.replace(/\D+/g, '') //Limpa o CPF
        });
    }

    CheckRepeatedSequence(){
        return this.cpfClean.charAt(0).repeat(this.cpfClean.length) === this.cpfClean;
    }

    CreatenewCpf(){
        const cpfPartial = this.cpfClean.slice(0, -2);
        const digit1 = ValidateCpf.createDigit(cpfPartial)
        const digit2 = ValidateCpf.createDigit(cpfPartial + digit1)
        this.newCPF = cpfPartial + digit1 + digit2
    }

    static createDigit(cpfPartial){
        let total = 0;
        let reverse = cpfPartial.length + 1

        for(let stringNumber of cpfPartial){
            total += reverse * Number(stringNumber);
            reverse--;
        }
        
        const digit = 11 - (total % 11)
        return digit <= 9 ? digit: '0'
    }

    valid(){
        if(!this.cpfClean) return false;
        if(typeof this.cpfClean !== 'string') return false;
        //se a quantidade de carcteres do cpf enviado 
        // é diferente de 11 retorna falso
        if(this.cpfClean.length !== 11) return false; 
        if(this.CheckRepeatedSequence()) return false; //se for senquencia retorna falso
        this.CreatenewCpf()

        return this.newCPF === this.cpfClean;
    }
}

const cpf = new ValidateCpf('123.456.789-09')
if(cpf.valid()){
  console.log('V')
}
else{
  console.log('I')
}