import React from "react"
import { Link } from '@reach/router'

class Post extends React.Component  {
     
     render() {
        
        const postId = this.props.postId;
        const post = {...this.props.posts[postId]};
        const {title, fimage, introduction, stringDate} = post;
        const nextIndex = Object.keys(this.props.posts).indexOf(postId)+1;
        const nextId = Object.keys(this.props.posts)[nextIndex];
        const nextPost = {...this.props.posts[nextId]};
        const nextSlug = nextPost.slug;
        const previousIndex = Object.keys(this.props.posts).indexOf(postId)-1;
        const previousId = Object.keys(this.props.posts)[previousIndex];
        const previousPost = {...this.props.posts[previousId]};
        const previousSlug = previousPost.slug;
        console.log(nextId);
        return(
            <main className="post-page">
                <div className="post-title">
                    <h1> {title}</h1>
                </div>
                <div className="post-date">
                    <p>{stringDate}</p>
                </div>
                <div className="post-intro">
                    <p>{introduction}</p>
                </div>
                <div className="post-featured-image">
                    <img src={fimage} alt='featured' />
                </div>
                
                {Object.keys(post)
                .filter(x => post[x].ukey>0)
                .sort((x,y)=> post[x].ukey-post[y].ukey)
                .map(x => { if (post[x].type==='paragraph' && post[x].text != null && !(post[x].text==="")) 
                                return <p key={post[x].ukey} >{`${post[x].text}`}</p>
                            else 
                            // if (post[x].type==='image' && post[x].text != null && !(post[x].text===''))
                                return <img max-width='600' height='400' alt='' key={post[x].ukey} src={`${post[x].text}`}/> 
                    })
        }
            <div className='post-next-previous-bar'>
                {nextId?<div className='next-post'>
                    <Link to={`/${nextSlug}/${nextId}`}> &#171; Next</Link>
                </div>:null}
                {previousId?<div className='previous-post'>
                    <Link to={`/${previousSlug}/${previousId}`}>Previous &#187; </Link>
                </div>:null}
            </div>
            <div className='post-admin-bar'>
                <div className='edit'>
                    <Link to={`/admin/edit-post/${postId}`}>Edit post</Link>
                </div>
                <div className='delete'>
                    <button type='button' onClick={()=>this.props.dropPost(postId)}>
                        Delete Post
                    </button>
                </div>
            </div>

            </main>
        )
    }
}
export default Post