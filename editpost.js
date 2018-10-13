import React, { Component } from "react"
import {FaArrowDown} from 'react-icons/fa'
import {FaArrowUp, FaTrashAlt, FaPlus} from 'react-icons/fa'

class EditPost extends Component  {

    handleChange = event => {
        event.preventDefault();
        const postId = this.props.postId;
        const post = {...this.props.posts[postId]};
        const updatedPost = {
            ...post,
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updatePost(postId, updatedPost);
    };
    
    handleParagraphChange = event => {
        event.preventDefault();
        const postId =  this.props.postId;
        const post  =   {...this.props.posts[`${postId}`]};
        const text  =   event.currentTarget.value;
        const id    =   event.currentTarget.id;
        post[`${id-1}`].text = text;
        const updatedPost = {...post};
        this.props.updatePost(postId, updatedPost);
    }

    moveMe = (pos, dir) => {
        const postId =  this.props.postId;
        const post  =   {...this.props.posts[`${postId}`]};
        // dir: -1 --> up, dir: 1 --> down
        [post[`${pos}`], post[`${pos+dir}`]] = [post[`${pos+dir}`], post[`${pos}`]];
        Object.keys(post).filter(x=>post[x].ukey).map(x=>post[x].ukey=Number(x)+1);
        const updatedPost = {...post};
        this.props.updatePost(postId, updatedPost);
    }

    goInvisible = position => {
        const postId =  this.props.postId;
        const post  =   {...this.props.posts[`${postId}`]};
        Object.keys(post).map(x=> x>=position?(post[`${Number(x)-1}`]=post[x], post[`${Number(x)-1}`].ukey=post[`${Number(x)-1}`].ukey-1):null);
        const count = Object.keys(post).filter(x=>post[x].ukey).length;
        post[`${count-1}`]=null;
        const updatedPost = {...post};
        this.props.updatePost(postId, updatedPost);
    }

    addElement = (elm, pos) => {
        const postId =  this.props.postId;
        const post  =   {...this.props.posts[`${postId}`]};
        const count = Object.keys(post).filter(x=>post[x].ukey).length;
        post[`${count}`] = {ukey: count+1, type:`${elm}`, text:'', visible: true};
        const double=Object.keys(post).filter(x=>post[x].text==='');
        console.log(double);
        Object.keys(post).filter(x=>post[x].ukey>pos).map(x=> x>pos-1?([post[x],post[`${count}`]]=[post[`${count}`],post[x]], post[x].ukey=post[x].ukey+1):null)
        post[`${pos}`].ukey=pos+1; 
        const updatedPost = {...post};
        this.props.updatePost(postId, updatedPost);
    }

    render() {
        
        const postId = this.props.postId;
        const post = {...this.props.posts[postId]};
        const {title, slug, introduction, fimage} = post;
        
        return(
            <section className="createpost">
                <h2>edit the post</h2>
                <form>
                    <h4>this is form to add new posts</h4>
                    <label>Edit the title of the post:<input value={title || ''} onChange={this.handleChange} type="text" name="title" />
                    </label><br/>
                    <label>Edit the slug of the post:<input value={slug || ''} onChange={this.handleChange} type="text" name="slug" />
                    </label><br/>
                    <label>Edit the featured image of the post:<input value={fimage || ''} onChange={this.handleChange} type="text" name="fimage" />
                    </label><br/>
                    <label>Edit the intro of the post:<input value={introduction || ''} onChange={this.handleChange} type="text" name="introduction" />
                    </label><br/>
                    
                    {Object.keys(post)
                        .filter(x => post[x].ukey)
                        .sort((x,y)=> Number(x)-Number(y))
                        .map(x => <label key={post[x].ukey} className="label-container">
                                    { 
                                         (post[x].type==='image')
                                            ?<input id={post[x].ukey} value={post[x].text} onChange={this.handleParagraphChange} type="text" name={`${post[x].type}-${post[x].ukey}`} />
                                            :<textarea id={post[x].ukey} value={post[x].text} onChange={this.handleParagraphChange} type="text" name={`${post[x].type}-${post[x].ukey}`} /> 
                                    }
                                    <button type='button' onClick={()=>this.goInvisible(post[x].ukey)} name='button-trash' className="react-icons">
                                        <FaTrashAlt className="trash"/>
                                        Delete
                                    </button>
                                    <button disabled={post[x].ukey===1} type='button' name='button-arrow-up' onClick={()=>this.moveMe(post[x].ukey-1,-1)} className="react-icons">
                                        <FaArrowUp className="arrow up"/>
                                        Move this Up
                                    </button>
                                    <button type='button' name='button-arrow-down' disabled={post[x].ukey===Object.keys(post).filter(x=>post[x].ukey).length} onClick={()=>this.moveMe(post[x].ukey-1,1)} className="react-icons">
                                        <FaArrowDown className="arrow down"/>
                                        Move this Down
                                    </button>
                                    <button type='button' name='button-paragraph-down'  onClick={()=>this.addElement('paragraph',post[x].ukey)} className="react-icons">
                                        <FaPlus className="arrow add"/>
                                        Add a paragraph
                                    </button>
                                    <button type='button' name='button-image-down'  onClick={()=>this.addElement('image',post[x].ukey)} className="react-icons">
                                        <FaPlus className="arrow add"/>
                                        Add an image url
                                    </button>
                                    <br />
                                  </label>
                        )}
                </form>
            </section>
        )
    }
}

export default EditPost