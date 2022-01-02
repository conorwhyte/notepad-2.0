import { formatJson, jsonToYaml, yamlToJson } from '../utils/formatter';
import { CHANGE_VALUE, CHANGE_EDITOR, CONVERT_JSON_TO_YAML, CONVERT_YAML_TO_JSON, DISABLE_WARNING, FORMAT_JSON, OPEN_NOTE } from './actions';

export const initialState = {
    name: 'New note',
    value: '',
    id: '',
    
    // Layout
    editor: 'word',
    showWarning: false,
};

export function Reducer(state, action) {
  switch (action.type) {
    case CHANGE_VALUE: 
      return {
        ...state,
        value: action.value,
        showWarning: true,
      };
    case CHANGE_EDITOR: 
      return {
        ...state,
        editor: action.editor,
      };
    case DISABLE_WARNING: 
      return {
        ...state,
        showWarning: false,
      };
    // Formatters 
    case FORMAT_JSON:
      const formattedValue = formatJson(state.value);
      return {
        ...state,
        value: formattedValue,
      };
    case CONVERT_JSON_TO_YAML:
      const yaml = jsonToYaml(state.value);
      return {
        ...state,
        value: yaml,
      };
    case CONVERT_YAML_TO_JSON:
      const json = yamlToJson(state.value);
      return {
        ...state,
        value: json,
      };

    // Open Note
    case OPEN_NOTE:
      const { body, name, id } = action;
      return {
        ...state,
        value: body,
        name,
        id,
      };
    default:
      throw new Error('Unknown action');
  }
}