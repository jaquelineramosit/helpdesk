const getDate = require('../utils/getDate');
const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const gruposTrabalho = await connection('grupoTrabalho').select('*');
    
        return response.json(gruposTrabalho);
    },

    async indexById (request, response) {
        const  { id }  = request.params;

        const grupoTrabalho = await connection('grupoTrabalho')
            .where('id', id)
            .select()
            .first();
    
        return response.json(grupoTrabalho);
    },
    
    async create (request, response) {
        const  usuarioId  = request.headers.authorization;
        const  dataUltModif = getDate();

        const { nomeGrupoTrabalho, descricao, ativo } = request.body;

        const [id] = await connection('grupoTrabalho').insert({
            nomeGrupoTrabalho,
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
        const { nomeGrupoTrabalho, descricao, ativo } = request.body;

        await connection('grupoTrabalho').where('id', id).update({
            nomeGrupoTrabalho,
            descricao, 
            ativo,
            dataUltModif,
            usuarioId
        });           

        return response.status(204).send();
    },
}