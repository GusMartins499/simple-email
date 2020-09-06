import React, { useState, FormEvent } from 'react';
import api from '../services/api';
import Input from '../components/input';

import './styles.css';
import PageHeader from '../components/PageHeader';
import Textarea from '../components/Textarea';

function Form() {
    const [emailRemetente, setEmailRemetente] = useState('');
    const [emailDestinatario, setEmailDestinatario] = useState('');
    const [assuntoEmail, setAssuntoEmail] = useState('');
    const [mensagemEmail, setMensagemEmail] = useState('');
    const [nomeRemetente, setNomeRemetente] = useState('');

    async function handleEmail(e: FormEvent) {
        e.preventDefault();
        const data = {
            emailRemetente,
            emailDestinatario,
            assuntoEmail,
            mensagemEmail,
            nomeRemetente,
        };
        await api.post('/', { data });
    }

    return (
        <div id="page-simple-email" className="container">
            <PageHeader
                title="Simples envio de e-mail"
                description="Envio de e-mail com a lib nodemailer" />
            <main>
                <form onSubmit={handleEmail}>
                    <fieldset>
                        <Input
                            name="nomeRemetente"
                            label="Nome remetente"
                            //value={name}
                            onChange={(e) => { setNomeRemetente(e.target.value) }}
                        />
                        <Input
                            name="emailRemetente"
                            label="E-mail remetente"
                            //value={name}
                            onChange={(e) => { setEmailRemetente(e.target.value) }}
                        />
                        <Input
                            name="emailDestinatario"
                            label="E-mail destinatário"
                            //value={name}
                            onChange={(e) => { setEmailDestinatario(e.target.value) }}
                        />
                        <Input
                            name="assuntoEmail"
                            label="Assunto e-mail"
                            //value={name}
                            onChange={(e) => { setAssuntoEmail(e.target.value) }}
                        />
                        <Textarea
                            name="mensagemEmail"
                            label="Mensagem do e-mail"
                            onChange={(e) => { setMensagemEmail(e.target.value) }}
                        />
                    </fieldset>

                    <footer>
                        <p>Importante ! <br /> Preencha todos os dados</p>
                        <button type="submit">Enviar e-mail</button>
                    </footer>
                </form>
            </main>
        </div>
    )
};

export default Form;