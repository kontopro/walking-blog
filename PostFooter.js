import React, { Component } from "react"
import {Link} from '@reach/router'

class PostCard extends Component  {

    render() {
        const date = `${this.props.date}`;
        return(
            <div className="postcard-footer">
                <div className="postcard-date">
                    <p>{date.slice(8,10)+' '+date.slice(4,7)+' '+date.slice(-4)}</p>
                </div>
                <div className="postcard-readmore">
                   <p>
                       <Link to={`${this.props.slug}/${this.props.postIndex}`}>Read more &#8594;</Link>                     
                            
                    </p>

                </div>
            </div>
            
        )
    }
}
export default PostCard