import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-textmate";
import './CodeEditor.css';

const CodeEditor = () => {
    const onChange = (newValue: string) => {
        console.log("change", newValue);
    };

    return (
        <div className="editor">
            <AceEditor
                mode="javascript"
                width="100%"
                height="calc(100vh - 82px)"
                highlightActiveLine={false}
                fontSize={16}
                showPrintMargin={false}
                theme="textmate"
                onChange={onChange}
                name="code-editor"
                editorProps={{ $blockScrolling: true }}
            />
        </div>
        
    );
};

export default CodeEditor;