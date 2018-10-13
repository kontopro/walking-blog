import React, { Component } from "react"

class ShowArticle extends Component  {

    render() {
       // const content = this.props.content;
        
        return(
            <p>show article</p>
            )
            {
                /*
                content.filter(x => x.type==='paragraph' || x.type==='image')
                        .sort((x,y) => x.ukey - y.ukey)
                        .map(x => (x.type === 'paragraph')?
                            <textarea id={x.ukey} key={x.ukey} value={this.state.content[x.ukey-1].text} onChange={this.handleParagraphChange} name={`paragraph-${x.ukey}`} cols='60' rows='5' placeholder={x.ukey} />
                            :<input id={x.ukey} key={x.ukey} value={this.state.content[x.ukey-1].text} onChange={this.handleParagraphChange} name={`image-${x.ukey}`} placeholder={x.ukey} />
                            )
                        }
                */
            }
    }
}

export default ShowArticle