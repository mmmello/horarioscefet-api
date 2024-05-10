import UsuarioModel from "../database/models/UsuarioModel";
import {usuarioDTO} from "../DTO/usuarioDTO";
import {Identifier, TEXT} from "sequelize";

export default class UsuarioRepository {

    async find(id_usuario: Identifier) {
        return await UsuarioModel.findByPk(id_usuario);
    }

    async insert({nome, email, senha}: usuarioDTO) {
        await UsuarioModel.bulkCreate([{
            nome: nome,
            email: email,
            senha: senha
        }]);
    }

    async selectAll() {
        return UsuarioModel.findAll();
    }

    async selectOne(id_usuario: Identifier) {
        return UsuarioModel.findOne({
            where: {
                id_usuario: id_usuario
            }
        });
    }

    async update(id_usuario: number, {nome, email, senha}: usuarioDTO) {
        return UsuarioModel.update({nome, email, senha}, {
            where: {
                id_usuario: id_usuario,
            },
        });
    }

    async destroy(id_usuario: number) {
        await UsuarioModel.destroy({
            where: {
                id_usuario: id_usuario,
            },
        });
    }
}