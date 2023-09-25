import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //swagger
  const config = new DocumentBuilder()
    .setTitle("Nest + React Native project")
    .setDescription("Docs REST API")
    .setVersion("1.0.0")
    .addTag("Adding tag")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docs", app, document);
  // to view the swagger run nestjs app in browser set http://localhost:3000/api/docs

  await app.listen(3000);
}
bootstrap();
