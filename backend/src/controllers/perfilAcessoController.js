const getDate = require('../utils/getDate');
const connection = require('../database/connection');

module.exports = {
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
}