import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Урок по продвинутому BACKEND')
    .setDescription('Documentation REST API')
    .setVersion('1.0.0')
    .addTag('ULBI TV TAG')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/app/docs', app, document);

  await app.listen(PORT, () =>
    console.log(`Server started on port =  + ${PORT}`)
  );
}
start();
