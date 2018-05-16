    import React from 'react';
    import {connect} from 'react-redux';
    import {bindActionCreators} from 'redux';
    
    import { List, ListItem } from 'material-ui/List'
    
    import { FilterDrawer, filterSelectors, filterActions } from '../../src'
    
    import ReactList from 'react-list'
    import Divider from 'material-ui/Divider';
    
    import {getrankparamList} from '../../src/store/actions'
    import { setFilterIsOpen } from '../../src/store/actions'
    
    import {
        Table,
        TableBody,
        TableHeader,
        TableHeaderColumn,
        TablePagination,
        TableRow,
        TableRowColumn,
    } from 'material-ui/Table';
    
    
    
    export default class DataTableUI extends React.Component {
        constructor(props) {
            super(props);
             this.state = {filters : ""}
          }z

        
        componentWillMount(){
            this.filterData()
            this.setState({tableOrder: this.props.rankparamList, filters: {}})
        }
        
        
        componentWillReceiveProps(nextProps){
            this.setState({filters: nextProps.filters})
            
            this.filterData()
            
        }
        
        filterData(){
            
            // console.log('capeta')
            
            if (this.state.filters != null )
            {   
                // console.log(this.props.filters)
                // Object.keys(this.state.filters).map((it) =>{
                    // switch (this.state.filters[it]) {
                    //     case 'bigger':
                    //     console.log("dollynho")
                    //     function compare(a, b) {
                    //         // Use toUpperCase() to ignore character casing
                    //         const genreA = a.score_link.toUpperCase();
                    //         const genreB = b.score_link.toUpperCase();
                            
                    //         let comparison = 0;
                    //         if (genreA > genreB) {
                    //             comparison = 1;
                    //         } else if (genreA < genreB) {
                    //             comparison = -1;
                    //         }
                    //         return comparison;
                    //     }
                        
                    //     this.state.tableOrder.sort(compare);
                        
                        
                    // }
                    
                // })
                this.setState({tableOrder: this.state.tableOrder})
                // console.log(this.state.tableOrder)
            }
            
        }
        
        
        render() {
            const customColumnStyle = { width: 80, textAlign: 'center', fontSize: 13};
            const customColumnStyleIPv6 = { width: 110, textAlign: 'center', fontSize: 13};
            const customColumnStyleShort = { width: 20, textAlign: 'center', fontSize: 13};
            
            if (Object.keys(this.state.tableOrder).length === 0) {
                return( 
                    <div>   
                    <h1>Testando</h1>
                    </div>
                )
            }
            else {
                
                return (
                    <div id="page-wrapper">
                    <div id="page-header">
                    <div className="table-wrapper">
                    <Table>
                    <TableHeader>
                    <TableRow>
                    <TableHeaderColumn style={customColumnStyle}>TS_NETW_ST</TableHeaderColumn>
                    <TableHeaderColumn style={customColumnStyle}>TS_NETW_END</TableHeaderColumn>
                    <TableHeaderColumn style={customColumnStyleIPv6}>IPV6</TableHeaderColumn>   
                    <TableHeaderColumn style={customColumnStyleIPv6}>IPV6_PARENT</TableHeaderColumn>
                    <TableHeaderColumn style={customColumnStyleShort}>SCORE_LINK</TableHeaderColumn>
                    <TableHeaderColumn style={customColumnStyleShort}>HOPS</TableHeaderColumn>
                    <TableHeaderColumn style={customColumnStyleShort}>RANK</TableHeaderColumn>
                    <TableHeaderColumn style={customColumnStyleShort}>SIG_AVG</TableHeaderColumn>
                    <TableHeaderColumn style={customColumnStyleShort}>SIG_VAR</TableHeaderColumn>
                    <TableHeaderColumn style={customColumnStyleShort}>NOAK</TableHeaderColumn>
                    <TableHeaderColumn style={customColumnStyleShort}>LATENCY</TableHeaderColumn>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {Object.keys(this.state.tableOrder).map((it) =>
                        {
                            return (
                                <TableRow>
                                <TableRowColumn style={customColumnStyle}>{this.state.tableOrder[it].ts_netw_st}</TableRowColumn>
                                <TableRowColumn style={customColumnStyle}>{this.state.tableOrder[it].ts_netw_end}</TableRowColumn>
                                <TableRowColumn style={customColumnStyleIPv6}>{this.state.tableOrder[it].IPv6}</TableRowColumn>
                                <TableRowColumn style={customColumnStyleIPv6}>{this.state.tableOrder[it].IPv6_parent}</TableRowColumn>
                                <TableRowColumn style={customColumnStyleShort}>{this.state.tableOrder[it].score_link}</TableRowColumn>
                                <TableRowColumn style={customColumnStyleShort}>{this.state.tableOrder[it].hops_score}</TableRowColumn>
                                <TableRowColumn style={customColumnStyleShort}>{this.state.tableOrder[it].rank_score}</TableRowColumn>
                                <TableRowColumn style={customColumnStyleShort}>{this.state.tableOrder[it].signal_avg_score}</TableRowColumn>
                                <TableRowColumn style={customColumnStyleShort}>{this.state.tableOrder[it].signal_var_score}</TableRowColumn>
                                <TableRowColumn style={customColumnStyleShort}>{this.state.tableOrder[it].noacks_score}</TableRowColumn>
                                <TableRowColumn style={customColumnStyleShort}>{this.state.tableOrder[it].latency_score}</TableRowColumn>
                                </TableRow>
                            )
                        })
                    }
                    </TableBody>
                    </Table>  
                    </div>
                    </div>
                    </div>
                    
                    
                )
            }
        }
    }
    