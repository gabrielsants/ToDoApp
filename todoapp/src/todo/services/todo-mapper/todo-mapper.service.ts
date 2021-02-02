import { Injectable } from '@nestjs/common';
import { Todo } from 'src/todo/entities/todo';
import { TodoDto } from 'src/todo/dto/todoDto';

@Injectable()
export class TodoMapperService {
    public modelToDto( {id, title, completed} : Todo) : TodoDto {
        return new TodoDto( {id, title, completed} );
    }
}
