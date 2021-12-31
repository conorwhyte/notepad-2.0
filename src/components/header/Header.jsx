import { useState } from 'react';
import { Space, PageHeader, Button, Tag, Dropdown } from 'antd';
import { BarsOutlined, FormOutlined, SaveOutlined, ToolOutlined } from '@ant-design/icons';
import FormatDropdown from './FormatDropdown';
import './Header.css';
import SaveModal from './SaveModal';
import ListNotesDrawer from './ListNotesDrawer';

const Header = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);

    const onCloseModal = () => {
        setIsModalVisible(false);
    };

    const onOpenModal = () => {
        setIsModalVisible(true);
    };

    const onOpenDrawer = () => {
        setIsDrawerVisible(true);
    };

    const onCloseDrawer = () => {
        setIsDrawerVisible(false);
    };

    return (
        <div className="site-page-header">
            <PageHeader
                title="Notepad"
                tags={<Tag color="blue">New note</Tag>}
                extra={[
                    <Space wrap key='options'>
                        <Dropdown.Button key="format" icon={<ToolOutlined />} size="large" overlay={<FormatDropdown />} />
                        <Button onClick={onOpenDrawer} key="list" icon={<BarsOutlined />} size="large" />
                        <Button onClick={onOpenModal} key="save" icon={<SaveOutlined />} size="large" />
                    </Space>
                    
                ]}
                avatar={{icon: <FormOutlined />, style: { color: '#000', backgroundColor: '#fff' }}}
            />

            <ListNotesDrawer isDrawerVisible={isDrawerVisible} onClose={onCloseDrawer} />
            <SaveModal isModalVisible={isModalVisible} onClose={onCloseModal} />
        </div>
    );
};

export default Header;