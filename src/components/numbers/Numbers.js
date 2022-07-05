import React from "react";
import {connect} from "react-redux";
import {changeDataAction} from "../../actions/actions";
import {addNumberAction} from "../../actions/actions";

class Numbers extends React.Component{
    constructor(props) {
        super(props);
        this.changeNumber = this.changeNumber.bind(this)
        this.addNumber = this.addNumber.bind(this)
    }

    changeNumber(e) {
        const data = {
            name: e.target.name,
            value: e.target.value
        }

        this.props.changeDataAction(data)
    }

    addNumber() {
        this.props.addNumberAction(this.props.userName.userName)
    }

    render() {
        return (
            <div>
                <input type="number" name="userName" onChange={this.changeNumber}/>
                <button onClick={this.addNumber}>Add Number</button>
                <p>{this.props.numbers + ","}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userName: state.dataReducer.data,
        numbers: state.numbersReducer.numbers
    }
}


const mapDispatchToProps = {
    changeDataAction,
    addNumberAction
}

export default connect(mapStateToProps, mapDispatchToProps) (Numbers);