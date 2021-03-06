import { getCustomRepository, Repository } from "typeorm"
import { MessagesRepository } from "../repositories/MessageRepository"
import { Message } from "../entities/Message"

interface IMessageCreate {
    admin_id?: string;
    text: string;
    user_id: string;
}

class MessageService {

    private messagesRepository: Repository<Message>;

    constructor() {
        this.messagesRepository = getCustomRepository(MessagesRepository)
    }

    async create({ admin_id, text, user_id }) {
            
        const message = this.messagesRepository.create({
            admin_id,
            text,
            user_id,
        });

        await this.messagesRepository.save(message);

        return message;
    }

    async listByUser(user_id: string) {
        
        const list = await this.messagesRepository.find({
            where : { user_id },
            relations: ["user"],
        });
        return list;
    }
}

export { MessageService };