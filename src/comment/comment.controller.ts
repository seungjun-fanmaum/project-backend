import { Controller, Get, Param, UseFilters } from '@nestjs/common';
import { CommentService } from './comment.service';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { HttpExceptionFilter } from '../custom-exception.filter';
import { CommentDto } from '../dto/commentDto';

//comment에 대한 crud이다.
@ApiTags('comment에 대한 api')
@Controller('posts')
@UseFilters(HttpExceptionFilter)
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  //모든 댓글 가져오기
  @ApiOperation({ summary: '댓글 가져오기', description: '댓글을 가져옵니다.' })
  @Get(':id/comments')
  @ApiResponse({ status: 200, description: '조회에 성공하였습니다' })
  getComments(@Param('id') id: number): CommentDto[] {
    console.log('댓글 조회 요청됨.');
    const filePath = 'src/datafile/commentdatabase.txt';
    return this.commentService.getComments(id, filePath);
  }
}
