export const CHANGE_VALUE = 'CHANGE_VALUE';
export const FORMAT_JSON = 'FORMAT_JSON';
export const CONVERT_JSON_TO_YAML = 'CONVERT_JSON_TO_YAML';
export const CONVERT_YAML_TO_JSON = 'CONVERT_YAML_TO_JSON';
export const OPEN_NOTE = 'OPEN_NOTE';

export const changeValue = (payload) => ({
    type: CHANGE_VALUE,
    value: payload,
});

export const formatJson = () => ({
    type: FORMAT_JSON,
});

export const convertJsonToYaml = () => ({
    type: CONVERT_JSON_TO_YAML,
});

export const convertYamlToJson = () => ({
    type: CONVERT_YAML_TO_JSON,
});

export const openNote = (payload) => ({
    type: OPEN_NOTE,
    ...payload,
});