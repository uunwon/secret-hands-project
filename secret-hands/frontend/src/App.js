import React, { Component } from 'react';

class App extends Component {
    state = {
        lists: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/');
            const lists = await res.json();
            this.setState({
              lists
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                {this.state.lists.map(item => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <span>{item.content}</span>
                    </div>
                ))}
            </div>
        );
    }
}

export default App;