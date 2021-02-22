import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, Row,  } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';



const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component { 


    constructor(props) {
        super(props);

        this.state = {
            firstName: '', 
            lastName: '',
            phoneNum: '', 
            email: '', 
            agree: false, 
            contactType: 'By Phone', 
            feedback: '', 
            touched: { 
                firstName: false, 
                lastName: false, 
                phoneNum: false, 
                email: false
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // validate(firstName, lastName, phoneNum, email) {

    //     const errors = {
    //         firstName: '',
    //         lastName: '',
    //         phoneNum: '',
    //         email: ''
    //     };

    //     if (this.state.touched.firstName) {
    //         if (firstName.length < 2) {
    //             errors.firstName = 'First name must be at least 2 characters.';
    //         } else if (firstName.length > 15) {
    //             errors.firstName = 'First name must be 15 or less characters.';
    //         }
    //     }

    //     if (this.state.touched.lastName) {
    //         if (lastName.length < 2) {
    //             errors.lastName = 'Last name must be at least 2 characters.';
    //         } else if (lastName.length > 15) {
    //             errors.lastName = 'Last name must be 15 or less characters.';
    //         }
    //     }

    //     const reg = /^\d+$/;
    //     if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
    //         errors.phoneNum = 'The phone number should contain only numbers.';
    //     }

    //     if (this.state.touched.email && !email.includes('@')) {
    //         errors.email = 'Email should contain a @';
    //     }

    //     return errors;
    // }

    // handleBlur = (field) => () => {
    //     this.setState({
    //         touched: {...this.state.touched, [field]: true}
    //     });
    // }

    // handleInputChange(event) {
    //     const target = event.target; 
    //     const name = target.name; 
    //     const value = target.type ==='checkbox' ? target.checked : target.value;

    //     this.setState({
    //         [name]: value
    //     });
    // }
    // Still need the handle event methods but will change the parameters from events to values
    handleSubmit(values) {
        console.log('Current state is: ' + JSON.stringify(values));
        alert('Current state is: ' + JSON.stringify(values));
    }

    render() {

        // const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phoneNum, this.state.email);

    return (
        <div className="container">
            <div className="row row-content">
                    <div className="col-12">
                        <h2>Send us your Feedback</h2>
                        <hr />
                    </div>
                    <div className="col-md-10">
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <Row className="Form-group">
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                <Control.text model=".firstName" id="firstName" name="firstName"
                                        placeholder="First Name"
                                        className="form-control" 
                                        validators={{
                                            required, 
                                            minLength: minLength(10), 
                                            maxLength: maxLength(15), 
                                            isNumber
                                        }}
                                    /> 
                                </Col>
                            </Row>
                            <Row className="Form-group">
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                <Control.text model=".lastName" id="lastName" name="lastName"
                                        placeholder="Last Name"
                                        className="form-control"
                                    />
                                </Col>                        
                            </Row>
                            <Row className="Form-group">
                                <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                <Col md={10}>
                                <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                                        placeholder="Phone number"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="Form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, 
                                            validEmail
                                        }}
                                    /> 
                                </Col>
                            </Row>
                            <Row className="Form-group">
                                <Col md={{size: 4, offset: 2}}>
                                    <div className="Form-check">
                                        <Label check>
                                            <Control.checkbox
                                                model=".agree"
                                                name="agree"
                                                className="form-check-input"
                                             /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={4}>
                                <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>By Phone</option>
                                        <option>By Email</option>
                                        </Control.select>
                                </Col>
                            </Row>
                            <Row className="Form-group">
                                <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                <Control.textarea model=".feedback" id="feedback" name="feedback"
                                        rows="12"
                                        className="form-control"
                                        />
                                </Col>
                            </Row>
                            <Row className="Form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}


export default Contact;