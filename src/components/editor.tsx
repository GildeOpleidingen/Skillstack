'use client';

import Editor from '@monaco-editor/react';

// Using monaco editor
// https://www.npmjs.com/package/@monaco-editor/react


// @TODO move somewhere? (DB or ?)
/*
languages that have rich IntelliSense and validation

    TypeScript
    JavaScript
    CSS
    LESS
    SCSS
    JSON
    HTML

languages with only basic syntax colorization

    XML
    PHP
    C#
    C++
    Razor
    Markdown
    Diff
    Java
    VB
    CoffeeScript
    Handlebars
    Batch
    Pug
    F#
    Lua
    Powershell
    Python
    Ruby
    SASS
    R
    Objective-C
*/

const codingLanguages = [
        { id: 'C++', name: 'c++'  },
        { id: 'javascript', name: 'Javascript' },
        { id: 'Java', name: 'Java' },
];

// language selector
function getMonacoLanguage(lang)
{
        let language = {id:"PLAINTEXT", name: "plaintext"};
        for(let i = 0; i < codingLanguages.length; i++) {
                let cl = codingLanguages[i];
                if (cl.id == lang) {
                        language = cl;
                        continue;
                }
        }
        return language;
}


// @TODO save code? or do something
// Maybe in browser session
function saveCode(code) 
{
        console.debug('code Editor code: ', code);
}


// Main function
export default function CodeEditor({exerciseId, code = null, }) {

        // We pass on the exerciseId (props)?
        console.debug('components/Editor - CodeEditor - Exercise ID#: ', exerciseId);

        let lang = getMonacoLanguage("C++").id;
        console.debug('components/Editor - CodeEditor - Language selected: ', lang);

	return (
		<div>
                        <br />
			<h1 className="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">CodeEditor</h1>
			<Editor
		          height="400px"
                          width="400px"
		          language={getMonacoLanguage("javascript").id}
                          // Code should be here
		          value={code}
		          onChange={saveCode}
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
