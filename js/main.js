function jogar(escolha_jogador){
    //Escolha do Computador
    const opcoes = ["pedra", "papel", "tesoura"];
    let tamanho_array = opcoes.length;
    let rand = Math.floor(Math.random() * tamanho_array);
    let escolha_computador = opcoes[rand];

    //Identifica vitória/derrota
    //pedra = 0, papel = 1, tesoura = 2
    switch (escolha_computador){
        case 'pedra':
            if(escolha_jogador == "pedra"){
                console.log("DRAW");
            } else if(escolha_jogador == "papel"){
                pontuacao();
                console.log("YOU WIN");
            } else if(escolha_jogador == "tesoura"){
                console.log("YOU LOSE");
            }
            break;
        case 'papel':
            if(escolha_jogador == "pedra"){
                console.log("YOU LOSE");
            } else if(escolha_jogador == "papel"){
                console.log("DRAW");
            } else if(escolha_jogador == "tesoura"){
                pontuacao();
                console.log("YOU WIN");
            }
            break;
        case 'tesoura':
            if(escolha_jogador == "pedra"){
                pontuacao();
                console.log("YOU WIN");
            } else if(escolha_jogador == "papel"){
                console.log("YOU LOSE");
            } else if(escolha_jogador == "tesoura"){
                console.log("DRAW");
            }
            break;
        default:
            console.log("Erro na escolha do computador");
    }
    return escolha_computador;
}

//SCORE
let contador = 0;
function pontuacao(){
    contador = contador + 1;
    console.log("score",contador);
}

//Oculta a div primeiroContainer
function ocultar_primeiroContainer(escolha) {
    document.getElementById("primeiroContainer").style.display = "none";
    let escolha_jogador = escolha;
    let escolha_computador = jogar(escolha);
    mostrar_segundoContainer(escolha_jogador, escolha_computador);
}

function mostrar_segundoContainer(escolha_jogador, escolha_computador) {
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

function play_again(){
    document.getElementById("segundoContainer").style.display = "none";
    document.getElementById("primeiroContainer").style.display = "flex";
}

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