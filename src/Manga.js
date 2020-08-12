import React from 'react';
class Manga extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            author:''
        }
    }
    componentDidMount(){
        const url=`http://localhost:3000/api/${this.props.match.params.id}.json`;
        console.log(url)
        fetch(url)
        .then(res=> res.json())
        .then(json=>{
         console.log(json)
         this.setState({
             name:json.name,
             author:json.author
         })
        });
    }
    // componentDidUpdate(prevProps) {
      
    //     if (this.props.match.params.id !== prevProps.id) {
    //       this.props.id;
    //     }
    //   }
  render() {
    return (
      <div>
        {this.props.match.params.id}
       <p> name:{this.state.name}</p>
       <p> author:{this.state.author}</p>
      </div>
    );
  }
}

export default Manga;