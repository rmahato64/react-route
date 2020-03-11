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
        description : ''
      },
      posts : [
       {
         id : randomId(),
         title : 'My day in Integrify',
         category : 'work',
         description : 'Hi.. Welcome to my day at Integrify. Integrify is a software development company with a mission. We teach international talent coding and connect them with work. During a multi-month intensive programming course, we develop international talent into junior software developers. After the program, we employ them ourselves or to our partner companies. Our mission: enabling integration through technology. We work together with companies and public organizations. Integrify Oy offers talent and consultancy services. The nonprofit association Integrify Ry is responsible for education and integration services.',
         date : 'Jan 1, 2020 11:10:42'
       },
       {
         id : randomId(),
         title : 'My talk at React Meetup',
         category : 'Recreation',
         description : 'Hi.. Welcome to my talk at React Meet up. Integrify was founded in 2016 during the refugee crisis. The founders felt frustrated that talented refugees were idle and had nothing to do except wait. A pilot project was started, training asylum seekers in programming skills as a fast track to jobs that require no Finnish language and are based purely on meritocracy. The first pilot was successful and all the graduates got a job. As a result, the operations were expanded and all international talent were welcomed to join the program. Integrify moved to a bigger space at the startup hub Maria 01 and new team members were hired.',
         date : 'Feb 2, 2020 12:20:42'
         
         
       },
       {
         id : randomId(),
         title : 'Fun at Beach',
         category : 'Recreation',
         description : 'Hi.. Welcome to recreation. Integrify’s concept also convinced the judges at The Next Century Builders Challenge Competition (Vuosisadan Rakentajat) where Integrify came third and was awarded 150 000€. This meant a move to an even bigger space and even more students accepted to the program. Integrify’s concept also convinced the judges at The Next Century Builders Challenge Competition (Vuosisadan Rakentajat) where Integrify came third and was awarded 150 000€. This meant a move to an even bigger space and even more students accepted to the program.',
         date : 'Mar 1, 2020 13:30:42'
         
         
       },
       {
         id : randomId(),
         title : 'Running in the forest',
         category : 'Sport',
         description : 'Hi.. Welcome to sport. Since then over tens of people have graduated as junior software developers and the number keeps on growing. Our students are extremely talented and we have ourselves hired them as consultants. Integrify now has a team of 10 people, and ambitious plans for the future. Since then over tens of people have graduated as junior software developers and the number keeps on growing. Our students are extremely talented and we have ourselves hired them as consultants. Integrify now has a team of 10 people, and ambitious plans for the future.',
         date : 'Mar 4, 2020 14:40:42'
         
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

