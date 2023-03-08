import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.ru', description: 'Email address' })
  readonly email: string;

  @ApiProperty({ example: '1234', description: 'User password' })
  readonly password: string;
}
