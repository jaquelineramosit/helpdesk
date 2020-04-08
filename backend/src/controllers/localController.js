const getDate = require('../utils/getDate');
const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const locais = await connection('local').select('*');
    
        return response.json(locais);
    },

    async indexById (request, response) {
        const { id }  = request.params;

        const local = await connection('local')
            .where('id', id)
            .select()
            .first();
    
        return response.json(local);
    },

    async create (request, response) {
        const  usuarioId  = request.headers.authorization;
        const  dataUltModif = getDate();

        const { nome, logradouro, numero, complemento, bairro, cep, cidade, estado,
            telefoneFixo, whatsapp, cnpj, email, ativo } = request.body;

        const [id] = await connection('local').insert({
            nome,
            logradouro,
            numero,
            complemento,
            bairro,
            cep,
            cidade,
            estado,
            telefoneFixo,
            whatsapp,
            cnpj,
            email,
            ativo,
            dataUltModif,
            usuarioId
        })

        return response.json({ id });
    },

    async update (request, response) {
        const { id } = request.params;
        const  usuarioId  = request.headers.authorization;
        const  dataUltModif = getDate();
        const { nome, logradouro, numero, complemento, bairro, cep, cidade, estado,
            telefoneFixo, whatsapp, cnpj, email, ativo } = request.body;

        await connection('local').where('id', id).update({
            nome,
            logradouro,
            numero,
            complemento,
            bairro,
            cep,
            cidade,
            estado,
            telefoneFixo,
            whatsapp,
            cnpj,
            email,
            ativo,
            dataUltModif,
            usuarioId
        });           

        return response.status(204).send();
    },
};