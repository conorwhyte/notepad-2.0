import { lazy, Suspense, useEffect } from 'react';
import { Spin } from 'antd';
import { useAppContext } from '../../store/appContext';
import { getEditorValue, shouldShowWarning } from '../../store/selectors';

const CodeEditor = lazy(() => import('./CodeEditor'));
const TextEditor = lazy(() => import('./TextEditor'));

const Editor = () => {
    const [ state ] = useAppContext();
    const isWord = getEditorValue(state) === 'word';

    const handleUnload = (e) => {
        if (shouldShowWarning(state)) {
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

    return (
        <Suspense fallback={<Spin />}>
            { isWord ? <TextEditor /> : <CodeEditor /> }
        </Suspense>
    );
};

export default Editor;