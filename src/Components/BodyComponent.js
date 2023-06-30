import LeftPane from './LeftPane';
import MiddlePane from './MiddlePane';
import RightPane from './RightPane';
export default function BodyComponent(){
    return (
        <div className="bodyComponent">
            <LeftPane/>
            {/* <MiddlePane></MiddlePane>
            <RightPane></RightPane> */}
        </div>
    )
}