import {Module} from "@nestjs/common"
import {MongooseModule} from "@nestjs/mongoose"
import {Task, TasksSchema} from "../../schemas/tasks.schema"
import {TasksService} from "./tasks.service"
import {TasksResolver} from "./tasks.resolver"

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Task.name, schema: TasksSchema}
        ])
    ],
    controllers: [],
    providers: [TasksService, TasksResolver],
    exports: []
})
export class TasksModule {}