import VerticalSepView from "./VerticalSepView"
export default function LeftPane(){
    let list = []
    list.push([
        {name: "Shiva Msd"},
        {name: "Friends"},
        {name: "Feeds"},
        {name: "Groups"},
        {name: "Marketplace"},
        {name: "Watch"}
    ])
    list.push([{
        name: "HelloWorld",
    },{
        name: "Power Dabba"
    }])
    let title = ["", "Your Shortcuts"]
    console.log(list)
    return (<div className="left_pane">
        <VerticalSepView list={list} title={title}/>        
    </div>)
}
