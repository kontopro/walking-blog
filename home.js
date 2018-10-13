import React, { Component } from "react"
import PostCard from "./PostCard"

class Home extends Component  {

    render() {
        const posts = {...this.props.posts};
        return(
            
            <main className="home g-row">
                <p>this is home component</p>
                <div className="postcards-wrapper">
                 {Object.keys(posts)
                 .filter(x=>posts[x].visible)
                 .sort((x,y)=> Number(y)-Number(x))
                 .slice(0,15)
                 .map(x =>
                (<PostCard key={x}  postIndex={x} postDetails={posts[x]} />)
                )}
                </div>
            </main>
        )
    }
}
export default Home