const getDate = require('../utils/getDate');
const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const gruposTrabalhoAnalista = await connection('grupoTrabalhoAnalista').select('*');
    
        return response.json(gruposTrabalhoAnalista);
    },

    async indexById (request, response) {
        const  { id }  = request.params;

        const grupoTrabalhoAnalista = await connection('grupoTrabalhoAnalista')
            .where('id', id)
            .select()
            .first();
    
        return response.json(grupoTrabalhoAnalista);
    },
    
    async create (request, response) {
        const  usuarioId  = request.headers.authorization;
        const  dataUltModif = getDate();

        const { analistaId, grupoTrabalhoId, ativo } = request.body;

        const [id] = await connection('grupoTrabalhoAnalista').insert({
            analistaId,
            grupoTrabalhoId, 
            usuarioId,
            dataUltModif,
            ativo
        })

        return response.json({ id });
    },

    async update (request, response) {
        const   { id }   = request.params;
        const  usuarioId  = request.headers.authorization;
        const  dataUltModif  = getDate();
        const { analistaId, grupoTrabalhoId, ativo } = request.body;

        await connection('grupoTrabalhoAnalista').where('id', id).update({
            analistaId,
            grupoTrabalhoId, 
            usuarioId,
            dataUltModif,
            ativo
        });           

        return response.status(204).send();
    },
}