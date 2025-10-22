import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "./user.schemas";
import { Types } from "mongoose";

@Schema()
export class book {

    @Prop({ unique: true, required: true })
    id: number ;

    @Prop({ required: true })
    title: String;

    @Prop({ required: true })
    author: String;

    @Prop({ required: true })
    ISBN : String; 

    @Prop({ required: true })
    publishedYear : Number; 


    @Prop({ required: true })
    quantityAvailable : Number; 


}
export const BookSchema = SchemaFactory.createForClass(book);   