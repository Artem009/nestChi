import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
  public accumulate(data: number[]): Date {
    const sum: number = (data || []).reduce((a, b) => Number(a) + Number(b));
    const date: Date = new Date();
    date.setHours(sum);
    return date;
  }
}
