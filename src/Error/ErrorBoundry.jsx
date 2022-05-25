import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
  
    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }
        render() {
            if(this.state.hasError){
                return <h1>Something Went Wrong </h1>
            }
            return this.props.children
           
        }
    }
