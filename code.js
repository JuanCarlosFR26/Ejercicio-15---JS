const btn = document.querySelector('.btn');
const div = document.querySelector('.map');

btn.addEventListener('click', verPosicion);


function verPosicion() {
    navigator.geolocation.getCurrentPosition(verMapa, verError,{timeout:1000});
}

function verMapa(position) {
    const lon = position.coords.longitude;
    const lat = position.coords.latitude;

    const link = "http://maps.google.com/?ll="+lat+","+lon+"&z=14";
    
    div.innerHTML = `<a href=${link}>Click en el enlace</a>`
}


function verError(error) {
    console.log(error)
}