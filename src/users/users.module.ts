import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Role } from 'src/roles/roles.model';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.model';
import { UserRoles } from 'src/roles/user-roles.model';
import { RolesModule } from 'src/roles/roles.module';
import { AuthModule } from 'src/auth/auth.module';
import { Post } from 'src/posts/posts.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles, Post]),
    forwardRef(() => AuthModule),
    RolesModule,
  ],
  exports: [UsersService],
})
export class UsersModule {}
