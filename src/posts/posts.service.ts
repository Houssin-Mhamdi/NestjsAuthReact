import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(@InjectRepository(Post) private readonly postRepo:Repository<Post>){}
  
  async create(createPostDto: CreatePostDto) {
    const post = await this.postRepo.create(createPostDto)
    return this.postRepo.save(post)
  }

  async findAll() {
    return await this.postRepo.find()
  }

 async findOne(id: number) {
    const post = await this.postRepo.findOneBy({id})
    if (!post) {
      return "No post found"
    }else{
      return post
    }
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.postRepo.findOneBy({id})
    if (!post) {
      return "No post found"
    }else{
      return this.postRepo.update(id,updatePostDto)
    }
  }

  async findUserByName(name: string){
    return this.postRepo.findOne({where: {name:Like(`%${name}%`)}})
  }


  async remove(id: number) {
    const post  = await this.postRepo.findOneBy({id})
    if (!post) {
      return "No post found"
    }else{
      await this.postRepo.delete({id})
    }
  }
}
