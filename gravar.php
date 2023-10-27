<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Game de Perguntas e Respostas">
    <meta name="keywords" content="HTML, JavaScript, PHP">
    <meta name="author" content="prof. Edney Rossi">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo Duelo de Mentes</title>
</head>
<body>
    <h1>Gravar Nova Pergunta</h1>
    <form method="post" action="salvar.php">
        <label for="pergunta">Pergunta:</label>
        <input type="text" name="pergunta" required><br><br>
        
        <label for="resposta_a">Resposta A:</label>
        <input type="text" name="resposta_a" required><br><br>
        
        <label for="resposta_b">Resposta B:</label>
        <input type="text" name="resposta_b" required><br><br>
        
        <label for="resposta_c">Resposta C:</label>
        <input type="text" name="resposta_c" required><br><br>
        
        <label for="resposta_d">Resposta D:</label>
        <input type="text" name="resposta_d" required><br><br>
        
        <label for="alternativa_correta">Alternativa Correta:</label>
        <input type="text" name="alternativa_correta" required><br><br>

        <input type="submit" value="Enviar">
    </form>
</body>
</html>
