import VerticalSepView from "./VerticalSepView"
export default function RightPane(){
    let list = []
    list.push(
        [{name: "Power Dabba"}]
    )
    list.push(
        [{name: "Your friend's birthday is coming up"}],
    )
    list.push(
        [{name: "Person A"},
        {name: "Person B"},
        {name: "Person C"},
        {name: "Person D"},
        {name: "Person E"},
        {name: "Person F"}]
    )
    list.push(
        [{name: "Group A"},
        {name: "Group B"},
        {name: "Group C"}]
    )
    let title = ["Your Pages and Profiles", "Birthdays", "Contacts", "Group conversations"]

    return (<div className="right_pane">
        <VerticalSepView list={list} title={title}/>
    </div>)
}