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

class createPostDto {
  @ApiProperty({ description: '标题' })
  title: string;
  @ApiProperty({ description: '内容' })
  content: string;
}
import { PrismaClient } from '@prisma/client';

@Controller('posts')
@ApiTags('博客相关接口')
export class PostsController {
  prisma = new PrismaClient();

  @Get()
  @ApiOperation({ summary: '博客列表' })
  async index() {
    return await this.prisma.post.findMany();
  }

  @Post()
  @ApiOperation({ summary: '新建一篇博客' })
  async create(@Body() body: createPostDto) {
    const { title, content } = body;
    const create = await this.prisma.post.create({
      data: {
        title,
        content,
      },
    });
    return 'success';
  }

  @Get('/:id')
  @ApiOperation({ summary: '获取一篇博客的详情' })
  async details(@Param('id') id: string) {
    const details = await this.prisma.post.findUnique({
      where: {
        id: Number(id),
      },
    });
    return details;
  }

  @Put('/:id')
  @ApiOperation({ summary: '更新一篇博客' })
  async update(@Param('id') id: string, @Body() body: createPostDto) {
    const { title, content } = body;
    const update = await this.prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        content,
      },
    });
    return 'update success';
  }

  @Delete('/:id')
  @ApiOperation({ summary: '删除一篇博客' })
  async delete(@Param('id') id: string) {
    const deletePost = await this.prisma.post.delete({
      where: {
        id: Number(id),
      },
    });
    return 'delete success';
  }
}
