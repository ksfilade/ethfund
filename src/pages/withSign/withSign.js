import React from 'react';
import axios from 'axios'
import { setCurrentUser } from '../../redux/user/user.actions'
import Spiner from '../../components/Spinner/spiner.component'
import { validateEmail } from '../../helpers/checkFunctions'
import { checkIfMatch } from '../../helpers/checkFunctions'
import { checkIfEmpty } from '../../helpers/checkFunctions'

const withSign = WrappedComponent => {
  class withSign extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
        showErrorMessage: false,
        message: '',
        showSpiner: false,

      };
    }

    submitHandler = async (signType, data) => {
      if (!validateEmail(data.email))
        return this.setState({
          showErrorMessage: true,
          message: 'Email is not Valid'
        })

      if (data.repatPassword != undefined && !checkIfMatch(data.password, data.repatPassword))
        return this.setState({
          showErrorMessage: true,
          message: 'Passwords do not Match'
        })

      if (data.firstName != undefined && !checkIfEmpty(data.firstName))
        return this.setState({
          showErrorMessage: true,
          message: 'First Name is requierd Field'
        })
        this.setState({
          showSpiner: true
        })

      let res = await axios.post('http://localhost:3001/users/' + signType, data)
      if (res.data.success == undefined) {
        this.props.setCurrentUser({ name: res.data.user.firstName, isLogedin: true, token: res.data.token, admin: res.data.user.admin, userID: res.data.user._id })
        
        this.props.history.push('/')
      }
      else
        this.setState({
          showErrorMessage: true,
          message: 'wrong credentials',
          showSpiner: false
        })
    }
    render() {
      const { dataSource, ...otherProps } = this.props;

      return <WrappedComponent submitHandler={this.submitHandler} showErrorMessage={this.state.showErrorMessage} message={this.state.message} showSpiner={this.state.showSpiner} {...otherProps} />

    }
  }

  return withSign;
};

export default withSign;