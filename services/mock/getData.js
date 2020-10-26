const fakeData = [
    {
        "id": 3,
        "name": "pocho",
        "alias": "elPochoDeLaGente",
        "phone": "123455663",
        "imageUrl": "pocho.jpg",
        "contactos": [
            1,
            2,
            4,
            5,
            6
        ],
        "createdAt": "2020-10-20T23:45:08.391Z",
        "updatedAt": "2020-10-20T23:45:08.391Z",
        "deletedAt": null
    },
    {
        "id": 4,
        "name": "tito",
        "alias": "elTitoDeLaGente",
        "phone": "123455664",
        "imageUrl": "tito.jpg",
        "contactos": [
            1,
            2,
            3,
            5,
            6
        ],
        "createdAt": "2020-10-20T23:45:21.396Z",
        "updatedAt": "2020-10-20T23:45:21.396Z",
        "deletedAt": null
    },
    {
        "id": 5,
        "name": "pipi",
        "alias": "elPipiDeLaGente",
        "phone": "123455665",
        "imageUrl": "pipi.jpg",
        "contactos": [
            1,
            2,
            3,
            4,
            6
        ],
        "createdAt": "2020-10-20T23:45:37.530Z",
        "updatedAt": "2020-10-20T23:45:37.530Z",
        "deletedAt": null
    },
    {
        "id": 2,
        "name": "coco",
        "alias": "elCocoDeLaGente",
        "phone": "123455662",
        "imageUrl": "coco.jpg",
        "contactos": [
            1,
            3,
            4,
            5,
            6
        ],
        "createdAt": "2020-10-20T23:43:21.833Z",
        "updatedAt": "2020-10-20T23:43:21.833Z",
        "deletedAt": null
    },
    {
        "id": 6,
        "name": "pepo",
        "alias": "elPepoDeLaGente",
        "phone": "123455666",
        "imageUrl": "pepo.jpg",
        "contactos": [
            1,
            2,
            3,
            4,
            5
        ],
        "createdAt": "2020-10-20T23:45:57.560Z",
        "updatedAt": "2020-10-20T23:45:57.560Z",
        "deletedAt": null
    },
    {
        "id": 1,
        "name": "pepe",
        "alias": "elPepeDeLaGente",
        "phone": "123455661",
        "imageUrl": "pepe.jpg",
        "contactos": [
            2,
            3,
            4,
            5,
            6
        ],
        "createdAt": "2020-10-20T23:38:42.714Z",
        "updatedAt": "2020-10-20T23:38:42.714Z",
        "deletedAt": null
    },
    {
        "id": 8,
        "name": "pipa",
        "alias": "elPipaDeLaGente",
        "phone": "98765432",
        "imageUrl": "pipa.jpg",
        "contactos": [
            1,
            2,
            3,
            4,
            5,
            6
        ],
        "createdAt": "2020-10-26T12:50:15.797Z",
        "updatedAt": "2020-10-26T12:50:15.797Z",
        "deletedAt": null
    }
];

export default async (info) => {
    const response = await new Promise((resolve, reject) => {
        resolve(fakeData)
    })
}