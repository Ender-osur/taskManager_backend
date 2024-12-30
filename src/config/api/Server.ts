import cors from "cors";
import express from "express";
import { PORT } from "../../helpers/constants/config";


class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.loadConfig();
    //Route
    // this.loadRoute();
  }

  public loadConfig(): void {
    this.app.set("PORT", PORT || 3123);
    this.app.use(cors());
    this.app.use(express.json({ limit: "100mb" }));
    this.app.use(express.urlencoded({ extended: true }));
  }

  // public loadRoute(): void {
  //   this.app.use("/api/", );
  //   this.app.use("/api/task", );
  // }

  public start(): void {
    this.app.listen(this.app.get("PORT"), () => {
      console.log(`BACKEND UP ON PORT ${this.app.get("PORT")}`);
    });
  }
}

export default Server;