const getDate = require('../utils/getDate');
const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const mensagensTicket = await connection('mensagemTicket').select('*');
    
        return response.json(mensagensTicket);
    },

    async indexById (request, response) {
        const  { id }  = request.params;

        const mensagemTicket = await connection('mensagemTicket')
            .where('id', id)
            .select()
            .first();
    
        return response.json(mensagemTicket);
    },
    
    async create (request, response) {
        const  usuarioId  = request.headers.authorization;
        const  remetenteId  = request.headers.authorization;
        const  dataMensagem = getDate();    
        const { mensagem, tipoRemetenteId, ticketId } = request.body;

        const [id] = await connection('mensagemTicket').insert({
            mensagem,
            tipoRemetenteId, 
            ticketId,
            dataMensagem,
            remetenteId,
            usuarioId
        })

        return response.json({ id });
    },

    async update (request, response) {
        const   { id }   = request.params;
        const  usuarioId  = request.headers.authorization;
        const  remetenteId  = request.headers.authorization;
        const  dataMensagem  = getDate();
        const { mensagem, tipoRemetenteId, ticketId } = request.body;

        await connection('mensagemTicket').where('id', id).update({
            mensagem,
            tipoRemetenteId, 
            ticketId,
            dataMensagem,
            remetenteId,
            usuarioId
        });           

        return response.status(204).send();
    },
}