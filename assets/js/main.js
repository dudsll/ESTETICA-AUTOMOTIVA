<script>

    const imagem = document.getElementById('minhaImagem');
    const botao= document.querySelectorAll('altImg');

    botao.addEventListener('click', function() {
       if (imagem.src.match("foto1.jpg")) {
            imagem.src = "foto2.jpg";
        } else {
            imagem.src = "foto1.jpg";
        }
    });

</script>