import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateBookDto extends PartialType(CreateBookDto) {
    @IsOptional()
    @IsString()
    title: String;

    @IsOptional()
    @IsString()
    author: String;

    @IsOptional()
    @IsString()
    ISBN : String; 

    @IsOptional()
    @IsNumber()
    publishedYear : Number; 


    @IsOptional()
    @IsNumber()
    quantityAvailable : Number;

    
}
