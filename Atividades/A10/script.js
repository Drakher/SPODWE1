// Máscara para o CEP
document.getElementById("cep").addEventListener("input", function () {
    let cep = this.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (cep.length > 8) cep = cep.slice(0, 8); // Limita o tamanho a 8 dígitos

    this.value = cep.replace(/(\d{5})(\d{3})/, "$1-$2"); // Aplica a máscara 00000-000
});

// Busca o endereço pelo CEP
document.getElementById("cep").addEventListener("blur", function () {
    const cep = this.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    document.getElementById("address").value = data.logradouro || "";
                    document.getElementById("city").value = data.localidade || "";
                } else {
                    alert("CEP não encontrado.");
                }
            })
            .catch(() => alert("Erro ao buscar o CEP."));
    } else {
        alert("CEP inválido.");
    }
});

// Máscara para o CPF
document.getElementById("cpf").addEventListener("input", function () {
    let cpf = this.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (cpf.length > 11) cpf = cpf.slice(0, 11); // Limita o tamanho a 11 dígitos

    this.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"); // Aplica a máscara 000.000.000-00
});
