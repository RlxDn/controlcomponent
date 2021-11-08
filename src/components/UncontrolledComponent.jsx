import React from 'react';

class UncontrolledComponent extends React.Component {

  inputRef = React.createRef();

  render() {
    console.log("init render", this.inputRef)
    return (
      <div>
        <input ref={this.inputRef}/>
        <button onClick={this.click}>전송하기</button>
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount", this.inputRef)
  }
  click = () => {
    // const input = document.querySelector("#my-input");
    // console.log(input.value);

    console.log("(3)클릭ok : ", this.inputRef.current.value)
  }
}
export default UncontrolledComponent;