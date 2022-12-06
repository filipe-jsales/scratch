import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

//in this case, this decorator is telling Nest we are trying to create a class that is going to serve as a controller inside of our application
@Controller() //this is a decorator in nestjs
class AppController {
  //this class is responsible for routing and handle incoming requests

  @Get()
  getRootRoute() {
    return "hi there!";
  }
}

//when we make use of module decorator we are expected to pass a configuration option or object to it, its gonna bet our controller options and its going to list out all the different controllers

@Module({
  controllers: [AppController],
})
class AppModule {
  //now, whenever our application starts up, nest is going to look at this app module and it's going to find all the controllers that are listed right here and its going to automatically create an instance of all our different controller classes.
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}
bootstrap();
