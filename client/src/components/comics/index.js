import React, { Component } from 'react';
import axios from 'axios';


// include comic thumbnails within here
class Comics extends Component {

  constructor(props){
    super(props);
    this.state={
        comic:[],
        Idcomic:0

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getComics = this.getComics.bind(this);
    this.setIdcomic = this.setIdcomic.bind(this);
    this.viewPosts = this.viewPosts.bind(this);
  }


  handleChange = (e) => {
const{ name, value } = e.target;
this.setState(prevState => ({
  prevState,
  formData: {
    ...prevState.formData,
    [name]: value
  }
}));
}

  async handleSubmit(e) {
      e.preventDefault();
      try{

      }catch(e){
        console.log(e);
      }

    }


async getComics(){
  try{
    const response = await axios.get(`${this.props.BASE_URL}/comics`)

    this.setState({
      comic:response.data
    })

  }catch(e){
    console.log(e);
  }
}



setIdcomic(num){
  this.setState({
    Idcomic:num
  })
}


async componentDidMount(){
 await this.getComics();
}

viewPosts(comic){
  console.log(comic);
this.props.handleSelect(comic);

  this.props.handleView('comics_posts');
}


  render() {
    return (
      <div >
        <h1>Bulletproof Pull list available comics</h1>

          <div id="comiclist">
              {this.state.comic.map(comic =>
              <div key={comic.id} >

                <h2>{comic.title}</h2>
                <button onClick={() => this.viewPosts(comic)}>go to posts</button>

                </div>
              )
            }


          </div>



      </div>
    );
  }
}

export default Comics;
