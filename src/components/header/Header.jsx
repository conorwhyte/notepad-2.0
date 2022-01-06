import { useState } from 'react';
import { Space, PageHeader, Button, Tag, Dropdown } from 'antd';
import { BarsOutlined, FormOutlined, SaveOutlined, ToolOutlined } from '@ant-design/icons';
import FormatDropdown from './FormatDropdown';
import SaveModal from './SaveModal';
import ListNotesDrawer from './ListNotesDrawer';
import EditorChooser from './EditorChooser';
import { useAppContext } from '../../store/appContext';
import { getId, getName, getValue } from '../../store/selectors';
import './Header.css';
import { updateNote } from '../../api/note.service';
import { disableWarning } from '../../store/actions';

const Header = () => {
    const [ state, dispatch ] = useAppContext();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);

    const onCloseModal = () => {
        setIsModalVisible(false);
    };

    const onOpenModal = async () => {
        const id = getId(state);

        if (!id) {
            setIsModalVisible(true);
        } else {
            const body = getValue(state);
            await updateNote(id, body);
        }

        dispatch(disableWarning());
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
                tags={<Tag color="blue">{getName(state)}</Tag>}
                extra={[
                    <Space wrap key='options'>
                        <EditorChooser />
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