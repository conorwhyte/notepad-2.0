import { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { useAppContext } from '../../store/appContext';
import { getEditorValue } from '../../store/selectors';

const CodeEditor = lazy(() => import('./CodeEditor'));
const TextEditor = lazy(() => import('./TextEditor'));

const Editor = () => {
    const [ state ] = useAppContext();
    const isWord = getEditorValue(state) === 'word';

    return (
        <Suspense fallback={<Spin />}>
            { isWord ? <TextEditor /> : <CodeEditor /> }
        </Suspense>
    );
};

export default Editor;