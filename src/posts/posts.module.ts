import { Module, Post } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './post.schema';
import { PostsController } from './posts.controller';
import { PostsService } from './providers/posts.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Post.name,
        schema: PostSchema,
      },
    ]),
    UsersModule,
  ],
})
export class PostsModule {}
