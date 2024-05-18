import {Args, Mutation, Query, Resolver} from "@nestjs/graphql"
import {Task, taskInputToSchema} from "../../schema/tasks.schema"
import {TasksService} from "./tasks.service"
import {TaskInput} from "./tasks.input"

@Resolver(() => Task)
export class TasksResolver {
    constructor(private readonly tasksService: TasksService) {}

    @Query(() => [Task])
    tasks(): Promise<Task[]> {
        return this.tasksService.findAllTasks()
    }

    @Mutation(() => Task)
    async addTask(
        @Args('new_task') new_task: TaskInput,
    ) {
        return await this.tasksService.insert(taskInputToSchema(new_task))
    }
}