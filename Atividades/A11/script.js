document.getElementById("cep-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const cepInput = document.getElementById("cep");
    const cep = cepInput.value.replace(/\D/g, ""); // Remove caracteres não numéricos

    if (cep.length !== 8) {
        alert("Digite um CEP válido com 8 dígitos.");
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert("CEP não encontrado.");
                return;
            }

            // Preenche os campos com os dados do endereço
            document.getElementById("logradouro").textContent = data.logradouro || "Não disponível";
            document.getElementById("bairro").textContent = data.bairro || "Não disponível";
            document.getElementById("cidade").textContent = data.localidade || "Não disponível";
            document.getElementById("uf").textContent = data.uf || "Não disponível";

            // Exibe os resultados
            document.getElementById("result").style.display = "block";
        })
        .catch(() => {
            alert("Erro ao consultar o CEP. Tente novamente.");
        });
});
