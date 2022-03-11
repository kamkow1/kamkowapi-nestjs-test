import { Body, Controller, Get, Post, Put, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ArticleService } from '../services/article.service';
import { Article } from '../services/models/article.interface';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Post()
  async create(@Body() article: Article): Promise<Observable<Article>> {
    return await this.articleService.createArticle(article);
  }

  @Get()
  async getAll(): Promise<Observable<Article[]>> {
    return await this.articleService.findAllArticles();
  }

  @Get()
  async getById(@Body() id: number): Promise<Observable<Article>> {
    return await this.articleService.findArticleById(id);
  }

  @Put()
  async update(@Param('id') id: number, @Body() article: Article) {
    return await this.articleService.updateArticle(id, article);
  }
}
