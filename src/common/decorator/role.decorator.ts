import { SetMetadata } from '@nestjs/common';
import { Users } from 'src/users/model/users.model';

export const Roles = (...role: any) =>
  SetMetadata('roles', [{ role: 'admin' }, ...role]);
