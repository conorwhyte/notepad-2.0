import { Menu } from 'antd';

const { SubMenu, Item } = Menu;

export const FormatDropdown = () => {

    const handleMenuClick = () => {

    };

    return (
        <Menu onClick={handleMenuClick}>
            <SubMenu title="JSON">
                <Item>Format</Item>
                <Item>Convert to YAML</Item>
            </SubMenu>

            <SubMenu title="YAML">
                <Item>Convert to JSON</Item>
            </SubMenu>
        </Menu>
    );
};

export default FormatDropdown;