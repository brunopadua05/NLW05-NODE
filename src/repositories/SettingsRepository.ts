import { Repository, EntityRepository } from "typeorm"
import { Setting } from "../entities/Settins";

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {}

export {SettingsRepository}