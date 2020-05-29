import React, { Component } from 'react'
import axios from 'axios'
export class CommentList extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            comments:[]
        }
    }
    handleLikes = (id) => {
        console.log('liked');
        let url = `http://127.0.0.1:8000/comments/like/${id}/`;
        axios.post(url).then(res => {
            if(res.error)
                console.log(res.error)
            else
                console.log(res.data)
                window.location.reload(false);
        })
    }
    handleDislikes = (id) => {
        console.log('disliked');
        let url = `http://127.0.0.1:8000/comments/dislike/${id}/`;
        axios.post(url).then(res => {
            if(res.error)
                console.log(res.error)
            else
                console.log(res.data)
                window.location.reload(false);
        })
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/comments/').then(res => {
            console.log(res.data);
            this.setState({comments:res.data})
            
        })
    }
    render() {
        const btnStyle= {
            background: 'white',
            border: 'none'
        }
        return (
            <div>
                {
                    this.state.comments.length==0?<>No Comments to show !</>:<>
                            {
                                this.state.comments.map(temp => {
                                    return (
                                        <div>
                                            <div class="row">
                                                <div class="col-md-9">
                                                    <div>
                                                        {temp.id}. {temp.name}
                                                    </div>
                                                    <div style={{textAlign: 'justify'}}>
                                                        {temp.comment}
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div>
                                                        <button value={temp.id} class="btn" style={btnStyle} onClick={() =>this.handleLikes(temp.id)}><i class="fa fa-thumbs-up" style={{fontSize:'23px',color:'green'}}> </i></button>{temp.upvotes} Likes
                                                    </div>
                                                    <div>
                                                        <button value={temp.id} class="btn" style={btnStyle} onClick={() => this.handleDislikes(temp.id)}><i class="fa fa-thumbs-down" style={{fontSize:'23px',color:'red'}}> </i></button>{temp.downvotes} DisLikes
                                                    </div>
                                                    
                                                    
                                                </div>
                                            </div>
                                            <div class="mt-3 mb-3">
                                                <hr/>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </>
                }
            </div>
        )
    }
}

export default CommentList
