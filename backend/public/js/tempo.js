function ajax(config) {
    const xhr = new XMLHttpRequest()
    xhr.open(config.metodo, config.url, true)

    xhr.onload = e => {
        if(xhr.status === 200){
            config.sucesso(xhr.response)
        } else if(xhr.status >= 400){
            config.erro({
                codigo: xhr.status,
                texto: xhr.statusText
            })
        }
    }
    xhr.send()
}
ajax({


    url: "https://api.hgbrasil.com/weather?format=json-cors&woeid=435701",
    metodo: "get",
    sucesso(resposta){
        const dados = JSON.parse(resposta)
        
    },
    erro(e){
        const msg = document.createTextNode(`${e.codigo}: ${e.texto}`)
        document.body.appendChild(msg)
    }

})

function navegarViaAjax(url, seletor) {
    if(!url || !seletor) return
    const elemento = document.querySelector(seletor)

    fetch(url)
        .then(resp => resp.text())
        .then(html => {
          elemento.innerHTML = html
        })
  }

  document.querySelectorAll('[wm-link]').forEach(link => {
    let url = link.attributes['wm-link'].value
    const seletorDestino = link.attributes['wm-destino'].value

    link.onclick = e => {
      e.preventDefault()
      navegarViaAjax(url, seletorDestino)
    }
  })