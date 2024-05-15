import {Module} from "@nestjs/common"
import {MongooseModule} from "@nestjs/mongoose"
import {Task, TasksSchema} from "../../schema/tasks.schema"
import {TasksService} from "./tasks.service"
import {TasksResolver} from "./tasks.resolver"
import {DateScalar} from "../../scalars/date.scalar"

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Task.name, schema: TasksSchema}
        ])
    ],
    controllers: [],
    providers: [TasksService, TasksResolver, DateScalar],
    exports: []
})
export class TasksModule {}