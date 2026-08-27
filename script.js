function calcular() {
    let codigo = Number(document.querySelector('#codigo').value);
    let quantidade = Number(document.querySelector('#quantidade').value);
    let dinheiro = Number(document.querySelector('#dinheiro').value);
    let preco;
    
  
    switch (codigo) {
        case 1:
            preco = 5.00;
            break;
  
        case 2:
            preco = 3.50;
            break;
  
        case 3:
            preco = 4.80;
            break;
  
        case 4:
            preco = 8.90;
            break;
  
        case 5:
            preco = 7.32;
            break;
  
        default:
            document.querySelector('#resultado').innerText =
                "Código de produto inválido.";
            return;
    }

    let total = preco * quantidade;
    let troco = dinheiro - total;
    let resultado = document.querySelector('#resultado');
    
    if (troco >= 0) {
        resultado.innerText =
            "VALOR DA COMPRA = R$ " + total.toFixed(2) +
            "\nDINHEIRO RECEBIDO = R$ " + dinheiro.toFixed(2) +
            "\nTROCO = R$ " + troco.toFixed(2);
    } else {
        resultado.innerText =
            "VALOR DA COMPRA = R$ " + total.toFixed(2) +
            "\nDINHEIRO RECEBIDO = R$ " + dinheiro.toFixed(2) +
            "\nDINHEIRO INSUFICIENTE.\nFALTAM R$ " + Math.abs(troco).toFixed(2);
    }
  }