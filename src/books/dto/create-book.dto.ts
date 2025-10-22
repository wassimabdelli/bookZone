import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBookDto {

    @IsNotEmpty()
    @IsString()
    title: String;

    @IsNotEmpty()
    @IsString()
    author: String;

    @IsNotEmpty()
    @IsString()
    ISBN : String; 

    @IsNotEmpty()
    @IsNumber()
    publishedYear : Number; 


    @IsNotEmpty()
    @IsNumber()
    quantityAvailable : Number; 
    
}
