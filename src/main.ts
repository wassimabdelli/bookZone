import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  ////////////////SAWAGER CODE//////////////////
  // Configuration Swagger Spécifique à BookZone
  const config = new DocumentBuilder()
    .setTitle('BookZone API')
    .setDescription('API complète pour la gestion de bibliothèque personnelle\n\n' +
      'Fonctionnalités :\n' +
      '- 📚 Gestion des livres et collections\n' +
      '- 🏷️ Organisation par étagères/catégories\n' +
      '- 👤 Gestion des utilisateurs\n' +
      '- 🔐 Authentification sécurisée')
    .setVersion('1.0')
    .addBearerAuth(
      { 
        type: 'http', 
        scheme: 'bearer', 
        bearerFormat: 'JWT',
        description: 'Entrez votre token JWT'
      },
      'JWT-auth'
    )
    .addTag('auth', 'Authentification des utilisateurs')
    .addTag('books', 'Gestion des livres')
    .addTag('users', 'Gestion des profils utilisateurs')
    .addTag('shelves', 'Gestion des étagères/collections')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    customSiteTitle: 'BookZone API Documentation',
    customfavIcon: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png',
    customCss: `
      .topbar { background-color: #4f46e5; }
      .swagger-ui .btn.authorize { background-color: #4f46e5; border-color: #4f46e5; }
    `
  });

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  
  //////////////////////////////////
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
