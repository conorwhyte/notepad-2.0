import { Drawer } from 'antd';
import { listNotes } from '../../api/note.service.ts';

const ListNotesDrawer = ({ isDrawerVisible, onClose }) => {
    const notes = listNotes();

    console.log('Notes:: ', notes);

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