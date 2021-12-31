import { Drawer } from 'antd';

const ListNotesDrawer = ({ isDrawerVisible, onClose }) => {

    return (
        <Drawer
            title="Saved notes"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={isDrawerVisible}
            key="right"
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    );
    

};

export default ListNotesDrawer;