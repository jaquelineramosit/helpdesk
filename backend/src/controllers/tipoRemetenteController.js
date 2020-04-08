const getDate = require('../utils/getDate');
const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const tiposRemetente = await connection('tipoRemetente').select('*');
    
        return response.json(tiposRemetente);
    },

    async indexById (request, response) {
        const  { id }  = request.params;

        const tipoRemetente = await connection('tipoRemetente')
            .where('id', id)
            .select()
            .first();
    
        return response.json(tipoRemetente);
    },
    
    async create (request, response) {
        const  usuarioId  = request.headers.authorization;
        const  dataUltModif = getDate();

        const { nomeTipoRemetente, descricao, ativo } = request.body;

        const [id] = await connection('tipoRemetente').insert({
            nomeTipoRemetente,
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
        const { nomeTipoRemetente, ativo } = request.body;

        await connection('tipoRemetente').where('id', id).update({
            nomeTipoRemetente,
            ativo,
            dataUltModif,
            usuarioId
        });           

        return response.status(204).send();
    },
}