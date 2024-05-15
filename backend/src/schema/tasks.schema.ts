import {HydratedDocument} from "mongoose"
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import {Field, ID, Int, ObjectType} from "@nestjs/graphql"
import {TaskInput} from "../modules/tasks/tasks.input"

export type TaskDocument = HydratedDocument<Task>

@Schema()
@ObjectType({ description: 'Task schema' })
export class Task {
    @Field(() => ID)
    id?: string

    @Field()
    @Prop({required: true})
    name: string

    @Field()
    @Prop({required: true})
    done: boolean

    @Field(() => Date)
    @Prop({required: true})
    created_date: Date

    @Prop()
    @Field(() => Date, { nullable: true })
    expiration_date?: Date

    @Prop()
    @Field({ nullable: true })
    description?: string

    @Prop()
    @Field(() => Int, { nullable: true })
    priority?: number
}

export const taskInputToSchema = (input: TaskInput): Task => ({
    name: input.name,
    done: false,
    created_date: input.created_date,
    description: input.description,
    expiration_date: input.expiration_date,
    priority: input.priority
})

export const TasksSchema = SchemaFactory.createForClass(Task)