function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Imposivel contar...'
        //window.alert('[ERRO] Fautam dados')
    } else {
        res.innerHTML = 'contando... <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo invalido! considerando passo 1')
            p = 1
        }
        if (i < f) {
            // contagem crecente
            for(let c = i;c <= f;c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }   
        } else {
            // contagem regresiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}