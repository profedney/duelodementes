let linhas = [];
        let indicePergunta = 0;

        function carregarCSV() {
            fetch('registros.txt')
                .then(response => response.text())
                .then(data => {
                    linhas = data.trim().split('\n').map(line => line.split(','));
                    exibirPergunta();
                });
        }

        function exibirPergunta() {
            if (indicePergunta < linhas.length) {
                const pergunta = linhas[indicePergunta][0];
                const alternativaA = linhas[indicePergunta][1];
                const alternativaB = linhas[indicePergunta][2];
                const alternativaC = linhas[indicePergunta][3];
                const alternativaD = linhas[indicePergunta][4];
                const respostaCorreta = linhas[indicePergunta][5];

                document.getElementById('pergunta').textContent = pergunta;
                document.getElementById('alternativaA').textContent = alternativaA;
                document.getElementById('alternativaB').textContent = alternativaB;
                document.getElementById('alternativaC').textContent = alternativaC;
                document.getElementById('alternativaD').textContent = alternativaD;

                document.getElementById('resposta').textContent = `Resposta correta: ${respostaCorreta}`;

                document.querySelectorAll('input[name="resposta"]').forEach(input => {
                    input.checked = false;
                });
            } else {
                document.getElementById('pergunta').textContent = 'Fim do jogo';
                document.getElementById('alternativas').style.display = 'none';
                document.getElementById('avancar').style.display = 'none';
                document.getElementById('exibirResposta').style.display = 'none';
                document.getElementById('resposta').textContent = '';
            }
        }

        function verificarResposta() {
            const respostaSelecionada = document.querySelector('input[name="resposta"]:checked');
            if (!respostaSelecionada) {
                alert('Por favor, selecione uma resposta.');
                return;
            }
        }

        function avancarPergunta() {
            verificarResposta();
            indicePergunta++;
            exibirPergunta();
        }

        function exibirResposta() {
            const respostaCorreta = linhas[indicePergunta][5];
            alert(`Resposta correta: ${respostaCorreta}`);
        }

        carregarCSV();