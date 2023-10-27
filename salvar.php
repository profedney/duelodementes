<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $pergunta = $_POST['pergunta'];
    $respostaA = $_POST['resposta_a'];
    $respostaB = $_POST['resposta_b'];
    $respostaC = $_POST['resposta_c'];
    $respostaD = $_POST['resposta_d'];
    $alternativaCorreta = $_POST['alternativa_correta'];

    $registro = "$pergunta, $respostaA, $respostaB, $respostaC, $respostaD, $alternativaCorreta\n";

    file_put_contents("registros.txt", $registro, FILE_APPEND);
    header("Location: ler.php");
    exit;
}
?>
