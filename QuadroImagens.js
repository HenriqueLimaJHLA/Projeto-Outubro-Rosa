var ordemImg = 0
var img= []


function proximo() {
    var imagem = document.getElementById('troca_imagens')    
    
    imagens()
    ordemImg = (ordemImg + 1) % img.length; 
    imagem.src = img[ordemImg]
    console.log(ordemImg);
}
function voltar() {
    var imagem = document.getElementById('troca_imagens')    
    
    imagens()
    ordemImg = (ordemImg - 1) % img.length;
    
    if(ordemImg <= -1) {
        ordemImg = img.length -1
        imagem.src = img[ordemImg]
        
    }else{
        imagem.src = img[ordemImg]
        
    }
    console.log(ordemImg);
}
function imagens() {
    
    img[0]= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz24VerRA6UEfm1Kt4kL4l4wZER4oqycewtg&usqp=CAU"
    img[1]= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilKSldDNGzHHbx2WrV2hLwv4h8o7-4i_5ig&usqp=CAU"
    img[2]= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWwLq9rbGJQe-6_GAIMbgS2UNeJhy1DIs5Xg&usqp=CAU"   
    img[3]= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfRJ3T8o0RybTqKV1w1kxB3V5P2k-1IsbEhA&usqp=CAU"
}
