  import React, { Component } from 'react'
  import ReactDOM from 'react-dom'
  import PropTypes from 'prop-types'
  import { connect } from 'react-redux'
  import AppBar from 'material-ui/AppBar'
  import { FilterDrawer, filterSelectors, filterActions } from '../../src'
  import FontIcon from 'material-ui/FontIcon'
  import IconButton from 'material-ui/IconButton'
  import { List, ListItem } from 'material-ui/List'
  import TextField from 'material-ui/TextField'
  // import source from '../src/data.json'
  import ReactList from 'react-list'
  import Divider from 'material-ui/Divider'
  import Image from 'material-ui-image'
  import IconMenuRight from '../../src/components/drawers/IconMenuRight'
  import IconDownload from '../../src/components/drawers/IconDownload'
  import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
  import FilterTab from  '../../src/components/Filter';
  

  // import { FilterDrawer, filterSelectors, filterActions } from '../../src'
  
  
  
  import { combineReducers, createStore} from 'redux'
  import { Provider } from 'react-redux'
 
  import Field from '../../src/components/field'
  import TextFieldSearch from '../../src/components/TextFieldSearch'
  
  import fieldReducer from '../../src/store/fieldReducer'
  import TextFieldSearchReducer from '../../src/store/TextFieldSearchReducer'

  
  
  
  import DataTableUI  from '../../src/components/DataTableUI'
  import {bindActionCreators} from 'redux';
  import {getrankparamList} from '../../src/store/actions'
  import { setFilterIsOpen } from '../../src/store/actions'
  
  import RefreshIndicatorLoading from  '../../src/components/RefreshIndicatorLoading'
  
  import {
    
    applyMiddleware,
    compose
  } from 'redux';
  import thunk from 'redux-thunk';
  
  
  const reducers = combineReducers({
    field:  fieldReducer,
    field_text:  TextFieldSearchReducer
    
  })

  class App extends Component {
    constructor (props){
      super (props)
      this.filterTable = this.filterTable.bind(this);
      this.state = { 
        filters: {}, 
        
      };
    }
    
    componentWillMount (){
      this.props.getrankparamList()
      
    }
    
    filterTable(filters){
      this.setState({filters: this.filters});
      console.log(this.state.filters) 
      this.forceUpdate()
      
    }

  
    
    render() {
      const {
        setFilterIsOpen,
        list,
        setSearch,
        muiTheme
      } = this.props

      const filterFields = [
        // { name: 'name', label: 'Name' },
        // { name: 'email', label: 'Email' },
        { name: 'registered', label: 'Registrado', type: 'date' },
        { name: 'isActive', label: 'Is Active', type: 'bool' },
  
        { name: 'ts_netw_st', label: 'ts_netw_st'},
        { name: 'ts_netw_end', label: 'ts_netw_end'},
        { name: 'IPv6', label: 'IPV6'},
        { name: 'IPv6_parent', label: 'IPv6_parent'},
        { name: 'score_link', label: 'score_link'},
        { name: 'hops_score', label: 'hops_score'},
        { name: 'rank_score', label: 'rank_score'},
        { name: 'signal_avg_score', label: 'signal_avg_score'},
        { name: 'noacks_score', label: 'noacks_score'},
        { name: 'latency_score', label: 'latency_score'},      
      ] 

      if (Object.keys(this.props.rankparamList).length === 0) {
        return( 
          <div>   
          <RefreshIndicatorLoading />
         
          </div>
        )
        
      }
      else {
        
        return (
          <div>        
          
          <AppBar
          
          iconElementLeft={<div></div>}
          title={ <div id="title_distance">
          {`DESH - Tabela de Otimização | número de registros: (${this.props.rankparamList.length})`}
          </div>} 
          
          iconStyleRight={{width: '50%', textAlign: 'center', marginLeft: 0}}
          iconElementRight={
            <div style={{display: 'flex'}}>
            <div style={{width: 'calc(100% - 84px)'}}>
            <div style={{
              display: 'inline-block',
              backgroundColor: '#fff',
              borderRadius: 5,
              width: 400,
              maxWidth: '80%'
            }}
            >
            <div style={{
              display: 'flex',
              borderRadius: 4,
              paddingLeft: 10,
              paddingRight: 10
            }}
            >
            <FontIcon style={{marginLeft: 10, marginTop: 12, marginRight: 5}} className="material-icons">search</FontIcon>
           

            <Provider store={createStore(reducers)}>
             
              <TextFieldSearch/>
            </Provider>
            
            </div>
            </div>
            </div>
            <div style={{position: 'absolute', right: 10, width:200}}>
                <IconButton onClick={()=>this.props.setFilterIsOpen('demo', true)}>
                  <FontIcon  className="material-icons">arrow_downward</FontIcon>
                </IconButton>
                <IconButton onClick={()=>this.props.setFilterIsOpen('demo', true)}>
                  <FontIcon  className="material-icons">filter_list</FontIcon>
                </IconButton>
                <IconMenuRight />
              </div>
            
            </div>
            
            
            
          }
          />
          
          <DataTableUI rankparamList={this.props.rankparamList} filters={this.props.filters} /> 

         
         <FilterDrawer
            name={'demo'}
            fields={filterFields}
            locale={'de-DE'}
            DateTimeFormat={global.Intl.DateTimeFormat}
            okLabel="OK"
            cancelLabel="Abbrechen"
          />
         
          {/* <FilterTab filterTable={this.filterTable}/> */}
          
          {/* <FilterDrawer
            name={'demo'}
            fields={filterFields}
            
            localizing the DatePicker
            locale={'de-DE'}
            DateTimeFormat={global.Intl.DateTimeFormat}
            okLabel="OK"
            cancelLabel="Abbrechen"
          /> */}
          </div>
        )
      }
    }
  }
  
 
  
  App.propTypes = {
    setFilterIsOpen: PropTypes.func.isRequired,
  }
  

  
  const mapStateToProps = state => ({
    filters: state.filters.filters,
    muiTheme: state.filters.muiTheme,
    rankparamList: state.rankparam.rankparamList,
    list: filterSelectors.getFilteredList('demo', state.filters.filters, state.rankparam.getrankparamList, state.filters.filters ), 
    hasFilters: filterSelectors.selectFilterProps('demo', state.filters.filters)
    
    
  })
  
  
  
  const mapDispatchToProps = dispatch => bindActionCreators(
    {getrankparamList, setFilterIsOpen}, dispatch)
    export default connect (mapStateToProps, mapDispatchToProps)(App)
    
    