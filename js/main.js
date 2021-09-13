function jogar(escolha_jogador){
    //Escolha do Computador
    const opcoes = ["pedra", "papel", "tesoura"];
    let tamanho_array = opcoes.length;
    let rand = Math.floor(Math.random() * tamanho_array);
    let escolha_computador = opcoes[rand];

    //Identifica vitória/derrota
    switch (escolha_computador){
        case 'pedra':
            if(escolha_jogador == "pedra"){
                document.querySelector("#mensagem").textContent = "DRAW";
            } else if(escolha_jogador == "papel"){
                document.querySelector("#mensagem").textContent = "YOU WIN";
                pontuacao_win();
            } else if(escolha_jogador == "tesoura"){
                document.querySelector("#mensagem").textContent = "YOU LOSE";
                pontuacao_lose();
            }
            break;
        case 'papel':
            if(escolha_jogador == "pedra"){
                document.querySelector("#mensagem").textContent = "YOU LOSE";
                pontuacao_lose();
            } else if(escolha_jogador == "papel"){
                document.querySelector("#mensagem").textContent = "DRAW";
            } else if(escolha_jogador == "tesoura"){
                document.querySelector("#mensagem").textContent = "YOU WIN";
                pontuacao_win();
            }
            break;
        case 'tesoura':
            if(escolha_jogador == "pedra"){
                document.querySelector("#mensagem").textContent = "YOU WIN";
                pontuacao_win();
            } else if(escolha_jogador == "papel"){
                document.querySelector("#mensagem").textContent = "YOU LOSE";
                pontuacao_lose();
            } else if(escolha_jogador == "tesoura"){
                document.querySelector("#mensagem").textContent = "DRAW";
            }
            break;
        default:
            console.log("Erro na escolha do computador");
    }
    return escolha_computador;
}

//SCORE DA WIN
let contador = 0;
function pontuacao_win(){
    contador = contador + 1;
    document.getElementById("contador").innerHTML = contador;
    console.log("score",contador);
}
//SCORE DA LOSE
function pontuacao_lose(){
    contador = contador - 1;
    document.getElementById("contador").innerHTML = contador;
    console.log("score",contador);
}

//Oculta a div primeiroContainer
function ocultar_primeiroContainer(escolha) {
    document.getElementById("primeiroContainer").style.display = "none";
    mostrar_segundoContainer(escolha);
}

//Chama a function jogar() e exibe as imagens de acordo com as mãos selecionadas
function mostrar_segundoContainer(escolha) {
    let escolha_jogador = escolha;
    let escolha_computador = jogar(escolha);
    document.getElementById("escolha_jogadorImg").src = define_Img(escolha_jogador);
    document.getElementById("escolha_computador").src =define_Img(escolha_computador);
    document.getElementById("segundoContainer").style.display = "flex";

    if(escolha_jogador == "pedra"){
        document.getElementById("DivJogador").classList= "";
        document.getElementById("DivJogador").classList.add("pedra_jogada");
    }
    else if(escolha_jogador == "papel"){
        document.getElementById("DivJogador").classList= "";
        document.getElementById("DivJogador").classList.add("papel_jogada");
    }
    else if(escolha_jogador == "tesoura"){
        document.getElementById("DivJogador").classList= "";
        document.getElementById("DivJogador").classList.add("tesoura_jogada");
    }

    if(escolha_computador == "pedra"){
        document.getElementById("DivMachine").classList= "";
        document.getElementById("DivMachine").classList.add("pedra_jogada");
    }
    else if(escolha_computador == "papel"){
        document.getElementById("DivMachine").classList= "";
        document.getElementById("DivMachine").classList.add("papel_jogada");
    }
    else if(escolha_computador == "tesoura"){
        document.getElementById("DivMachine").classList= "";
        document.getElementById("DivMachine").classList.add("tesoura_jogada");
    }
   
}

//Retorna ao container inicial
function play_again(){
    document.getElementById("segundoContainer").style.display = "none";
    document.getElementById("primeiroContainer").style.display = "flex";
}
//Define caminho da mão que ira ser mostrada
function define_Img(escolha_img, style){
    if (escolha_img === "pedra"){
        escolha_img = "img/icon-rock.svg";
    } else if (escolha_img === "papel"){
        escolha_img = "img/icon-paper.svg";
    } else {
        escolha_img = "img/icon-scissors.svg";
    }
    return escolha_img;
}
