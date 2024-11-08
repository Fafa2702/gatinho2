document.addEventListener("DOMContentLoaded", function() {
    const btnSim = document.getElementById("sim");
    const btnNao = document.getElementById("nao");
    const mensagem = document.getElementById("mensagem");

    btnSim.addEventListener("click", function() {
        mensagem.innerHTML = "Óbvio que vocês querem";
        
        // Corrigido: criando uma tag <img> corretamente
        const img = document.createElement("img");

        // Caminho correto da imagem
        img.src = "gatinhp.jpg"; // Certifique-se de que o caminho da imagem esteja correto
        img.alt = "Imagem de gatinho fofo"; // Descrição alternativa
        img.style.width = "200px"; // Defina o tamanho da imagem, se necessário

        // Adiciona a imagem ao elemento de mensagem
        mensagem.appendChild(img);

        // Faz o botão "Não" desaparecer
        btnNao.style.display = "none";
    });

    btnNao.addEventListener("mouseover", function() {
        btnNao.style.position = "absolute";
        btnNao.style.top = `${Math.random() * 80 + 10}%`;
        btnNao.style.left = `${Math.random() * 80 + 10}%`;
    });
});