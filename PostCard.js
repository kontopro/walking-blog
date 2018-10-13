import React, { Component } from "react"
import PostFeatureImage from "./PostFeatureImage"
import PostTitle from "./PostTitle"
import PostFooter from "./PostFooter"

class PostCard extends Component  {

    render() {
        return(
            <section className="postcard">
                <PostFeatureImage fimage={this.props.postDetails.fimage} />
                <PostTitle postIndex={this.props.postIndex} title={this.props.postDetails.title} slug={this.props.postDetails.slug} />
                <PostFooter date={this.props.postDetails.stringDate} postIndex={this.props.postIndex} title={this.props.postDetails.title} slug={this.props.postDetails.slug} />
            </section>
        )
    }
}
export default PostCard