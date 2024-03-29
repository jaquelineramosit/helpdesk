const getDate = require('../utils/getDate');
const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const perfisAcesso = await connection('perfilAcesso').select('*');
    
        return response.json(perfisAcesso);
    },

    async indexById (request, response) {
        const  { id }  = request.params;

        const perfilAcesso = await connection('perfilAcesso')
            .where('id', id)
            .select()
            .first();
    
        return response.json(perfilAcesso);
    },
    
    async create (request, response) {
        const  usuarioId  = request.headers.authorization;
        const  dataUltModif = getDate();

        const { perfil, descricao, ativo } = request.body;

        const [id] = await connection('perfilAcesso').insert({
            perfil,
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
        const { perfil, descricao, ativo } = request.body;

        await connection('perfilAcesso').where('id', id).update({
            perfil,
            descricao, 
            ativo,
            dataUltModif,
            usuarioId
        });           

        return response.status(204).send();
    },
}