import { Input, Modal } from 'antd';
import { useState } from 'react';

const SaveModal = ({ isModalVisible, onClose }) => {
    const [ name, setName ] = useState('');

    const onChange = (e) => {
        setName(e.target.value);
    };

    const onOK = () => {
        // Save

        onClose();
    };

    return (
        <Modal title="Save note" visible={isModalVisible} onOk={onOK} onCancel={onClose}>
            <Input value={name} placeholder="Name" onChange={onChange} />
        </Modal>
    );
};

export default SaveModal;
