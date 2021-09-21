import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { join } from 'path'; // <-- Add this

const logger = new Logger('Main');
const microserviceOptions = {
  // transport: Transport.REDIS,  <-- Change this
  transport: Transport.GRPC, //  <-- to this
  options: {
    // url: 'redis://localhost:6379',                  <-- remove this
    package: 'app', //                                 <-- add this
    protoPath: join(__dirname, '../src/app.proto'), // <-- & this
    // url: 'localhost:50051',
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  await app.listen(() => {
    logger.log(`Microservice is listening...`);
  });
}
bootstrap();
