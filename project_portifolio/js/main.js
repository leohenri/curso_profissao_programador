    var form = document.getElementById("my-form");
      
    async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
        status.innerHTML = "Obrigado pelo contato! Responderei assim que possível.";
        form.reset()
        } else {
        response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
            status.innerHTML = "Oops! Houve um erro ao enviar a mensagem."
            }
        })
        }
    }).catch(error => {
        status.innerHTML = "Oops! Houve um erro ao enviar a mensagem."
    });
    }
    form.addEventListener("submit", handleSubmit)