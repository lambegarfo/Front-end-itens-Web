

function GerarQR () {

    const qrcode = document.getElementById('imagemQRcode');
    const linktext = document.getElementById('link');
    const url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

    if(linktext.value == '' || linktext.value == 0) {

        qrcode.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Vazio por aqui...'

    }else{
        
        const qrcodeNovo = (url + encodeURIComponent(linktext.value));
        
        qrcode.src = qrcodeNovo;
    }
    

}

