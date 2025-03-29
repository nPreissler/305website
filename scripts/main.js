// // alert("Leia com atenção antes de enviar suas informações")


    document.getElementById("pedidoForm").onsubmit = function(e) {
        e.preventDefault();

        var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
        var selectedOptions = Array.from(checkboxes).map(cb => cb.value).join(", ");

        if (selectedOptions.length === 0) {
            alert("Por favor, selecione pelo menos um complemento!");
            return;
        }

        var fieldID = "entry.943827343"; 

        var formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScE5qGCLpDvGLfDfzNULI7kHcUq9M2E_jDudA3l7-5C5O1R5w/viewform?" 
                    + encodeURIComponent(fieldID) + "=" + encodeURIComponent(selectedOptions);

        window.location.href = formUrl;
    };
