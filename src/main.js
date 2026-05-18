import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

(function(){
    const generates = new GeneratesCPF()
    const cpfGenerated = document.querySelector('.cpf-gerado')
    cpfGenerated.innerHTML = generates.CreateNewCpf()
})();
