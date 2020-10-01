import React from 'react';
import Users from './components/users';

class App extends Component {
    state ={
        users=[]

    }

    componentDidMount(){

        fetch("")
        .then(res => res.json())
        .then((data) => {
            this.setState({ users: data })

        })
        .catch(console.log)
    }
  return (
    <Users users = {this.state.users} />
  );
}

export default App;
