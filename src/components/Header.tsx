import { PageHeader, Button, Tag } from 'antd';
import { BarsOutlined, FormOutlined, SaveOutlined, ToolOutlined } from '@ant-design/icons';

import './Header.css';

const Header = () => {
    return (
        <div className="site-page-header">
            <PageHeader
                title="Notepad"
                tags={<Tag color="blue">New note</Tag>}
                extra={[
                    <Button icon={<SaveOutlined />} size="large" />,
                    <Button icon={<ToolOutlined />} size="large" />,
                    <Button icon={<BarsOutlined />} size="large" />
                ]}
                avatar={{icon: <FormOutlined />, style: { color: '#000', backgroundColor: '#fff' }}}
            />
        </div>
    );
};

export default Header;