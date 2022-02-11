import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiProduces,
  ApiProperty,
  ApiTags,
} from '@nestjs/swagger';
import {} from '@prisma/client';

class createPostDto {
  @ApiProperty({ description: '标题' })
  title: string;
  @ApiProperty({ description: '内容' })
  content: string;
}

@Controller('posts')
@ApiTags('文章接口')
export class PostsController {
  @Get()
  @ApiOperation({ summary: '博客列表' })
  index() {
    return [
      {
        id: 1,
        title: 'Post title',
        body: 'Post body',
      },
    ];
  }

  @Post()
  @ApiOperation({ summary: '创建一篇博客' })
  create(@Body() body: createPostDto) {
    return body;
  }

  @Get('/:id')
  @ApiOperation({ summary: '获取一篇博客的详情' })
  details(@Param('id') id: string) {
    return {
      id: id,
      title: 'Post title',
      body: 'Post body',
    };
  }

  @Put('/:id')
  @ApiOperation({ summary: '更新一篇博客' })
  update(@Param('id') id: string, @Body() body: createPostDto) {
    return {
      id: id,
      status: 'ok',
      body: body,
    };
  }

  @Delete('/:id')
  @ApiOperation({ summary: '删除一篇博客' })
  delete(@Param('id') id: string) {
    return {
      id: id,
      status: 'ok',
    };
  }
}
