// meanangkap elemet a dengan menggunakan looping
document.querySelectorAll('#option a').forEach((anchor) => {
    anchor.addEventListener('click', (element) => {
        computerChoice(element);
    })
})

function computerChoice(element){
    // menangkap pilihan user
    let pilihanUser = element.target. innerText;

    // menangkap pilihan computer 
    let pilihanKomputer = document.querySelector('#result');

    // membuat pilihan ueqntuk komputer
    let choices = ['Rock', 'Paper', 'Scissors'];

    // membuat pilihan random untuk komputer
    pilihanKomputer.innerHTML = choices[Math.floor(Math.random() * choices.length)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    if(pilihanUser == 'Rock' && pilihanKomputer == 'Scissors'){
        setTimeout(alert('You Win'), 100);
    }

    if(pilihanUser == 'paper' && pilihanKomputer == 'Rock'){
        setTimeout(alert('You Win'), 100);
    }

    if(pilihanUser == 'Scissors' && pilihanKomputer == 'Paper'){
        setTimeout(alert('You Win'), 100);
    }

    // jika komputer yang menang
    if(pilihanUser == 'Scissors' && pilihanKomputer == 'Rock'){
        setTimeout(alert('You Win'), 100);
    }

    if(pilihanUser == 'Rock' && pilihanKomputer == 'Paper'){
        setTimeout(alert('You Win'), 100);
    }

    if(pilihanUser == 'Paper' && pilihanKomputer == 'Scissors'){
        setTimeout(alert('You Win'), 100);
    }

    // jika draw atau seri
    if(pilihanUser == pilihanKomputer){
        setTimeout(alert('Draw'), 100);
    }

}