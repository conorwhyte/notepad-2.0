import { Button, Drawer, List } from 'antd';
import { useEffect } from 'react';
import { useState } from 'react';
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
    };

    return (
        <Drawer
            title="Saved notes"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={isDrawerVisible}
            key="right"
            size="large"
        >
            <List
                itemLayout="horizontal"
                dataSource={notes}
                renderItem={item => (
                <List.Item 
                    actions={[
                        <Button onClick={() => onOpenNote(item)} size="small">Open</Button>,
                        <Button size="small">Delete</Button>
                    ]}
                >
                    <List.Item.Meta
                        title={item.name}
                        description={item.date}
                    />

                    <div> {item.body.substring(0, 100)} </div>
                </List.Item>
                )}
            />
        </Drawer>
    );
    

};

export default ListNotesDrawer;