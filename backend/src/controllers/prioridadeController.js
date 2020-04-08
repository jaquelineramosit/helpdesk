const getDate = require('../utils/getDate');
const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const prioridades = await connection('prioridade').select('*');
    
        return response.json(prioridades);
    },

    async indexById (request, response) {
        const  { id }  = request.params;

        const prioridade = await connection('prioridade')
            .where('id', id)
            .select()
            .first();
    
        return response.json(prioridade);
    },
    
    async create (request, response) {
        const  usuarioId  = request.headers.authorization;
        const  dataUltModif = getDate();

        const { nomePrioridade, descricao, ativo } = request.body;

        const [id] = await connection('prioridade').insert({
            nomePrioridade,
            descricao, 
            ativo,
            dataUltModif,
            usuarioId
        })

        return response.json({ id });
    },

    async update (request, response) {
        const   { id }   = request.params;
        const  usuarioId  = request.headers.authorization;
        const  dataUltModif  = getDate();
        const { nomePrioridade, descricao, ativo } = request.body;

        await connection('prioridade').where('id', id).update({
            nomePrioridade,
            descricao, 
            ativo,
            dataUltModif,
            usuarioId
        });           

        return response.status(204).send();
    },
}