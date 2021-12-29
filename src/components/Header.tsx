import { PageHeader, Button, Tag } from 'antd';
import './Header.css';

const Header = () => {
    return (
        <div className="site-page-header">
            <PageHeader
                title="Notepad"
                tags={<Tag color="blue">New note</Tag>}
                extra={[
                    <Button key="3" type="primary">Save</Button>,
                ]}
            />
        </div>
    );
};

export default Header;