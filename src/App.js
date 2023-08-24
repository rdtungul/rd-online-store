import React from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { Navbar, Sidebar, Footer } from './components'

// ===== styled components code
import styled from 'styled-components'

const Button = styled.button`
  background: green;
  color: white;
`

const Container = styled.div`
  background: red;
  color: white;
  padding: 10%;
  .hero {
    font-size: 8rem;
  }
`
const Container2 = styled.div`
  background: blue;
  color: white;
  padding: 10%;
  .hero {
    font-size: 1rem;
  }
`

function App() {
  return (
    <div>
      <h4>RD Online Store</h4>
      <Button>click me</Button>
      <Container>
        <div>
          <h3>hello!</h3>
        </div>
        <div className="hero">
          <div className="hero">hero text</div>
        </div>
      </Container>
      <Container2>
        <div>
          <h3>world!</h3>
        </div>
        <div className="hero">
          <div className="hero">hero text</div>
        </div>
      </Container2>
    </div>
  )
}

export default App
