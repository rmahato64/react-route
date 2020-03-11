import React, { Component} from 'react'
import {Route,Switch,Prompt} from 'react-router-dom'
import {randomId} from './data/randomId';
import Posts from './components/Posts';
import './App.css';
import AddPost from './components/AddPost';
import ViewPost from './components/ViewPost';
import EditPost from './components/EditPost'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post :{
        title : '',
        category : '',
        description : '',
       
      },
      posts : [
       {
         id : randomId(),
         title : 'My day in Integrify',
         category : 'work',
         description : 'Hi.. Welcome to my day at Integrify.',
         
         
       },
       {
         id : randomId(),
         title : 'My talk at React Meetup',
         category : 'Recreation',
         description : 'Hi.. Welcome to my talk at React Meet up.',
         
         
       },
       {
         id : randomId(),
         title : 'Fun at Beach',
         category : 'Recreation',
         description : 'Hi.. Welcome to recreation',
         
         
       },
       {
         id : randomId(),
         title : 'Running in the forest',
         category : 'Sport',
         description : 'Hi.. Welcome to sport',
         
       }
      ]
    }
  }
  
   deletePost = (id) => {
     const post = {...this.state.post, isDeleted : true}
     this.setState({post})
     const copiedPost = [...this.state.posts]
     const deletedPost = copiedPost.filter(post => post.id!==id)
     this.setState({posts : deletedPost})
   } 
   
  editPost = (id) => {
    const copiedPost = [...this.state.posts]
    const {title,category,description} = this.state.post
    for(const post of copiedPost) {
      if(post.id===id) {
        post.title = title
        post.category = category
        post.description = description
        this.setState({posts : copiedPost})
      }
    }
    
  }
  editInput = (id) => {
    const copiedPost = [...this.state.posts]
    const post = {}
    for(const copyPost of copiedPost) {
      if(copyPost.id === id) {
        post.title = copyPost.title
        post.category = copyPost.category
        post.description = copyPost.description
      }
    }
    this.setState({post})
  }
   handleChange = (e) => {
     const {name,value} = e.target
     const post = {...this.state.post,[name] : value}
     this.setState({post})
   }

  addPost = () => {
    const newPost = {...this.state.post,id : randomId()}
    const posts = [...this.state.posts,newPost]
    this.setState({posts : posts})                
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
            post = {this.state.post}
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
            />
          }
        />
        <Route 
          exact 
          path={`/post/:id`} 
          render={ (props) => {return <ViewPost id={props.match.params.id}
          posts = {this.state.posts}
          test = {props}
          deletePost = {this.deletePost}
          editInput = {this.editInput}
          handleChange = {this.handleChange}/>}}  
        />
        <Route 
          exact 
          path={`/post/edit/:id`} 
          render={ (props) => {return <EditPost id={props.match.params.id}
          editPost = {this.editPost}
          post = {this.state.post}
          handleChange = {this.handleChange}/>}}  
        />
      </Switch>
    </div>
  )
}

}

export default App

