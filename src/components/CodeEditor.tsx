import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
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
                height="calc(100vh - 75px)"
                highlightActiveLine={false}
                fontSize={16}
                showPrintMargin={false}
                theme="github"
                onChange={onChange}
                name="code-editor"
                editorProps={{ $blockScrolling: true }}
            />
        </div>
        
    );
};

export default CodeEditor;