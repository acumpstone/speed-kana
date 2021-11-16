window.onload = function() {
    pickKana();
}

function pickKana() {
    const hiraganaList = [
        "a.svg",
        "i.svg",
        "u.svg",
        "ri.svg"
    ];

    let randInt = Math.floor(Math.random() * hiraganaList.length);
    console.log(hiraganaList[randInt]);
    document.getElementById("kana-img").src = hiraganaList[randInt];
}
