import React, {Component} from 'react';
import styled             from 'styled-components';
import {connect}          from 'react-redux';
import {login, clearError}            from './action';

const Wrapper = styled.form`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Form = styled.div`
    padding: 40px;
    background-color: #fff;
`;

class App extends Component {

	handleSubmit = (e) => {
		e.preventDefault();
		const name = this.refs.login.value;
		const password = this.refs.password.value;
		this.props.onLogin({name: name, password: password});
	};

	handleCancel = (e) => {
		e.preventDefault();
		this.refs.login.value = '';
		this.refs.password.value = '';
		this.props.onClearError();
	};

	render() {
		console.log('__ ', this.props)
		return (
			<Wrapper>
				{!this.props.state.user ?
					<Form>
						<div className="field">
							<label className="label">Login</label>
							<div className="control">
								<input ref='login' className="input" type="text" placeholder="Enter login"/>
							</div>
							{this.props.state.error ?
								<p className="help">{this.props.state.error}</p> : null
							}
						</div>
						<div className="field">
							<label className="label">Password</label>
							<div className="control">
								<input ref='password' className="input" type="password" placeholder="Enter password"/>
							</div>
							{this.props.state.error ?
								<p className="help">{this.props.state.error}</p> : null
							}
						</div>
						<div className="field is-grouped">
							<div className="control">
								<button onClick={this.handleSubmit} className="button is-link">Submit</button>
							</div>
							<div className="control">
								<button onClick={this.handleCancel} className="button is-text">Cancel</button>
							</div>
						</div>
					</Form> :
					<div>{this.props.state.user.name}</div>
				}

			</Wrapper>
		);
	}
}

export default connect(
	state => ({
		state: state,
	}),
	dispatch => ({
		onLogin: user => dispatch(login(user)),
		onClearError: () => dispatch(clearError())
	}),
)(App);
