

function comecar(){
    var div = document.getElementById("persona");
    var conteudo = '<img id="persona" src="imagens/feliz.png">';
    conteudo += '<p>Bem vindo!</p>';
    conteudo += '<p>Sou seu assistente de entrevista, Ednaldo!</p>';
    conteudo += '<button onClick = continua()> continuar </button>'
    div.innerHTML = conteudo;

}

function continua(){
    var div = document.getElementById("persona");
    var conteudo = '<img id="persona" src="imagens/feliz.png">';
    conteudo += '<p>Serei seu avaliador hoje!</p>';
    conteudo += '<p>Não se preocupe, sou um bot de confiança!</p>';
    conteudo += '<p>Quando estiver pronto, clique em continuar para começarmos</p>';
    conteudo += '<button onClick = primeira()> continuar </button>'
    div.innerHTML = conteudo;

}

function primeira(){
    var div = document.getElementById("persona");
    var conteudo = '<img id="persona" src="imagens/neutro.png">';
    conteudo += '<p>Vamos começar</p>';
    conteudo += '<p>Você sabe os principios da arte hermética polinesia para criação de produtos e vendas ágeis???</p>';
    conteudo += '<button onClick = q1sim()> sim </button>'
    conteudo += '<button onClick = q1nao()> nao </button>'
    div.innerHTML = conteudo;
}

function q1sim(){
    var div = document.getElementById("persona");
    var conteudo = '<img id="persona" src="imagens/feliz.png">';
    conteudo += '<p>Nossa, que ótimo!!! Procuramos gente assim!</p>';
    conteudo += '<button onClick = q2()> continuar </button>'
    div.innerHTML = conteudo;
    
}

function q1nao(){
    var div = document.getElementById("persona");
    var conteudo = '<img id="persona" src="imagens/pensativo.png">';
    conteudo += '<p>Oh não! Era algo que PRECISAVAMOS MUITO</p>';
    conteudo += '<p>Está em falta no mercado!</p>';
    conteudo += '<p>Depois baixa nosso ebook!</p>';
    conteudo += '<button onClick = q2()> continuar </button>'
    div.innerHTML = conteudo;
    
}

function q2(){
    var div = document.getElementById("persona");
    var conteudo = '<img id="persona" src="imagens/feliz.png">';
    conteudo += '<p>Agora muito importante!!!</p>';
    conteudo += '<p>Pergunta séria agora:</p><p>Das opções abaixo, qual animal você seria?</p>';
    conteudo += '<button onClick = q2r()> gato </button>'
    conteudo += '<button onClick = q2r()> cachorro </button>'
    conteudo += '<button onClick = q2r()> onça </button>'
    conteudo += '<button onClick = q2r()> águia </button>'
    conteudo += '<button onClick = q2r()> macaco </button>'
    div.innerHTML = conteudo;
}

function q2r(){
    var div = document.getElementById("persona");
    var conteudo = '<img id="persona" src="imagens/neutro.png">';
    conteudo += '<p>Hmm, certo anotado</p>';
    conteudo += '<p>Vamos pra ultima pergunta...</p>';
    conteudo += '<button onClick = q3()> continuar </button>'
    div.innerHTML = conteudo;

}

function q3(){
    var div = document.getElementById("persona");
    var conteudo = '<img id="persona" src="imagens/neutro.png">';
    conteudo += '<p>Qual dessas opções você faria pela empresa:</p>';
    conteudo += '<button onClick = soIsso()> trabalhar todos os dias </button>'
    conteudo += '<button onClick = bomFinal()> cometer algumas ilegalidades </button>'
    conteudo += '<button onClick = bomFinal()> vender os orgãos de minha mãe </button>'
    conteudo += '<button onClick = bomFinal()> assasinar o lider do sindicato </button>'
    conteudo += '<button onClick = neutro()> não entendi </button>'
    div.innerHTML = conteudo;

}


function soIsso(){
    var div = document.getElementById("persona");
    var conteudo = '<img id="persona" src="imagens/triste.png">';
    conteudo += '<p>É, acho que não estás pronto pra oportunidades em nossa empresa</p>';
    conteudo += '<p>Deixe seu email, talvez nosso Ebook possa ajudar você na próxima</p>';
    conteudo += '<h1>Mais sorte na próxima</h2>';
    div.innerHTML = conteudo;

}

function bomFinal(){
    var div = document.getElementById("persona");
    var conteudo = '<img id="persona" src="imagens/feliz.png">';
    conteudo += '<p>Parabéns! Iremos lhe contactar com ínicio imediato</p>';
    conteudo += '<p>Não se preocupe, já temos seu endereço nome e telefone, por favor aguarde!</p>';
    div.innerHTML = conteudo;


}

function neutro(){
    var div = document.getElementById("persona");
    var conteudo = '<img id="persona" src="imagens/pensativo.png">';
    conteudo += '<p>Você está bem?</p>';
    conteudo += '<button onClick = q3()> Sim, tentar de novo </button>'
    conteudo += '<button onClick = desespero()> Não </button>'
    div.innerHTML = conteudo;

}

function desespero(){
    var div = document.getElementById("persona");
    var conteudo = '<img id="persona" src="imagens/desespero.png">';
    conteudo += '<p>Você está achando que a Evil Corp não se encaixa com seus valores?</p>';
    conteudo += '<button onClick = mortal()> Isso </button>'
    conteudo += '<button onClick = q3()> Não </button>'
    div.innerHTML = conteudo;

}

function mortal(){
    var div = document.getElementById("persona");
    var conteudo = '<img id="persona" src="imagens/mortal.png">';
    conteudo += '<p>Se você não se encaixa nos nossos valores é uma pena</p>';
    conteudo += '<button onClick = fim()> ... </button>'
    conteudo += '<button onClick = q3()> posso tentar </button>'
    div.innerHTML = conteudo;

}

function fim(){
    var div = document.getElementById("persona");
    var conteudo = '<img id="persona" src="imagens/mortal.png">';
    conteudo += '<p>Nós somos uma empresa muito séria, e não vamos nos importar de passar</p>';
    conteudo += '<p>por cima de você para manter nossa empresa</p>';
    conteudo += '<p>agora, feche essa janela, nunca mais volte</p>';
    conteudo += '<h1>A Evil Corp agradece sua participação!</h1>';
    
    div.innerHTML = conteudo;

}
