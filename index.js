let nomeHeroi = "Cauezoide"
let xpHeroi = 10001
let nivelHeroi 

switch(true){
    case (xpHeroi<1000): nivelHeroi= "Ferro"
    break
    case (xpHeroi<2001):nivelHeroi="Bronze"
    break
    case (xpHeroi<5001): nivelHeroi="Prata"
    break
    case (xpHeroi<7001): nivelHeroi="Ouro"
    break
    case (xpHeroi<8001): nivelHeroi="Platina"
    break
    case (xpHeroi<9001): nivelHeroi="Ascendente"
    break
    case (xpHeroi<10000): nivelHeroi="Imortal"
    break
    default: nivelHeroi="Radiante"
}
    console.log("O Herói " + nomeHeroi + " está no nível de " + nivelHeroi)