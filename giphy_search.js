const button = document.getElementById('mybutton');
button.addEventListener('click', fetchGif);

function fetchGif() {
    const gifType = document.getElementById('giftype');
    const gif = gifType.value;
    const noOfGifs = document.getElementById('gifnum');
    const number = noOfGifs.value;
    if (!gif) {
        alert("Please enter the type of GIF");
    } else {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=OKovy8ivHuB7o9yBxUn8kgfYQEB4Nr0t&q=${gif}&limit=${number}&offset=0&rating=G&lang=en`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                organizeData(data);
            })
    }
}

function organizeData(data) {
    const imageContainer = document.getElementById('flex-container');
    // To clear the gifs obtained from the previous search
    while (imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.firstChild);
    }
    data.data.forEach(item => {
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = item.images.preview_gif.url;
        imageContainer.appendChild(div);
        div.appendChild(img);
    });
}
