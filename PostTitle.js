import React, { Component } from "react"
import { Link } from "@reach/router"

class PostCard extends Component  {

    render() {
        return(
            <div className='post-title'>
            <h2><Link to={`${this.props.slug}/${this.props.postIndex}`}>{this.props.title}</Link></h2>
            </div>
        )
    }
}
export default PostCard