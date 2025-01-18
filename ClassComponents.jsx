import { Component } from "react";

class ClassInput extends Component{
    constructor(props){
        super(props)

        this.state = {
            todos: [],
            inputVal: "",
          };

          this.handleInputChange = this.handleInputChange.bind(this)
          this.handleSubmit = this.handleSubmit.bind(this)
    }

    render() {
        return (
            <section>
                <h3>{this.props.name}</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task-entry">Enter a task</label>
                    <input type="text" name="task-entry" onChange={this.handleInputChange}/>
                    <button type="submit">Submit</button>
                </form>
                <h4>All the tasks</h4>
                <ul></ul>
            </section>
        )
    }
}

export default ClassInput