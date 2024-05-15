import {Model} from "mongoose"
import {InjectModel} from "@nestjs/mongoose"
import {Injectable} from "@nestjs/common"
import {Task, TaskDocument} from "../../schema/tasks.schema"

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private tasksModel: Model<TaskDocument>) {}

    async findAllTasks() {
        return this.tasksModel
            .find({})
            .exec()
    }

    async insert(task: Task) {
        return new this.tasksModel(task).save()
    }
}