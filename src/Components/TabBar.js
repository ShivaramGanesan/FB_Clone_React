export default function TabBar(props){
    let tabData = []
    for(let i=0;i<props.tabs.length;i++){
        tabData.push(<Tab key={props.tabs[i].name} name={props.tabs[i].name}></Tab>)
    }
    return (
        <div className="tabs_style">
            {tabData}
        </div>
    )
}

function Tab(props){
    return (
        <div className="ind_tab">
            <span className="tab_icon">{props.name}</span>
        </div>
    )
}