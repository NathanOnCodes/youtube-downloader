

// RECEBENDO O LINK E O FORMATO DO USUARIO PELOS BOTOES
$('.btn').click(function () {
    var link = $(".link").val();
    var format = $(".format").children("option:selected").val();
    var src = "" + link + "=" + format + "";
    download(link, format);
});



// USANDO A API LOADER.TO
// ao clicar no botao o mesmo recebe o valor com url da api e link de usario, a função é chamada 
// após clicar o baixar.
function download(link, format) {
    $('.button-container').html('<iframe style="width:100%;height:60px;border:0;overflow:hidden;" scrolling="no" src="https://loader.to/api/button/?url=' + link + '&f=' + format + '"></iframe>');
}