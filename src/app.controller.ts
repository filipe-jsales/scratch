import { Controller, Get } from "@nestjs/common";

//in this case, this decorator is telling Nest we are trying to create a class that is going to serve as a controller inside of our application
@Controller("/app") //this is a decorator in nestjs
export class AppController {
  //this class is responsible for routing and handle incoming requests

  @Get("/asdf")
  getRootRoute() {
    return "hi there!";
  }

  @Get("/bye")
  getByeThere() {
    return "Bye there";
  }
}
