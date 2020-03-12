import React, { Component} from 'react'
import {Route,Switch} from 'react-router-dom'
import {randomId} from './data/randomId';
import {date} from './data/date'
import Posts from './components/Posts';
import './App.css';
import AddPost from './components/AddPost';
import ViewPost from './components/ViewPost';
import EditPost from './components/EditPost'
import DeletePost from './components/DeletePost'
import {posts} from './data/posts'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post :{
        title : '',
        category : '',
        description : ''
      },
      posts : posts
      
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
    const newPost = {...this.state.post, id : randomId(),date : date()}
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
            setInitial = {this.setInitial}
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
          setInitial = {this.setInitial}
          handleChange = {this.handleChange}/>}}  
        />
          <Route 
          exact 
          path={`/post/delete/:id`} 
          render={ (props) => {return <DeletePost id={props.match.params.id}
          deletePost = {this.deletePost}
          />}}  
        />
      </Switch>
    </div> 
  )
}

}

export default App
