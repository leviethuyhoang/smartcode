import { Fragment, useRef } from "react";
import AceEditor from "react-ace-builds";
import "react-ace-builds/webpack-resolver-min";


import "./style.scss";

// const themeEditor = [
//     {
//         value : "value",
//         label : "label"
//     },
//     {
//         value : "value1",
//         label : "label1"
//     },
//     {
//         value : "value2",
//         label : "label2"
//     },
//     {
//         value : "value3",
//         label : "label3"
//     },
// ]
// const fontSizeEditor = [
//     // 14,16,18,20,24, 28,32,40
//     {
//         value : 14,
//         label : "14"
//     },
//     {
//         value : 16,
//         label : "16"
//     },
//     {
//         value : 18,
//         label : "18"
//     },
//     {
//         value : 20,
//         label : "20"
//     },
//     {
//         value : 24,
//         label : "24"
//     },
//     {
//         value : 28,
//         label : "28"
//     },
//     {
//         value : 32,
//         label : "32"
//     },
//     {
//         value : 40,
//         label : "40"
//     }
// ];

// elixir - xcode

const CodeEditor = (props) => {

    const {field,form} = props;

    const refs = useRef();

    const onChange = (e) => {
        form.setFieldValue(field.name,e)
    }

    return (
        <Fragment>
             
            <AceEditor
                ref = {refs}
                mode="javascript"
                theme="monokai"
                onChange={onChange}
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value = {field.value}
                
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 2,
                }

            }/>
        </Fragment>
    )
}
export default CodeEditor;