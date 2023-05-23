import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  // @IsEmail()
  // email: string;

  @IsNotEmpty()
  password: string;

  @IsString()
  role: string;
}
