import React, { Component,createRef } from 'react'
import {Route,Link,NavLink,Switch,Prompt,Redirect} from 'react-router-dom'
import {randomId} from './data/randomId';
import Posts from './components/Posts';
import './App.css';
import AddPost from './components/AddPost';
import PostDetail from './components/PostDetail';
import ViewPost from './components/ViewPost';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id : '',
      title : '',
      category : '',
      description : '',
      posts : [
       {
         id : 'a44gfg',
         title : 'My day in Integrify',
         category : 'work',
         description : 'Hi.. Welcome to my day at Integrify.',
         isDeleted : false,
         
       },
       {
         id : 'ff9a44',
         title : 'My talk at React Meetup',
         category : 'Recreation',
         description : 'Hi.. Welcome to my talk at React Meet up.',
         isDeleted : false,
         
       },
       {
         id : 'I4ox14',
         title : 'Fun at Beach',
         category : 'Recreation',
         description : 'Hi.. Welcome to recreation',
         isDeleted : false,
         
       },
       {
         id : '15f9a4',
         title : 'Running in the forest',
         category : 'Sport',
         description : 'Hi.. Welcome to sport',
         isDeleted : false,
         contentEditable : false
       }
      ]
    }
  }
  inputTitle = createRef()
  category = createRef()
  description = createRef()
  
   deletePost = (id) => {
     const copiedPost = [...this.state.posts]
     const deletedPost = copiedPost.filter(post => post.id!==id)
     this.setState({posts : deletedPost})
   } 
   
  editPost = (id) => {
    const copiedPost = [...this.state.posts]
    for(const post of copiedPost) {
      if(post.id===id) {
        console.log(id)
      }
    }
    
  }
   handleChange = (e) => {
     const {name,value} = e.target
     this.setState({[name] : value})
   }

  addPost = () => {
    const id = randomId()
    const title = this.state.title
    const category = this.state.category
    const description = this.state.description
    const isDeleted = false
    const newPost = {id : id,
                     title : title,
                     category : category,
                     description : description,
                     isDeleted : isDeleted 
                    }
    const copiedPost = [...this.state.posts,newPost]
    this.setState({posts : copiedPost})                
  }
  render () {
  return (
    <div className='App'>
      <Switch>
        <Route 
          exact 
          path='/newpost' 
          render={ () => <AddPost 
            addPost = {this.addPost}
            title = {this.state.title}
            category = {this.state.category}
            description = {this.state.description}
            id = {this.state.id}
            handleChange = {this.handleChange}
            />
          }
        />
        <Route 
          exact 
          path='/' 
          render={ () => <Posts 
            posts = {this.state.posts}
            deletePost = {this.deletePost}
            editPost = {this.editPost}
            inputTitle = {this.inputTitle}
            />
          }
        />
        <Route 
          exact 
          path={`/post/:id`} 
          render={ (props) => {return <ViewPost id={props.match.params.id}
            posts={this.state.posts}
          />}}  
        />
      </Switch>
    </div>
  )
}

}

export default App

