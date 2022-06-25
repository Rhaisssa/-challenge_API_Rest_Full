import PostModel from './postModel';
import Post from './postInterface';

class PostService {
    private post = PostModel;
    /* Create a new post*/
    public async create(description: string, date: Date, user: number): Promise<Post> {
        try {
            const post = await this.post.create({ description, date, user });
            return post;
        } catch (error) {
            throw new Error('Error 404, unable to create a new post');
        }
    }
}

export default PostService;