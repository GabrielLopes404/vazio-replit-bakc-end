import runApp from "./app";
import { type Express, type Server } from "express";

export async function setup(_app: Express, _server: Server) {
  console.log("Backend API ready!");
}

(async () => {
  await runApp(setup);
})();
