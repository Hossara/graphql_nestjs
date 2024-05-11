import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import {LoggerBuilder} from "./logger"
import env from "./config/env"

export const Logger = new LoggerBuilder("Actin app")
const log = Logger.Builder()

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(env().PORT, '0.0.0.0')
}
bootstrap()
