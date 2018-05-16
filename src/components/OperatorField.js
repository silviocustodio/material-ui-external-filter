import React, { Component } from 'react'
import SelectField from 'material-ui-superselectfield'
import * as filterSelectors from '../store/selectors'

export class OperatorField extends Component {

  getFieldType = (currentField) => {
    const { fields } = this.props;

    let fieldType = '';

    fields.map((field) => {
      if (field.name === currentField.value) {
        fieldType = field.type;
      }
      return field;
    });

    return fieldType;
  }

  render() {

    const { queryIndex, currentField, query, fields, operators, handleQueryChange, formatMessage } = this.props;
    const { operator } = filterSelectors.selectQueryProps(query);


    if (queryIndex == null ||
      currentField == null ||
      query == null ||
      handleQueryChange == null ||
      fields == null) {
      return <div></div>;
    }

    const fieldType = this.getFieldType(currentField);
    let divFields = [];

    operators.map((operator) => {
      if (operator.type === fieldType || (operator.type === 'string' && fieldType === undefined)) {
        operator.operators.map((op) => {
          return (
            divFields.push(
              <div
                value={op.value}
                key={op.value}
                label={op.label}>
                {op.label}
              </div>
            )
          );
        });
      }
      return divFields;
    });

    return (
      <div style={{ flexGrow: 1 }}>
        <SelectField
          name='operator'
          value={operator}
          showAutocompleteThreshold={4}
          hintTextAutocomplete={formatMessage ? formatMessage({ id: 'hint_autocomplete' }) : 'Select operator'}
          noMatchFound={formatMessage ? formatMessage({ id: 'not_match_found' }) : 'No match found'}
          onChange={(val) => { handleQueryChange(queryIndex, 'operator', val) }}
          hintText={formatMessage ? formatMessage({ id: 'select_operator' }) : 'Select operator'}
          style={{ marginLeft: 15, marginRight: 10 }}>
          {
            divFields.map((divField) => divField)
          }
        </SelectField>
      </div>
    );
  }
}
