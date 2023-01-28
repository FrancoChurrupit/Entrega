document.getElementById('pre').addEventListener('click', function () {
     console.log("Gracias por completar el formulario")
     document.getElementById('unico').innerHTML = "Ya ha sido enviado"
})

document.getElementById('intera').addEventListener('click', function (){
     document.getElementById('hero').innerHTML=`<img class="foto" src="/Images & cv/Blue-Light-Blue-Color-Blocks-Flight-Attendant-CV-_3_.jpg" >`
})

document.getElementById('reload').addEventListener('click', function () {
     location. reload()
})

document.getElementById('interno').addEventListener('click', function (){
     document.getElementById('hero').innerHTML=`<img class="foto2" src="/Images & cv/Plano (1) (1) (1) (1) - Model (5) (1) (2).jpg" >`
})