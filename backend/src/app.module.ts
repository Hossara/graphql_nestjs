import {MongooseModule} from "@nestjs/mongoose"
import {Logger} from "./main"
import {Module} from "@nestjs/common"
import env from "./config/env"
import {ConfigModule} from "@nestjs/config"

@Module({
  imports: [
    // Global env config
    ConfigModule.forRoot({
      isGlobal: true,
      load: [env]
    }),

    // Mongoose config
    MongooseModule.forRootAsync({
      useFactory: () => {
        Logger.Builder().startup_info("MongoDB", `MongoDB is running at ${env().MONGO_CONNECTION}`)

        return {
          uri: env().MONGO_CONNECTION
        }
      }
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
