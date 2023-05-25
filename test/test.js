const button = document.getElementById('uwu')
const loader = document.getElementById('loader')

function load(){
    if(loader.style.display == "none"){
        loader.style.display = "block";
    }
    else{
        loader.style.display = "none";
    }
}
document.getElementById('uwu').addEventListener('click', load);

const a = 'Abc';
if(a.includes('b')){
    console.log("UwU")
}