'use client';

import Editor from '@monaco-editor/react';

// Using monaco editor
// https://www.npmjs.com/package/@monaco-editor/react


// @TODO move somewhere? (DB or ?)
const codingLanguages = [
        { id: 'C', name: "c"},
        { id: 'CPP', name: 'Cpp'  },
        { id: 'JAVASCRIPT', name: 'Javascript' },
        { id: 'JAVA', name: 'Java' },
];


// language selector
function getMonacoLanguage(lang) {
        let language = codingLanguages.map(l => {
                if(lang == l.id) {
                        return l;
                }
        })
        return {id:"PLAINTEXT", name: "plaintext"};
}

// Main function
export default function CodeEditor() {

	return (
		<div>
			<h1>CodeEditor</h1>
			<Editor
		          height="400px"
                          width="400px"
		          language={getMonacoLanguage("C").id}
                          // Code should be here
		          value={"#include <stdio.h>"}
		          // onChange={(value) => setCode(value || '')}
		          theme="vs-dark"
		          options={{
		            minimap: { enabled: false },
		            fontSize: 14,
		            lineNumbers: 'on',
		            scrollBeyondLastLine: false,
		            automaticLayout: true,
		            tabSize: 4,
		            wordWrap: 'on',
		            padding: { top: 16, bottom: 16 },
		          }}
	        />
		</div>
	)
}