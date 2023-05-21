let consent = localStorage.getItem("zapamtio")
let wrapper = document.getElementById("wrapper");
console.log(consent);
if(consent===null){
    wrapper.innerHTML= `
    <div class="prozor" id="prozor">
        <div class="navbar">
            <div class="slika"><img src="cookie.png"></div>
            <div class="navtext"><h2>Cookie Consent</h2></div>
        </div>
        <div class="main" id="main">
            This is a message related to the cookie<br>
            use on this site. Please accept or reject<br>
            cookie usage. <a href="#">More info...</a>
        </div>
        <div class="buttons" id="buttons">
            <button class="accept" onclick="spremiAccept()">Accept</button>
            <button class="reject" onclick="spremiReject()">Reject</button>
        </div>
    </div>
    `
}

let spremiAccept = () =>{
    localStorage.setItem("zapamtio", "Accepted");
    let prozor = document.getElementById("prozor");
    prozor.style.display ="none";
}
let spremiReject = () =>{
    localStorage.setItem("zapamtio", "Reject");
    let prozor = document.getElementById("prozor");
    prozor.style.display ="none";
}