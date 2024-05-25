function fetchdata() {
    fetch("http://localhost:3000/data")
        .then((res) => res.json())
        .then((data) => Cardlist(data))
        .catch((err) => console.log(err));
}

fetchdata();

function Cardlist(data) {
    const store = data.map((el) => SingleCard(el.avatar,el.discription, el.email));
    document.getElementById("weather").innerHTML = store.join("");
}

function SingleCard(avatar, discription, email) {
    let card = `
    <div class="card mb-3 m-auto" style="max-width: 540px;box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;         ">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${avatar}" class="img-fluid rounded-start">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${discription}</h5>
                    <p class="card-text">Email: ${email}</p>
                </div>
            </div>
        </div>
    </div>`;
    return card;
}