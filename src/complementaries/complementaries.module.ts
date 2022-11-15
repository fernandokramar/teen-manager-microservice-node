import { Module } from '@nestjs/common';
import { ComplementariesService } from './complementaries.service';
import { ComplementariesResolver } from './complementaries.resolver';

@Module({
  providers: [ComplementariesResolver, ComplementariesService]
})
export class ComplementariesModule {}
