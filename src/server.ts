import { dotenv } from "@ev-fns/dotenv";

dotenv();

import server from "@ev-fns/server";
import app from "./app";

const PORT = +process.env.PORT || 3000;

server({
  app,
  port: PORT,
  after: async () => {
    console.info(`🚀 http://localhost:${PORT}`);
  },
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
