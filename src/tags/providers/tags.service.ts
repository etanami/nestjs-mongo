import { Injectable } from '@nestjs/common';
import { CreateTagDto } from '../dtos/create-tag.dto';
import { Model } from 'mongoose';
import { Tag } from '../tag.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TagsService {
  constructor(
    // Inject tagModel
    @InjectModel(Tag.name)
    private readonly tagModel: Model<Tag>,
  ) {}

  public async createTag(createTagDto: CreateTagDto) {
    const newTag = new this.tagModel(createTagDto);

    return await newTag.save();
  }
}
