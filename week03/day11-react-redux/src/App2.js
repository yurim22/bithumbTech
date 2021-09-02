import React from 'react'
import { connect } from 'react-redux'
import './App.css';
import { BoardForm } from './components/BoardForm';

export const App = (props) => {
  return (
    <div className='App'>
        리액트 + redux<p></p>
        <BoardForm />

        
      
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
