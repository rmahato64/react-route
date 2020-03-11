import React, { Component} from 'react'
import {Route,Switch} from 'react-router-dom'
import {randomId} from './data/randomId';
import {date} from './data/date'
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
        isDeleted : false
      },
      posts : [
       {
         id : 'a44gfg',
         title : 'My day in Integrify',
         category : 'work',
         description : 'Hi.. Welcome to my day at Integrify.',
         date : 'Jan 1, 2020 11:10:42'
         
       },
       {
         id : randomId(),
         title : 'My talk at React Meetup',
         category : 'Recreation',
         description : 'Hi.. Welcome to my talk at React Meet up.',
         date : 'Feb 2, 2020 12:20:42'
         
         
       },
       {
         id : randomId(),
         title : 'Fun at Beach',
         category : 'Recreation',
         description : 'Hi.. Welcome to recreation',
         date : 'Mar 1, 2020 13:30:42'
         
         
       },
       {
         id : randomId(),
         title : 'Running in the forest',
         category : 'Sport',
         description : 'Hi.. Welcome to sport',
         date : 'Mar 4, 2020 14:40:42'
         
       }
      ]
    }
  }
  
   deletePost = (id) => {
     this.setState({isDeleted : true})
     const post = {...this.state.post, isDeleted : true}
     this.setState({post})
     const copiedPost = [...this.state.posts]
     const deletedPost = copiedPost.filter(post => post.id!==id)
     this.setState({posts : deletedPost})
   } 
   
  editPost = (id) => {
    const copiedPost = [...this.state.posts]
    const {title,category,description} = this.state.post
    const editedPost = copiedPost.filter(post => post.id === id)
    editedPost[0].title = title
    editedPost[0].category = category
    editedPost[0].description = description
    editedPost[0].date = date()
    const filteredPost = copiedPost.filter(post =>post.id!==id)
    this.setState({posts : [...editedPost,...filteredPost]})
    this.setInitial() 
    
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
    const newPost = {...this.state.post,id : randomId(),date : date()}
    const posts = [newPost,...this.state.posts]
    this.setState({posts : posts})    
    this.setInitial()         
  }

 setInitial =() => {
  const post ={
    title : '',
    category : '',
    description : '',
   }
  this.setState({post})
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

