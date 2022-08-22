import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    // PartialType por padrão deixa todos campos não obrigatorio. Apenas o id fica como obrigatorio
    
}
