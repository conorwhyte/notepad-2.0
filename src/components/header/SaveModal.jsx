import { Input, Modal } from 'antd';
import { memo, useState } from 'react';
import { addNote } from '../../api/note.service.ts';
import { openNote } from '../../store/actions';
import { useAppContext } from '../../store/appContext';
import { getValue } from '../../store/selectors.js';

const SaveModal = ({ isModalVisible, onClose }) => {
    const [ name, setName ] = useState('');
    const [ state, dispatch ] = useAppContext();
    const value = getValue(state); 

    const onChange = (e) => {
        setName(e.target.value);
    };

    const onOK = async () => {
        // Save
        const { data } = await addNote(name, value);

        const { name: savedName, body, id } = data.createNote;
        dispatch(openNote({ name: savedName, body, id }));

        // Set success and close
        onClose();
    };

    return (
        <Modal title="Save note" visible={isModalVisible} onOk={onOK} onCancel={onClose}>
            <Input value={name} placeholder="Name" onChange={onChange} />
        </Modal>
    );
};

export default memo(SaveModal);
