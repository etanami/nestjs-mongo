/* eslint-disable @typescript-eslint/no-unused-vars */
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { Injectable } from '@nestjs/common';
import { User } from '../user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from '../dtos/create-user.dto';
/**
 * Class to connect to Users table and perform business operations
 */
@Injectable()
export class UsersService {
  constructor(
    // Inject userModel
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}
  /**
   * The method to get all the users from the database
   */

  public async createUser(createUserDto: CreateUserDto) {
    const newUser = new this.userModel(createUserDto);

    return await newUser.save();
  }

  public findAll(
    getUserParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    return [
      {
        firstName: 'John',
        email: 'john@doe.com',
      },
      {
        firstName: 'Alice',
        email: 'alice@doe.com',
      },
    ];
  }
  /**
   * Find a single user using the ID of the user
   */
  public findOneById(id: string) {
    return {
      id: 1234,
      firstName: 'Alice',
      email: 'alice@doe.com',
    };
  }
}
