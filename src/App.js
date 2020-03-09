import React, { Component,createRef } from 'react'
import {BrowserRouter,Route,Link,NavLink,Switch,Prompt,Redirect} from 'react-router-dom'
import {randomId} from './data/randomId'
import Posts from './components/Posts'
import Post from './components/Post'
import './App.css'
import AddPost from './components/AddPost'

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
         id : randomId(),
         title : 'My day in Integrify',
         category : 'work',
         description : 'Hi.. Welcome to my day at Integrify.',
         isDeleted : false,
         
       },
       {
         id : randomId(),
         title : 'My talk at React Meetup',
         category : 'Recreation',
         description : 'Hi.. Welcome to my talk at React Meet up.',
         isDeleted : false,
         
       },
       {
         id : randomId(),
         title : 'Fun at Beach',
         category : 'Recreation',
         description : 'Hi.. Welcome to recreation',
         isDeleted : false,
         
       },
       {
         id : randomId(),
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
    <div>
      <AddPost
      addPost = {this.addPost}
      title = {this.state.title}
      category = {this.state.category}
      description = {this.state.description}
      id = {this.state.id}
      handleChange = {this.handleChange}
      />
      <Posts 
      posts = {this.state.posts}
      deletePost = {this.deletePost}
      editPost = {this.editPost}
      inputTitle = {this.inputTitle}
      />
    </div>
  )
}

}

export default App

