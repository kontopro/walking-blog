import React, { Component } from "react"
// import Paragraph from "./paragraph"

class CreatePost extends Component  {

    state={
           main: {
                title: '',
                slug: '',
                fimage: '',
                introduction: '',
                visible: true
            },
                counter: 0,
           content: []
        }

    handleParagraphChange = (event) => {
        event.preventDefault();
        const content = [...this.state.content];
        const target = event.target;
        const value = target.value;
        const id = target.id;
        content[id-1].text=value;
        this.setState({
            content: [...content]
        });
    }

    handleInputChangeMain = (event) => {
        const main = {...this.state.main}
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            main: {...main, [name]: value}
        });
      }
      // τα textarea να μπαινουν αυτόματα βαση του state.content --> OK
      // τα input βαση του main
      addParagraph = event => {
        event.preventDefault();
        const counter = this.state.counter + 1;
        const content = this.state.content;
        const paragraph = {ukey: counter, type:'paragraph', text:'', visible: true}
        this.setState({
            counter: counter,
            content: [...content, paragraph]
        });
      }

      addImage = event => {
        event.preventDefault();
        const counter = this.state.counter + 1;
        const content = this.state.content;
        const image = {ukey: counter, type:'image', text:'', visible: true}
        this.setState({
            counter: counter,
            content: [...content, image]
        });
      }

      createPost = e => {
        e.preventDefault();
        const main = {...this.state.main}
        const post = {...main, ...this.state.content};
        this.props.addPost(post);
        e.currentTarget.reset();
        this.setState({main: {title: '',slug: '',fimage: '', introduction: '', visible: true}, counter:0, content: []});
    }

    render() {
        
        return(
            <section className="createpost">
                <h2>create a new post</h2>
                <form onSubmit={this.createPost}>
                    <h4>this is form to add new posts</h4>
                    {
                        // πρώτα τα input του main
                    }
                    <label>Insert the title of the post:<input value={this.state.main.title} onChange={this.handleInputChangeMain} type="text" placeholder="title" name="title" />
                    </label><br/>
                    <label>Specify a slug for the url links:<input value={this.state.main.slug} onChange={this.handleInputChangeMain} type="text" placeholder="slug" name="slug" />
                    </label><br/>
                    <label>Specify an image as featured image:<input value={this.state.main.fimage} onChange={this.handleInputChangeMain} type="text" placeholder="featured image" name="fimage" />
                    </label><br/>
                    <label><textarea cols='50' rows='6' value={this.state.main.introduction} onChange={this.handleInputChangeMain} type="text" placeholder="introduction" name="introduction" />
                    </label><br/>
                    {
                        // και μετά παράγραφοι ή εικόνες
                        this.state.content
                        .filter(x => x.type==='paragraph' || x.type==='image')
                        .sort((x,y) => x.ukey - y.ukey)
                        .map(x => (x.type === 'image')?
                        <input     type='text' id={x.ukey} key={x.ukey} value={this.state.content[x.ukey-1].text} onChange={this.handleParagraphChange} name={`image-${x.ukey}`}     placeholder={x.ukey} />
                        :<textarea type='text' id={x.ukey} key={x.ukey} value={this.state.content[x.ukey-1].text} onChange={this.handleParagraphChange} name={`paragraph-${x.ukey}`} placeholder={x.ukey} cols='60' rows='5' />
                            )
                        }
                    
                    <button onClick= {this.addParagraph} >Add paragraph</button>
                    <button onClick= {this.addImage} >Add image</button>
                    <br/><button disabled={!this.state.main.slug || !this.state.main.title} type="submit" value="Submit">Submit</button>
                </form>
            </section>
        )
    }
}

export default CreatePost