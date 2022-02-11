import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('默认标签')
export class AppController {
  @Get()
  index() {
    return 'Hello World!';
  }
}
