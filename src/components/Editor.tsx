import { lazy, Suspense } from 'react';
import { Spin } from 'antd';


const CodeEditor = lazy(() => import('./CodeEditor.tsx'));

const Editor = () => {
    return (
        <Suspense fallback={<Spin />}>
            <CodeEditor />
        </Suspense>
    );
};

export default Editor;