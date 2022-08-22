import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
    // email: string;
    // name: string;
    // password: string;

    @IsEmail()
    email: string;
  
    @IsString()
    name: string;

    @IsString()
    @MinLength(6)
    password: string;
}
