const curiosidadesWin98 = {
    1: "Você sabia que o famoso som de inicialização do Windows 95 foi feito por Brian Eno em um Mac? Já a música de abertura do Windows 98 foi composta por Ken Kato usando sintetizadores profissionais da época, focando totalmente na experiência de computadores PC nativos.",
    2: "Durante o seu desenvolvimento entre 1996 e 1997, o Windows 98 era chamado internamente pelos programadores da Microsoft pelo codinome secreto de 'Memphis'.",
    3: "Para rodar o Windows 98, você precisava de requisitos mínimos absurdamente baixos para os padrões de hoje: apenas 16 MB de memória RAM e cerca de 200 MB de espaço no disco rígido (HD). Hoje, uma única foto de celular ocupa mais espaço que isso!",
    4: "O sistema tinha um Easter Egg incrível de Créditos: se você abrisse as configurações de data/hora, fosse na aba do mapa-múndi e pressionasse uma combinação específica de teclas, o sistema abria uma tela secreta mostrando fotos de toda a equipe de desenvolvimento flutuando.",
    5: "Durante a primeira apresentação pública oficial do Windows 98 na feira COMDEX, o sistema travou e exibiu a famosa 'Tela Azul da Morte' ao vivo no telão enquanto Bill Gates explicava o sistema. O vídeo desse momento é um clássico da internet até hoje!",
    6: "O Windows 98 foi o primeiro sistema operacional a vir totalmente integrado com a web através do 'Active Desktop', uma tecnologia inovadora que permitia colocar páginas da internet rodando ao vivo e atualizando direto no papel de parede do computador.",
    7: "Ele popularizou os famosos 'Temas de Área de Trabalho'. Com um clique, você podia mudar o computador inteiro para o tema 'Espaço', 'Selva', 'Viagem no Tempo' ou 'Mistério', alterando todos os ícones, papéis de parede, esquemas de cores e sons de uma só vez.",
    8: "Ele vinha de fábrica com jogos nativos inesquecíveis que marcaram gerações e consumiram bilhões de horas de produtividade no mundo todo: o tenso Campo Minado, o clássico Paciência, Copas e o amado Pinball Space Cadet.",
    9: "A Microsoft planejava encerrar o suporte ao Windows 98 em 2004, mas devido à sua imensa popularidade mundial (muitas empresas e escolas se recusavam a mudar para sistemas novos), eles foram forçados a estender o suporte oficial até julho de 2006.",
    10: "O plano original era que o Windows 98 fosse substituído pelo Windows Millennium Edition (Me) no ano 2000, mas ele deu tantos erros de sistema que as pessoas consideram o lendário Windows XP (lançado em 2001) o verdadeiro sucessor espiritual dele."
};

const botoesCuriosidade = document.querySelectorAll('.curiosity-trigger');
const janelaCuriosidade = document.getElementById('curiosity-window');
const textoCuriosidade = document.getElementById('curiosity-text');
const botaoFecharx = document.getElementById('close-window-btn');
const botaoFecharOK = document.getElementById('ok-window-btn');

botoesCuriosidade.forEach(botao => {
    botao.addEventListener('click', () => {
        const idSelecionado = botao.getAttribute('data-id');
        const textoFinal = curiosidadesWin98[idSelecionado];

        textoCuriosidade.textContent = textoFinal;
        janelaCuriosidade.style.display = 'block';
    });
});

function fecharJanela(){
    janelaCuriosidade.style.display = 'none';
}
botaoFecharx.addEventListener('click', fecharJanela);
botaoFecharOK.addEventListener('click', fecharJanela);

function atualizarRelogio() {
  const displayRelogio = document.getElementById('clock-display');
  
  if (!displayRelogio) return;
git
  const agora = new Date();
  let horas = agora.getHours();
  let minutos = agora.getMinutes();

  if (horas < 10) horas = '0' + horas;
  if (minutos < 10) minutos = '0' + minutos;

  const horarioFormatado = horas + ':' + minutos;
  displayRelogio.textContent = horarioFormatado;
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);
