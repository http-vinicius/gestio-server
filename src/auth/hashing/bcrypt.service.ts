import { Injectable } from '@nestjs/common';
import { HashingService } from './hashing.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class BcryptService extends HashingService {
  async hash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();

    return bcrypt.hash(password, salt);
  }

  async compare(password: string, passwrodHash: string): Promise<boolean> {
    return bcrypt.compare(password, passwrodHash);
  }
}
