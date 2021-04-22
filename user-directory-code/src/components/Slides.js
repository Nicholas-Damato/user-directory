import React, { Component } from 'react'
import data from './data'
import List from './List'
import Button from './Button'

class Slides extends Component {
    constructor() {
        super()
        this.state = {
            people: data,
            index: 0
        }
    }


    handleNext = () => {
        if (this.state.index < this.state.people.length - 1) {
            this.setState({ index: this.state.index + 1 })
        }
    }

    handlePrevious = () => {
        if (this.state.index > 0) {
            this.setState({ index: this.state.index - 1 })
        }
    }


    render() {
        let array = this.state.people.map((element) => {
            return (
                <List listItem={element} />
            )

        })
        return (
            <div className='SlidesBox'>
                {array[this.state.index]}
                <Button handleNext={this.handleNext} handlePrevious={this.handlePrevious} />
            </div>
        )
    }
}

export default Slides