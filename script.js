let btn1 = document.getElementsByClassName("btn")[0];
btn1.addEventListener("click", getjoke);
let jokeres = document.getElementsByClassName("result")[0];

async function getjoke() {
    const jokes = async() => {
        const res = await fetch(
            "https://geek-jokes.sameerkumar.website/api?format=json"
        );
        const data = await res.json();
        return data;
    };
    const j = await jokes();
    let jj = j.joke;
    jokeres.innerHTML = jj;
}