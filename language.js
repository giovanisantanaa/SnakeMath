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