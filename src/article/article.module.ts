import { Module } from '@nestjs/common';
import { ArticleService } from './services/article.service';
import { ArticleController } from './controllers/article.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleEntity } from './services/models/article.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity])],
  providers: [ArticleService],
  controllers: [ArticleController],
})
export class ArticleModule {}
