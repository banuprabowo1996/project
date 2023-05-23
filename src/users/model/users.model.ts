import { Column, Model, Table } from 'sequelize-typescript';
import * as bcrypt from 'bcrypt';

@Table
export class Users extends Model {
  @Column
  username: string;

  // @Column
  // email: string;

  @Column
  get password() {
    return this.getDataValue('password');
  }

  set password(value: string) {
    this.setDataValue('password', bcrypt.hashSync(value, 8));
  }

  @Column
  role: string;

  comparePasswordSync(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  }
}
