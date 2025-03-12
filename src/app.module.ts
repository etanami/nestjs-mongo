import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    TagsModule,
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://etanamiolatunji:CqgVNp9O5aWadwa4@nestjs.fpf2w.mongodb.net/',
      { dbName: 'nestjs-blog' },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
