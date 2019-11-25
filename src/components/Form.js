import React, { Component } from 'react';
import styled from 'styled-components';
import { IoIosClose as CancelIcon } from 'react-icons/io';
import Button from './Button';

const FormContainer = styled.form`
  padding: ${props => props.type === "list" ? "10px" : "0px"};
  background-color: ${props => props.type === "list" ? "#ebecf0" : null};
  border-radius: 3px;
  width: ${props => {
    switch(props.type) {
      case 'list': return '275px';
      case 'editor': return '270px';
      case 'card': return '250px';
      default: return '250px';
    }
  }};
`;

const FormTextArea = styled.textarea`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9,30,66,.25);
  margin-bottom: 8px;
  min-height: 50px;
  max-height: 250px;
  padding: 10px;
  font-size: 14px;
  border: none;
  overflow: hidden;
  resize: none;
  width: 250px;
  outline: none;
`;

const FormInput = styled.input`
  background-color: #fff;
  border-radius: 3px;
  padding: 10px;
  font-size: 14px;
  border: none;
  box-shadow: inset 0 0 0 2px #0079bf;
  overflow: hidden;
  overflow-y: scroll;
  display: block;
  margin-bottom: 5px;
  width: 250px;
  outline: none;
`;

const ButtonsContainer = styled.div`
  margin-bottom: 10px;
`;

const CancelIconStyled = styled(CancelIcon)`
  cursor: pointer;
  color: #6b778c;
  vertical-align: middle;
  font-size: 35px;

  &:hover {
    color: #172b4d;
  }
`;

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = { inputText: this.props.initialValue || '' };

    this.handleOnChangeText = this.handleOnChangeText.bind(this);
  }

  handleOnChangeText(e) {
    this.setState({ inputText: e.target.value });
  }

  render() {
    const options = {
      type: "text", 
      value: this.state.inputText,
      placeholder: this.props.placeholder,
      onChange: this.handleOnChangeText,
      editor: this.props.type === "editor"
    };

    return (
      <FormContainer type={this.props.type} >
        {
          this.props.type === 'list' 
          ? <FormInput {...options} /> 
          : <FormTextArea {...options} />
        } 
        <ButtonsContainer>
          <Button 
            text={this.props.buttonText}
            onClick={() => this.props.onClickSubmit(this.state.inputText)} 
          />
          { 
            this.props.onClickCancel && 
            <CancelIconStyled onClick={this.props.onClickCancel} />
          }
        </ButtonsContainer>
      </FormContainer>
    );
  }
};

export default Form;
