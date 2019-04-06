import { Comment } from './Comment';
import { TYPES } from './../../constants/types';
import { inject } from "inversify";
import { Repository } from 'typeorm';


export class CommentService {

  public constructor(
    @inject(TYPES.CommentRepository) private _commentRepository: Repository<Comment>
  ) { }

  public async getAllComments() {
    const comments = await this._commentRepository.find();
    const commentCount = comments.length;
    return { comments, commentCount };
  }

  public async getCommentById(id: number) {
    const comment = await this._commentRepository.findOne(
      id, { relations: ['user', 'link'] }
    );
    if (!comment) return false;
    return comment;
  }

  public async createComment(newComment: Comment) {
    return await this._commentRepository.save(newComment);
  }

  private updateCommentKeys(
    commentKeys: Comment, commentToUpdate: Comment
  ): Comment {
    const keys = Object.keys(commentKeys);
    keys.forEach(key => {
      (commentToUpdate as any)[key] = (commentKeys as any)[key];
    });
    return commentToUpdate;
  }

  public async updateComment(keys: Comment, comment: Comment) {
    return await this._commentRepository.save(
      this.updateCommentKeys(keys, comment)
    );
  }

  public async deleteComment(id: number) {
    const comment = await this.getCommentById(id);
    if (!comment) return false;
    await this._commentRepository.remove(comment);
    return { message: `Comment id ${id} removed` }
  }

}