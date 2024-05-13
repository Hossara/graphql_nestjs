import {Model} from "mongoose"
import {InjectModel} from "@nestjs/mongoose"
import {Injectable} from "@nestjs/common"
import {Task, TaskDocument} from "../../schemas/tasks.schema"

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private tasksModel: Model<TaskDocument>) {}


}