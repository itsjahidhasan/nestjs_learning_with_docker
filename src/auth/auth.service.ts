import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return { msg: 'hi! everyone' };
  }
  signup() {
    return 'I am signup';
  }
}
