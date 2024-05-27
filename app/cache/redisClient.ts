import { ENV } from "../../env";

const Redis = require("ioredis");

const redisClient = new Redis({
	host: ENV.REDIS_HOST,
	port: ENV.REDIS_PORT,
	db: ENV.REDIS_DB,
});

redisClient.on("error", (err: any) => {
	console.error("Error connecting to Redis:", err);
});

redisClient.on("connect", () => {
	console.log("Connected to Redis");
});

export default redisClient;
