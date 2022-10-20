import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function start() {
  const PORT = process.env.PORT || 8000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Online Store REST API")
    .setDescription("REST API Documentation for Robots Vacuum Cleaners store")
    .setVersion("1.0.0")
    .addTag("Make by Adilet Berdibekov")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docs", app, document);

  await app.listen(PORT, () => console.log(`Starting server on port ${PORT}`));
}

start();
