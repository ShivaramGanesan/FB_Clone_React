export default function VerticalSepView(props){
    let comp = []
    for(let i=0;i<props.list.length;i++){
        const currentList = props.list[i];
        // console.log("current list")
        // console.log(currentList);
        
        const currentTitle = props.title[i];
        console.log(currentList)
        comp.push(<Sep key={Date.now() * Math.random() * 100}/>)
        comp.push(<Title key = {Date.now()* Math.random() * 100} title={currentTitle}></Title>)
        for(let j=0;j<currentList.length;j++){
            comp.push(<ListViewComponent key={currentList[j].name} name={currentList[j].name}/>)
        }
    }
    return comp;
}

function ListViewComponent(props){
    return (
        <div>
            <div className="lv_icon"></div>
            <span>{props.name}</span>
        </div>
    )
}

function Sep(){
    return (<span className='sep'></span>)
}

function Title(props){
    return (<span className='comp_title'>{props.title}</span>);
}