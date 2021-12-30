import { Menu } from 'antd';
import { convertJsonToYaml, convertYamlToJson, formatJson } from '../store/actions';
import { useAppContext } from '../store/appContext.js';

const { SubMenu, Item } = Menu;

const FormatDropdown = () => {
    const [, dispatch ] = useAppContext();

    const onFormatJsonClick = () => {
        dispatch(formatJson());
    };

    const onConvertJsonToYamlClick = () => {
        dispatch(convertJsonToYaml());
    };

    const onConvertYamlToJsonClick = () => {
        dispatch(convertYamlToJson());
    };

    return (
        <Menu>
            <SubMenu title="JSON" key="json">
                <Item key="format-json" onClick={onFormatJsonClick}>Format</Item>
                <Item key="convert-to-yaml" onClick={onConvertJsonToYamlClick}>Convert to YAML</Item>
            </SubMenu>

            <SubMenu title="YAML" key="yaml">
                <Item key="convert-to-json" onClick={onConvertYamlToJsonClick}>Convert to JSON</Item>
            </SubMenu>
        </Menu>
    );
};

export default FormatDropdown;