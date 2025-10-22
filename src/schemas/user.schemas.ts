import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class User {

    @Prop({ unique: true, required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true, type: Date, default: Date.now })
    createdAt : Date; 
    
    @Prop({ required: true, enum: ['ADMIN', 'MEMBER'], default: 'MEMBER' })
    role: string;
}
export const UserSchema = SchemaFactory.createForClass(User);