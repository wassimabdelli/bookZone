import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {

    @IsOptional()
    @IsString()
     email: String;
 
     @IsOptional()
     @IsString()
     password: String;
 
     @IsOptional()
     @IsDate()
     createdAt : Date; 

}
