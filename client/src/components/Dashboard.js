import React, { Component } from 'react'
import axios from 'axios'
import CommentList from './CommentList';
export class Dashboard extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            name:'',
            comment:''
        }
    }
    handleChange=(e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    handlePost = (e) => {
        let formData = {
            'name' : this.state.name,
            'comment':this.state.comment
        }
        let url = 'http://127.0.0.1:8000/comments/';
        axios.post(url,formData).then(res => {
            if(res.error)
            {
                console.log(res.error);
            }
            else{
                console.log(res.data);
                window.location.reload(false);
            }

            
        })
    }
    
    render() {
        return (
            <div >
                <div class="container pt-3 pb-3">
                    <div>
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input  onChange={this.handleChange} type="text" class="form-control" name="name" id="name"/>
                        </div>
                        <div class="form-group">
                            <label for="comment">Comment:</label>
                            <textarea onChange={this.handleChange} class="form-control" rows="5" name="comment" id="comment"></textarea>
                        </div>
                        <div class="row">
                            <div class="col-md-9"></div>
                            <div class="col-md-3">
                                <button type="submit" onClick={this.handlePost} class="btn btn-danger float-right">Post Comment</button>
                            </div>
                        </div>
                        
                    </div>
                    <div class="mt-3">
                        <div class="card">
                            <div class="card-header">Comments :</div>
                            <div class="card-body">
                                <CommentList/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
