import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
//when we make use of module decorator we are expected to pass a configuration option or object to it, its gonna bet our controller options and its going to list out all the different controllers

@Module({
  controllers: [AppController],
})
export class AppModule {
  //now, whenever our application starts up, nest is going to look at this app module and it's going to find all the controllers that are listed right here and its going to automatically create an instance of all our different controller classes.
}
