const data = [
    {
        img: "https://i.pinimg.com/736x/71/ea/f7/71eaf7e370b1b7e1fe9f231300a53a7a.jpg",
        text: "Will you be my only one?? 💔"
    },
    {
        img: "https://i.pinimg.com/1200x/84/d4/4f/84d44f94073c441304899c800ff9ecb5.jpg",
        text: "Are you sure? 🙂"
    },
    {
        img: "https://i.pinimg.com/1200x/5a/e0/63/5ae0635897cd9d27637f2c72256c926f.jpg",
        text: "Please say yes 😭💔"
    },
];

// Image and text for Yes button
const yesImage = "https://i.pinimg.com/736x/fe/76/c8/fe76c8f65622993b6a842ac84621b57d.jpg"; // <-- new image for Yes

let index = 0;

function noClick() {
    index++;
    if (index >= data.length) {
        index = 0;
    }

    document.getElementById("catImage").src = data[index].img;
    document.getElementById("text").innerText = data[index].text;
}

function yesClick() {
    document.getElementById("text").innerText = "but!! You lied to me. 🤮";
    document.getElementById("catImage").src = yesImage; // <-- change image here
}