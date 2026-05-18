import ValidaCPF from './ValidaCPF';

export default class GeneratesCPF{
    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formatted(cpf){
        return(
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '.' +
            cpf.slice(9, 11) + '.'
        )
    }

    CreateNewCpf(){
        const cpfPartial = this.rand();
        const digit1 = createDigit(cpfPartial);
        const digit2 = createDigit(cpfPartial + digit1);
        const newCpf = cpfPartial + digit1 + digit2;
        return this.formatted(newCpf);
    }
}