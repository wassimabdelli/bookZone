import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDto {

   @IsNotEmpty()
   @IsString()
   @ApiProperty({ 
    description: 'Email',
    example: 'test@gmail.com'
  })
    email: String;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ 
        description: 'Mot de passe',
        example: '123456'
      })
    password: String;

    @IsNotEmpty()
    @IsDateString()
    @ApiProperty({ 
        description: 'Date de creation',
        example: '2025-10-10'
      })
    createdAt : Date;  
    
    @IsOptional()
    @IsEnum(['ADMIN', 'MEMBER'])
    @ApiProperty({ 
        description: 'Role',
        example: 'ADMIN'
      })
    role?: string;
}
