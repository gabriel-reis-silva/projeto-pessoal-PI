        var contador = 0;
        var tempo = 3000;

        function liga(){
            contador = 0;
            start_slide();
        }

        function contar_lento(){
            setTimeout(() => {
                start_slide(); 
            }, tempo);
        }

    function start_slide() {

        contador++;

        if (contador <= 2) {

        contar_lento();

            document.body.style.transition = `3s`;
            document.body.style.backgroundImage = `url(img/${contador}.jpg)`;
                      
            if(contador >= 2){
                contador = -1;
            }
        }
    }
    
    
