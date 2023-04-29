

    const form = document.querySelector('form');
    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const inputNumeroMax = document.getElementById('sorteador');
        const numeroMax= Number(inputNumeroMax.value);

        let numeroAleatorio = Math.random() * numeroMax;
        numeroAleatorio = Math.floor(numeroAleatorio + 1)

         const resultado = document.querySelector('.resultado');
         resultado.innerHTML = `o numero sorteado foi: ${numeroAleatorio} `;
        resultado.style.display = 'block';
   
    });

