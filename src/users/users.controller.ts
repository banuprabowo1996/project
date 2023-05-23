import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  Request,
  Response,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/users.dto';
import { Roles } from 'src/common/decorator/role.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly userServices: UsersService) {}

  @Post()
  async register(@Request() req, @Response() res, @Body() body: CreateUserDto) {
    const { username, password, role } = body;

    const data = await this.userServices.model.create({
      username,
      password,
      role,
    });

    return res.json({
      statusCode: HttpStatus.CREATED,
      message: 'success',
    });
  }

  @Get()
  @Roles({ role: 'admin' })
  async getAllUsers(@Response() res) {
    const data = await this.userServices.model.findAll();

    return res.json({
      statusCode: HttpStatus.OK,
      data,
    });
  }
}
