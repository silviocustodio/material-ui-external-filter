/* ============================ */
/* REACT DEPENDENCIES
/* ============================ */
import React from 'react';
import ReactDOM from 'react-dom';


export default class FilterTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: '' };
        this.callParentSearch = this.callParentSearch.bind(this);
    }

    // Keep input state actualized
    updateInputValue(evt) { 
       this.callParentSearch (
           'bigger'
       ) }
   
    
    callParentSearch (param) {  
         this.props.filterTable(param) }

    render (){
        return(
            <div className="input-group mb-3">
                <input type='checkbox'  onChange={evt => this.updateInputValue(evt)} id="searchBox"  />
               
            </div>
        );
    }   

}

