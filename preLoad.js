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