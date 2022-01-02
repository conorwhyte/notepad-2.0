import { Button, Drawer, List, Popconfirm } from 'antd';
import { useEffect } from 'react';
import { useState } from 'react';
import { deleteNote } from '../../api/note.service';
import { listNotes } from '../../api/note.service.ts';
import { openNote } from '../../store/actions';
import { useAppContext } from '../../store/appContext';

const ListNotesDrawer = ({ isDrawerVisible, onClose }) => {
    const [, dispatch ] = useAppContext();
    const [ notes, setNotes ] = useState([]);
    
    const getNotes = async () => {
        const savedNotes = await listNotes();
        setNotes(savedNotes);
    };

    useEffect(() => {
        getNotes();
    }, []);

    const onOpenNote = (item) => {
        const { name, body, id } = item;
        dispatch(openNote({ name, body, id }));

        onClose();
    };

    const onConfirm = async (item) => {
        const { id } = item;

        await deleteNote(id);
        getNotes();
    };

    return (
        <Drawer
            title="Saved notes"
            placement="right"
            onClose={onClose}
            visible={isDrawerVisible}
            key="right"
            width={500}
        >
            <List
                itemLayout="horizontal"
                dataSource={notes}
                renderItem={item => (
                <List.Item 
                    actions={[
                        <Button onClick={() => onOpenNote(item)} size="small">Open</Button>,

                        <Popconfirm
                            placement="topRight"
                            title={`Are you sure you want to delete ${item.name}?`}
                            onConfirm={() => onConfirm(item)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button size="small">Delete</Button>
                        </Popconfirm>
                    ]}
                >
                    <List.Item.Meta
                        title={item.name}
                        description={item.date}
                    />

                </List.Item>
                )}
            />
        </Drawer>
    );
    

};

export default ListNotesDrawer;