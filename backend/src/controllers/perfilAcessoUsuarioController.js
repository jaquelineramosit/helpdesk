const getDate = require('../utils/getDate');
const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const perfisAcessoUsuario = await connection('perfilAcessoUsuario').select('*');
    
        return response.json(perfisAcessoUsuario);
    },

    async indexById (request, response) {
        const  { id }  = request.params;

        const perfilAcessoUsuario = await connection('perfilAcessoUsuario')
            .where('id', id)
            .select()
            .first();
    
        return response.json(perfilAcessoUsuario);
    },
    
    async create (request, response) {
        const  dataUltModif = getDate();

        const { usuarioId, perfilAcessoId } = request.body;

        const [id] = await connection('perfilAcessoUsuario').insert({
            usuarioId,
            perfilAcessoId, 
            dataUltModif
        })

        return response.json({ id });
    },

    async update (request, response) {
        const   { id }   = request.params;
        const  dataUltModif  = getDate();
        const { usuarioId, perfilAcessoId} = request.body;

        await connection('perfilAcessoUsuario').where('id', id).update({
            usuarioId,
            perfilAcessoId, 
            dataUltModif
        });           

        return response.status(204).send();
    },
}