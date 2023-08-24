import React from 'react'
// ===== styled components code
import styled from 'styled-components'

const Testing = () => {
  return (
    <Wrapper>
      <h3>Testing</h3>
      <p>hello!</p>
      <div className="article">
        <p>this is an article</p>
      </div>
      <button>click me</button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h3 {
    color: red;
  }
  .article {
    p {
      color: green;
    }
  }
`
export default Testing
