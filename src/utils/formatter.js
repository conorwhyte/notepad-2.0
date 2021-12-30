import YAML from 'json-to-pretty-yaml';
import yaml from 'yaml';
import jsonFormatter from 'format-json';

export const formatJson = (value) => {
    if (!value) {
        return value;
    }

    const json = JSON.parse(value);
    return jsonFormatter.plain(json);
};

export const jsonToYaml = (value) => {
    if (!value) {
        return value;
    }

    const json = JSON.parse(value);
    return YAML.stringify(json);
}

export const yamlToJson = (value) => {
    if (!value) {
        return value;
    }
    
    const yamlObj = yaml.parse(value);
    return jsonFormatter.plain(yamlObj);
}