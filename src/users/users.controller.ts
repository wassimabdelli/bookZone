import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RolesGuard } from 'src/auth/guards/role.guards';
import { Roles } from 'src/auth/decorators/role.decorators';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@ApiBearerAuth('JWT-auth')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  

  @Post()
  @ApiOperation({summary: 'Créer un nouvel utilisateur'})
  @ApiResponse({  status: 201,description: 'Utilisateur créé avec succès' }) 
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({summary: 'Recuperer toutes les users'})
  @ApiResponse({status: 201,description: 'Utilisateurs trouvées ' }) 
  @ApiResponse({  status: 404,  description: 'Utilisateurs non trouvées ' })  
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Trouvée user par son ID'}) 
  @ApiResponse({ status: 201,description: 'Utilisateur Trouvées avec succès' }) 
  @ApiResponse({ status: 404,description: 'Utilisateurs non trouvées ' }) 
  @ApiParam({ name : 'id' , description : 'id du user' })
  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
  
  @Patch(':id')
  @ApiOperation({summary: 'Modifier user par son ID'}) 
  @ApiResponse({ status: 201,description: 'Utilisateur Modifiées avec succès' }) 
  @ApiParam({ name : 'id' , description : 'id du user a midifier' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({summary: 'Supprimer user par son ID'}) 
  @ApiResponse({ status: 201,description: 'Utilisateur Supprimées avec succès' }) 
  @ApiParam({ name : 'id' , description : 'id du user a Supprimer' })
  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
