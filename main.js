function thankYou() {
    let rate = document.getElementById('rate');
    let section2 = document.getElementById("section-2");
    let section1= document.getElementById("section-1");
    let x= document.getElementsByTagName('input');
    for (let i of x) {
        if (i.checked===true) {
            rate.innerHTML=i.value
            section1.className= 'sec-1-hidden' 
            section2.className = 'sec-2-visible'
            return
        } 
    }
    alert('select rating before submission')
}