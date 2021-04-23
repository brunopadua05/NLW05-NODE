import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository"

class UsersService {

    private usersRepository: Repository<User>;

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository)
    }

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