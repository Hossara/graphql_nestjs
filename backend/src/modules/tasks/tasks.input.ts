import {Field, InputType, Int} from "@nestjs/graphql"
import {IsOptional, Length, MaxLength} from "class-validator"

@InputType()
export class TaskInput {
    @Field()
    @MaxLength(100)
    name: string

    @Field(() => Date)
    created_date: Date

    @Field(() => Date, { nullable: true })
    @IsOptional()
    expiration_date?: Date

    @Field({ nullable: true })
    @IsOptional()
    @MaxLength(500)
    description?: string

    @Field(() => Int, { nullable: true })
    @IsOptional()
    @Length(1,3)
    priority?: number
}