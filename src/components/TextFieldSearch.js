
    import TextField from 'material-ui/TextField';

    import React, { Component } from 'react'
    import { connect } from 'react-redux'
    import { bindActionCreators } from 'redux'
    import { changeValueSearch } from '../../src/store/actions'


    class TextFieldSearch extends Component {
        

        render(){
            return (

                <div>
                    <TextField
                        style={{width: '80%'}}
                        underlineShow={false}
                        // onChange={(e, newVal) => {
                        //   setSearch('demo', newVal)
                        // }}
                        hintText={'Procurar'}
                        floatingLabelText={this.props.value}
                        inputStyle onChange = {this.props.changeValueSearch} value={this.props.value}
                    />
                 </div>

                
            )
        }
    }



    function mapStateToProps(state) {
        return {
            value: state.field_text.value
        }

    }

    function mapDispatchToProps(dispatch) {
        return bindActionCreators({ changeValueSearch }, dispatch)
    }

    export default connect(mapStateToProps, mapDispatchToProps)(TextFieldSearch)