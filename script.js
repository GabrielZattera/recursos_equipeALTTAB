//modal de login
function abrirLogin() { 
    const miModal = document.getElementById("modalLogin");
    if(modal && modal.showModal==="function"){ 
        modal.showModal();
    } else {
        alert("Modal no soportado en este navegador");
    }
}

    //rola suavemente até o formulario rápido
function rolarParaRapido() {
    const formRapido = document.querySelector(".formRapido");
    if(formRapido){
        formRapido.scrollIntoView({behavior:"smooth",block:"start"});
    }
}

//validação simples da reserva rápida
(function iniciarValidacao(){
    const formRapido = document.querySelector(".formRapido");

    if(!from) return;

    const seletorRecurso = from.querySelector("select");
    const campoData = from.querySelector('input[type="date"]');
    const campoInicio = from.querySelector('input[placeholder="Início"]');
    const campoFim = from.querySelector('input[placeholder="fim"]');

    //remover a marcação de erro ao digitar
    [seletorRecurso, campoData, campoInicio, campoFim].forEach(el=>{
        if(!el) return;
        el.addEventListener("input", ()=>el.style.boderColor="");
        el.addEventListener("change", ()=>el.style.boderColor="");
    });

    form.addEventListener("submit", (event)=>{
        event.preventDefault();
    
        let valido =true;
        if(seletorRecurso && seletorRecurso.selectIndex ===0){
            seletorRecurso.style.boderColor="red";
            valido = false;
        }

        //valida data
        if(campoData && !campoData.value){
            campoData.style.boderColor="red";
            valido = false;
        }

        //validar horarios
        const hInicio = campoInicio?.value || '';
        const hFim = campoFim?.value || ''; 


        if(!hInicio){
            campoInicio.style.boderColor="red";
            valido = false;
        }

        if(!hFim){
        campoInicio.style.boderColor="red";
        valido = false;

        }

        if(hInicio && hFim && hInicio >= hFim){
            campoInicio.style.boderColor="red";
            campoFim.style.boderColor="red";
            alert("Horário final deve ser maior que o horário inicial");
            return;
        }
    })

})




