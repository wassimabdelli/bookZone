import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { RolesGuard } from 'src/auth/guards/role.guards';
import { Roles } from 'src/auth/decorators/role.decorators';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@ApiBearerAuth('JWT-auth')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @ApiOperation({summary: 'Créer un nouvel Book'})
  @ApiResponse({  status: 201,description: 'Book créé avec succès' })
  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  @ApiOperation({summary: 'Recuperer toutes les Books'})
  @ApiResponse({status: 201,description: 'Books trouvées ' }) 
  @ApiResponse({  status: 404,  description: 'Books non trouvées ' })
  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Trouvée book par son ID'}) 
  @ApiResponse({ status: 201,description: 'book Trouvées avec succès' }) 
  @ApiResponse({ status: 404,description: 'book non trouvées ' }) 
  @ApiParam({ name : 'id' , description : 'id du book' })
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({summary: 'Modifier book par son ID'}) 
  @ApiResponse({ status: 201,description: 'book Modifiées avec succès' }) 
  @ApiParam({ name : 'id' , description : 'id du book a modifier' })
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(id, updateBookDto);
  }

  @Delete(':id')
  @ApiOperation({summary: 'Supprimer book par son ID'}) 
  @ApiResponse({ status: 201,description: 'Book Supprimées avec succès' }) 
  @ApiParam({ name : 'id' , description : 'id du book a Supprimer' })
  @UseGuards(RolesGuard)
  remove(@Param('id') id: string) {
    return this.booksService.remove(id);
  }
}
