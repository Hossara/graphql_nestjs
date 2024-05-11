import * as process from "process"

const getBoolean = (env: string) => env === "true"

export default () => ({
    // Project
    IS_DEV: getBoolean(process.env.IS_DEV),
    PORT: parseInt(process.env.PORT) || 8081,

    // Databases
    MONGO_CONNECTION: process.env.MONGO_CONNECTION || "mongodb://localhost:27017/actin_pwa",
})