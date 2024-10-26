//USEI A TELA TODA PARA FAZER O JOGO, ENTÃO ALGUMAS PARTES GRÁFICAS NÃO PODE AGIR CORRETAMENTE NESSA TELA DE EDIÇÃO DO P5JS

//ESSE LINK É PARA O JOGO EM TELA NORMAL
//https://preview.p5js.org/giovanisantanaa7/present/-XekSAHgQ


//VARIAVEIS PARA IMAGENS
let imgBotaoMenu, imgBotaoMenuCor, imgBackground, imgFundoNomeJogo,
imgFundoCredito, imgFundoDescricao, imgFundoComoJogar,
imgEmail, imgNomeJogo, imgNomeDaTela,
imgApple, imgCoracao, imgCoracaoApagado, imgCorpoCobra, 
imgOlhoCobraRight, imgOlhoCobraLeft, imgOlhoCobraUp, imgOlhoCobraDown, imgOlhoCobraMovimentoTelaCor,
imgCentroOperacaoMat, imgFundoPontuacao, imgBotaoMenuPause, imgResultado,
imgMenuSomVol, imgSimboloVolume, imgSimboloVolumeZero;

//ARRAYS DE IMAGENS
let imgNuvem = [], imgGrass = [], imgFlower = [], imgGrassSide = [];

//VARIAVEIS PARA GIF
let gifTutorialGameplay, gifTelaFundo, gifCobraAndandoTelaCor;

//VARIAVEIS PARA TELA INICIAL DO JOGO, FONTE, IDIOMA, FRAMERATE E PARA PAUSAR O JOGO
let tela = 1, font, idioma, fr = 60, playing = true;

//VARIAVEIS PARA COR DA COBRA
let tinta = 255, voltarCorSelecionada = 5;

//VARIAVEIS DE VERIFICAÇÃO PARA OS MENUS
let overBox = false, lock = false, botaoSelecionado = 0, verificarBotaoSelecionado = true, 
voltarParaUltimoBotaoSelecionado, mouse_Moved = true, tecla_Press = false; 

//VARIAVEIS PARA O SOM
let somBotaoMenu, musicaFundoJogo, somFood, verificarVolumeSom = 6, verificarVolumeMusica = 6,
verificarVolumeAtualDaMusica, tocarSomBotoesMenuAntes_Bool = false, tocarSomBotoesMenuAgora_Bool = false;

//VARIAVEIS PARA A COBRA
let contMaxX = 0, contMinX = 0, contMaxY = 0, contMinY = 0, contMaxComidaX = 0, contMaxComidaY = 0;
let direcaoCobra = 'RIGHT';
const sizeQuadradoCobra = 32; //CONSTANTE COM O TAMANHO DA COMBRA E QUANTOS PIXEL A COBRA ANDA
let cobra = [];
let comida, comidaErrada1, comidaErrada2, vidas, contadorDeAcertos = 0;

//VARIAVEIS PARA REALIZAR O CALCULO DOS NUMEROS ALEATORIOS E VARIAVEIS PARA A PONTUAÇÃO DO JOGADOR
let num1, num2, numAleatorio1, numAleatorio2, pontuacao = 0; 
let dificuldadeAleatoria, dificuldadePontuacao, dificuldade = 1;  //VARIAVEIS PARA DIFICULDADE

//VARIAVEIS PARA CENTRALIZAR A COBRA
let xtela, ytela;

//VARIAVEL DAS NUVENS QUE PASSA NO FUNDO DA TELA
let xNuvem = [];

//VARIAVEIS PARA GERAR A GRAMA DA TELA DE JOGO
const probabilidadeGrama = 0.65, probabilidadeFlor = 0.15;  //PROBABILIDADE QUE APARECE A GRAMA E FLOR
let gerarQuadradoBool = true; //USADO PARA GERAR APENAS UMA VEZ

function preload(){
  font = loadFont('assets/font/StardewValley.ttf');  //FONTE
  
  //IMAGENS DOS BOTOES, COMIDA E BACKGROUND
  imgBackground = loadImage('assets/images/background.png');
  imgNomeJogo = loadImage('assets/images/nomeJogo.png');
  imgFundoNomeJogo = loadImage('assets/images/fundoNomeJogo.png');

  imgBotaoMenu = loadImage('assets/images/botaoMenu.png');
  imgNomeDaTela = loadImage('assets/images/nomeTela.png');
  imgFundoCredito = loadImage('assets/images/fundoCréditos.png');
  imgFundoDescricao = loadImage('assets/images/fundoDescrição.png');
  imgFundoComoJogar = loadImage('assets/images/fundoComoJogar.png');
  imgMenuSomVol = loadImage('assets/images/menuSom&Volume.png');
  
  imgBotaoMenuCor = loadImage('assets/images/botaoMenuCor.png');
  imgOlhoCobraMovimentoTelaCor = loadImage('assets/images/olhoCobraMovimentoTelaCor.png');
  gifCobraAndandoTelaCor = loadImage('assets/images/cobraAndandoTelaCor.gif');
  
  gifTutorialGameplay = loadImage('assets/images/tutorialGameplayGif.gif');
  imgEmail = loadImage('assets/images/fundoEmail.png');
  
  //GRAMA DA TELA DE JOGO
  imgGrassSide = [
    loadImage('assets/images/grass_and_flower/grassUP.png'),
    loadImage('assets/images/grass_and_flower/grassLEFT.png'),
    loadImage('assets/images/grass_and_flower/grassDOWN.png'),
    loadImage('assets/images/grass_and_flower/grassRIGHT.png'),
  ]
  imgGrass = [
    loadImage('assets/images/grass_and_flower/grass1.png'),
    loadImage('assets/images/grass_and_flower/grass2.png'),
    loadImage('assets/images/grass_and_flower/grass3.png'),
    loadImage('assets/images/grass_and_flower/grass4.png'),
    loadImage('assets/images/grass_and_flower/grass5.png'),
    loadImage('assets/images/grass_and_flower/grass6.png'),
    loadImage('assets/images/grass_and_flower/grass7.png'),
    loadImage('assets/images/grass_and_flower/grass8.png'),
    loadImage('assets/images/grass_and_flower/grass9.png'), 
    loadImage('assets/images/grass_and_flower/grass10.png'),
    loadImage('assets/images/grass_and_flower/grass11.png'),
    loadImage('assets/images/grass_and_flower/grass12.png'),
    loadImage('assets/images/grass_and_flower/grass13.png'),
    loadImage('assets/images/grass_and_flower/grass14.png'),
    loadImage('assets/images/grass_and_flower/grass15.png'),
    loadImage('assets/images/grass_and_flower/grass16.png'),
    loadImage('assets/images/grass_and_flower/grass17.png'),

  ]
  imgFlower = [
    loadImage('assets/images/grass_and_flower/flower1.png'),
    loadImage('assets/images/grass_and_flower/flower2.png'),
    loadImage('assets/images/grass_and_flower/flower3.png'),
    loadImage('assets/images/grass_and_flower/flower4.png'),
    loadImage('assets/images/grass_and_flower/flower5.png'),
    loadImage('assets/images/grass_and_flower/flower6.png'),
    loadImage('assets/images/grass_and_flower/flower7.png'),
    loadImage('assets/images/grass_and_flower/flower8.png'),
    loadImage('assets/images/grass_and_flower/flower9.png'),
  ]

  //NUVENS DE FUNDO
  imgNuvem = [
    loadImage('assets/images/clouds/cloud1.png'),
    loadImage('assets/images/clouds/cloud2.png'),
    loadImage('assets/images/clouds/cloud3.png'),
    loadImage('assets/images/clouds/cloud4.png'),
    loadImage('assets/images/clouds/cloud5.png'),
  ]

  //IMAGENS DA COBRA
  imgCorpoCobra = loadImage('assets/images/corpoCobra.png');
  imgOlhoCobraRight = loadImage('assets/images/olhoCobraRight.png');
  imgOlhoCobraLeft = loadImage('assets/images/olhoCobraLeft.png');
  imgOlhoCobraUp = loadImage('assets/images/olhoCobraUp.png');
  imgOlhoCobraDown = loadImage('assets/images/olhoCobraDown.png');
  
  //IMAGENS DA TELA DE GAMEPLAY DO JOGO
  imgResultado = loadImage('assets/images/telaResultado.png');
  imgCentroOperacaoMat = loadImage('assets/images/centroOperacaoMat.png');
  imgBotaoMenuPause = loadImage('assets/images/botãoMenuPause.png');
  imgFundoPontuacao = loadImage('assets/images/pontuação.png');
  imgApple = loadImage('assets/images/apple.png');
  imgCoracao = loadImage('assets/images/coração.png');
  imgCoracaoApagado = loadImage('assets/images/coraçãoApagado.png');

  //IMAGENS DA TELA DO VOLUME DO SOM E MÚSICA
  imgSimboloVolume  = loadImage('assets/images/simboloDeSom.png');
  imgSimboloVolumeZero = loadImage('assets/images/simboloDeSomMutado.png');

  //SONS DO JOGO "SONS PROVISORIOS APENAS PARA TESTES"
  somBotaoMenu = loadSound('assets/sound/pop.wav');
  somFood = loadSound('assets/sound/food.wav');
  musicaFundoJogo = loadSound('assets/sound/Caketown 1.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font); //FONTE DO JOGO
  linguagem(1);   //DEFINE A LINGUAGEM DO JOGO
  mudarCorCobra(4); //DEFINI A COR PADRÃO DA COBRA CASO NENHUMA COR SEJA SELECIONADA
  resizeTelaJogo(); //CALCULA O TAMANHO DA TELA DO JOGO E DEFINE OS LIMITES DA TELA, DA COBRA E COMIDA
  gerarNumero(dificuldade); //GERA NUMEROS ALEATORIOS PARA O ALUNO FAZER A OPERAÇÃO MATEMÁTICA
  
  somBotaoMenu.setVolume(0.25);
  musicaFundoJogo.loop();   //MÚSICA DE FUNDO DO JOGO
  musicaFundoJogo.setVolume(0.25);
  verificarVolumeAtualDaMusica = 0.25;

  xNuvem[0] = (width/2)-550;
  xNuvem[1] = (width/2)+500;
  xNuvem[2] = (width/2)+300;
  xNuvem[3] = width/2;
  xNuvem[4] = (width/2)+400;
  xNuvem[5] = (width/2)-700;
  xNuvem[6] = (width/2)-300;
}
function draw() {
  (tela === 1) ? telaMenuInicial()      //TELA DO MENU INICIAL
  : (tela === 2) ? telaPreJogo()        //TELA PRE JOGO
  : (tela === 3) ? telaConfiguracoes()  //TELA DE CONFIGURAÇOES
  : (tela === 4) ? telaCreditos()       //TELA DE CREDITOS
  : (tela === 5) ? telaIdiomas()        //TELA DE IDIOMAS
  : (tela === 6) ? telaDificuldade()    //TELA DE DIFICULDADES
  : (tela === 7) ? telaCorCobra()       //TELA PARA DEFINIR A COR DA COBRA
  : (tela === 8) ? telaComoJogar()      //TELA DE COMO JOGAR
  : (tela === 9) ? telaVolumeSom()      //TELA VOLUME SOM
  : (tela === 10) ? telaVolumeMusica()  //TELA VOLUME MÚSICA 
  : (tela === 11) ? telaJogo()          //TELA DO JOGO
  : (tela === 12) ? telaDescrição()     //TELA DESCRIÇÃO
  : (tela === 13) ? telaResultadoJogo() //TELA DE RESULTADO FINAL
  : (tela === 14) ? telaContatoEmail()  //TELA EMAIL;
  : telaMenuInicial();

  frameRate(fr);  //FRAMERATE DO JOGO
}


//FAZ TODA VERIFICAÇÃO DO MOUSE
function opcaoMenu(xRect, yRect, xRectSize, yRectSize, pauseJogoBool, playingBool, selecionarTela,
  botaoAtualSelecionado, botaoAtualSelecinado_mudaTela, verificarSelecaoBotao_bool, verificarBotaoSelecionado_bool_mudaTela, 
  telaCheia, func_Bool, func, argFunc, dific, resetCobraBool, gerarGrama){
  
  //MUDANÇA DE ESTADO
  tocarSomBotoesMenuAgora_Bool = true;

  //DEIXAR BOTAO SELECIONADO MAIS ESCURO
  push();
    fill(0,0,0,100);
    noStroke();
    rect(xRect, yRect, xRectSize, yRectSize);
  pop();
  
  if(tocarSomBotoesMenuAgora_Bool && !tocarSomBotoesMenuAntes_Bool){
    somBotaoMenu.play();
  }
  
  botaoSelecionado = botaoAtualSelecionado; //DEFINI EM QUAL BOTÃO ESTÁ O MOUSE
  verificarBotaoSelecionado = verificarSelecaoBotao_bool; //VERIFICA SE O MOUSE JÁ PASSOU POR ALGUM BOTÃO
  overBox = true; //VERIFICA SE O MOUSE ESTÁ DENTRO BOTAO
  
  if(!telaCheia){
    if(lock){
      if(!pauseJogoBool){ //VERIFICA SE O JOGO ESTÁ PAUSADO
        if(!playing && tela === 3 && botaoSelecionado === 6){
          tela = 11;
          gerarQuadradoBool = true;
        }else tela = selecionarTela; //MUDA DE TELA
        
        lock = false; //USADO PARA NÃO FICAR SALTANDO DE TELA CASO O MOUSE SEJA SEMPRE ESTEJA PRECIONADO EM UM BOTÃO
        verificarBotaoSelecionado = verificarBotaoSelecionado_bool_mudaTela;  //DEFINI O PRIMEIRO BOTAO SELECIONADO DA PROXIMA TELA
        botaoSelecionado = botaoAtualSelecinado_mudaTela; //VOLTA PARA O ULTIMO BOTAO SELECIONADO DA TELA ANTERIOR
      }
      if(playingBool){
        playing = !playing; //USADO PARA PAUSAR O JOGO
        lock = false;
      }
      if(func_Bool){
        dificuldade = dific;
        func(argFunc);
        if(resetCobraBool){ //RESETA A COBRA
          resetarCobra();
          gerarComida();
          vidas = 3;
          pontuacao = 0;
        }
        if(gerarGrama){ //GERAR A GRAMA ALEATORIAMENTE
          gerarQuadradoBool = true;
        }
      }
      somBotaoMenu.play();
    }
  }else{
    if(lock){
      let fs = fullscreen();  //DEIXA O JOGO EM TELA CHEIA
      fullscreen(!fs);
      lock = false;
    }
  }

  //MUDANÇA DE ESTADO
  tocarSomBotoesMenuAntes_Bool = true;
}
//FAZ TODA VERIFICAÇÃO DAS TECLAS
function opcaoMenuTeclado(xRect, yRect, xRectSize, yRectSize, pauseJogoBool, playingBool, enter, up, down, left, right,
  enterTela, verificarBotaoSelecionado_bool_mudaTela, opcaoSelecionada_Bool, selecBotao, upSelec, downSelec, leftSelec, rightSelec, 
  ultSelec, ultimaSelecao_Bool, telaCheia, func_Bool, func, argFunc, dific, resetCobraBool, gerarGrama){
  
  //DEIXAR BOTAO SELECIONADO MAIS ESCURO
  push();
    fill(0,0,0,100);
    noStroke();
    rect(xRect, yRect, xRectSize, yRectSize);
  pop();

  if(keyIsPressed){ //VERIFICA SE A TECLA ESTÁ SENDO PRECIONADA
    if(enter && keyCode === 13 ^ keyCode === 32){ //VERIFICA SE A TECLA PRESSIONADA FOI ENTER OU ESPAÇO
      if(!telaCheia){
        if(!pauseJogoBool){ //VERIFICA SE O JOGO ESTÁ PAUSADO
          if(!playing && tela === 3 && botaoSelecionado === 6){
            tela = 11;
            gerarQuadradoBool = true;
          }else tela = enterTela; //MUDA DE TELA
                                                                          
          verificarBotaoSelecionado = verificarBotaoSelecionado_bool_mudaTela; //DEFINI O PRIMEIRO BOTAO SELECIONADO DA PROXIMA TELA
          if(opcaoSelecionada_Bool){
            botaoSelecionado = selecBotao;  //VOLTA PARA O ULTIMO BOTAO SELECIONADO DA TELA ANTERIOR
          }
        }
        if(playingBool){  //USADO PARA PAUSAR O JOGO
          playing = !playing;
        }
        if(func_Bool){
          dificuldade = dific;  //DEFINI A DIFICULDADE PADRÃO CASO NENHUMA SEJA SELECIONADA
          func(argFunc);  //RECEBE UMA FUNÇÃO E UM ARGUMENTO
          if(resetCobraBool){ //RESETA A COBRA
            resetarCobra();
            gerarComida();
            vidas = 3;
            pontuacao = 0;
          }
          if(gerarGrama){ //GERAR A GRAMA ALEATORIAMENTE
            gerarQuadradoBool = true;
          }
        }
      }else if(telaCheia){  //TELA CHEIA
        let fs = fullscreen();
        fullscreen(!fs);
        if(opcaoSelecionada_Bool){  //DEIXA O BOTÃO NA SELEÇÃO ATUAL DA TELA CHEIA
          botaoSelecionado = selecBotao;
        }
      }
      somBotaoMenu.play();

    }else if(up && keyCode === 87 ^ keyCode === UP_ARROW){  //VERIFICA SE A TECLA É UP OU W
      botaoSelecionado = upSelec; //DEFINI O PROXIMO BOTÃO SELECIONADO
      
      if(ultimaSelecao_Bool && !down){  //VOLTA PARA ULTIMA SELEÇÃO DO BOTÃO
        if(voltarParaUltimoBotaoSelecionado === 2 || voltarParaUltimoBotaoSelecionado === 3){
          botaoSelecionado = voltarParaUltimoBotaoSelecionado;
        }else{
          botaoSelecionado = gerarNumeroAleatorio(2, 4);
        } //GERAR NUMERO ALEATORIO ENTRE 2 E 3 CASO A OPCAO VOLTAR SEJA SELECIONADA SEM PASSAR PELAS DUAS ACIMA
      }   //USADO APENAS NA TELA ANTES DE INICIAR O JOGO
      somBotaoMenu.play();

    }else if(down &&  keyCode === 83 ^ keyCode === DOWN_ARROW){ //VERIFICA SE A TECLA É DOWN OU S
      botaoSelecionado = downSelec; //DEFINI O PROXIMO BOTÃO SELECIONADO
      
      if(ultimaSelecao_Bool){ //VOLTA PARA ULTIMA SELEÇÃO DO BOTÃO
        voltarParaUltimoBotaoSelecionado = ultSelec;  //DEFINI O PROXIMO BOTÃO SELECIONADO
      }
      somBotaoMenu.play();

    }else if(left && keyCode === 65 ^ keyCode === LEFT_ARROW){  //VERIFICA SE A TECLA É LEFT OU D
      botaoSelecionado = leftSelec; //DEFINI O PROXIMO BOTÃO SELECIONADO
      somBotaoMenu.play();

    }else if(right && keyCode === 68 ^ keyCode === RIGHT_ARROW){  //VERIFICA SE A TECLA É RIGHT OU A
      botaoSelecionado = rightSelec;  //DEFINI O PROXIMO BOTÃO SELECIONADO
      somBotaoMenu.play();

    }
    keyCode = 0;
    //USADO PARA SALTAR APENAS UM BOTÃO POR VEZ
  }
}

//FAZ A VERIFICAÇÃO SE ALGUM BOTÃO FOI JÁ FOI SELECIONADO PELO MOUSE, CASO NÃO, AO USAR O TECLADO O PRIMEIRO BOTÃO É SELECIONADO
function verificarPrimeiraSelecao(selecBotao){
  botaoSelecionado = selecBotao;   //DEFINI O PRIMEIRO BOTÃO DA TELA SELECIONADO CASO NENHUM SEJA SELECIONADO ANTES
  verificarBotaoSelecionado = false;  //DEIXA FALSE PORQUE O PRIMEIRO BOTÃO JÁ FOI SELECIONADO
  keyCode = 0;  //DEFINIR O KEYCODE INICIAL COMO 0 CASO
}
function menuEscape(escapeTela, opcaoSelec, verificarBotaoSelecionado_bool_mudaTela, playingBool){ //VOLTAR PARA TELA ANTERIOR APERTANDO O ESCAPE
  if(keyIsPressed){ //VERIFICA SE A TECLA ESTÁ SENDO PRESSIONADA     
    if(keyCode === 27){ //VERIFICA SE A TECLA PRECIONADA E A TECLA DE ESCAPE
      if (playingBool){
        playing = !playing; 
      }else tela = escapeTela, gerarQuadradoBool = true; 
      //VERIFICA SE A TECLA ESCAPE FOI APERTADA DURANTE O JOGO E PAUSA O JOGO AO INVÉS DE VOLTAR PARA A TELA ANTERIOR
      
      botaoSelecionado = opcaoSelec; //DEIXA O BOTÃO SELECIONADO NA TELA ANTERIOR
      verificarBotaoSelecionado = verificarBotaoSelecionado_bool_mudaTela;  //USADO CASO QUEIRA DEFINIR O PRIMEIRO BOTÃO DA TELA ANTERIOR
      keyCode = 0;
      //USADO PARA SALTAR APENAS UM BOTÃO POR VEZ
      somBotaoMenu.play();
    }
  }
}



function telaMenuInicial(){   //EXIBI O MENU INICIAL
  background(imgBackground);
  clouds();

  push(); //IMAGENS MENU DE OPÇÕES
    imageMode(CENTER);
    image(imgBotaoMenu, (width/2)-166, (height/2)+38);   //INICIAR 
    image(imgBotaoMenu, (width/2)+166, (height/2)+38);    //OPÇÕES
    image(imgBotaoMenu, (width/2)+166, (height/2)+114);   //CRÉDITOS 
    image(imgBotaoMenu, (width/2)-166, (height/2)+114);  //DESCRIÇÃO 
    imageScale(imgFundoNomeJogo, (width/2), (height/2)-160, 0.7);  //FUNDO NOME JOGO
    imageScale(imgNomeJogo, (width/2)-8, (height/2)-160, 0.75);  //NOME DO JOGO
  pop();
  
  verificarOpcaoMenuInicial(); //FAZ A VERIFICAÇÃO DA OPÇÃO SELECIONADA
  
  
  push();   //TEXTO MENU
    textSize(32);
    textAlign(CENTER, CENTER);
    fill('#db8149');
    stroke('#3f0f08');
    strokeWeight(4);
    text(idioma[0], (width/2)-166, (height/2)+36);  //INICIAR
    text(idioma[1], (width/2)+166, (height/2)+36);   //OPCOES
    text(idioma[2], (width/2)+166, (height/2)+112);  //CREDITOS
    text(idioma[30], (width/2)-166, (height/2)+112); //DESCRIÇÃO
    //text(`X: ${mouseX}\nY: ${mouseY}\n ${width/2}\n ${height/2}`, 100,height/2);
  pop();
}
function verificarOpcaoMenuInicial(){      //FAZ A VERIFICAÇÃO DE MOUSE E TECLADO CONFORME A OPÇÃO ESCOLHIDA
  if(mouse_Moved){   //VERIFICA SE O MOUSE SE MOVE
    if(mouseX > ((width/2)-326) && mouseY > ((height/2)+6) && mouseX < ((width/2)-6) && mouseY < ((height/2)+70)){       
      opcaoMenu((width/2)-314, (height/2)+18, 296, 40, false, false, 2, 1, null, false, true, false, false);
      //INICIAR
    }else if(mouseX > ((width/2)+6) && mouseY > ((height/2)+6) && mouseX < ((width/2)+326) && mouseY < ((height/2)+70)){   
      opcaoMenu((width/2)+18, (height/2)+18, 296, 40, false, false, 3, 2, null, false, true, false, false);
      //OPÇOES
    }else if(mouseX > ((width/2)+6) && mouseY > ((height/2)+82) && mouseX < ((width/2)+326) && mouseY < ((height/2)+146)){   
      opcaoMenu((width/2)+18, (height/2)+94, 296, 40, false, false, 4, 3, null, false, true, false, false);
      //CREDITOS
    }else if(mouseX > ((width/2)-326) && mouseY > ((height/2)+82) && mouseX < ((width/2)-6) && mouseY < ((height/2)+146)){
      opcaoMenu((width/2)-314, (height/2)+94, 296, 40, false, false, 12, 4, null, false, true, false, false);
      //DESCRIÇAO
    }else{
      overBox = false;  //CASO O MOUSE ESTEJA FORA DO BOTÃO DEFINI COMO FALSE
      tocarSomBotoesMenuAgora_Bool = false; //USADO PARA TOCAR O SOM DOS BOTÕES CASO MUDE DE UM PARA O OUTRO
      tocarSomBotoesMenuAntes_Bool = false;
    }
  }

  if(tecla_Press){     //VERIFICA E FAZ O MOVIMENTO DO TECLADO
    if(verificarBotaoSelecionado){ verificarPrimeiraSelecao(1)}
    if(botaoSelecionado === 1){             
      opcaoMenuTeclado((width/2)-314, (height/2)+18, 296, 40, false, false, true, true, true, true, true, 2, true, false, null, 4, 4, 2, 2, null, false, false, false,);
      //INICIAR
    }else if(botaoSelecionado === 2){         
      opcaoMenuTeclado((width/2)+18, (height/2)+18, 296, 40, false, false, true, true, true, true, true, 3, true, false, null, 3, 3, 1, 1, null, false, false, false);
      //OPCOES
    }else if(botaoSelecionado === 3){          
      opcaoMenuTeclado((width/2)+18, (height/2)+94, 296, 40, false, false, true, true, true, true, true, 4, true, false, null, 2, 2, 4, 4, null, false, false, false);
       //CREDITOS
    }else if(botaoSelecionado === 4){
      opcaoMenuTeclado((width/2)-314, (height/2)+94, 296, 40, false, false, true, true, true, true, true, 12, true, false, null, 1, 1, 3, 3, null, false, false, false);
      //DESCRIÇÃO
    }
  }
}


function telaConfiguracoes(){    //EXIBI A TELA DE CONFIGURAÇÕES
  background(imgBackground);
  clouds();

  push(); //EXIBI A IMAGEM DO MENU DE OPÇÕES
    imageMode(CENTER);
    image(imgBotaoMenu, (width/2)-166, (height/2)-38);  //COMO JOGAR
    image(imgBotaoMenu, (width/2)+166, (height/2)-38);    //SOM
    image(imgBotaoMenu, (width/2)-166, (height/2)+38);   //IDIOMA 
    image(imgBotaoMenu, (width/2)+166, (height/2)+38);    //MÚSICA
    image(imgBotaoMenu, (width/2)-166, (height/2)+114);   //TELA CHEIA
    image(imgBotaoMenu, (width/2)+166, (height/2)+114);   //VOLTAR
    image(imgNomeDaTela, (width/2), (height/2)-114);   //NOME OPÇÕES
  pop();
  
  verificarOpcaoConfiguracoes(); //FAZ A VERIFICAÇÃO DA OPÇÃO SELECIONADA

  push();  //EXIBI O TEXTO DO MENU DE OPÇÕES
    textSize(32);
    textAlign(CENTER, CENTER);
    fill('#db8149');
    stroke('#3f0f08');
    strokeWeight(4);

    text(idioma[4], (width/2)-166, (height/2)-40);  //COMO JOGAR
    text(idioma[5], (width/2)-166, (height/2)+36);   //IDIOMA
    text(idioma[6], (width/2)-166, (height/2)+112);  //TELA CHEIA
    text(idioma[7], (width/2)+166, (height/2)-40);  //SOM
    text(idioma[8], (width/2)+166, (height/2)+36);   //MÚSICA
    text(idioma[3], (width/2)+166, (height/2)+112);  //VOLTAR
    text(idioma[1], (width/2), (height/2)-116);  //OPÇÕES
  pop();
}
function verificarOpcaoConfiguracoes(){   //FAZ A VERIFICAÇÃO DE MOUSE E TECLADO CONFORME A OPÇÃO ESCOLHIDA
  if(mouse_Moved){ //VERIFICA A AÇAO DO MOUSE
    if(mouseX > ((width/2)-326) && mouseY > ((height/2)-70) && mouseX < ((width/2)-6) && mouseY < ((height/2)-6)){      
      opcaoMenu((width/2)-314, (height/2)-58, 296, 40, false, false, 8, 1, null, false, null, false, false);
      //COMO JOGAR
    }else if(mouseX > ((width/2)-326) && mouseY > ((height/2)+6) && mouseX < ((width/2)-6) && mouseY < ((height/2)+70)){
      opcaoMenu((width/2)-314, (height/2)+18, 296, 40, false, false, 5, 2, null, false, true, false, false);
      //IDIOMA
    }else if(mouseX > ((width/2)-326) && mouseY > ((height/2)+82) && mouseX < ((width/2)-6) && mouseY < ((height/2)+146)){
      opcaoMenu((width/2)-314, (height/2)+94, 296, 40, false, false, null, 2, null, false, null, true, false);
      //TELA CHEIA
    }else if(mouseX > ((width/2)+6) && mouseY > ((height/2)-70) && mouseX < ((width/2)+326) && mouseY < ((height/2)-6)){      
      opcaoMenu((width/2)+18, (height/2)-58, 296, 40, false, false, 9, 4, null, false, true, false, false);
      //SOM
    }else if(mouseX > ((width/2)+6) && mouseY > ((height/2)+6) && mouseX < ((width/2)+326) && mouseY < ((height/2)+70)){
      opcaoMenu((width/2)+18, (height/2)+18, 296, 40, false, false, 10, 5, null, false, true, false, false);
      //MÚSICA
    }else if(mouseX > ((width/2)+6) && mouseY > ((height/2)+82) && mouseX < ((width/2)+326) && mouseY < ((height/2)+146)){
      opcaoMenu((width/2)+18, (height/2)+94, 296, 40, false, false, 1, 6, 2, false, null, false, false);
      //VOLTAR
    }else{
      overBox = false;
      tocarSomBotoesMenuAgora_Bool = false; //USADO PARA TOCAR O SOM DOS BOTÕES CASO MUDE DE UM PARA O OUTRO
      tocarSomBotoesMenuAntes_Bool = false;
    }
  }

  (playing) ? menuEscape(1, 2, false, false) :  menuEscape(11, 2, false, false);  //VOLTAR PARA TELA ANTERIOR APERTANDO O ESCAPE

  if(tecla_Press){           //VERIFICA E FAZ O MOVIMENTO DO TECLADO
    if(verificarBotaoSelecionado){ verificarPrimeiraSelecao(1)}
    if(botaoSelecionado === 1){             
      opcaoMenuTeclado((width/2)-314, (height/2)-58, 296, 40, false, false, true, true, true, true, true, 8, true, false, null, 3, 2, 4, 4, null, false, false, false);
      //COMO JOGAR
    }else if(botaoSelecionado === 2){       
      opcaoMenuTeclado((width/2)-314, (height/2)+18, 296, 40, false, false, true, true, true, true, true, 5, true, false, null, 1, 3, 5, 5, null, false, false, false);
      //IDIOMA
    }else if(botaoSelecionado === 3){       
      opcaoMenuTeclado((width/2)-314, (height/2)+94, 296, 40, false, false, true, true, true, true, true, null, null, true, 3, 2, 1, 6, 6, null, false, true, false);
      //TELA CHEIA  
    }else if(botaoSelecionado === 4){        
      opcaoMenuTeclado((width/2)+18, (height/2)-58, 296, 40, false, false, true, true, true, true, true, 9, true, false, null, 6, 5, 1, 1, null, false, false, false);
      //SOM
    }else if(botaoSelecionado === 5){       
      opcaoMenuTeclado((width/2)+18, (height/2)+18, 296, 40, false, false, true, true, true, true, true, 10, true, false, null, 4, 6, 2, 2, null, false, false, false);
      //MÚSICA
    }else if(botaoSelecionado === 6){      
      opcaoMenuTeclado((width/2)+18, (height/2)+94, 296, 40, false, false, true, true, true, true, true, 1, false, true, 2, 5, 4, 3, 3, null, false, false, false);
      //VOLTAR
    }
  }
  
}



function telaCreditos(){   //EXIBI A TELA DE CRÉDITOS
  background(imgBackground);
  clouds();

  push(); //EXIBI A IMAGEM DA TELA DE CRÉDITOS
    noFill();
    strokeWeight(4);
    stroke(0);
    imageMode(CENTER);
    image(imgNomeDaTela, (width/2), (height/2)-256);
    image(imgBotaoMenu, (width/2), (height/2)+224);
    image(imgFundoCredito, (width/2), (height/2)-15);
  pop();
  
  verificaOpcaoCreditosOuDescricaoOuComoJogar(); //FAZ A VERIFICAÇÃO DA OPÇÃO SELECIONADA
  
  push();      //EXIBI O TEXTO DOS CRÉDITOS
    textSize(32);
    textAlign(CENTER, CENTER);
    fill('#db8149');
    stroke('#3f0f08');
    strokeWeight(4);
    text(idioma[2], (width/2), (height/2)-258); //CRÉDITOS
    text(idioma[3], (width/2), (height/2)+222); //VOLTAR
    push();
      textSize(20);
      fill('#3f0f08');
      noStroke();
      text(idioma[35], (width/2)+62, (height/2)-110);
      text(idioma[36], (width/2)+62, (height/2)+74);
    pop();
  pop();
}
function telaDescrição(){  //EXIBI A TELA DE DESCRIÇÃO
  background(imgBackground);
  clouds();

  push(); //EXIBI A IMAGEM DA TELA DE DESCRIÇÃO
    noFill();
    strokeWeight(4);
    stroke(0);
    imageMode(CENTER);
    image(imgNomeDaTela, (width/2), (height/2)-256);
    image(imgBotaoMenu, (width/2), (height/2)+224);
    image(imgFundoDescricao, (width/2), (height/2)-15);
  pop();
  
  verificaOpcaoCreditosOuDescricaoOuComoJogar(); //FAZ A VERIFICAÇÃO DA OPÇÃO SELECIONADA
  
  push();      //EXIBI O TEXTO DOS CRÉDITOS
    textSize(32);
    textAlign(CENTER, CENTER);
    fill('#db8149');
    stroke('#3f0f08');
    strokeWeight(4);
    text(idioma[30], (width/2), (height/2)-258); //DESCRIÇÃO
    text(idioma[3], (width/2), (height/2)+222); //VOLTAR
    push();
      textSize(17);
      fill('#3f0f08');
      noStroke();
      text(idioma[37], (width/2)-11, (height/2)-18); //TEXTO DESCRIÇÃO
    pop();
  pop();
}
function telaComoJogar(){  //EXIBI A TELA DE COMO JOGAR
  background(imgBackground);
  clouds();

  push(); //EXIBI A IMAGEM DA TELA DE COMO JOGAR
    noFill();
    strokeWeight(4);
    stroke(0);
    imageMode(CENTER);
    image(gifTutorialGameplay, (width/2), (height/2)+22);
    image(imgFundoComoJogar, (width/2), (height/2)-64);
    image(imgBotaoMenu, (width/2), (height/2)+222);    
    image(imgCentroOperacaoMat, (width/2), (height/2)-264);    
  pop();
  
  verificaOpcaoCreditosOuDescricaoOuComoJogar(); //VERIFICA A OPÇÃO SELECIONADA
  
  push();     //EXIBI O TEXTO DOS COMO JOGAR
    textSize(32);
    textAlign(CENTER, CENTER);
    fill('#db8149');
    stroke('#3f0f08');
    strokeWeight(4);
    text(idioma[3], width/2, (height/2)+220); //VOLTAR
    text(idioma[34], width/2, (height/2)-266); //INSTRUÇÕES
    push()
      textSize(20);
      fill('#3f0f08');
      strokeWeight(1);
      text(idioma[33], (width/2)-163, (height/2)+60);  //OU
    pop();
    push();
      textSize(16);
      textAlign(LEFT);
      fill('#3f0f08');
      noStroke();
      text(idioma[38], (width/2)-332, (height/2)-140);  //TEXTO DE INSTRUÇÕES
    pop();
  pop();
}
function telaContatoEmail(){ //EXIBI O EMAIL PARA CONTATO
  background(imgBackground);
  clouds();
  
  push();
    imageMode(CENTER);
    image(imgEmail, width/2, height/2);
  pop();

  verificaOpcaoCreditosOuDescricaoOuComoJogar();

  push();
    textSize(22);
    textAlign(CENTER, CENTER)
    fill('#3f0f08');
    strokeWeight(1);
    text('giovanisantanaa7@gmail.com', (width/2)-36, (height/2)-6);
  pop();
}
function verificaOpcaoCreditosOuDescricaoOuComoJogar(){   //FAZ A VERIFICAÇÃO DE MOUSE E TECLADO DA TELA DE CREDITOS
  if(mouse_Moved){   //VERIFICA A AÇAO DO MOUSE
    if(mouseX > ((width/2)-160) && mouseY > (height/2)+192 && mouseX < ((width/2)+160) && mouseY < (height/2)+256){
      //VERIFICA EM QUAL TELA ESTÁ PARA QUANDO VOLTAR PARA A TELA ANTERIOR SABER QUAL BOTÃO VAI ESTÁ SELECIONADO
      if(tela === 4){ //CRÉDITOS
        opcaoMenu((width/2)-148, (height/2)+204, 296, 40, false, false, 1, 1, 3, true, false, false, false);  //VOLTAR
      }else if(tela === 12){ //DESCRIÇÃO
        opcaoMenu((width/2)-148, (height/2)+204, 296, 40, false, false, 1, 1, 4, true, false, false, false);  //VOLTAR
      }else if(tela === 8){ //COMO JOGAR
        opcaoMenu((width/2)-148, (height/2)+204, 296, 40, false, false, 3, 1, 1, true, false, false, false);  //VOLTAR
      }
    }else if(tela === 4 && mouseX > ((width/2)-274) && mouseY > (height/2)+85 && mouseX < ((width/2)-210) && mouseY < (height/2)+149){
      opcaoMenu((width/2)-266, (height/2)+93, 48, 48, false, false, 14, 2, 1, true, false, false, false);  //EMAIL
      
    }else if(tela === 14 && mouseX > ((width/2)+133) && mouseY > (height/2)-32 && mouseX < ((width/2)+198) && mouseY < (height/2)+32){
      opcaoMenu((width/2)+142, (height/2)-24, 48, 48, false, false, 4, 2, 1, true, false, false, false);  //SAIR DA TELA DE EMAIL
    }else{
      overBox = false;
      tocarSomBotoesMenuAgora_Bool = false; //USADO PARA TOCAR O SOM DOS BOTÕES CASO MUDE DE UM PARA O OUTRO
      tocarSomBotoesMenuAntes_Bool = false;
    }
  }

  switch (tela) { //VOLTAR PARA TELA ANTERIOR APERTANDO O ESCAPE
    case 4: menuEscape(1, 3, false, false); break;
    case 8: menuEscape(3, 1, true, false); break;
    case 12: menuEscape(1, 4, false, false); break;
    case 14: menuEscape(4, 1, false, false); break;
  }

  if(tecla_Press){       //VERIFICA A TECLA PRESSIONADA
    if(verificarBotaoSelecionado){ verificarPrimeiraSelecao(1)}
    if(botaoSelecionado === 1){ //VOLTAR
      if(tela === 4){ //CRÉDITOS
        opcaoMenuTeclado((width/2)-148, (height/2)+204, 296, 40, false, false, true, true, true, false, false, 1, false, true, 3, 2, 2, null, null, null, false, false, false);
      }else if(tela === 8){ //COMO JOGAR
        opcaoMenuTeclado((width/2)-148, (height/2)+204, 296, 40, false, false, true, false, false, false, false, 3, false, true, 1, null, null, null, null, null, false, false, false);
      }else if(tela === 12){  //DESCRIÇÃO
        opcaoMenuTeclado((width/2)-148, (height/2)+204, 296, 40, false, false, true, false, false, false, false, 1, false, true, 4, null, null, null, null, null, false, false, false);
      }else if(tela === 14){  //EMAIL
        opcaoMenuTeclado((width/2)+142, (height/2)-24, 48, 48, false, false, true, false, false, false, false, 4, false, true, 1, null, null, null, null, null, false, false, false);
      }
    }else if(botaoSelecionado === 2){
      opcaoMenuTeclado((width/2)-266, (height/2)+93, 48, 48, false, false, true, true, true, false, false, 14, false, true, 1, 1, 1, null, null, null, false, false, false);
    }
  }
}



function telaPreJogo(){ //TELA ANTES DE INICIAR A GAMEPLAY DO JOGO
  background(imgBackground);
  clouds();

  push(); //IMAGENS
    imageMode(CENTER);
    image(gifTutorialGameplay, width/2, height/2, 676, 412); //FUNDO
    image(imgBotaoMenu, (width/2), (height/2)-200);    //JOGAR
    image(imgBotaoMenu, (width/2)-166, (height/2)-124);    //DIFICULDADE
    image(imgBotaoMenu, (width/2)+166, (height/2)-124);     //COR DA COBRA
    image(imgBotaoMenu, (width/2), (height/2)+200);     //VOLTAR
  pop();

  verificarOpcaoPreJogo();  //FAZ A VERIFICAÇÃO DA OPÇÃO SELECIONADA

  push();     //EXIBI O TEXTO DA TELA ANTES DO JOGO
    textSize(32);
    textAlign(CENTER, CENTER);
    fill('#db8149');
    stroke('#3f0f08');
    strokeWeight(4);
    text(idioma[3], (width/2), (height/2)+198);   //VOLTAR
    text(idioma[11], (width/2), (height/2)-202);   //JOGAR
    text(idioma[9], (width/2)-166, (height/2)-126);   //DIFICULDADE
    text(idioma[10], (width/2)+166, (height/2)-126);  //COR DA COBRA
    push()
      textSize(20);
      fill('#3f0f08');
      strokeWeight(1);
      text(idioma[33], (width/2)-163, (height/2)+38);  //OU
    pop();
  pop();
}
function verificarOpcaoPreJogo(){    //FAZ A VERIFICAÇAO DE MOUSE E TECLADO DA TELA PRE JOGO
  if(mouse_Moved){   //VERIFICA SE O MOUSE SE MOVE
    if(mouseX > ((width/2)-160) && mouseY > ((height/2)-232) && mouseX < ((width/2)+160) && mouseY < ((height/2)-168)){
      opcaoMenu((width/2)-148, (height/2)-220, 296, 40, false, false, 11, 1, null, false, null, false, true, gerarNumero, dificuldade, dificuldade, true, true);
      //JOGAR
    }else if(mouseX > ((width/2)-326) && mouseY > ((height/2)-156) && mouseX < ((width/2)-6) && mouseY < ((height/2)-92)){      
      opcaoMenu((width/2)-314, (height/2)-144, 296, 40, false, false, 6, 2, null, false, true, false, false);
      //DIFICULDADE
    }else if(mouseX > ((width/2)+6) && mouseY > ((height/2)-156) && mouseX < ((width/2)+326) && mouseY < ((height/2)-92)){      
      opcaoMenu((width/2)+18, (height/2)-144, 296, 40, false, false, 7, 3, null, false, true, false, false);
      //ESCOLHER COR DA COBRA
    }else if(mouseX > ((width/2)-160) && mouseY > ((height/2)+168) && mouseX < ((width/2)+160) && mouseY < ((height/2)+232)){
      opcaoMenu((width/2)-148, (height/2)+180, 296, 40, false, false, 1, 4, 1, false, null, false, false);
      //VOLTAR PARA O MENU INICIAL
    }else{
      overBox = false;
      tocarSomBotoesMenuAgora_Bool = false; //USADO PARA TOCAR O SOM DOS BOTÕES CASO MUDE DE UM PARA O OUTRO
      tocarSomBotoesMenuAntes_Bool = false;
    }
  }

  menuEscape(1, 1, true, false);   //VOLTAR PARA TELA ANTERIOR APERTANDO O ESCAPE

  if(tecla_Press){  //VERIFICA A TECLA PRESSIONADA E FAZ O MOVIMENTO
    if(verificarBotaoSelecionado){ verificarPrimeiraSelecao(1)}
    if(botaoSelecionado === 1){     
      opcaoMenuTeclado((width/2)-148, (height/2)-220, 296, 40, false, false, true, false, true, true, true, 11, false, false, null, null, 2, 2, 3, null, false, false, true, gerarNumero, dificuldade, dificuldade, true, true);
      //JOGAR
    }else if(botaoSelecionado === 2){     
      opcaoMenuTeclado((width/2)-314, (height/2)-144, 296, 40, false, false, true, true, true, true, true, 6, true, false, null, 1, 4, 3, 3, 2, true, false, false);
      //DIFICULDADE
    }else if(botaoSelecionado === 3){     
      opcaoMenuTeclado((width/2)+18, (height/2)-144, 296, 40, false, false, true, true, true, true, true, 7, true, false, null, 1, 4, 2, 2, 3, true, false, false);
      //COR DA COBRA
    }else if(botaoSelecionado === 4){     
      opcaoMenuTeclado((width/2)-148, (height/2)+180, 296, 40, false, false, true, true, false, true, true, 1, false, true, 1, voltarParaUltimoBotaoSelecionado, null, 2, 3, voltarParaUltimoBotaoSelecionado, true, false, false);
      //VOLTAR PARA O MENU INICIAL
    }
  }
}

function telaDificuldade(){ //EXIBI A TELA DE DIFICULDADE
  background(imgBackground);
  clouds();

  push(); //IMAGENS DA TELA DE DIFICULDADE
    image(imgBotaoMenu, (width/2)-160, (height/2)-184);    //FACIL +
    image(imgBotaoMenu, (width/2)-160, (height/2)-108);    //MEDIO -
    image(imgBotaoMenu, (width/2)-160, (height/2)-32);     //DIFICIL *
    image(imgBotaoMenu, (width/2)-160, (height/2)+44);     //MUITO DIFICIL ÷
    image(imgBotaoMenu, (width/2)-160, (height/2)+120);     //TODOS + - * ÷
  pop();

  verOpcDificuldade();  //FAZ A VERIFICAÇÃO DA OPÇÃO SELECIONADA
  
  push();     //EXIBI O TEXTO DA TELA DE DIFICULDADE
    textSize(32);
    textAlign(CENTER, CENTER);
    fill('#db8149');
    stroke('#3f0f08');
    strokeWeight(4);
    text(idioma[12], (width/2), (height/2)-154);    //FACIL +
    text(idioma[13], (width/2), (height/2)-78);     //MEDIO -
    text(idioma[14], (width/2), (height/2)-2);       //DIFICIL *
    text(idioma[15], (width/2), (height/2)+74);     //MUITO DIFICIL ÷
    text(idioma[16], (width/2), (height/2)+150);     //TODOS + - * ÷
  pop();
}
function verOpcDificuldade(){   //FAZ A VERIFICAÇAO DE MOUSE E TECLADO DA TELA DE DIFICULDADE
  if(mouse_Moved){  //VERIFICA A SE O MOUSE SE MOVE
    if(mouseX > ((width/2)-160) && mouseY > ((height/2)-184) && mouseX < ((width/2)+160) && mouseY < ((height/2)-120)){
      opcaoMenu((width/2)-148, (height/2)-172, 296, 40, false, false, 2, 1, 2, false, null, false, true, gerarNumero, dificuldade, 1, true, false);
      //FACIL +
    }else if(mouseX > ((width/2)-160) && mouseY > ((height/2)-108) && mouseX < ((width/2)+160) && mouseY < ((height/2)-44)){      
      opcaoMenu((width/2)-148, (height/2)-96, 296, 40, false, false, 2, 2, 2, false, null, false, true, gerarNumero, dificuldade, 2, true, false);
      //MEDIO -
    }else if(mouseX > ((width/2)-160) && mouseY > ((height/2)-32) && mouseX < ((width/2)+160) && mouseY < ((height/2)+32)){
      opcaoMenu((width/2)-148, (height/2)-20, 296, 40, false, false, 2, 3, 2, false, null, false, true, gerarNumero, dificuldade, 3, true, false);
      //DIFICIL *
    }else if(mouseX > ((width/2)-160) && mouseY > ((height/2)+44) && mouseX < ((width/2)+160) && mouseY < ((height/2)+108)){
      opcaoMenu((width/2)-148, (height/2)+56, 296, 40, false, false, 2, 4, 2, false, null, false, true, gerarNumero, dificuldade, 4, true, false);
      // MUITO DIFICIL ÷
    }else if(mouseX > ((width/2)-160) && mouseY > (height/2)+120 && mouseX < ((width/2)+160) && mouseY < (height/2)+184){
      opcaoMenu((width/2)-148, (height/2)+132, 296, 40, false, false, 2, 5, 2, false, null, false, true, gerarNumero, dificuldade, 5, true, false);
      //TODOS + - * ÷
    }else{
      overBox = false;
      tocarSomBotoesMenuAgora_Bool = false; //USADO PARA TOCAR O SOM DOS BOTÕES CASO MUDE DE UM PARA O OUTRO
      tocarSomBotoesMenuAntes_Bool = false;
    }
  }
  
  menuEscape(2, 2, false, false);    //VOLTAR PARA TELA ANTERIOR APERTANDO O ESCAPE

  if(tecla_Press){       //VERIFICA E FAZ O MOVIMENTO DO TECLADO
    if(verificarBotaoSelecionado){ verificarPrimeiraSelecao(1)}
    if(botaoSelecionado === 1){             //FACIL +
      opcaoMenuTeclado((width/2)-148, (height/2)-172, 296, 40, false, false, true, true, true, false, false, 2, 
      false, true, 2, 5, 2, null, null, null, false, false, true, gerarNumero, 1, 1, true, false);

    }else if(botaoSelecionado === 2){         //MEDIO -
      opcaoMenuTeclado((width/2)-148, (height/2)-96, 296, 40, false, false, true, true, true, false, false, 2, 
      false, true, 2, 1, 3, null, null, null, false, false, true, gerarNumero, 2, 2, true, false);

    }else if(botaoSelecionado === 3){           //DIFICIL *
      opcaoMenuTeclado((width/2)-148, (height/2)-20, 296, 40, false, false, true, true, true, false, false, 2, 
      false, true, 2, 2, 4, null, null, null, false, false, true, gerarNumero, 3, 3, true, false);

    }else if(botaoSelecionado === 4){         //MUITO DIFICIL ÷
      opcaoMenuTeclado((width/2)-148, (height/2)+56, 296, 40, false, false, true, true, true, false, false, 2, 
      false, true, 2, 3, 5, null, null, null, false, false, true, gerarNumero, 4, 4, true, false);

    }else if(botaoSelecionado === 5){           //TODAS + - * ÷
      opcaoMenuTeclado((width/2)-148, (height/2)+132, 296, 40, false, false, true, true, true, false, false, 2, 
      false, true, 2, 4, 1, null, null, null, false, false, true, gerarNumero, 5, 5, true, false);
    }
  }
}


//VERIFICA A OPÇÃO SELECIONADA NO MENU DE CORES E IDIOMA
function opcaoMenuCor_e_Idioma(xRect, yRect, xRectSize, yRectSize, texto, argTexto, func, argFunc, selecAtual, verificarBotaoSelecionado_bool_mudaTela){
  //MUDA ESTADO
  tocarSomBotoesMenuAgora_Bool = true;
  
  push(); //DEIXAR BOTAO SELECIONADO MAIS ESCURO
    fill(0,0,0,100);
    noStroke();
    rect(xRect, yRect, xRectSize, yRectSize);
  pop();
  
  if(tocarSomBotoesMenuAgora_Bool && !tocarSomBotoesMenuAntes_Bool){
    somBotaoMenu.play();
  }

  if(texto){  //DEFINI O TEXTO DA COR SELECIONADA
    textoCorCobra(argTexto);
  }

  botaoSelecionado = selecAtual;  //DEFINI EM QUAL BOTÃO ESTÁ O MOUSE
  verificarBotaoSelecionado = verificarBotaoSelecionado_bool_mudaTela;  //VERIFICA SE O MOUSE JÁ PASSOU POR ALGUM BOTÃO
  overBox = true;

  if(lock){
    func(argFunc);  //DEFINI UMA FUNÇÃO E ARGUMENTO
    voltarCorSelecionada = selecAtual;  //VOLTA PARA COR SELECIONADA AO ENTRAR NA TELA DE CORES DA COBRA
    lock = false;
  }

  tocarSomBotoesMenuAntes_Bool = true;
}
function mostrarCorMenu(xImg, yImg, xSquare, ySquare, sizeSquare, cor, img){  //MOSTRA AS CORES NA TELA DE COR DA COBRA
  push(); 
      fill(cor);
      stroke(cor);
      square(xSquare, ySquare, sizeSquare);
      image(img, xImg, yImg);
  pop();
}
//FAZ A VERIFICAÇÃO DO TECLADO NA TELA DE COR DA COBRA E IDIOMA
function opcaoMenuCorTeclado(xSquare, ySquare, sizeSquare, enter, up, down, left, right, upSelec, downSelec, leftSelec, rightSelec, 
  texto_bool, func_texto, argTexto, func, argFunc, selecAtual){
  
  push(); //DEIXAR BOTAO SELECIONADO MAIS ESCURO
    noStroke();
    fill(0,0,0,100);
    square(xSquare, ySquare, sizeSquare);
  pop();

  if(texto_bool) func_texto(argTexto);  //USADO PARA MOSTRAR A COR SELECIONADA
  
  if(keyIsPressed){ //VERIFICA SE A TECLA ESTÁ SENDO PRESSIONADA
    if(enter && keyCode === 13 ^ keyCode === 32){
      func(argFunc);  //DEFINI UMA FUNÇÃO E UM ARGUMENTO
      voltarCorSelecionada = selecAtual;  //DEFINI QUAL COR ESTÁ SELECIONADA PARA QUANDO VOLTAR PARA A TELA DE CORES A COR ATUAL ESTÁ SELECIONADA
    }else if(up && keyCode === 87 ^ keyCode === UP_ARROW){
      botaoSelecionado = upSelec; //DEFINI O PROXIMO BOTÃO SELECIONADO
      somBotaoMenu.play();
    }else if(down &&  keyCode === 83 ^ keyCode === DOWN_ARROW){
      botaoSelecionado = downSelec;//DEFINI O PROXIMO BOTÃO SELECIONADO
      voltarParaUltimoBotaoSelecionado = selecAtual; //USADO PARA VOLTAR PARA ULTIMA COR SELECIONADA
      somBotaoMenu.play();
    }else if(left && keyCode === 65 ^ keyCode === LEFT_ARROW){
      botaoSelecionado = leftSelec; //DEFINI O PROXIMO BOTÃO SELECIONADO
      somBotaoMenu.play();
    }else if(right && keyCode === 68 ^ keyCode === RIGHT_ARROW){
      botaoSelecionado = rightSelec;  //DEFINI O PROXIMO BOTÃO SELECIONADO
      somBotaoMenu.play();
    }
    keyCode = 0; //USADO PARA SALTAR APENAS UM BOTÃO POR VEZ
  }
}

function telaCorCobra(){ //EXIBI A TELA DE ESCOLHA DE CORES
  background(imgBackground);
  clouds();

  push(); //COBRA
    imageMode(CENTER);
    push();
      tint(tinta);
      image(gifCobraAndandoTelaCor, width/2, (height/2)+104);
    pop();
    image(imgOlhoCobraMovimentoTelaCor, width/2, (height/2)+104);
  pop();
  
  push();
    image(imgBotaoMenu, (width/2)-160, (height/2)+204);     //VOLTAR

    mostrarCorMenu((width/2)-184, (height/2)-172, (width/2)-172, (height/2)-160, 40, '#363636', imgBotaoMenuCor);     //CINZA
    mostrarCorMenu((width/2)-184, (height/2)-95, (width/2)-172, (height/2)-83, 40, '#CFCFCF', imgBotaoMenuCor);     //BRANCO
    mostrarCorMenu((width/2)-108, (height/2)-172, (width/2)-96, (height/2)-160, 40, '#000080', imgBotaoMenuCor);     //AZUL
    mostrarCorMenu((width/2)-108, (height/2)-95, (width/2)-96, (height/2)-83, 40, '#40E0D0', imgBotaoMenuCor);     //TURQUESA
    mostrarCorMenu((width/2)-32, (height/2)-172, (width/2)-20, (height/2)-160, 40, '#008B00', imgBotaoMenuCor);      //VERDE
    mostrarCorMenu((width/2)-32, (height/2)-95, (width/2)-20, (height/2)-83, 40, '#FFD700', imgBotaoMenuCor);      //AMARELO
    mostrarCorMenu((width/2)+44, (height/2)-172, (width/2)+56, (height/2)-160, 40, '#8B0000', imgBotaoMenuCor);      //VERMELHO
    mostrarCorMenu((width/2)+44, (height/2)-95, (width/2)+56, (height/2)-83, 40, '#EE7600', imgBotaoMenuCor);      //LARANJA
    mostrarCorMenu((width/2)+120, (height/2)-172, (width/2)+132, (height/2)-160, 40, '#551A8B', imgBotaoMenuCor);     //ROXO
    mostrarCorMenu((width/2)+120, (height/2)-95, (width/2)+132, (height/2)-83, 40, '#CD6090', imgBotaoMenuCor);     //ROSA
  pop();

  textoCorCobra();  //CHAMA A FUNÇÃO DE TEXTO DINÂMICO
  verificarOpcaoCorCobra(); //CHAMA A FUNÇÃO DE VERIFICAÇÃO DE MOUSE E TECLADO

  push(); //EXIBI O TEXTO FIXO DA TELA DE CORES
    textSize(32);
    textAlign(CENTER, CENTER);
    fill('#db8149');
    stroke('#3f0f08');
    strokeWeight(4);
    text(idioma[3], (width/2), (height/2)+234);   //VOLTAR
    text(idioma[17], (width/2), (height/2)-204);  //ESCOLHA UMA COR
  pop();
}
function verificarOpcaoCorCobra(){  //VEFICAÇÃO AÇÃO DO MOUSE E TECLADO
  if(mouse_Moved){ //VERIFICA SE O MOUSE SE MOVE
    if(mouseX > ((width/2)-184) && mouseY > ((height/2)-172) && mouseX < ((width/2)-120) && mouseY < ((height/2)-108)){
      opcaoMenuCor_e_Idioma((width/2)-172, (height/2)-160, 40, 40, true, 0, mudarCorCobra, 0, 1, false);
      //ESCOLHE CINZA
    }else if(mouseX > ((width/2)-184) && mouseY > ((height/2)-95) && mouseX < ((width/2)-120) && mouseY < ((height/2)-31)){
      opcaoMenuCor_e_Idioma((width/2)-172, (height/2)-83, 40, 40, true, 1, mudarCorCobra, 1, 2, false);
      //ESCOLHE BRANCO
    }else if(mouseX > ((width/2)-108) && mouseY > ((height/2)-172) && mouseX < ((width/2)-44) && mouseY < ((height/2)-108)){
      opcaoMenuCor_e_Idioma((width/2)-96, (height/2)-160, 40, 40, true, 2, mudarCorCobra, 2, 3, false);
      //ESCOLHE AZUL
    }else if(mouseX > ((width/2)-108) && mouseY > ((height/2)-95) && mouseX < ((width/2)-44) && mouseY < ((height/2)-31)){
      opcaoMenuCor_e_Idioma((width/2)-96, (height/2)-83, 40, 40, true, 3, mudarCorCobra, 3, 4, false);
      //ESCOLHE TURQUESA
    }else if(mouseX > ((width/2)-32) && mouseY > ((height/2)-172) && mouseX < ((width/2)+32) && mouseY < ((height/2)-108)){
      opcaoMenuCor_e_Idioma((width/2)-20, (height/2)-160, 40, 40, true, 4, mudarCorCobra, 4, 5, false);
      //ESCOLHE VERDE
    }else if(mouseX > ((width/2)-32) && mouseY > ((height/2)-95) && mouseX < ((width/2)+32) && mouseY < ((height/2)-31)){
      opcaoMenuCor_e_Idioma((width/2)-20, (height/2)-83, 40, 40, true, 5, mudarCorCobra, 5, 6, false);
      //ESCOLHE AMARELO
    }else if(mouseX > ((width/2)+44) && mouseY > ((height/2)-172) && mouseX < ((width/2)+108) && mouseY < ((height/2)-108)){
      opcaoMenuCor_e_Idioma((width/2)+56, (height/2)-160, 40, 40, true, 6, mudarCorCobra, 6, 7, false);
      //ESCOLHE VERMELHO
    }else if(mouseX > ((width/2)+44) && mouseY > ((height/2)-95) && mouseX < ((width/2)+108) && mouseY < ((height/2)-31)){
      opcaoMenuCor_e_Idioma((width/2)+56, (height/2)-83, 40, 40, true, 7, mudarCorCobra, 7, 8, false);
      //ESCOLHE LARANJA
    }else if(mouseX > ((width/2)+120) && mouseY > ((height/2)-172) && mouseX < ((width/2)+184) && mouseY < ((height/2)-108)){
      opcaoMenuCor_e_Idioma((width/2)+132, (height/2)-160, 40, 40, true, 8, mudarCorCobra, 8, 9, false);
      //ESCOLHE ROXO
    }else if(mouseX > ((width/2)+120) && mouseY > ((height/2)-95) && mouseX < ((width/2)+184) && mouseY < ((height/2)-31)){
      opcaoMenuCor_e_Idioma((width/2)+132, (height/2)-83, 40, 40, true, 9, mudarCorCobra, 9, 10, false);
      //ESCOLHE ROSA
    }else if(mouseX > ((width/2)-160) && mouseY > ((height/2)+204) && mouseX < ((width/2)+160) && mouseY < ((height/2)+268)){
      opcaoMenu((width/2)-148, (height/2)+216, 296, 40, false, false, 2, 11, 3, false, false, false, false);
      //VOLTAR PARA O MENU INICIAL
    }else{
      overBox = false;
      tocarSomBotoesMenuAgora_Bool = true;
      tocarSomBotoesMenuAntes_Bool = true;
    }
  }

  menuEscape(2, 3, false, false);    //VOLTAR PARA TELA ANTERIOR APERTANDO O ESCAPE

  if(tecla_Press){             //VERIFICA A AÇAO DO TECLADO E FAZ O MOVIMENTO
    if(verificarBotaoSelecionado){ verificarPrimeiraSelecao(voltarCorSelecionada)}
    if(botaoSelecionado === 1){             //CINZA
      opcaoMenuCorTeclado((width/2)-172, (height/2)-160, 40, true, false, true, true, true, null, 2, 9, 3, true, textoCorCobra, 0, mudarCorCobra, 0, 1);

    }else if(botaoSelecionado === 2){     //BRANCO
      opcaoMenuCorTeclado((width/2)-172, (height/2)-83, 40, true, true, true, true, true, 1, 11, 10, 4, true, textoCorCobra, 1, mudarCorCobra, 1, 2);

    }else if(botaoSelecionado === 3){       //AZUL
      opcaoMenuCorTeclado((width/2)-96, (height/2)-160, 40, true, false, true, true, true, null, 4, 1, 5, true, textoCorCobra, 2, mudarCorCobra, 2, 3);

    }else if(botaoSelecionado === 4){     //TURQUESA
      opcaoMenuCorTeclado((width/2)-96, (height/2)-83, 40, true, true, true, true, true, 3, 11, 2, 6, true, textoCorCobra, 3, mudarCorCobra, 3, 4);
      
    }else if(botaoSelecionado === 5){     //VERDE
      opcaoMenuCorTeclado((width/2)-20, (height/2)-160, 40, true, false, true, true, true, null, 6, 3, 7, true, textoCorCobra, 4, mudarCorCobra, 4, 5);

    }else if(botaoSelecionado === 6){     //AMARELO
      opcaoMenuCorTeclado((width/2)-20, (height/2)-83, 40, true, true, true, true, true, 5, 11, 4, 8, true, textoCorCobra, 5, mudarCorCobra, 5, 6);

    }else if(botaoSelecionado === 7){     //VERMELHO
      opcaoMenuCorTeclado((width/2)+56, (height/2)-160, 40, true, false, true, true, true, null, 8, 5, 9, true, textoCorCobra, 6, mudarCorCobra, 6, 7);

    }else if(botaoSelecionado === 8){     //LARANJA
      opcaoMenuCorTeclado((width/2)+56, (height/2)-83, 40, true, true, true, true, true, 7, 11, 6, 10, true, textoCorCobra, 7, mudarCorCobra, 7, 8);

    }else if(botaoSelecionado === 9){     //ROXO
      opcaoMenuCorTeclado((width/2)+132, (height/2)-160, 40, true, false, true, true, true, null, 10, 7, 1, true, textoCorCobra, 8, mudarCorCobra, 8, 9);

    }else if(botaoSelecionado === 10){  //ROSA
      opcaoMenuCorTeclado((width/2)+132, (height/2)-83, 40, true, true, true, true, true, 9, 11, 8, 2, true, textoCorCobra, 9, mudarCorCobra, 9, 10);

    }else if(botaoSelecionado === 11){      //VOLTAR
      opcaoMenuTeclado((width/2)-148, (height/2)+216, 296, 40, false, false, true, true, false, false, false, 2, false, true, 3, voltarParaUltimoBotaoSelecionado, null, null, null, null, false, false, false);

    }
  }
}
function mudarCorCobra(c){ //FAZ A MUDANÇA DA COR DA COBRA
  switch (c) {
    case 0: tinta = ('#363636'); break;  //CINZA
    case 1: tinta = ('#FFFFFF'); break;  //BRANCO
    case 2: tinta = ('#000080'); break;  //AZUL
    case 3: tinta = ('#40E0D0'); break;  //TURQUESA
    case 4: tinta = ('#008B00'); break;  //VERDE
    case 5: tinta = ('#FFD700'); break;  //AMARELO
    case 6: tinta = ('#8B0000'); break;  //VERMELHO
    case 7: tinta = ('#EE7600'); break;  //LARANJA
    case 8: tinta = ('#551A8B'); break;  //ROXO
    case 9: tinta = ('#CD6090'); break;  //ROSA
    default: tinta = 255; break;
  }
}
function textoCorCobra(c){  //DEFINI QUAL TEXTO COM O NOME DA COR SERÁ MOSTRADO NA TELA
  push();
    textSize(32);
    textAlign(CENTER, CENTER);
    fill('#db8149');
    stroke('#3f0f08');
    strokeWeight(4);
    
    switch (c) {  //DEFINI QUAL COR ESTÁ SELECIONADA
      case 0: text(idioma[18], (width/2), (height/2)-8); break; //CINZA
      case 1: text(idioma[19], (width/2), (height/2)-8); break; //BRANCO
      case 2: text(idioma[20], (width/2), (height/2)-8); break; //AZUL  
      case 3: text(idioma[21], (width/2), (height/2)-8); break; //TURQUESA   
      case 4: text(idioma[22], (width/2), (height/2)-8); break; //VERDE
      case 5: text(idioma[23], (width/2), (height/2)-8); break; //AMARELO 
      case 6: text(idioma[24], (width/2), (height/2)-8); break; //VERMELHO
      case 7: text(idioma[25], (width/2), (height/2)-8); break; //LARANJA    
      case 8: text(idioma[26], (width/2), (height/2)-8); break; //ROXO
      case 9: text(idioma[27], (width/2), (height/2)-8); break; //ROSA
    }
  pop();
}



function telaIdiomas(){  //EXIBI A TELA DE IDIOMAS
  background(imgBackground);
  clouds();

  push(); //IMAGENS
    image(imgBotaoMenu, (width/2)-160, (height/2)-108); 
    image(imgBotaoMenu, (width/2)-160, (height/2)-32);
    image(imgBotaoMenu, (width/2)-160, (height/2)+44);
  pop();

  verificarOpcaoIdioma(); //VERIFICA AÇÃO DO MOUSE OU TECLADO

  push();  //EXIBI O TEXTO NO MENU DE IDIOMAS
    textSize(32);
    textAlign(CENTER, CENTER);
    fill('#db8149');
    stroke('#3f0f08');
    strokeWeight(4);
    text('PORTUGUÊS', (width/2), (height/2)-78);
    text('INGLÊS', (width/2), (height/2)-2);
    text(idioma[3], (width/2), (height/2)+74);  //VOLTAR
  pop();
}
function verificarOpcaoIdioma(){    //FAZ A VERIFICAÇAO DE MOUSE E TECLADO DA TELA DE IDIOMA
  if(mouse_Moved){   //VERIFICAR SE O MOUSE SE MOVE
    if(mouseX > ((width/2)-160) && mouseY > ((height/2)-108) && mouseX < ((width/2)+160) && mouseY < ((height/2)-44)){      
      opcaoMenuCor_e_Idioma((width/2)-148, (height/2)-96, 296, 40, false, false, linguagem, 1, 1, false);
      //PORTUGUES
    }else if(mouseX > ((width/2)-160) && mouseY > ((height/2)-32) && mouseX < ((width/2)+160) && mouseY < ((height/2)+32)){
      opcaoMenuCor_e_Idioma((width/2)-148, (height/2)-20, 296, 40, false, false, linguagem, 2, 2, false);
      //INGLES  
    }else if(mouseX > ((width/2)-160) && mouseY > ((height/2)+44) && mouseX < ((width/2)+160) && mouseY < ((height/2)+108)){
      opcaoMenu((width/2)-148, (height/2)+56, 296, 40, false, false, 3, 3, 2, false, false, false, false);
      //VOLTAR  
    }else{
      overBox = false;
      tocarSomBotoesMenuAgora_Bool = false;
      tocarSomBotoesMenuAntes_Bool = false;
    }
  }

  menuEscape(3, 2, false, false);  //VOLTAR PARA TELA ANTERIOR APERTANDO O ESCAPE

  if(tecla_Press){  //VERIFICA SE ALGUMA TECLA É PRESSIONADA
    if(verificarBotaoSelecionado){ verificarPrimeiraSelecao(1) }
    if(botaoSelecionado === 1){         
      opcaoMenuTeclado((width/2)-148, (height/2)-96, 296, 40, false, false, true, true, true, false, false, 5, false, false, null, 3, 2, null, null, null, false, false, true, linguagem, 1, dificuldade, false, false);
      //PORTUGUES
    }else if(botaoSelecionado === 2){     
      opcaoMenuTeclado((width/2)-148, (height/2)-20, 296, 40, false, false, true, true, true, false, false, 5, false, false, null, 1, 3, null, null, null, false, false, true, linguagem, 2, dificuldade, false, false);
      //INGLES
    }else if(botaoSelecionado === 3){     
      opcaoMenuTeclado((width/2)-148, (height/2)+56, 296, 40, false, false, true, true, true, false, false, 3, false, true, 2, 2, 1, null, null, null, false, false, false);
      //VOLTAR
    }
  }
}
function linguagem(l){  //Lista de palavras em arrays para mudar o idioma
  let idioma_PTBR = [
    'INICIAR',    //0
    'OPÇÕES',     //1
    'CRÉDITOS',   //2
    'VOLTAR',     //3
    'COMO JOGAR', //4
    'IDIOMA',     //5
    'TELA CHEIA', //6
    'SOM',        //7
    'MÚSICA',     //8
    'DIFICULDADE',  //9
    'COR DA COBRA', //10
    'JOGAR',        //11
    'FÁCIL +',      //12
    'MÉDIO -',      //13
    'DIFÍCIL ×',    //14
    'MUITO DIFÍCIL ÷',  //15
    'TODAS + - × ÷',    //16
    'ESCOLHA UMA COR',  //17
    'CINZA',    //18
    'BRANCO',   //19
    'AZUL',     //20
    'TURQUESA', //21
    'VERDE',    //22
    'AMARELO',  //23
    'VERMELHO', //24
    'LARANJA',  //25
    'ROXO',     //26
    'ROSA',     //27
    'CONTINUAR',//28
    'SAIR',     //29
    'DESCRIÇÃO',//30
    'FIM DE JOGO',  //31
    'PONTUAÇÃO',    //32
    'OU',           //33
    'INSTRUÇÕES',    //34
    `
    Giovani Santana
    Estudante do curso de Ciências e
    Tecnologia, na Universidade Federal
    do Rio Grande do Norte.
    `,    //35
    `
    Programador: Giovani Santana
    Docente: Filipe Taveiros
    Arte: Giovani Santana
    Música: Matthew Pablo
    `,   //36
    `
    Snake Math é um jogo inspirado no clássico jogo Snake com 
    uma temática inspirada no jogo Stardew Valley. Neste jogo 
    o jogador deve resolver operações de matemáticas básicas 
    (adição, subtração, multiplicação e divisão), que aparecerá 
    na parte superior da tela, guiando a cobra, o jogador 
    deve buscar o resultado correto da operação matemática.
    
    Público alvo: 4º ano do Ensino Fundamental

    Matéria: Matemática

    Habilidades: (EF04MA05) Utilizar as propriedades das 
    operações para desenvolver estratégias de cálculo.
    `,  //37
    `
    • Resolva a operação matemática que aparece na parte de cima da tela
    • Use as teclas WASD ou as Setas do teclado para mudar a direção da cobra
    • Pegue a comida com resultado correto para aumentar o tamanho da cobra
    • Ao pegar comida com o resultado incorreto uma vida será perdida
    • Você poderá ganhar 1 vida se comer 10 comidas certas em sequência
    • Se você não tiver mais vidas e pegar um resultado incorreto o jogo acaba
    • Se você bater a cabeça da cobra no corpo dela o jogo acaba
    `,  //38
  ];

  let idioma_EN = [
    'START',
    'OPTIONS',
    'CREDITS',
    'BACK',
    'HOW TO PLAY',
    'LANGUAGE',
    'FULL SCREEN',
    'SOUND',
    'MUSIC',
    'DIFFICULTY',
    'SNAKE COLOR',
    'PLAY',
    'EASY +',
    'MEDIUM -',
    'HARD ×',
    'VERY HARD ÷',
    'ALL + - × ÷',
    'CHOOSE A COLOR',
    'GRAY',
    'WHITE',
    'BLUE',
    'TURQUOISE',
    'GREEN',
    'YELLOW',
    'RED',
    'ORANGE',
    'PURPLE',
    'PINK',
    'CONTINUE',
    'EXIT',
    'DESCRIPTION',
    'GAME OVER',
    'SCORE',
    'OR',
    'INSTRUCTIONS',
    `
    Giovani Santana
    Student of Science and Technology 
    at the Federal University of 
    Rio Grande do Norte.
    `,
    `
    Programmer: Giovani Santana
    Instructor: Filipe Taveiros
    Art: Giovani Santana
    Song: Matthew Pablo 
    `,
    `
    Snake Math is a game inspired by the classic Snake game 
    with a theme inspired by the Stardew Valley game. In this 
    game the player must solve basic math operations (addition, 
    subtraction, multiplication and division), which will appear 
    at the top of the screen, guiding the snake, the player 
    must seek the correct result of the mathematical operation.
 
    Target Audience: Elementary School

    Subject: Math

    Skills: (EF04MA05) Use the properties of 
    operations to develop calculation strategies.
    `,
    `
    • Solve the math operation that appears at the top of the screen
    • Use the WASD or arrow keys to change the snake's direction
    • Pick up food with the correct result to increase the snake's size
    • When you pick up food with the incorrect result a life will be lost
    • You can gain 1 life if you eat 10 correct foods in a row
    • If you have no more lives and get an incorrect result the game is over
    • If you hit the snake's head on its body the game is over
    `,
  ];
  
  if(l == 1){
    idioma = idioma_PTBR;
  }else if(l == 2){
    idioma = idioma_EN;
  }
}



//VERIFICAÇÃO DE MOUSE PARA O MENU DE SOM OU MÚSICA
function verificarOpcaoMenuSomOuMusica(xRect, yRect, xRectSize, yRectSize, selecAtual, verificarBotaoSelecionado_bool_mudaTela, verSomBool, definirVolume, argVolume){
  //MUDANÇA DE ESTADO
  tocarSomBotoesMenuAgora_Bool = true;
  
  push(); //DEIXAR BOTAO SELECIONADO MAIS ESCURO
    fill(0,0,0,100);
    noStroke();
    rect(xRect, yRect, xRectSize, yRectSize);
  pop();  
  
  if(tocarSomBotoesMenuAgora_Bool && !tocarSomBotoesMenuAntes_Bool){
    somBotaoMenu.play();
  }

  botaoSelecionado = selecAtual; //DEFINI EM QUAL BOTÃO ESTÁ O MOUSE
  verificarBotaoSelecionado = verificarBotaoSelecionado_bool_mudaTela; //VERIFICA SE O MOUSE JÁ PASSOU POR ALGUM BOTÃO
  overBox = true;
  
  if(lock){
    if(verSomBool){ //VERIFICA SE É O MENU DE SOM OU MÚSICA
      somBotaoMenu.setVolume(definirVolume); //DEFINI O VOLUME DO SONS DO JOGO
      somFood.setVolume(definirVolume);
      verificarVolumeSom = argVolume;   //DEFINE O VOLUME QUE VAI ESTÁ SELECIONADO CASO VOLTE NA TELA DE VOLUME DE SOM
    }else{
      musicaFundoJogo.setVolume(definirVolume); //DEFINI O VOLUME DA MÚSICA DO JOGO
      verificarVolumeAtualDaMusica = definirVolume;
      verificarVolumeMusica = argVolume;  //DEFINE O VOLUME QUE VAI ESTÁ SELECIONADO CASO VOLTE NA TELA DE VOLUME DE MÚSICA
    }
    lock = false;
    somBotaoMenu.play();
  }

  //MUDANÇA DE ESTADO
  tocarSomBotoesMenuAntes_Bool = true;
}
//VERIFICAÇÃO DE TECLADO PARA O MENU DE SOM OU MÚSICA
function verificarOpcaoMenuTecladoSomOuMusica(xRect, yRect, xRectSize, yRectSize, verSomBool, enter, up, down, left, right, definirVolume, argVolume,
  upSelec, downSelec, leftSelec ,rightSelec, upTela, downTela, leftTela){
  
  push(); //DEIXAR BOTAO SELECIONADO MAIS ESCURO
    fill(0,0,0,100);
    noStroke();
    rect(xRect, yRect, xRectSize, yRectSize);
  pop();

  if(keyIsPressed){ //VERIFICA SE ALGUMA TECLA ESTÁ SENDO PRESSIONADA
    if(enter && keyCode === 13 ^ keyCode === 32){
      if(verSomBool){
        somBotaoMenu.setVolume(definirVolume); //DEFINI O VOLUME DO SONS DO JOGO
        somFood.setVolume(definirVolume);
        verificarVolumeSom = argVolume; //DEFINE O VOLUME QUE VAI ESTÁ SELECIONADO CASO VOLTE NA TELA DE VOLUME DE SOM
      }else{
        musicaFundoJogo.setVolume(definirVolume); //DEFINI O VOLUME DA MÚSICA DO JOGO
        verificarVolumeAtualDaMusica = definirVolume;
        verificarVolumeMusica = argVolume;  ////DEFINE O VOLUME QUE VAI ESTÁ SELECIONADO CASO VOLTE NA TELA DE VOLUME DE MÚSICA
      }
      somBotaoMenu.play();
    }else if(up && keyCode === 87 ^ keyCode === UP_ARROW){
      botaoSelecionado = upSelec; //DEFINI O PROXIMO BOTÃO SELECIONADO
      tela = upTela;  //SAIR DA TELA DE SOM
      somBotaoMenu.play();

    }else if(down &&  keyCode === 83 ^ keyCode === DOWN_ARROW){
      botaoSelecionado = downSelec; //DEFINI O PROXIMO BOTÃO SELECIONADO
      tela = downTela;  //SAIR DA TELA DE SOM
      somBotaoMenu.play();

    }else if(left && keyCode === 65 ^ keyCode === LEFT_ARROW){
      botaoSelecionado = leftSelec; //DEFINI O PROXIMO BOTÃO SELECIONADO
      tela = leftTela;  //SAIR DA TELA CASO O BOTÃO SELECIONADO ESTEJA EM MUTE
      somBotaoMenu.play();

    }else if(right && keyCode === 68 ^ keyCode === RIGHT_ARROW){
      botaoSelecionado = rightSelec;  //DEFINI O PROXIMO BOTÃO SELECIONADO
      somBotaoMenu.play();
    }
    keyCode = 0;
  }
}
//DEIXA A O VOLUME DE SOM OU MÚSICA NA OPÇÃO ESCOLHIDA
function opcaoSelecionada_de_SomOuMusica(xRect, yRect, xRectSize, yRectSize){
  push();
    fill(0,0,0,100);
    noStroke();
    rect(xRect, yRect, xRectSize, yRectSize);
  pop();
}
//ALTURA DOS TEXTOS DOS BOTÕES DE SOM OU MÚSICA
function textoSom_Musica(alturaBotoes, somBool){
  push();
    textSize(32);
    textAlign(CENTER, CENTER);
    fill('#db8149');
    stroke('#3f0f08');
    strokeWeight(4);
    imageMode(CENTER);
    
    if(somBool){  //MOSTRA A IMAGEM COM O SIMBOLO DE MUTE
      if(verificarVolumeSom === 1){
        image(imgSimboloVolumeZero, (width/2)+46, (height/2)-38);
      }else{
        image(imgSimboloVolume, (width/2)+46, (height/2)-38);
      }
    }else{
      if(verificarVolumeMusica === 1){
        image(imgSimboloVolumeZero, (width/2)+46, (height/2)+38);
      }else{
        image(imgSimboloVolume, (width/2)+46, (height/2)+38);
      }
    }
  
    text('1', (width/2)+96, (height/2)-alturaBotoes);   //VOLUME 1
    text('2', (width/2)+143, (height/2)-alturaBotoes);   //VOLUME 2
    text('3', (width/2)+192, (height/2)-alturaBotoes);   //VOLUME 3
    text('4', (width/2)+240, (height/2)-alturaBotoes);   //VOLUME 4
    text('5', (width/2)+288, (height/2)-alturaBotoes);   //VOLUME 5
  pop();
}


function telaVolumeSom(){ //TELA DO MENU DE SOM
  background(imgBackground);
  clouds();

  push(); //EXIBI A IMAGEM DO MENU DE OPÇÕES
    imageMode(CENTER);
    image(imgMenuSomVol, (width/2)+166, (height/2)-38);  //SOM
    image(imgBotaoMenu, (width/2)-166, (height/2)-38);  //COMO JOGAR
    image(imgBotaoMenu, (width/2)-166, (height/2)+38);   //IDIOMA 
    image(imgBotaoMenu, (width/2)+166, (height/2)+38);    //MÚSICA
    image(imgBotaoMenu, (width/2)-166, (height/2)+114);   //TELA CHEIA
    image(imgBotaoMenu, (width/2)+166, (height/2)+114);   //VOLTAR
    image(imgNomeDaTela, (width/2), (height/2)-114);   //NOME OPÇÕES
  pop();
  
  push();  //EXIBI O TEXTO DO MENU DE OPÇÕES
    textSize(32);
    textAlign(CENTER, CENTER);
    fill('#db8149');
    stroke('#3f0f08');
    strokeWeight(4);

    text(idioma[4], (width/2)-166, (height/2)-40);  //COMO JOGAR
    text(idioma[5], (width/2)-166, (height/2)+36);   //IDIOMA
    text(idioma[6], (width/2)-166, (height/2)+112);  //TELA CHEIA
    text(idioma[8], (width/2)+170, (height/2)+36);   //MÚSICA
    text(idioma[3], (width/2)+170, (height/2)+112);  //VOLTAR
    text(idioma[1], (width/2), (height/2)-116);  //OPÇÕES
  pop();  

  opcaoSelecVolumeSom();  //FUNÇÃO DE VERIFICAR AÇÃO DO MOUSE OU TECLADO
  textoSom_Musica(42, true);    //FUNÇÃO DO TEXTO DO MENU DE SOM COM ARGUMENTO PARA ALTURA DOS BOTÕES
  
}
function opcaoSelecVolumeSom(){ //VERIFICA AÇÃO DO MOUSE OU TECLADO NO MENU DE SOM
  if(mouse_Moved){ //VERIFICA A AÇAO DO MOUSE
    //VERIFICA SE OUTRA OPCAO FOI SELECIONADA
    if((mouseX > ((width/2)-326) && mouseY > ((height/2)-70) && mouseX < ((width/2)-6) && mouseY < ((height/2)-6)) ||   //COMO JOGAR
    (mouseX > ((width/2)-326) && mouseY > ((height/2)+6) && mouseX < ((width/2)-6) && mouseY < ((height/2)+70)) ||       //IDIOMA
    (mouseX > ((width/2)-326) && mouseY > ((height/2)+82) && mouseX < ((width/2)-6) && mouseY < ((height/2)+146))||       //TELA CHEIA
    (mouseX > ((width/2)+6) && mouseY > ((height/2)+6) && mouseX < ((width/2)+326) && mouseY < ((height/2)+70))||        //MÚSICA
    (mouseX > ((width/2)+6) && mouseY > ((height/2)+82) && mouseX < ((width/2)+326) && mouseY < ((height/2)+146))){       //VOLTAR
      tela = 3;
      botaoSelecionado = 4;
    }
    
    if(mouseX > ((width/2)+26) && mouseY > ((height/2)-58) && mouseX < ((width/2)+66) && mouseY < ((height/2)-16)){    //MUTAR
      verificarOpcaoMenuSomOuMusica((width/2)+28, (height/2)-58, 36, 40, 1, false, true, 0, 1);

    }else if(mouseX > ((width/2)+74) && mouseY > ((height/2)-58) && mouseX < ((width/2)+114) && mouseY < ((height/2)-16)){   //VOLUME 1
      verificarOpcaoMenuSomOuMusica((width/2)+76, (height/2)-58, 36, 40, 2, false, true, 0.05, 2);

    }else if(mouseX > ((width/2)+122) && mouseY > ((height/2)-58) && mouseX < ((width/2)+162) && mouseY < ((height/2)-16)){  //VOLUME 2
      verificarOpcaoMenuSomOuMusica((width/2)+124, (height/2)-58, 36, 40, 3, false, true, 0.1, 3);

    }else if(mouseX > ((width/2)+170) && mouseY > ((height/2)-58) && mouseX < ((width/2)+210) && mouseY < ((height/2)-16)){  //VOLUME 3
      verificarOpcaoMenuSomOuMusica((width/2)+172, (height/2)-58, 36, 40, 4, false, true, 0.15, 4);

    }else if(mouseX > ((width/2)+218) && mouseY > ((height/2)-58) && mouseX < ((width/2)+258) && mouseY < ((height/2)-16)){  //VOLUME 4
      verificarOpcaoMenuSomOuMusica((width/2)+220, (height/2)-58, 36, 40, 5, false, true, 0.2, 5);

    }else if(mouseX > ((width/2)+266) && mouseY > ((height/2)-58) && mouseX < ((width/2)+306) && mouseY < ((height/2)-16)){  //VOLUME 5
      verificarOpcaoMenuSomOuMusica((width/2)+268, (height/2)-58, 36, 40, 6, false, true, 0.25, 6);

    }else{
      overBox = false;
      tocarSomBotoesMenuAgora_Bool = false;
      tocarSomBotoesMenuAntes_Bool = false;
    }
  }

  menuEscape(3, 4, false, false);  //VOLTAR PARA TELA ANTERIOR APERTANDO O ESCAPE

  if(tecla_Press){ //VERIFICA E FAZ O MOVIMENTO DO TECLADO
    if(verificarBotaoSelecionado){
      verificarPrimeiraSelecao(verificarVolumeSom);
    }
    
    switch (botaoSelecionado) {
      case 1: //BOTAO DE MUTE
        verificarOpcaoMenuTecladoSomOuMusica((width/2)+28, (height/2)-58, 36, 40, true, true, false, true, true, true, 0, 1, null, 5, 1, 2, null, 3, 3); break;
      case 2: //VOLUME 1
        verificarOpcaoMenuTecladoSomOuMusica((width/2)+76, (height/2)-58, 36, 40, true, true, false, true, true, true, 0.05, 2, null, 5, 1, 3, null, 3, tela); break;
      case 3: //VOLUME 2
        verificarOpcaoMenuTecladoSomOuMusica((width/2)+124, (height/2)-58, 36, 40, true, true, false, true, true, true, 0.1, 3, null, 5, 2, 4, null, 3, tela); break;
      case 4: //VOLUME 3
        verificarOpcaoMenuTecladoSomOuMusica((width/2)+172, (height/2)-58, 36, 40, true, true, false, true, true, true, 0.15, 4, null, 5, 3, 5, null, 3, tela); break;
      case 5: //VOLUME 4
        verificarOpcaoMenuTecladoSomOuMusica((width/2)+220, (height/2)-58, 36, 40, true, true, false, true, true, true, 0.2, 5, null, 5, 4, 6, null, 3, tela); break;
      case 6: //VOLUME 5
        verificarOpcaoMenuTecladoSomOuMusica((width/2)+268, (height/2)-58, 36, 40, true, true, false, true, true, false, 0.25, 6, null, 5, 5, null, null, 3, tela); break;

    }
  }

  switch (verificarVolumeSom){  //VERIFICA QUAL OPÇÃO DE VOLUME FOI ESCOLHIDA E DEIXA A OPÇÃO ESCOLHIDA MAIS ESCURA
    case 1: opcaoSelecionada_de_SomOuMusica((width/2)+28, (height/2)-58, 36, 40); break;
    case 2: opcaoSelecionada_de_SomOuMusica((width/2)+76, (height/2)-58, 36, 40); break;
    case 3: opcaoSelecionada_de_SomOuMusica((width/2)+124, (height/2)-58, 36, 40); break;
    case 4: opcaoSelecionada_de_SomOuMusica((width/2)+172, (height/2)-58, 36, 40); break;
    case 5: opcaoSelecionada_de_SomOuMusica((width/2)+220, (height/2)-58, 36, 40); break;
    case 6: opcaoSelecionada_de_SomOuMusica((width/2)+268, (height/2)-58, 36, 40); break;    
  }
}

function telaVolumeMusica(){  //TELA DO MENU DE MÚSICA
  background(imgBackground);
  clouds();

  push(); //EXIBI A IMAGEM DO MENU DE OPÇÕES
    imageMode(CENTER);
    image(imgBotaoMenu, (width/2)-166, (height/2)-38);  //COMO JOGAR
    image(imgBotaoMenu, (width/2)+166, (height/2)-38);    //SOM
    image(imgBotaoMenu, (width/2)-166, (height/2)+38);   //IDIOMA 
    image(imgMenuSomVol, (width/2)+166, (height/2)+38);   //MÚSICA
    image(imgBotaoMenu, (width/2)-166, (height/2)+114);   //TELA CHEIA
    image(imgBotaoMenu, (width/2)+166, (height/2)+114);   //VOLTAR
    image(imgNomeDaTela, (width/2), (height/2)-114);   //NOME OPÇÕES
  pop();

  push();  //EXIBI O TEXTO DO MENU DE OPÇÕES
    textSize(32);
    textAlign(CENTER, CENTER);
    fill('#db8149');
    stroke('#3f0f08');
    strokeWeight(4);

    text(idioma[4], (width/2)-166, (height/2)-40);  //COMO JOGAR
    text(idioma[5], (width/2)-166, (height/2)+36);   //IDIOMA
    text(idioma[6], (width/2)-166, (height/2)+112);  //TELA CHEIA
    text(idioma[7], (width/2)+170, (height/2)-40);  //SOM
    text(idioma[3], (width/2)+170, (height/2)+112);  //VOLTAR
    text(idioma[1], (width/2), (height/2)-116);  //OPÇÕES
  pop();
  opcoesVolumeMusica();
  textoSom_Musica(-34, false);
}
function opcoesVolumeMusica(){  //VERIFICA AÇÃO DO MOUSE OU TECLADO NO MENU DE MÚSICA
  if(mouse_Moved){ //VERIFICA SE O MOUSE SE MOVE
    if((mouseX > ((width/2)-326) && mouseY > ((height/2)-70) && mouseX < ((width/2)-6) && mouseY < ((height/2)-6)) ||   //COMO JOGAR
    (mouseX > ((width/2)-326) && mouseY > ((height/2)+6) && mouseX < ((width/2)-6) && mouseY < ((height/2)+70)) ||       //IDIOMA
    (mouseX > ((width/2)-326) && mouseY > ((height/2)+82) && mouseX < ((width/2)-6) && mouseY < ((height/2)+146))||       //TELA CHEIA
    (mouseX > ((width/2)+6) && mouseY > ((height/2)-70) && mouseX < ((width/2)+326) && mouseY < ((height/2)-6))||       //SOM
    (mouseX > ((width/2)+6) && mouseY > ((height/2)+82) && mouseX < ((width/2)+326) && mouseY < ((height/2)+146))){       //VOLTAR
      tela = 3;
      botaoSelecionado = 5;
    }
    
    if(mouseX > ((width/2)+26) && mouseY > ((height/2)+18) && mouseX < ((width/2)+66) && mouseY < ((height/2)+60)){     //MUTAR
      verificarOpcaoMenuSomOuMusica((width/2)+28, (height/2)+18, 36, 40, 1, false, false, 0, 1);

    }else if(mouseX > ((width/2)+74) && mouseY > ((height/2)+18) && mouseX < ((width/2)+114) && mouseY < ((height/2)+60)){    //VOLUME 1
      verificarOpcaoMenuSomOuMusica((width/2)+76, (height/2)+18, 36, 40, 2, false, false, 0.05, 2);

    }else if(mouseX > ((width/2)+122) && mouseY > ((height/2)+18) && mouseX < ((width/2)+162) && mouseY < ((height/2)+60)){   //VOLUME 2
      verificarOpcaoMenuSomOuMusica((width/2)+124, (height/2)+18, 36, 40, 3, false, false, 0.1, 3);

    }else if(mouseX > ((width/2)+170) && mouseY > ((height/2)+18) && mouseX < ((width/2)+210) && mouseY < ((height/2)+60)){   //VOLUME 3
      verificarOpcaoMenuSomOuMusica((width/2)+172, (height/2)+18, 36, 40, 4, false, false, 0.15, 4);

    }else if(mouseX > ((width/2)+218) && mouseY > ((height/2)+18) && mouseX < ((width/2)+258) && mouseY < ((height/2)+60)){   //VOLUME 4
      verificarOpcaoMenuSomOuMusica((width/2)+220, (height/2)+18, 36, 40, 5, false, false, 0.2, 5);

    }else if(mouseX > ((width/2)+266) && mouseY > ((height/2)+18) && mouseX < ((width/2)+306) && mouseY < ((height/2)+60)){   //VOLUME 5
      verificarOpcaoMenuSomOuMusica((width/2)+268, (height/2)+18, 36, 40, 5, false, false, 0.25, 6);
    }else{
      overBox = false;
      tocarSomBotoesMenuAgora_Bool = false;
      tocarSomBotoesMenuAntes_Bool = false;
    }
  }

  menuEscape(3, 5, false, false); //VOLTA PARA A TELA ANTERIOR

  if(tecla_Press){ //VERIFICA E FAZ O MOVIMENTO DO TECLADO
    if(verificarBotaoSelecionado){
      verificarPrimeiraSelecao(verificarVolumeMusica);
    }
    
    switch (botaoSelecionado) {
      case 1: //BOTÃO DE MUTE
        verificarOpcaoMenuTecladoSomOuMusica((width/2)+28, (height/2)+18, 36, 40, false, true, true, true, true, true, 0, 1, 4, 6, 2, 2, 3, 3, 3); break;
      case 2: //VOLUME 1
        verificarOpcaoMenuTecladoSomOuMusica((width/2)+76, (height/2)+18, 36, 40, false, true, true, true, true, true, 0.05, 2, 4, 6, 1, 3, 3, 3, tela); break;
      case 3: //VOLUME 2
        verificarOpcaoMenuTecladoSomOuMusica((width/2)+124, (height/2)+18, 36, 40, false, true, true, true, true, true, 0.1, 3, 4, 6, 2, 4, 3, 3, tela); break;
      case 4: //VOLUME 3
        verificarOpcaoMenuTecladoSomOuMusica((width/2)+172, (height/2)+18, 36, 40, false, true, true, true, true, true, 0.15, 4, 4, 6, 3, 5, 3, 3, tela); break;
      case 5: //VOLUME 4
        verificarOpcaoMenuTecladoSomOuMusica((width/2)+220, (height/2)+18, 36, 40, false, true, true, true, true, true, 0.2, 5, 4, 6, 4, 6, 3, 3, tela); break;
      case 6: //VOLUME 5
        verificarOpcaoMenuTecladoSomOuMusica((width/2)+268, (height/2)+18, 36, 40, false, true, true, true, true, false, 0.25, 6, 4, 6, 5, null, 3, 3, tela); break;
    }
  }

  switch (verificarVolumeMusica) {  //VERIFICA QUAL OPÇÃO DE VOLUME FOI ESCOLHIDA E DEIXA A OPÇÃO ESCOLHIDA MAIS ESCURA
    case 1: opcaoSelecionada_de_SomOuMusica((width/2)+28, (height/2)+18, 36, 40); break;
    case 2: opcaoSelecionada_de_SomOuMusica((width/2)+76, (height/2)+18, 36, 40); break;
    case 3: opcaoSelecionada_de_SomOuMusica((width/2)+124, (height/2)+18, 36, 40); break;
    case 4: opcaoSelecionada_de_SomOuMusica((width/2)+172, (height/2)+18, 36, 40); break;
    case 5: opcaoSelecionada_de_SomOuMusica((width/2)+220, (height/2)+18, 36, 40); break;    
    case 6: opcaoSelecionada_de_SomOuMusica((width/2)+268, (height/2)+18, 36, 40); break;
  }
}

////////////////TELA DO JOGO////////////////

function telaJogo(){  //MOSTRA A TELA DO JOGO
  push();
    noStroke();
    //LAÇO DE REPETIÇÃO USADO PARA CRIAR UMA MATRIZ COM CORES ALTERNADAS TIPO UM TABULEIRO DE XADREZ
    for(let i = 1; i <= contMaxX+contMinX-2; i++){
      for(let j = 4; j <= contMaxY+contMinY-2; j++){
        if( i % 2 === 0){
          if(j % 2 === 0){
            fill('#8fcc39');
            square((width/2)-(32*(contMinX-i)), (height/2)-(32*(contMinY-j)), 32);
          }else{
            fill('#a6d948');
            square((width/2)-(32*(contMinX-i)), (height/2)-(32*(contMinY-j)), 32);
          }
        }else{
          if(j % 2 !== 0){
            fill('#8fcc39');
            square((width/2)-(32*(contMinX-i)), (height/2)-(32*(contMinY-j)), 32);
          }else{
            fill('#a6d948');
            square((width/2)-(32*(contMinX-i)), (height/2)-(32*(contMinY-j)), 32);
          }
        }
      }
    }
  pop();
  
  /////////////////////// DESENHA COBRA E COMIDA ///////////////////////
  desenhaCobra();   //DESENHA A COBRA NA TELA
  desenhaComida();  //DESENHA A COMIDA NA TELA
  
  ////////////////////////// GRAMA DOS LADOS //////////////////////////
  
  for(let i = 1; i <= contMaxX+contMinX-2; i++){  //UP
    image(imgGrassSide[0], (width/2)-(32*(contMinX-i)), (height/2)-(32*(contMinY-4))-1);
  }
  for(let i = 4; i <= contMaxY+contMinY-2; i++){  //LEFT
    image(imgGrassSide[1], (width/2)-(32*(contMinX-1)), (height/2)-(32*(contMinY-i)));
  }
  for(let i = 1; i <= contMaxX+contMinX-2; i++){  //DOWN
    image(imgGrassSide[2], (width/2)-(32*(contMinX-i)), (height/2)+(32*(contMaxY-1))-8);
  }
  for(let i = 4; i <= contMaxY+contMinY-2; i++){  //RIGHT
    image(imgGrassSide[3], (width/2)+(32*(contMaxX-1))-7, (height/2)-(32*(contMinY-i)));
  }
  
  ///////////////////////GERAR GRAMA E FLORES ALEATORIAMENTE//////////////////////////////////

  if(gerarQuadradoBool){
    push(); //FUNDO VERDE ONDE FICA A GRAMA
      fill('#397b44');
      noStroke();
      rect(0, 0, width, (height/2)-(32*(contMinY-4)));  //UP
      rect(0, (height/2)-(32*(contMinY-4))-2, (width/2)-(32*(contMinX-1)), (height/2)+(32*(contMaxY-2))); //LEFT
      rect(0, (height/2)+(32*(contMaxY-1)), width, height); //DOWN
      rect((width/2)+(32*(contMaxX-1)), (height/2)-(32*(contMinY-4))-2, width, (height/2)+(32*(contMaxY-2))); //RIGHT
    pop();

    push();
      //UP
      for(let i = (width/2)-(32*(contMinX-1))-48; i <= width; i+=16){
        for(let j = (height/2)-(32*(contMinY-4))-16; j >= -16; j-=16){
          if(Math.random()<probabilidadeGrama){ //GERA NÚMERO RANDOM PARA DEFINIR A PROBABILIDADE DE GRAMA QUE IRÁ APARECER
            image(imgGrass[gerarNumeroAleatorio(9,17)], i+gerarNumeroAleatorio(-1,3), j+gerarNumeroAleatorio(-1,3));
            if(Math.random()<probabilidadeFlor){  //GERA NÚMERO RANDOM PARA DEFINIR A PROBABILIDADE DE FLORES QUE IRÁ APARECER NO LUGAR DA GRAMA
              if(j !== (height/2)-(32*(contMinY-4))-16){
                image(imgFlower[gerarNumeroAleatorio(0, 9)], i+gerarNumeroAleatorio(-5,6), j+gerarNumeroAleatorio(-5,6));
              }else image(imgFlower[gerarNumeroAleatorio(0, 9)], i+gerarNumeroAleatorio(-5,6), j+gerarNumeroAleatorio(-1,3));
            }else{
              if(j !== (height/2)-(32*(contMinY-4))-16){
                image(imgGrass[gerarNumeroAleatorio(0, 9)], i+gerarNumeroAleatorio(-5,6), j+gerarNumeroAleatorio(-5,6));
              }else image(imgGrass[gerarNumeroAleatorio(0, 9)], i+gerarNumeroAleatorio(-5,6), j+gerarNumeroAleatorio(-1,3));
            }
          }
        }
      }
      //LEFT
      for(let i = (width/2)-(32*(contMinX-1))-16; i >= -16; i-=16){
        for(let j = (height/2)-(32*(contMinY-4)); j <= (height/2)+(32*(contMaxY-1.5)); j+=16){
          if(Math.random()<probabilidadeGrama){ //GERA NÚMERO RANDOM PARA DEFINIR A PROBABILIDADE DE GRAMA QUE IRÁ APARECER
            image(imgGrass[gerarNumeroAleatorio(9,17)], i+gerarNumeroAleatorio(-1,3), j+gerarNumeroAleatorio(-1,3));
            if(Math.random()<probabilidadeFlor){  //GERA NÚMERO RANDOM PARA DEFINIR A PROBABILIDADE DE FLORES QUE IRÁ APARECER NO LUGAR DA GRAMA
                image(imgFlower[gerarNumeroAleatorio(0, 9)], i+gerarNumeroAleatorio(-5,6), j+gerarNumeroAleatorio(-5,6));
            }else{
                image(imgGrass[gerarNumeroAleatorio(0, 9)], i+gerarNumeroAleatorio(-5,6), j+gerarNumeroAleatorio(-5,6));
            }
          }
        }
      }
      //DOWN
      for(let i = (width/2)-(32*(contMinX-1))-48; i <= width; i+=16){
        for(let j = (height/2)+(32*(contMaxY-1.5))+16; j <= height; j+=16){
          if(Math.random()<probabilidadeGrama){ //GERA NÚMERO RANDOM PARA DEFINIR A PROBABILIDADE DE GRAMA QUE IRÁ APARECER
            image(imgGrass[gerarNumeroAleatorio(9,17)], i+gerarNumeroAleatorio(-1,3), j+gerarNumeroAleatorio(-1,3));
            if(Math.random()<probabilidadeFlor){  //GERA NÚMERO RANDOM PARA DEFINIR A PROBABILIDADE DE FLORES QUE IRÁ APARECER NO LUGAR DA GRAMA
                image(imgFlower[gerarNumeroAleatorio(0, 9)], i+gerarNumeroAleatorio(-5,6), j+gerarNumeroAleatorio(-5,6));
            }else{
                image(imgGrass[gerarNumeroAleatorio(0, 9)], i+gerarNumeroAleatorio(-5,6), j+gerarNumeroAleatorio(-5,6));
            }
          }
        }
      }
      //RIGHT
      for(let i = (width/2)+(32*(contMaxX-1)); i <= width; i+=16){
        for(let j = (height/2)-(32*(contMinY-4)); j <= (height/2)+(32*(contMaxY-1.5)); j+=16){
          if(Math.random()<probabilidadeGrama){ //GERA NÚMERO RANDOM PARA DEFINIR A PROBABILIDADE DE GRAMA QUE IRÁ APARECER
            image(imgGrass[gerarNumeroAleatorio(9,17)], i+gerarNumeroAleatorio(-1,3), j+gerarNumeroAleatorio(-1,3));
            if(Math.random()<probabilidadeFlor){  //GERA NÚMERO RANDOM PARA DEFINIR A PROBABILIDADE DE FLORES QUE IRÁ APARECER NO LUGAR DA GRAMA
                image(imgFlower[gerarNumeroAleatorio(0, 9)], i+gerarNumeroAleatorio(-5,6), j+gerarNumeroAleatorio(-5,6));
            }else{
                image(imgGrass[gerarNumeroAleatorio(0, 9)], i+gerarNumeroAleatorio(-5,6), j+gerarNumeroAleatorio(-5,6));
            }
          }
        }
      }
    pop();
    gerarQuadradoBool = false;
  }

  //////////////////////////////////////////////////////////////////////////////

  push(); //MOSTRA A VIDA, PONTUAÇÃO E OPERAÇÃO MATEMÁTICA O ALUNO DEVE REALIZAR
    imageMode(CENTER);
    fill(255);
    rectMode(CENTER);
    image(imgCentroOperacaoMat, width/2, ((height/2)-(32*(contMinY-4)))/2, parseInt(width*0.2225), 64); //CENTRO    
    image(imgBotaoMenuPause, (width/2)+(32*(contMaxX-2)), ((height/2)-(32*(contMinY-4)))/2, 64, 64); //MENU
    image(imgFundoPontuacao, (width/2)+(width*0.2775), ((height/2)-(32*(contMinY-4)))/2, width*0.110, 64); //PONTUAÇÃO

    //USADO PARA APAGAR VIDA
    (vidas >= 3) ? image(imgCoracao, width*0.26, ((height/2)-(32*(contMinY-4)))/2) : 
    image(imgCoracaoApagado, width*0.26, ((height/2)-(32*(contMinY-4)))/2); //3 VIDA
    
    (vidas >= 2) ? image(imgCoracao, width*0.19, ((height/2)-(32*(contMinY-4)))/2) : 
    image(imgCoracaoApagado, width*0.19, ((height/2)-(32*(contMinY-4)))/2); //2 VIDA

    (vidas >= 1) ? image(imgCoracao, width*0.12, ((height/2)-(32*(contMinY-4)))/2) : 
    image(imgCoracaoApagado, width*0.12, ((height/2)-(32*(contMinY-4)))/2); //1 VIDA
  pop();

  push(); //DIFINI O TEXTO DA OPERAÇÃO MATEMÁTICA O ALUNO DEVE REALIZAR
    textSize(parseInt(width*0.024));
    textAlign(CENTER, CENTER);
    fill('#db8149');
    stroke('#3f0f08');
    strokeWeight(4);
    
    text(`${pontuacao}`, (width/2)+(width*0.2775), (((height/2)-(32*(contMinY-4)))/2)-5); //TEXTO DA PONTUAÇÃO

    if(playing && tela !== 13){
      if(dificuldade === 1 ^ (dificuldade === 5 && dificuldadeAleatoria === 1)){
        text(`${num1} + ${num2} = ?`, (width/2)+5, (((height/2)-(32*(contMinY-4)))/2)-5);
      }
      else if(dificuldade === 2 ^ (dificuldade === 5 && dificuldadeAleatoria === 2)){
        text(`${num1} - ${num2} = ?`, (width/2)+5, (((height/2)-(32*(contMinY-4)))/2)-5);
      }
      else if(dificuldade === 3 ^ (dificuldade === 5 && dificuldadeAleatoria === 3)){
        text(`${num1} x ${num2} = ?`, (width/2)+5, (((height/2)-(32*(contMinY-4)))/2)-5);
      }
      else if(dificuldade === 4 ^ (dificuldade === 5 && dificuldadeAleatoria === 4)){
        text(`${num1} ÷ ${num2} = ?`, (width/2)+5, (((height/2)-(32*(contMinY-4)))/2)-5);
      }
    }
  pop();
  
  /*SE PLAYING FOR VERDADEIRO O JOGO RODA NORMALMENTE SE FOR FALSO PARA 
  TODAS AS REPETIÇÕES QUE ESTÁ SENDO EXECUTADA E PAUSA O JOGO*/
  if(playing){
    movimentoCobra();
    verificarSelecao_PauseJogo(); //VEFIFICA SE A TECLA DE ESCAPE FOI PRESSIONADDA OU O PAUSE FOI SELEC
  }else if(!playing && tela !== 13){
    //MOSTRA O MENU DE OPÇÕES QUANDO O JOGO ESTÁ PAUSADO
    
    push();
      noFill();
      noStroke();
      image(imgBotaoMenu, (width/2)-160, (height/2)-108);   //CONTINUAR
      image(imgBotaoMenu, (width/2)-160, (height/2)-32);   //OPÇÕES
      image(imgBotaoMenu, (width/2)-160, (height/2)+44);   //SAIR
    pop();

    verificarSelecao_PauseJogo(); //VERIFICA A AÇÃO DO MOUSE OU TECLADO QUANDO O JOGO ESTÁ PAUSADO
    
    push();   //TEXTO MENU DE OPCOES DA TELA PAUSE
      textSize(32);
      textAlign(CENTER, CENTER);
      fill('#db8149');
      stroke('#3f0f08');
      strokeWeight(4);
      text(idioma[28], (width/2)+4, (height/2)-80);
      text(idioma[1], (width/2)+6, (height/2)-4);
      text(idioma[29], (width/2)+6, (height/2)+72);
    pop();
  }

  //(playing) ? movimentoCobra() : telaOpcoesJogo();
  //(playing) ? fr = 10 : fr = 60;
  //verificarSelecao_PauseJogo();
}
function verificarSelecao_PauseJogo(){ //VERIFICA AÇÃO DO MOUSE E TECLADO QUANDO O JOGO É PAUSADO
  menuEscape(null, 1, true, true);
  (playing) ? fr = 10 : fr = 60;  //DEFINI O FRAMERATE DO JOGO QUANDO PAUSA O JOGO
  (playing) ? musicaFundoJogo.setVolume(verificarVolumeAtualDaMusica*0.2) : musicaFundoJogo.setVolume(verificarVolumeAtualDaMusica);

  if(mouse_Moved){
    if((mouseX > (width/2)+(32*(contMaxX-3)) && mouseY > ((height/2)-(32*(contMinY-2)))/2 && mouseX < (width/2)+(32*(contMaxX-1)) && mouseY < ((height/2)-(32*(contMinY-6)))/2) && playing){      
      opcaoMenu((width/2)+(32*(contMaxX-3))+12, (((height/2)-(32*(contMinY-2)))/2)+12, 40, 40, true, true, null, 1, null, false, null, false, false);

    }else if(mouseX > ((width/2)-160) && mouseY > ((height/2)-108) && mouseX < ((width/2)+160) && mouseY < ((height/2)-44) && !playing){
      opcaoMenu((width/2)-148, (height/2)-96, 296, 40, true, true, null, 1, null, false, null, false, false);

    }else if(mouseX > ((width/2)-160) && mouseY > ((height/2)-32) && mouseX < ((width/2)+160) && mouseY < ((height/2)+32) && !playing){
      opcaoMenu((width/2)-148, (height/2)-20, 296, 40, false, false, 3, 2, 1 , false, true, false, false);

    }else if(mouseX > ((width/2)-160) && mouseY > ((height/2)+44) && mouseX < ((width/2)+160) && mouseY < ((height/2)+108) && !playing){
      opcaoMenu((width/2)-148, (height/2)+56, 296, 40, false, true, 2, 3, 1, false, true, false, false);

    }else{
      overBox = false;
      tocarSomBotoesMenu_Bool = true;
    }
  }

  if(tecla_Press && !playing){
    if(verificarBotaoSelecionado) verificarPrimeiraSelecao(1);

    if(botaoSelecionado === 1){
      opcaoMenuTeclado((width/2)-148, (height/2)-96, 296, 40, true, true, true, true, true, false, false, null, null, null, null, 3, 2, null, null, null, false, false, false);
    }else if(botaoSelecionado === 2){
      opcaoMenuTeclado((width/2)-148, (height/2)-20, 296, 40, false, false, true, true, true, false, false, 3, false, true, 1, 1, 3, null, null, null, false, false, false);
    }else if(botaoSelecionado === 3){
      opcaoMenuTeclado((width/2)-148, (height/2)+56, 296, 40, false, true, true, true, true, false, false, 2, true, false, null, 2, 1, null, null, null, false, false, false);
    }
  }
}

function telaResultadoJogo(){ //MOSTRA A TELA FINAL DE GAME OVER E A PONTUAÇÃO
  musicaFundoJogo.setVolume(verificarVolumeAtualDaMusica);
  push(); //IMAGEM
    noFill();
    noStroke();
    imageMode(CENTER);
    image(imgResultado, (width/2), (height/2)+38);   
  pop();

  verificarSelecao_ResultadoJogo(); //VERIFICA QUAL OPÇÃO ESTÁ SENDO SELECIONADA
    
  push(); //TEXTO MENU DE OPCOES
    textSize(32);
    textAlign(CENTER, CENTER);
    fill('#db8149');
    stroke('#3f0f08');
    strokeWeight(4);  
    text(idioma[31], (width/2), (height/2)-80);   //FIM DE JOGO
    text(idioma[32], (width/2), (height/2)-4);    //NOME PONTUAÇÃO
    text(`${pontuacao}`, (width/2), (height/2)+72);   //PONTUAÇÃO
  pop();
}
function verificarSelecao_ResultadoJogo(){ //VERIFICA AÇÃO DO MOUSE E TECLADO QUANDO MUDA PARA TELA DE FINAL DE GAME OVER
  menuEscape(null, 1, true, true);
  fr = 60;  //DEFINI O FRAMERATE DO JOGO

  if(mouse_Moved){  //VERIFICA SE O MOUSE SE MOVE
    if(mouseX > ((width/2)-108) && mouseY > ((height/2)+120) && mouseX < ((width/2)-44) && mouseY < ((height/2)+184)){
      opcaoMenu((width/2)-96, (height/2)+132, 40, 40, false, false, 2, 1, 1, false, true, false, false);
      //VOLTAR PARA TELA PREJOGO
    }else if((mouseX > ((width/2)+44) && mouseY > ((height/2)+120) && mouseX < ((width/2)+108) && mouseY < ((height/2)+184))){
      opcaoMenu((width/2)+56, (height/2)+132, 40, 40, false, false, 11, 2, null, false, false, false, true, gerarNumero, dificuldade, dificuldade, true, false);
      //REINICAR JOGO
    }else{
      overBox = false;
      tocarSomBotoesMenuAgora_Bool = false;
      tocarSomBotoesMenuAntes_Bool = false;
    }
  }

  if(tecla_Press){  //VERIFICA AÇÃO DO TECLADO E FAZ O MOVIMENTO DO MENU SELECIONADO
    if(verificarBotaoSelecionado) verificarPrimeiraSelecao(2);
    if(botaoSelecionado === 1){
      opcaoMenuTeclado((width/2)-96, (height/2)+132, 40, 40, false, false, true, false, false, true, true, 2, true, false, null, null, null, 2, 2, null, false, false, false);
      //VOLTAR PARA TELA PREJOGO
    }else if(botaoSelecionado === 2){
      opcaoMenuTeclado((width/2)+56, (height/2)+132, 40, 40, false, false, true, false, false, true, true, 11, false, false, null, null, null, 1, 1, null, false, false, true, gerarNumero, dificuldade, dificuldade, true, false);
      //REINICAR JOGO
    }
  }
}



function desenhaCobra(){  //DESENHA A COBRA NA TELA
  for(let i = 0; i < cobra.length; i++){
    push();
      tint(tinta);  //USADO PARA DEFINIR A COR DA COBRA
      image(imgCorpoCobra, cobra[i].x, cobra[i].y);
    pop();
  }
  switch (direcaoCobra) { //DIREÇÃO QUE A COBRA DEVE ESTÁ OLHANDO
    case 'RIGHT': image(imgOlhoCobraRight, cobra[0].x, cobra[0].y); break;
    case 'LEFT': image(imgOlhoCobraLeft, cobra[0].x, cobra[0].y); break;
    case 'UP': image(imgOlhoCobraUp, cobra[0].x, cobra[0].y); break;
    case 'DOWN': image(imgOlhoCobraDown, cobra[0].x, cobra[0].y); break;
  }
}
function desenhaComida(){ //DESENHA A COMIDA NA TELA
  push();
    noFill(); //MOSTRA A IMAGEM DA MAÇÃ NA TELA
    image(imgApple, parseInt((width/2)-(32*(contMinX-1))+(32*(comida.x))), parseInt((height/2)-(32*(contMinY-5))+(32*comida.y)));
    image(imgApple, parseInt((width/2)-(32*(contMinX-1))+(32*(comidaErrada1.x))), parseInt((height/2)-(32*(contMinY-5))+(32*comidaErrada1.y)));
    image(imgApple, parseInt((width/2)-(32*(contMinX-1))+(32*(comidaErrada2.x))), parseInt((height/2)-(32*(contMinY-5))+(32*comidaErrada2.y)));
    
    //DEFINI A COR E O TAMANHO DOS NUMEROS DENTRO DA MAÇÃ
    textSize(20);
    textAlign(CENTER);
    fill('#ffd889');
    stroke('#3f0f08');
    strokeWeight(4);

    if(playing && tela !== 13){
      //MOSTRA O NUMEROS QUE DEVEM APAREÇER DENTRO DA MAÇÃ
      if(dificuldade === 1 ^ (dificuldade === 5 && dificuldadeAleatoria === 1)){
        text(`${num1+num2}`, parseInt((width/2)-(32*(contMinX-1))+(32*(comida.x))+17.75), parseInt((height/2)-(32*(contMinY-5))+(32*comida.y))+25);
        text(`${num1+num2+numAleatorio1}`, parseInt((width/2)-(32*(contMinX-1))+(32*(comidaErrada1.x))+17.75), parseInt((height/2)-(32*(contMinY-5))+(32*comidaErrada1.y))+25);
        text(`${num1+num2+numAleatorio2}`, parseInt((width/2)-(32*(contMinX-1))+(32*(comidaErrada2.x))+17.75), parseInt((height/2)-(32*(contMinY-5))+(32*comidaErrada2.y))+25);
      }
      else if(dificuldade === 2 ^ (dificuldade === 5 && dificuldadeAleatoria === 2)){
        text(`${num1-num2}`, parseInt((width/2)-(32*(contMinX-1))+(32*(comida.x))+17.75), parseInt((height/2)-(32*(contMinY-5))+(32*comida.y))+25);
        text(`${(num1-num2)+numAleatorio1}`, parseInt((width/2)-(32*(contMinX-1))+(32*(comidaErrada1.x))+17.75), parseInt((height/2)-(32*(contMinY-5))+(32*comidaErrada1.y))+25);
        text(`${(num1-num2)+numAleatorio2}`, parseInt((width/2)-(32*(contMinX-1))+(32*(comidaErrada2.x))+17.75), parseInt((height/2)-(32*(contMinY-5))+(32*comidaErrada2.y))+25);
      }
      else if(dificuldade === 3 ^ (dificuldade === 5 && dificuldadeAleatoria === 3)){
        text(`${num1*num2}`, parseInt((width/2)-(32*(contMinX-1))+(32*(comida.x))+17.75), parseInt((height/2)-(32*(contMinY-5))+(32*comida.y))+25);
        text(`${(num1*num2)+numAleatorio1}`, parseInt((width/2)-(32*(contMinX-1))+(32*(comidaErrada1.x))+17.75), parseInt((height/2)-(32*(contMinY-5))+(32*comidaErrada1.y))+25);
        text(`${(num1*num2)+numAleatorio2}`, parseInt((width/2)-(32*(contMinX-1))+(32*(comidaErrada2.x))+17.75), parseInt((height/2)-(32*(contMinY-5))+(32*comidaErrada2.y))+25);
      }
      else if(dificuldade === 4 ^ (dificuldade === 5 && dificuldadeAleatoria === 4)){
        text(`${num1/num2}`, parseInt((width/2)-(32*(contMinX-1))+(32*(comida.x))+17.75), parseInt((height/2)-(32*(contMinY-5))+(32*comida.y))+25);
        text(`${(num1/num2)+numAleatorio1}`, parseInt((width/2)-(32*(contMinX-1))+(32*(comidaErrada1.x))+17.75), parseInt((height/2)-(32*(contMinY-5))+(32*comidaErrada1.y))+25);
        text(`${(num1/num2)+numAleatorio2}`, parseInt((width/2)-(32*(contMinX-1))+(32*(comidaErrada2.x))+17.75), parseInt((height/2)-(32*(contMinY-5))+(32*comidaErrada2.y))+25);
      }
    }
  pop();  
}


function movimentoCobra(){  //REALIZA O MOVIMENTO DA COBRA E OUTRAS VERIFICAÇÕES DA COBRA
  let cobraX = cobra[0].x;  //RECEBE O VALOR DA POSIÇÃO x DA CABEÇA DA COBRA
  let cobraY = cobra[0].y;  //RECEBE O VALOR DA POSIÇÃO y DA CABEÇA DA COBRA

  //DEFINI EM QUAL DIREÇÃO A COBRA VAI ANDAR
  //ADICIONA OU REMOVE UM VALOR NA POSIÇÃO EM QUE A COBRA VAI ANDAR
  if(direcaoCobra === 'RIGHT') cobraX += sizeQuadradoCobra; 
  if(direcaoCobra === 'LEFT') cobraX -= sizeQuadradoCobra;
  if(direcaoCobra === 'UP') cobraY -= sizeQuadradoCobra;
  if(direcaoCobra === 'DOWN') cobraY += sizeQuadradoCobra;

  //VERIFICA SE A COBRA PEGOU A COMIDA CERTA
  if(cobraX !== parseInt((width/2)-(32*(contMinX-1))+(32*(comida.x))) || cobraY !== parseInt((height/2)-(32*(contMinY-5))+(32*comida.y))){
    cobra.pop(); //REMOVE O ULTIMO ELEMENTO DO ARRAY
  }else{
    //DEFINI QUAL PONTUAÇÃO USAR DEPENDENDO DA DIFICULDADE
    if(dificuldadePontuacao===1) pontuacao += 10 + (num1+num2); 
    if(dificuldadePontuacao===2) pontuacao += 25 + (num1-num2);
    if(dificuldadePontuacao===3) pontuacao += 15 + (num1*num2);
    if(dificuldadePontuacao===4) pontuacao += 50 + (num1/num2);
    gerarComida();  //GERA OUTRA COMIDA AO PEGAR A CERTA
    gerarNumero(dificuldade); //GERA A OPERAÇÃO MATEMÁTICA

    if(vidas<3){  //VERIFICA SE A VIDA É MENOR QUE 3 PARA INICIAR O CONTADOR DE ACERTOS PARA INCREMENTAR UMA VIDA DEPOIS DE 10 ACERTOS
      contadorDeAcertos++;
      if(contadorDeAcertos === 10) vidas++, contadorDeAcertos = 0;
      //VERIFICA SE ACERTOU 10 VEZES SEGUIDAS PARA INCREMENTAR UMA VIDA E RESETAR O CONTADOR DE ACERTOS
    }
    somFood.play();
  }

  //VERIFICA SE A COBRA PEGOU A COMIDA ERRADA1
  if(!(cobraX !== parseInt((width/2)-(32*(contMinX-1))+(32*(comidaErrada1.x))) || cobraY !== parseInt((height/2)-(32*(contMinY-5))+(32*comidaErrada1.y)))){
    vidas--;  //PERDE UMA VIDA
    gerarComida();  //GERA OUTRA COMIDA
    gerarNumero(dificuldade); //GERA OUTRA OPERAÇÃO MATEMÁTICA
    contadorDeAcertos = 0;  //RESETA O CONTADOR DE ACERTOS PARA INCREMENTAR VIDAS
    somFood.play();
  }
  //VERIFICA SE A COBRA PEGOU A COMIDA ERRADA2
  if(!(cobraX !== parseInt((width/2)-(32*(contMinX-1))+(32*(comidaErrada2.x))) || cobraY !== parseInt((height/2)-(32*(contMinY-5))+(32*comidaErrada2.y)))){
    vidas--;  //PERDE UMA VIDA
    gerarComida();  //GERA OUTRA COMIDA
    gerarNumero(dificuldade); //GERA OUTRA OPERAÇÃO MATEMÁTICA
    contadorDeAcertos = 0;  //RESETA O CONTADOR DE ACERTOS PARA INCREMENTAR VIDAS
    somFood.play();
  }

  let novoQuadCob = { //RECEBE O NOVO VALOR NO QUAL A COBRA DEVE IR
    x: cobraX,
    y: cobraY
  }
  cobra.unshift(novoQuadCob); //ADICIONA UM ELEMENTO NO INICO DO ARRAY
  
  //VERIFICA SE A COBRA COLIDE NELA MESMA
  for(let i = 1; i < cobra.length; i++){
    if((cobra[0].x === cobra[i].x) && (cobra[0].y === cobra[i].y)){
      vidas = -1;  //PERDE TODAS AS VIDAS
      //GAME OVER
    }
  }

  if(vidas<0){  //VERIFICA SE PERDEU TODAS AS VIDAS
    tela = 13;  //MUDA PARA A TELA DE GAME OVER
    verificarBotaoSelecionado = true; //JÁ DEIXA O BOTÃO SELECIONADO NA TELA DE GAME OVER
  }

  //USADO PARA A COBRA ATRAVESSAR AS PAREDES
  if(cobra[0].x > (width/2)+(32*(contMaxX-2)) && direcaoCobra === 'RIGHT') cobra[0].x = parseInt((width/2)-(32*(contMinX-1))); 
  if(cobra[0].x < (width/2)-(32*(contMinX-1)) && direcaoCobra === 'LEFT') cobra[0].x = parseInt((width/2)+(32*(contMaxX-2))); 
  if(cobra[0].y > (height/2)+(32*(contMaxY-2)) && direcaoCobra === 'DOWN') cobra[0].y = parseInt((height/2)-(32*(contMinY-4))); 
  if(cobra[0].y <= (height/2)-(32*(contMinY-3)) && direcaoCobra === 'UP') cobra[0].y = parseInt((height/2)+(32*(contMaxY-2))); 

  //DEFINI A DIREÇÃO DA COBRA AO APERTAR UMA TECLA
  if((keyIsDown(68) || keyIsDown(RIGHT_ARROW)) && (direcaoCobra !== 'LEFT')) direcaoCobra = 'RIGHT';
  else if((keyIsDown(65) || keyIsDown(LEFT_ARROW)) && (direcaoCobra !== 'RIGHT')) direcaoCobra = 'LEFT';
  else if((keyIsDown(87) || keyIsDown(UP_ARROW)) && (direcaoCobra !== 'DOWN')) direcaoCobra = 'UP';
  else if((keyIsDown(83) || keyIsDown(DOWN_ARROW)) && (direcaoCobra !== 'UP')) direcaoCobra = 'DOWN';
}

function gerarComida(){ //GERAR COMIDA
  do{
    comida = {
      x: gerarNumeroAleatorio(1, (contMaxComidaX-2)),
      y: gerarNumeroAleatorio(0, (contMaxComidaY-2))
    }
    comidaErrada1 = {
      x: gerarNumeroAleatorio(1, (contMaxComidaX-2)),
      y: gerarNumeroAleatorio(0, (contMaxComidaY-2))
    }
    comidaErrada2 = {
      x: gerarNumeroAleatorio(1, (contMaxComidaX-2)),
      y: gerarNumeroAleatorio(0, (contMaxComidaY-2))
    }
  }while(comida.x === comidaErrada1.x || comida.y === comidaErrada1.y ||
    comida.x === comidaErrada2.x || comida.y === comidaErrada2.y ||
    comidaErrada1.x === comidaErrada2.x || comidaErrada1.y === comidaErrada2.y);
  //GERA COMIDAS ALEATORIAS E VERIFICA SE GERA NA MESMA POSIÇÃO QUE OUTRAS COMIDAS

  //VERIFICA SE A COMIDA É GERADA DENTRO DA COBRA
  for(let i = 1; i < cobra.length; i++){
    if(cobra[i].x === parseInt((width/2)-(32*(contMinX-1))+(32*(comida.x))) &&
    cobra[i].y === parseInt((height/2)-(32*(contMinY-5))+(32*comida.y))){
      //alert("COMIDA"); //USEI PARA SABER SE A COMIDA ERA GERADA DENTRO DA COBRA
      gerarComida();  //RECURSÃO PARA GERAR OUTRAS COMIDAS EM OUTRA POSIÇÃO
    }
    if(cobra[i].x === parseInt((width/2)-(32*(contMinX-1))+(32*(comidaErrada1.x))) &&
    cobra[i].y === parseInt((height/2)-(32*(contMinY-5))+(32*comidaErrada1.y))){
      //alert("COMIDA_ERRADA_1"); //USEI PARA SABER SE A COMIDA ERA GERADA DENTRO DA COBRA
      gerarComida();  //RECURSÃO PARA GERAR OUTRAS COMIDAS EM OUTRA POSIÇÃO
    }
    if(cobra[i].x === parseInt((width/2)-(32*(contMinX-1))+(32*(comidaErrada2.x))) &&
    cobra[i].y === parseInt((height/2)-(32*(contMinY-5))+(32*comidaErrada2.y))){
      //alert("COMIDA_ERRADA_2"); //USEI PARA SABER SE A COMIDA ERA GERADA DENTRO DA COBRA
      gerarComida();  //RECURSÃO PARA GERAR OUTRAS COMIDAS EM OUTRA POSIÇÃO
    }
  }
}

function gerarNumero(level){  //GERA NUMEROS ALEATORIOS CONFORME A DIFICULDADE ESCOLHIDA
  if(level === 1){  //DIFICULDADE FACIL
    dificuldadePontuacao = 1; //USADO PARA DEFINIR QUAL SOMA A PONTUAÇÃO DEVE FAZER
    do{
      num1 = gerarNumeroAleatorio(1, 100);
      num2 = gerarNumeroAleatorio(1, 100);
    }while((num1+num2)>99); 
    //GERA DOIS NUMEROS ALEATORIOS ENTRE 0 E 99 E FAZ A SOMA QUE A SOMA DELES SEJA MENOR QUE 100 
    do{
      numAleatorio1 = gerarNumeroAleatorio(-14, 14);
      numAleatorio2 = gerarNumeroAleatorio(-14, 14);
    }while((num1+num2)+numAleatorio1 < 0 || (num1+num2)+numAleatorio1 > 99 || (num1+num2)+numAleatorio1 === (num1+num2) || 
          (num1+num2)+numAleatorio2 < 0 || (num1+num2)+numAleatorio2 > 99 || (num1+num2)+numAleatorio2 === (num1+num2) || 
          (num1+num2)+numAleatorio1 === (num1+num2)+numAleatorio2);
    //GERA NUMEROS ALEATORIOS ENTRE -14 E 14 PARA SOMAR COM O RESULTADO CORRETO

  }else if(level === 2){  //DIFICULDADE MEDIO
    dificuldadePontuacao = 2; //USADO PARA DEFINIR QUAL SOMA A PONTUAÇÃO DEVE FAZER
    do{
      num1 = gerarNumeroAleatorio(1, 100);
      num2 = gerarNumeroAleatorio(1, 100);
    }while((num1-num2)<=0);
    //GERA DOIS NUMEROS ALEATORIOS ENTRE 0 E 99 E FAZ A SUBTRAÇÃO DELES SEJAM MAIOR OU IGUAL QUE 0
    do{
      numAleatorio1 = gerarNumeroAleatorio(-12, 12);
      numAleatorio2 = gerarNumeroAleatorio(-12, 12);
    }while((num1-num2)+numAleatorio1 < 0 || (num1-num2)+numAleatorio1 > 99 || (num1-num2)+numAleatorio1 === (num1-num2) || 
          (num1-num2)+numAleatorio2 < 0 || (num1-num2)+numAleatorio2 > 99 || (num1-num2)+numAleatorio2 === (num1-num2) ||
          (num1-num2)+numAleatorio1 === (num1-num2)+numAleatorio2);
    //GERA NUMEROS ALEATORIOS ENTRE -12 E 12 PARA SOMAR COM O RESULTADO CORRETO

  }else if(level === 3){  //DIFICULDADE DIFICIL
    dificuldadePontuacao = 3; //USADO PARA DEFINIR QUAL SOMA A PONTUAÇÃO DEVE FAZER
    do{
      num1 = gerarNumeroAleatorio(1, 100)
      num2 = gerarNumeroAleatorio(1, 100)
    }while((num1*num2)>99);
    //GERA DOIS NUMEROS ALEATORIOS ENTRE 1 E 99 E FAZ QUE A MULTIPLICAÇÃO DELES SEJAM MENOR QUE 100
    do{
      numAleatorio1 = gerarNumeroAleatorio(-10, 10);
      numAleatorio2 = gerarNumeroAleatorio(-10, 10);
    }while((num1*num2)+numAleatorio1 < 0 || (num1*num2)+numAleatorio1 > 99 || (num1*num2)+numAleatorio1 === (num1*num2) || 
          (num1*num2)+numAleatorio2 < 0 || (num1*num2)+numAleatorio2 > 99 || (num1*num2)+numAleatorio2 === (num1*num2) ||
          (num1*num2)+numAleatorio1 === (num1*num2)+numAleatorio2);
    //GERA NUMEROS ALEATORIOS ENTRE -10 E 10 PARA SOMAR COM O RESULTADO CORRETO

  }else if(level === 4){  //DIFICULDADE MUITO DIFICIL
    dificuldadePontuacao = 4; //USADO PARA DEFINIR QUAL SOMA A PONTUAÇÃO DEVE FAZER
    do{
      num1 = gerarNumeroAleatorio(1, 100);
      num2 = gerarNumeroAleatorio(1, 100);
    }while(!(Number.isInteger(num1/num2))); //VERIFICA SE O VALOR É UM NÚMERO INTEIRO - Number.isInteger VERIFICAR SE O NUMERO É INTEIRO
    //GERA DOIS NUMEROS ALEATORIOS ENTRE ENTRE 1 E 99 E FAZ COM QUE A DIVISÃO DELES SEJA INTEIRA
    do{
      numAleatorio1 = gerarNumeroAleatorio(-8, 8);
      numAleatorio2 = gerarNumeroAleatorio(-8, 8);
    }while((num1/num2)+numAleatorio1 < 0 || (num1/num2)+numAleatorio1 > 99 || (num1/num2)+numAleatorio1 === (num1/num2) || 
          (num1/num2)+numAleatorio2 < 0 || (num1/num2)+numAleatorio2 > 99 || (num1/num2)+numAleatorio2 === (num1/num2)||
          (num1/num2)+numAleatorio1 === (num1/num2)+numAleatorio2);
    //GERA NUMEROS ALEATORIOS ENTRE -8 E 8 PARA SOMAR COM O RESULTADO CORRETO

  }else if(level === 5){ //TODAS DIFICULDADES
    dificuldadeAleatoria = gerarNumeroAleatorio(1, 5); //GERA UM NÚMERO ALEATÓRIO DE 1 ATE 4 PARA ESCOLHER UMA DIFICULDADE
    gerarNumero(dificuldadeAleatoria);  //RECURSÃO GERANDO DIFICULDADES ALEATÓRIAS ENTRE FACIL E MUITO DIFICIL
  }
}

function resetarCobra(){  //REINICIA A COBRA PARA A POSIÇÃO INICIAL
  cobra.splice(1, cobra.length-1); //DEIXA O ARRAY DA COBRA EM 0
  cobra[0] = {  //DEIXA A COBRA NA POSIÇÃO INICIAL
    x: xtela,
    y: ytela
  }
  /*comida = {
    x: Math.floor(Math.random() * (contMaxComidaX-2) + 0),
    y: Math.floor(Math.random() * (contMaxComidaY-2) + 0)
  }*/
  direcaoCobra = "RIGHT";
  contadorDeAcertos = 0;
}

function gerarNumeroAleatorio(min, max){  //GERA NUMEROS ALEATORIOS   
  return Math.floor(Math.random() * (max-min) + min);
}

function resizeTelaJogo(){  //FUNÇÃO PARA CALCULAR O TAMANHO DA TELA
  /*USEI ESSA FUNÇÃO PARA DEFINIR O TAMANHO DA TELA EM QUE A COBRA DEVE ANDAR E EM QUE A COMIDA PODE SER GERADA
  E AO MUDAR O TAMANHO DA TELA DEIXANDO ELA EM TELA CHEIA É CHAMADA ESSA FUNÇÃO PARA CALCULAR O TAMANHO DA TELA*/
  
  /*LAÇOS DE REPETIÇÕES PARA CONTAR QUANTOS QUADRADOS DE 32 PIXELS 
  VAI DO CENTRO ATÉ O INICIO DA TELA E DO CENTRO ATÉ O FINAL NA POSIÇÃO X*/
  for(let i = (width/2); i < width; i+=32) contMaxX++;
  for(let i = (width/2); i > 0; i-=32) contMinX++;
  
  /*LAÇOS DE REPETIÇÕES PARA CONTAR QUANTOS QUADRADOS DE 32 PIXELS 
  VAI DO CENTRO ATÉ O INICIO DA TELA E DO CENTRO ATÉ O FINAL NA POSIÇÃO Y*/
  for(let i = (height/2); i < height; i+=32) contMaxY++; 
  for(let i = (height/2); i > 0; i-=32) contMinY++;

  /*LAÇOS DE REPETIÇÕES USADO PARA DELIMITAR ONDE A COMIDA DEVE SER GERADA*/
  for(let i = (width/2)-(32*(contMinX-1)); i <= (width/2)+(32*(contMaxX-2)); i+=32) contMaxComidaX++;
  for(let i = (height/2)-(32*(contMinY-5)); i <= (height/2)+(32*(contMaxY-2)); i+=32) contMaxComidaY++;

  //DEIXA A COBRA NO CENTRO CASO O TAMANHO DA TELA SEJA MUDADA
  xtela = parseInt(width/2);
  ytela = parseInt((height/2)+32);
  cobra[0] = {
    x: xtela,
    y: ytela
  }
  gerarComida(); //GERA OUTRAS COMIDAS AO MUDAR O TAMANHO DA TELA ENQUANTO JOGA
  gerarQuadradoBool = true;
}

function windowResized(){ //AO MUDAR O TAMANHO DA TELA, DEFINI UM NOVO VALOR PARA O CANVAS
  resizeCanvas(windowWidth, windowHeight);
  //REINICIA TODOS OS CONTADORES DE TAMANHO DA TELA E GERA OUTROS CHAMANDO A FUNÇÃO RESIZETELAJOGO();
  contMaxX = 0;
  contMinX = 0;
  contMaxY = 0;
  contMinY = 0;
  contMaxComidaX = 0;
  contMaxComidaY = 0;
  resizeTelaJogo();
}

function imageScale(img, x, y, scale){   //USADO PARA DEFINIR O TAMANHO DE UMA IMAGEM MANTENDO AS PROPORÇÕES DE ESCALA
  image(img, x, y, img.width*scale, img.height*scale);
}

function clouds(){  //NUVENS DE FUNDO
  if(xNuvem[0] >= -166){
    image(imgNuvem[0], xNuvem[0], (height/2)-300);
    xNuvem[0]-=1;   //DEFINIR VELOCIDADE DA NUVEM
  }else xNuvem[0] = width;

  if(xNuvem[1] >= -166){
    image(imgNuvem[0], xNuvem[1], (height/2));
    xNuvem[1]-=0.75;  //DEFINIR VELOCIDADE DA NUVEM
  }else xNuvem[1] = width;

  if(xNuvem[2] >= -256){
    image(imgNuvem[1], xNuvem[2], (height/2)-225);
    xNuvem[2]-=1; //DEFINIR VELOCIDADE DA NUVEM
  }else xNuvem[2] = width;

  if(xNuvem[3] >= -360){
    image(imgNuvem[2], xNuvem[3], (height/2)+150);
    xNuvem[3]-=0.5; //DEFINIR VELOCIDADE DA NUVEM
  }else xNuvem[3] = width;
  
  if(xNuvem[4] >= -360){
    imageScale(imgNuvem[2], xNuvem[4], (height/2)+200, 1.25);
    xNuvem[4]-=0.25;  //DEFINIR VELOCIDADE DA NUVEM
  }else xNuvem[4] = width;

  if(xNuvem[5] >= -280){
    image(imgNuvem[3], xNuvem[5], (height/2));
    xNuvem[5]-=0.75;  //DEFINIR VELOCIDADE DA NUVEM
  }else xNuvem[5] = width;
  
  if(xNuvem[6] >= -251){
    image(imgNuvem[4], xNuvem[6], (height/2)-150);
    xNuvem[6]-=0.85;  //DEFINIR VELOCIDADE DA NUVEM
  }else xNuvem[6] = width;
}

function mousePressed(){  //VERIFICA SE O MOUSE FOI PRESIONADO
  if(overBox){
    return (lock = true);
  }else{
    return (lock = false);
  }
}

function mouseMoved(){  //VERIFICA SE O MOUSE SE MOVE
  mouse_Moved = true;
  tecla_Press = false;
}

function keyPressed(){  //VERIFICA SE ALGUMA TECLA É PRECIONADA E DESATIVA O MOUSE
  tecla_Press = true;
  mouse_Moved = false;
}
