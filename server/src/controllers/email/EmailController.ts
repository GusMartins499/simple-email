import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export default class EmailController {

    async create(request: Request, response: Response) {
        const { emailRemetente, emailDestinatario, assuntoEmail, mensagemEmail, nomeRemetente } = request.body.data;
        const remetete = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: `${emailRemetente}`,
                pass: 'sua senha do gmail'
            }
        })

        await remetete.sendMail({
            from: `${nomeRemetente} <${emailRemetente}>`,
            to: `${emailDestinatario}`,
            subject: `${assuntoEmail}`,
            text: `${mensagemEmail}`
            //html: "Este aqui é o html do e-mail e estou colocando um link para minha aplicação <a href='http://localhost:3000/'></a>"
        })
            .then(message => {
                console.log(message)
            })
            .catch(err => {
                console.log(err)
            })
    }
}