import { Fragment } from 'react';
import SplitPane from 'react-split-pane';
 
 
const SplitView = (props) => {

    const {split} = props;

     return (
      <Fragment>
            
            <SplitPane
              split={split ? split : "vertical"}
              minSize ={300}
            >
                {props.children}
            </SplitPane>
        </Fragment>
     )
 }
 export default SplitView;
