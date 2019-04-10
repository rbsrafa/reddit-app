import { TYPES } from './../../constants/types';
import { Link } from './Link';
import { inject } from "inversify";
import { Repository } from 'typeorm';
import { Comment } from '../comment/Comment';
import { User } from '../user/User';

/**
 * LinkService Class
 */
export class LinkService {

  /**
   * Create a new LinkService instance
   * @param _linkRepository 
   */
  public constructor(
    @inject(TYPES.LinkRepository) private _linkRepository: Repository<Link>,
    @inject(TYPES.UserRepository) private _userRepository: Repository<User>
  ) { }

  /**
   * Get all links
   */
  public async getAllLinks() {
    // Get all links
    const links = await this._linkRepository.find({ relations: ['comments', 'user', 'votes'] });
    // Count the links returned
    const linkCount = links.length;
    // Return links and counter
    return { links, linkCount };
  }

  public async getLinkForLinkViewPage(id: number) {
    const linkWithComment = await this._linkRepository.findOne(id, {relations: ['votes', 'user', 'comments', 'comments.user']});
    return linkWithComment;
  }

  /**
   * Get a link by id. If not found return null.
   * @param id 
   */
  public async getLinkById(id: number) {
    // Get a link by id
    const link = await this._linkRepository.findOne(
      id, { relations: ['user', 'comments', 'votes'] }
    );
    // If not found return null
    if (!link) return null;
    // Include voteCount and commentCount metadata
    (link as any).voteCount = link.votes.length;
    (link as any).commentCount = link.comments.length;
    // Return link
    return link;
  }

  /**
   * Create a new link with given values.
   * @param newLink 
   */
  public async createLink(newLink: Link) {
    return await this._linkRepository.save(newLink);
  }

  /**
   * Update a link with the given new link values.
   * @param linkKeys 
   * @param linkToUpdate 
   */
  private updateLinkKeys(
    linkKeys: Link,
    linkToUpdate: Link
  ): Link {
    const keys = Object.keys(linkKeys);
    keys.forEach(key => {
      (linkToUpdate as any)[key] = (linkKeys as any)[key];
    });
    return linkToUpdate;
  }

  /**
   * Update a link with the given link values.
   * @param linkKeys 
   * @param link 
   */
  public async updateLink(linkKeys: Link, link: Link) {
    return await this._linkRepository.save(
      this.updateLinkKeys(linkKeys, link)
    );
  }

  /**
   * Delete a link by id. Returns null if not found.
   * @param id 
   */
  public async deleteLink(id: number) {
    const link = await this._linkRepository.findOne(id);
    if (!link) return null;
    await this._linkRepository.remove(link);
    return { message: `Link id ${id} deleted` }
  }

}