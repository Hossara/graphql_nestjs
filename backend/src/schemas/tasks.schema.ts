import {HydratedDocument, Types} from "mongoose"
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"

export type TaskDocument = HydratedDocument<Task>

@Schema()
export class Task {
    @Prop()
    name: string

    @Prop()
    uuid: Types.UUID

    @Prop()
    date: Date

    @Prop()
    description: string

    @Prop()
    done: boolean

    @Prop()
    priority: number
}

export const TasksSchema = SchemaFactory.createForClass(Task)