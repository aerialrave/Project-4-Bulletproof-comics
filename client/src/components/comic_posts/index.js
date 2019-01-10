import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import decode from 'jwt-decode';

class Comics_Posts extends Component {

  constructor(props){
    super(props);
    this.state={

        post: {
       body:'',
       user_id:null,
       comic_id:null
     }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setUID = this.setUID.bind(this);
    this.setCID = this.setCID.bind(this);
  }

setCID(cid){
  this.setState(
  {
    post:{
      comic_id:cid}}
    )
}

setUID(uid){
  this.setState({
    post:{
      user_id: uid
    }
  })

    }

componentDidMount(){
  const jwt = localStorage.getItem('Token');
  console.log("jwt is "+ jwt);
const token = decode(localStorage.getItem('Token'));

// this.setUID(token.sub);
 console.log( token);
// this.setCID(this.props.selected.id);
this.setState(
{
  post:{
    comic_id: this.props.selected.id,
    user_id: token.sub
  }
}
  )

}

  handleChange = (e) => {
const{ name, value } = e.target;
this.setState(prevState => ({
  post: {
    ...prevState.post,
    [name]: value
  }
}));
}

  async handleSubmit(e) {
      e.preventDefault();
      try{

          const jwt = localStorage.getItem('Token');
          console.log("jwt is "+ jwt);
        const token = decode(localStorage.getItem('Token'));

        // this.setUID(token.sub);
         console.log( token);
        // this.setCID(this.props.selected.id);
        this.setState(
        {
          post:{
            comic_id: this.props.selected.id,
            user_id: token.sub
          }
        }
          )
      //  console.log("Comic id in state from parent"+ this.props.selected.id)

        const data ={
          post: this.state.post
        }
        console.log(data);

        let  yourConfig = {
            headers: {
                Authorization: "Bearer " + jwt
              },
          data: data
          }

const response = await axios.post(`${this.props.BASE_URL}/posts`,yourConfig)
      }catch(e){
        console.log(e);
      }
    }




  render() {
    return (
      <div >
        <h1> Comic board</h1>
              <Form
                onSubmit={this.handleSubmit}
                id="register form">
                  <h5>Post</h5>
                  <FormGroup>

                <Label className="username">Post body</Label>
                <Input
                  type="text"
                  name="body"
                  value={this.state.post.body}
                  onChange={this.handleChange}
                  placeholder="body"
                  className='body'
                />

              </FormGroup>
              <Button className='submit-button' id='add-recipe-submit' outline color="info">Submit</Button>
              </Form>

              <div>
                <h2>{this.props.selected.title}</h2>


                <div>
                  {this.props.selected.posts.map(posts =>
                  <div key={posts.id} >
                    <h2>{posts.user_id}</h2>
                    <p>{posts.body}</p>
                  </div> )}

                </div>



              </div>






      </div>
    );
  }
}

export default Comics_Posts;
