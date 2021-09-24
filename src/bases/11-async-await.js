

const getImagen = async() => {

    try {

        const apiKey = 'XvdFifBLp2ajj4NaRIe7U8MJ9QISN05T';
        const request = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await request.json();

        
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

        
    } catch (error) {
        
    }
    
}

getImagen();