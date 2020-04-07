const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { login, senha } = request.body;

        const usuario = await connection('usuario')
            .where('login', login)
            .andWhere('senha', senha)
            .select('nome')
            .first();

        if(!usuario) {
            return response.status(400).json({ error: 'No user found with this login' })
        }

        return response.json(usuario);
    }
}