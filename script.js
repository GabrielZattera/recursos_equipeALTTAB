//modal de login
function abrirLogin() { 
    const miModal = document.getElementById("modalLogin");
    if(miModal && typeof miModal.showModal === "function"){ 
        miModal.showModal();
    } else {
        alert("Modal não suportado neste navegador");
    }
}

// Adiciona evento ao botão "Entrar" para abrir modal de cadastro
document.addEventListener("DOMContentLoaded", () => {
    const btnEntrar = document.getElementById("btnEntrar");
    if (btnEntrar) {
        btnEntrar.addEventListener("click", abrirCadastro);
    }
});

// Função para abrir modal de cadastro
function abrirCadastro() {
    const modalCadastro = document.getElementById("modalCadastro");
    if (modalCadastro && typeof modalCadastro.showModal === "function") {
        modalCadastro.showModal();
    } else {
        alert("Modal de cadastro não suportado neste navegador");
    }
}

// Processa cadastro e exibe mensagem
(function iniciarCadastro(){
    const formCadastro = document.querySelector(".formCadastro");
    if(!formCadastro) return;

    formCadastro.addEventListener("submit", (event)=>{
        event.preventDefault();

        // Aqui você pode adicionar validações dos campos do cadastro

        alert("Os campos foram preenchidos com sucesso!");
        formCadastro.reset();
        // Fecha o modal se desejar
        const modalCadastro = document.getElementById("modalCadastro");
        if (modalCadastro && typeof modalCadastro.close === "function") {
            modalCadastro.close();
        }
    });
})();

    //rola suavemente até o formulario rápido
function rolarParaRapido() {
    const formRapido = document.querySelector(".formRapido");
    if(formRapido){
        formRapido.scrollIntoView({behavior:"smooth",block:"start"});
    }
}

//validação simples da reserva rápida
(function iniciarValidacao(){
    const form = document.querySelector(".formRapido");
    if(!form) return;

    const seletorRecurso = form.querySelector("select");
    const campoData = form.querySelector('input[type="date"]');
    const campoInicio = form.querySelector('input[placeholder="Início"], input[placeholder="Inicio"], input[name="inicio"]');
    const campoFim = form.querySelector('input[placeholder="fim"], input[placeholder="Fim"], input[name="fim"]');

    // remover a marcação de erro ao digitar/alterar
    [seletorRecurso, campoData, campoInicio, campoFim].forEach(el=>{
        if(!el) return;
        el.addEventListener("input", ()=> el.style.borderColor = "");
        el.addEventListener("change", ()=> el.style.borderColor = "");
    });

    form.addEventListener("submit", (event)=>{
        event.preventDefault();

        let valido = true;

        if(seletorRecurso && seletorRecurso.selectedIndex === 0){
            seletorRecurso.style.borderColor = "red";
            valido = false;
        }

        if(campoData && !campoData.value.trim()){
            campoData.style.borderColor = "red";
            valido = false;
        }

        const hInicio = (campoInicio?.value || "").trim();
        const hFim = (campoFim?.value || "").trim();

        if(!hInicio){
            if(campoInicio) campoInicio.style.borderColor = "red";
            valido = false;
        }

        if(!hFim){
            if(campoFim) campoFim.style.borderColor = "red";
            valido = false;
        }

        // valida horários convertendo para minutos (evita comparação de strings)
        if(hInicio && hFim){
            const toMinutes = s => {
                const parts = s.split(":").map(n => parseInt(n, 10));
                if(parts.length < 2 || isNaN(parts[0]) || isNaN(parts[1])) return NaN;
                return parts[0]*60 + parts[1];
            };
            const mInicio = toMinutes(hInicio);
            const mFim = toMinutes(hFim);

            if(isNaN(mInicio) || isNaN(mFim) || mInicio >= mFim){
                if(campoInicio) campoInicio.style.borderColor = "red";
                if(campoFim) campoFim.style.borderColor = "red";
                alert("Horário final deve ser maior que o horário inicial");
                return;
            }
        }

        if(!valido) {
            alert("Por favor, preencha os campos obrigatórios");
            return;
        }

        // SUCESSO
        alert("Reserva realizada com sucesso!");
        form.reset();
    });
})();




