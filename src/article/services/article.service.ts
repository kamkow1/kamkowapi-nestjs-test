import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ArticleEntity } from './models/article.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './models/article.interface';
import { from, Observable } from 'rxjs';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: Repository<ArticleEntity>
  ) {}

  async createArticle(article: Article): Promise<Observable<Article>> {
    return from(this.articleRepository.save(article));
  }

  async findAllArticles(): Promise<Observable<Article[]>> {
    return from(this.articleRepository.find());
  }

  async findArticleById(articleId: number): Promise<Observable<Article>> {
    return from(this.articleRepository.findOne({ where: { id: articleId } }));
  }

  async updateArticle(id: number, article: Article): Promise<Observable<Article>> {
    const articleToEdit = await this.articleRepository.findOne(id);

    articleToEdit.title = article.title;
    articleToEdit.content = article.content;

    return from(this.articleRepository.save(articleToEdit));
  }
}