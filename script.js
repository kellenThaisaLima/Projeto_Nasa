$("#data").on("change", ()=>{                                                                                                   /// inicia jquary e uma função anonima só ()

    $.ajax( {
        "url" : `https://api.nasa.gov/planetary/apod?api_key=gP0MWe2YMcqh9AQE7ypU9CybIfxkqTKBcnNxWvvq&date=${$("#data").val()}`, // cria o objeto e atribui a propriedade da URL
        "success" : function(retorno){
           
                $("#titulo").text(`${retorno.title}`);
                $("#dados").html(`${retorno.explanation}`);
                $("#imagem").attr("src",`${retorno.url}`);
            
        } 

    })

    


}); 