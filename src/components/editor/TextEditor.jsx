import { useCallback } from "react";
import debounce from 'lodash.debounce';
import ReactQuill from 'react-quill';
import { changeValue } from "../../store/actions";
import { useAppContext } from "../../store/appContext";
import { getValue } from "../../store/selectors";
import './TextEditor.css';

const TextEditor = () => {
    const [ state, dispatch ] = useAppContext();
    const value = getValue(state);

    const onChange = (newValue) => {
        dispatch(changeValue(newValue));
    };

    const debouncedChangeHandler = useCallback(debounce(onChange, 100), []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div id="quill-container">
            <ReactQuill theme="bubble" value={value} onChange={debouncedChangeHandler}/>
        </div>
    );
}

export default TextEditor;