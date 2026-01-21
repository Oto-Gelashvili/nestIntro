import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-tasl.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
