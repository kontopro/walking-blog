import React from "react"

class Paragraph extends React.Component  {
    render() {
        // λειπουν τα onchange={} και value={}
        return(
            <React.Fragment>
                <textarea value={this.props.value} onChange={()=>this.props.handleParagraphChange(this.props.nth)} name={`paragraph-${this.props.nth}`} cols='60' rows='5' placeholder={this.props.nth} />
                <br />
            </React.Fragment>
        )
    }
}

export default Paragraph