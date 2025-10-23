import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBookDto {

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ 
        description: 'Titre du livre',
        example: 'MyBook'
      })
    title: String;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ 
        description: 'Auteur du livre',
        example: 'Antoine de Saint-Exupéry'
      })
    author: String;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ 
        description: 'ISBN du livre',
        example: 'dsjkdksjd'
      })
    ISBN : String; 

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({ 
        description: 'Année de publication',
        example: 2015
      })
    publishedYear : Number; 


    @IsNotEmpty()
    @IsNumber()@ApiProperty({ 
        description: 'Quantité disponible',
        example: 3
      })
    quantityAvailable : Number; 
    
}
