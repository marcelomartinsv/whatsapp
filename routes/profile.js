const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get("/:id", (req, res) => {
    profile = {};
    db.contactos.forEach(contact => {
        if (contact.id == req.params.id) {
            profile.nombre = contact.name;
            profile.alias = contact.alias;
            profile.contactos = []
            contact.contactos.forEach(item => {
                db.contactos.forEach(value => {
                    if (item == value.id) {
                        profile.contactos.push(value.name)
                    }
                })
            })
        }
    })

    profile.llamadas = {
        recibidas: [],
        realizadas: [],
    };
    db.llamadas.forEach(llamada => {
        if (llamada.contact == req.params.id) {
            const call = {};
            db.contactos.forEach(contact => {
                if (llamada.contactFrom == contact.id) {
                    call.de = contact.name
                }
            })
            call.fecha = llamada.date;
            call.duracion = llamada.duration;
            call.status = llamada.type;
            profile.llamadas.recibidas.push(call);
        }

        if (llamada.contactFrom == req.params.id) {
            const call = {};
            db.contactos.forEach(contact => {
                if (llamada.contact == contact.id) {
                    call.a = contact.name
                }
            })
            call.fecha = llamada.date;
            call.duracion = llamada.duration;
            call.status = llamada.type;
            profile.llamadas.realizadas.push(call);
        }
    });

    profile.mensajes = {
        recibidos: [],
        enviados: [],
    }
    db.mensajes.forEach(mensaje => {
        if (mensaje.contact == req.params.id) {
            const msj = {};
            db.contactos.forEach(contact => {
                if (mensaje.contactFrom == contact.id) {
                    msj.de = contact.name
                }
            });
            msj.fecha = mensaje.date;
            msj.texto = mensaje.text;
            profile.mensajes.recibidos.push(msj);
        }

        if (mensaje.contactFrom == req.params.id) {
            const msj = {};
            db.contactos.forEach(contact => {
                if (mensaje.contact == contact.id) {
                    msj.a = contact.name
                }
            });
            msj.fecha = mensaje.date;
            msj.texto = mensaje.text;
            profile.mensajes.enviados.push(msj);
        }
    })

    res.send(profile);
})

module.exports = router;