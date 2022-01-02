import { Radio } from 'antd';
import { CodeOutlined, FileWordOutlined } from '@ant-design/icons';
import { useAppContext } from '../../store/appContext';
import { getEditorValue } from '../../store/selectors';
import { changeEditor } from '../../store/actions';

const EditorChooser = () => {
    const [ state, dispatch ] = useAppContext();
    const value = getEditorValue(state)

    const onChange = (e) => {
        const { value } = e.target;
        dispatch(changeEditor(value));
    };

    return (
        <Radio.Group onChange={onChange} defaultValue={value} size="large">
            <Radio.Button value="code">
                <CodeOutlined />
            </Radio.Button>
            
            <Radio.Button value="word">
                <FileWordOutlined />
            </Radio.Button>
        </Radio.Group>
    );
};

export default EditorChooser;