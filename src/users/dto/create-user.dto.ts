import { IsDate, IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDto {

   @IsNotEmpty()
   @IsString()
    email: String;

    @IsNotEmpty()
    @IsString()
    password: String;

    @IsNotEmpty()
    @IsDateString()
    createdAt : Date;  
    
    @IsOptional()
    @IsEnum(['ADMIN', 'MEMBER'])
    role?: string;
}
