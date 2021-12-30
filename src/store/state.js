import { formatJson, jsonToYaml, yamlToJson } from '../utils/formatter';
import { CHANGE_VALUE, CONVERT_JSON_TO_YAML, CONVERT_YAML_TO_JSON, FORMAT_JSON } from './actions';

export const initialState = {
    value: '',
};

export function Reducer(state, action) {
  switch (action.type) {
    case CHANGE_VALUE: 
      return {
        ...state,
        value: action.value,
      };
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
    default:
      throw new Error('Unknown action');
  }
}