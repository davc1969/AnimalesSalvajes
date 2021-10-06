
let infoAnimales = [];


// let Animales2 = ( () => {
//     const url = "http://localhost:5500/animales.json";
//     const getData = async () => {
//         const res  = await fetch(url);
//         console.log(10, res);
//         const data = await res.json();
//         console.log(20, data);
//         infoAnimales.push(data.animales)
//     }
//     console.log(30, infoAnimales);
//     return infoAnimales
// })()


let Animales = ( async () => {
    const url = "http://localhost:5500/animales.json";
    const getData = async () => {
        const res  = await fetch(url);
        console.log("Animales res:", res);

        const data = await res.json();
        console.log("Animales data:", data);

        console.log("Animales data.animales", data.animales);

        infoAnimales = data.animales;
        console.log("infoAnimales", infoAnimales);
        return infoAnimales
    }
    console.log("Animales getData:", getData());
    return { getData }
})()

export default {Animales};


