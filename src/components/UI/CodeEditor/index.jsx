import { Fragment, useState } from "react";
import AceEditor from "react-ace-builds";
import "react-ace-builds/webpack-resolver-min";

import "./style.scss";

const CodeEditor = (props) => {

    const {field,form,config,type,sourceCode} = props;

    const [theme,setTheme] = useState("xcode");
    const [mode,setMode] = useState("elixir");
    const [fontSize,setFontSize] = useState(16);

    const onChange = (e) => {
        form.setFieldValue(field.name,e)
    }

    const handleChangeTheme = (e) => {
        setTheme(e.target.value)
    }
    const handleChangeMode = (e) => {
        setMode(e.target.value)
    }
    const handleChangeFontSize = (e) => {
        setFontSize(e.target.value)
    }

    const EditConfig = () => {
        if(type && type === 'read'){
            return '';
        }
        return (
            <div className="editor-bar-box">
                 <div className = "editor-bar flex flex-row items-center ml-1">
                     <select className = "item" name="" id="theme" onChange = {handleChangeTheme}>
                         <option value="" hidden>Giao Diện</option>
                         <option value="xcode">Mặc định</option>
                         <option value="github">Sáng 2</option>
                         <option value="tomorrow">Sáng 3</option>
                         <option value="textmate">Sáng 4</option>
                         <option value="monokai">Tối</option>
                         <option value="twilight">Tối 2</option>
                         <option value="terminal">Tối 3</option>
                         <option value="kuroir">Xanh Lơ</option>
                         <option value="solarized_dark">Xanh Đậm </option>
                         <option value="solarized_light">Hồng</option>
                     </select>
                     <select className = "item" name="" id="mode" onChange = {handleChangeMode}>
                         <option value="" hidden>Chế Độ</option>
                         <option value="elixir">Mặc định</option>
                         <option value="javascript">javascript</option>
                         <option value="java">java</option>
                         <option value="python">python</option>
                         <option value="xml">xml</option>
                         <option value="ruby">python</option>
                         <option value="sass">sass</option>
                         <option value="markdown">markdown</option>
                         <option value="mysql">mysql</option>
                         <option value="json">json</option>
                         <option value="html">html</option>
                         <option value="handlebars">handlebars</option>
                         <option value="golang">golang</option>
                         <option value="csharp">C#</option>
                         <option value="typescript">typescript</option>
                         <option value="css">css</option>
                     </select>
                     <select className = "item" name="" id="fontSize" onChange = {handleChangeFontSize}>
                         <option value="" hidden>Cỡ chữ</option>
                         <option value={12}>12</option>
                         <option value={14}>14</option>
                         <option value={16}>16</option>
                         <option value={18}>18</option>
                         <option value={20}>20</option>
                         <option value={24}>24</option>
                         <option value={28}>28</option>
                         <option value={32}>32</option>
                         <option value={40}>40</option>
                     </select>
                 </div>
             </div>
        )
    }

    return (
        <Fragment>
            <EditConfig/>
            <AceEditor
                mode= {mode}
                theme= {theme}
                splits = {5}
                onChange={onChange}
                fontSize= {Number(fontSize)}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value = {field ? field.value : sourceCode}
                height = "500px"
                width = "auto"
                readOnly = {(type === "read")}
                {...config}
                
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