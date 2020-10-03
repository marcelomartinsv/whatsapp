const db = {
    contactos: [
        { id: 1, name: "pepe", alias: "elPepeDeLaGente", number: 123455661, imageUrl: "pepe.jpg", contactos: [2, 3, 4, 5, 6] },
        { id: 2, name: "coco", alias: "elCocoDeLaGente", number: 123455662, imageUrl: "coco.jpg", contactos: [1, 3, 4, 5, 6] },
        { id: 3, name: "pocho", alias: "elPochoDeLaGente", number: 123455663, imageUrl: "pocho.jpg", contactos: [1, 2, 4, 5, 6] },
        { id: 4, name: "tito", alias: "elTitoDeLaGente", number: 123455664, imageUrl: "tito.jpg", contactos: [1, 2, 3, 5, 6] },
        { id: 5, name: "pipi", alias: "elPipiDeLaGente", number: 123455665, imageUrl: "pipi.jpg", contactos: [1, 2, 3, 4, 6] },
        { id: 6, name: "pepo", alias: "elPepoDeLaGente", number: 123455666, imageUrl: "pepo.jpg", contactos: [1, 2, 3, 4, 5] }
    ],
    mensajes: [
        { id: 1, contactFrom: 1, contact: 2, date: "10/06/2020", text: "Hola Coco, soy Pepe" },
        { id: 2, contactFrom: 2, contact: 3, date: "11/04/2020", text: "Hola Pocho, soy Coco" },
        { id: 3, contactFrom: 3, contact: 4, date: "09/05/2020", text: "Hola Tito, soy Pocho" },
        { id: 4, contactFrom: 5, contact: 6, date: "15/01/2020", text: "Hola Pipi, soy Tito" },
        { id: 5, contactFrom: 6, contact: 1, date: "01/09/2020", text: "Hola Pepe, soy Pepo" }
    ],
    llamadas: [
        { id: 1, contactFrom: 1, contact: 2, date: "10/06/2020", duration: 30, type: "In" },
        { id: 2, contactFrom: 2, contact: 3, date: "11/04/2020", duration: 20, type: "Out" },
        { id: 3, contactFrom: 3, contact: 4, date: "09/05/2020", duration: 43, type: "MissedIn" },
        { id: 4, contactFrom: 5, contact: 6, date: "15/01/2020", duration: 57, type: "MissedOut" },
        { id: 5, contactFrom: 6, contact: 1, date: "01/09/2020", duration: 17, type: "In" }
    ]
}

module.exports = db;