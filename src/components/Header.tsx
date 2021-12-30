import { Space, PageHeader, Button, Tag, Dropdown } from 'antd';
import { BarsOutlined, FormOutlined, SaveOutlined, ToolOutlined } from '@ant-design/icons';
import FormatDropdown from './FormatDropdown.tsx';
import './Header.css';

const Header = () => {
    return (
        <div className="site-page-header">
            <PageHeader
                title="Notepad"
                tags={<Tag color="blue">New note</Tag>}
                extra={[
                    <Space wrap>
                        <Dropdown.Button icon={<ToolOutlined />} size="large" overlay={FormatDropdown} />
                        <Button icon={<BarsOutlined />} size="large" />
                        <Button icon={<SaveOutlined />} size="large" />
                    </Space>
                    
                ]}
                avatar={{icon: <FormOutlined />, style: { color: '#000', backgroundColor: '#fff' }}}
            />
        </div>
    );
};

export default Header;