import classes from './post-content.module.css'
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";


const PostContent = (props) => {
    const {post} = props;

    const imagePath = `/images/posts/${post.slug}/${post.image}`

    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath}/>
           <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
    );
};

export default PostContent;
