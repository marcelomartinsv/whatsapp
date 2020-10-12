const db = {
    contactos: [
        { name: "pepe", alias: "elPepeDeLaGente", number: 123455661, imageUrl: "pepe.jpg", contactos: [2, 3, 4, 5, 6], createdAt: new Date(), updatedAt: new Date() },
        { name: "coco", alias: "elCocoDeLaGente", number: 123455662, imageUrl: "coco.jpg", contactos: [1, 3, 4, 5, 6], createdAt: new Date(), updatedAt: new Date() },
        { name: "pocho", alias: "elPochoDeLaGente", number: 123455663, imageUrl: "pocho.jpg", contactos: [1, 2, 4, 5, 6], createdAt: new Date(), updatedAt: new Date() },
        { name: "tito", alias: "elTitoDeLaGente", number: 123455664, imageUrl: "tito.jpg", contactos: [1, 2, 3, 5, 6], createdAt: new Date(), updatedAt: new Date() },
        { name: "pipi", alias: "elPipiDeLaGente", number: 123455665, imageUrl: "pipi.jpg", contactos: [1, 2, 3, 4, 6], createdAt: new Date(), updatedAt: new Date() },
        { name: "pepo", alias: "elPepoDeLaGente", number: 123455666, imageUrl: "pepo.jpg", contactos: [1, 2, 3, 4, 5], createdAt: new Date(), updatedAt: new Date() }
    ],

    
    mensajes: [
        { contactFrom: 1, contact: 2, date: new Date(), text: "Hola Coco, soy Pepe", createdAt: new Date(), updatedAt: new Date() },
        { contactFrom: 2, contact: 3, date: new Date(), text: "Hola Pocho, soy Coco", createdAt: new Date(), updatedAt: new Date() },
        { contactFrom: 3, contact: 4, date: new Date(), text: "Hola Tito, soy Pocho", createdAt: new Date(), updatedAt: new Date() },
        { contactFrom: 5, contact: 6, date: new Date(), text: "Hola Pipi, soy Tito", createdAt: new Date(), updatedAt: new Date() },
        { contactFrom: 6, contact: 1, date: new Date(), text: "Hola Pepe, soy Pepo", createdAt: new Date(), updatedAt: new Date() }
    ],
    llamadas: [
        { contactFrom: 1, contact: 2, date: new Date(), duration: 30, type: "In", createdAt: new Date(), updatedAt: new Date() },
        { contactFrom: 2, contact: 3, date: new Date(), duration: 20, type: "Out", createdAt: new Date(), updatedAt: new Date() },
        { contactFrom: 3, contact: 4, date: new Date(), duration: 43, type: "MissedIn", createdAt: new Date(), updatedAt: new Date() },
        { contactFrom: 5, contact: 6, date: new Date(), duration: 57, type: "MissedOut", createdAt: new Date(), updatedAt: new Date() },
        { contactFrom: 6, contact: 1, date: new Date(), duration: 17, type: "In", createdAt: new Date(), updatedAt: new Date() }
    ]
}

module.exports = db;