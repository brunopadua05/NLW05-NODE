import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"

class UsersService {
    async create(email : string) {
        const usersRepository = getCustomRepository(UsersRepository);

    //Verifica se o usuário existe
        const usersExists = await usersRepository.findOne({
            email,
        });
    //Se existe, retorna usário
    if (usersExists) {
        return usersExists;
    }

    const user = usersRepository.create({
        email,
    });

    //Se não existir, salvar no BD
    await usersRepository.save(user);

    return user;
    }
}

export { UsersService }