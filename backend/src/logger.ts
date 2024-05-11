import { Logger } from '@nestjs/common'

export class LoggerBuilder {
    app_name = ""
    // winstonLogger =  new WinstonLogger().logger
    nestLogger = new Logger()

    constructor(app: string) {
        this.app_name = app
    }

    Builder(data?: { req: any, res: any }) {
        let logText = ""
        const parent = this

        return {
            startup_info(service: string, ...text: string[]) {
                logText = [...text].join(" ")
                this.log().verbose(logText, `⚡️ ${service}`)
            },

            info(...text: string[]) {
                logText = [...text].join(" ")
                this.log().log(logText, `🧩 ${parent.app_name}`)
            },

            error(...text: string[]) {
                logText = [...text].join(" ")
                this.log().error(logText, `🚨 ${parent.app_name}`)
            },

            warn(...text: string[]) {
                logText = [...text].join(" ")
                this.log().warn(logText, `⚠️ ${parent.app_name}`)
            },

            log(): Logger {
                return parent.nestLogger
                // parent.winstonLogger.info(logText, data)
            }
        }
    }
}