const getDate = require('../utils/getDate');
const getFinalDate = require('../utils/getFinalDate');
const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const tickets = await connection('ticket').select('*');
    
        return response.json(tickets);
    },

    async indexById (request, response) {
        const  { id }  = request.params;

        const ticket = await connection('ticket')
            .where('id', id)
            .select()
            .first();
    
        return response.json(ticket);
    },
    
    async create (request, response) {
        const  usuarioId  = request.headers.authorization;
        const  clienteId  = request.headers.authorization;
        const  dataTicket = getDate();
        const  dataValidade = getFinalDate();
        const  dataUltModif = getDate();

        const { assunto, descricao, tags, analistaId, localId, statusTicketId,
                tipoTicketId, prioridadeId } = request.body;

        const [id] = await connection('ticket').insert({
            assunto,
            descricao, 
            tags,
            dataTicket,
            dataValidade,
            dataUltModif,
            usuarioId,
            clienteId,
            analistaId,
            localId,
            statusTicketId,
            tipoTicketId,
            prioridadeId
        })

        return response.json({ id });
    },

    async update (request, response) {
        const   { id }   = request.params;
        const  usuarioId  = request.headers.authorization;
        const  clienteId  = request.headers.authorization;
        const  dataTicket = getDate();
        const  dataValidade = getFinalDate();
        const  dataUltModif = getDate();
        const { assunto, descricao, tags, analistaId, localId, statusTicketId,
                tipoTicketId, prioridadeId } = request.body;

        await connection('ticket').where('id', id).update({
            assunto,
            descricao, 
            tags,
            dataTicket,
            dataValidade,
            dataUltModif,
            usuarioId,
            clienteId,
            analistaId,
            localId,
            statusTicketId,
            tipoTicketId,
            prioridadeId
        });           

        return response.status(204).send();
    },
}