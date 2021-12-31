import { useCallback, useEffect } from 'react';
import AceEditor from "react-ace";
import debounce from 'lodash.debounce';
import { useAppContext } from '../../store/appContext.js';
import { getValue } from '../../store/selectors.js';
import { changeValue } from '../../store/actions.js';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-textmate";

const CodeEditor = () => {
    const [ state, dispatch ] = useAppContext();
    const value = getValue(state);

    const onChange = (newValue) => {
        dispatch(changeValue(newValue));
    };

    const handleUnload = (e) => {
        // More logic in here
        if (value !== '') {
            e.preventDefault();
            e.returnValue = true;
        }
    };

    useEffect(() => {
        window.addEventListener('beforeunload', handleUnload);
        return () => {
            window.removeEventListener('beforeunload', handleUnload);
        };
    });

    const debouncedChangeHandler = useCallback(debounce(onChange, 100), []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="editor">
            <AceEditor
                value={value}
                mode="javascript"
                width="100%"
                height="calc(100vh - 82px)"
                highlightActiveLine={false}
                fontSize={16}
                showPrintMargin={false}
                theme="textmate"
                onChange={debouncedChangeHandler}
                name="code-editor"
                setOptions={{ useWorker: false }}
                editorProps={{ $blockScrolling: true }}
            />
        </div>
    );
};

export default CodeEditor;