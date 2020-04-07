const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const usuarios = await connection('usuario').select('*');
    
        return response.json(usuarios);
    },

    async indexById (request, response) {
        const { id } = request.params;

        const usuario = await connection('usuario')
            .where('id', id)
            .select()
            .first();
    
        return response.json(usuario);
    },

    async create (request, response) {
        const { nome, sobrenome, dataNasc, logradouro, numero, complemento, bairro, cep, cidade, estado,
            telefone, celular, cpf, rg, genero, email, login, senha, ativo } = request.body;

        const [id] = await connection('usuario').insert({
            nome,
            sobrenome, 
            dataNasc,
            logradouro,
            numero,
            complemento,
            bairro,
            cep,
            cidade,
            estado,
            telefone,
            celular,
            cpf,
            rg,
            genero,
            email,
            login,
            senha,
            ativo
        })

        return response.json({ id });
    },

    async update (request, response) {
        const { id } = request.params;
        const { nome, sobrenome, dataNasc, logradouro, numero, complemento, bairro, cep, cidade, estado,
                telefone, celular, cpf, rg, genero, email, login, senha, ativo } = request.body;

        await connection('usuario').where('id', id).update({
            nome,
            sobrenome, 
            dataNasc,
            logradouro,
            numero,
            complemento,
            bairro,
            cep,
            cidade,
            estado,
            telefone,
            celular,
            cpf,
            rg,
            genero,
            email,
            login,
            senha,
            ativo
        });           

        return response.status(204).send();
    },
};