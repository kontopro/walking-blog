import React, { Component } from "react"

class PostCard extends Component  {

    render() {
        const fimage = this.props.fimage;
        return(
            <div className='post-featured-image'>
                <img alt='feature' src= {fimage} max-width='450'/>
            </div>
        )
    }
}
export default PostCard