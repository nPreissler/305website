// alert("Leia com atenção antes de enviar suas informações")

    document.getElementById("pedidoForm").onsubmit = function(e) {
        e.preventDefault();

        var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
        var selectedOptions = Array.from(checkboxes).map(cb => cb.value);
        var totalSelecionados = selectedOptions.length;

        if (totalSelecionados === 0) {
            alert("Por favor, selecione pelo menos um complemento!");
            return;
        }

        var preco = (totalSelecionados >= 3) ? "a pagar 15,00" : "a pagar 13,80";

        var mensagemFinal = selectedOptions.join(", ") + " - " + preco;

        var fieldID = "entry.943827343"; 

        var formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScE5qGCLpDvGLfDfzNULI7kHcUq9M2E_jDudA3l7-5C5O1R5w/viewform?" 
                    + encodeURIComponent(fieldID) + "=" + encodeURIComponent(mensagemFinal);

        window.location.href = formUrl;
    };

    function copiarTexto() {
        var texto = document.getElementById("copyText").innerText;
        
        var tempInput = document.createElement("textarea");
        tempInput.value = texto;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);

        alert("Texto copiado: " + texto);
    }