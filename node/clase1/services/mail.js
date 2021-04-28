const nodemailer = require('nodemailer');

const send = async({to, subject = "Gracias por registrarte :D!!", html}) => {
    try {
        const transporter = nodemailer.createTransport({
            service: process.env.CORREO_SERVICE, //servicio de mail a usar ex: gmail
            auth: {
                user: process.env.CORREO_USER, //casilla de correo que envia el mail
                pass: process.env.CORREO_PASSWORD, //password
            },
            tls : {
                rejectUnathorized: false, //le digo a mi service que no tengo certificado de seguridad corriendo en el server de donde mando los mails
            }
        });
        const mail = {
            from: '<noreply>remitente<noreply>', //el remitente del mail
            to, //a quien le estoy mandando el mail
            subject, //asunto del mail
            html, //el body del mail (html : doc html, text: texto plano)
            //attachments: para mandar archivos
        }
        const envio = await transporter.sendMail(mail);
        return envio.messageId;
        
    } catch (e) {
        console.log(e);
    }
}

module.exports = {send};