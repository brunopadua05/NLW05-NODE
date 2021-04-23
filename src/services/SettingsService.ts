import { getCustomRepository, Repository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";
import { Setting} from "../entities/Settins"

interface ISettingsCreate {
    chat: boolean;
    username: string;
}

class SettingsService {

    private settingsRepository : Repository<Setting>

    constructor() {
        this.settingsRepository = getCustomRepository(SettingsRepository);

    }

    async create({ chat, username }: ISettingsCreate) {

                //select * from settings where username = "username limit 1"
        const userAlreadyExists = await this.settingsRepository.findOne({
            username
        });

        if(userAlreadyExists) {
            throw new Error("Usuário ja existe no sistema!")
        }
    
        const settings = this.settingsRepository.create({
            chat,
            username,
        });
    
        await this.settingsRepository.save(settings);

        return settings;
    }
}

export { SettingsService };