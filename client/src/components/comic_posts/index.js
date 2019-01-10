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
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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


const response = await axios({
  method:'post',
  url:`${this.props.BASE_URL}/posts`,
  data: data,
  headers:{
    'Authorization': `Bearer ${jwt}`
  }
});


      }catch(e){
        console.log(e);
      }
    }





    async handleEdit(id) {

        try{
            const jwt = localStorage.getItem('Token');
            console.log("jwt is "+ jwt);
          const token = decode(localStorage.getItem('Token'));

          this.setState(
          {
            post:{
              comic_id: this.props.selected.id,
              user_id: token.sub
            }
          }
            )

          const data ={
            post: this.state.post
          }
          console.log(data);


  const response = await axios({
    method:'put',
    url:`${this.props.BASE_URL}/posts/${id}`,
    data: data,
    headers:{
      'Authorization': `Bearer ${jwt}`
    }
  });


        }catch(e){
          console.log(e);
        }
      }



      async handleDelete(id) {

          try{
              const jwt = localStorage.getItem('Token');
              console.log("jwt is "+ jwt);
            const token = decode(localStorage.getItem('Token'));

            this.setState(
            {
              post:{
                comic_id: this.props.selected.id,
                user_id: token.sub
              }
            }
              )

            const data ={
              post: this.state.post
            }
            console.log(data);


      const response = await axios({
      method:'delete',
      url:`${this.props.BASE_URL}/posts/${id}`,
      data: data,
      headers:{
        'Authorization': `Bearer ${jwt}`
      }
      });


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
                <h2 className="title is-2">{this.props.selected.title}</h2>


                <div className="block">

                  {this.props.selected.posts.map(posts =>
                  <article key={posts.id} className="message is-info">
                    <div className="message-header">
                    <p>{posts.user_id}</p>
                  </div>
                  <div className="message-body">
                    {posts.body}
                  </div>
                    <button className="button is-info" onClick={() => this.handleEdit(`${posts.id}`)}>edit post</button>

                    <button className="button is-warning" onClick={() => this.handleDelete(`${posts.id}`)}>delete post</button>
                  </article> )}

                </div>



              </div>






      </div>
    );
  }
}

export default Comics_Posts;
