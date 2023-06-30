import TabBar from "./TabBar";

export default function TopBar(){
    return(<div className="topbar_container">
        <div className="item1">
            <div className="fb_logo">Logo here</div>
            <div className="search_bar">
                <span className="search_icon"></span>
                <input placeholder="Search Facebook"></input>
            </div>
        </div>
        <TabBar tabs={[{name: "Home"},{name: "Watch"},{name: "Marketplace"},{name: "Groups"},{name: "Gaming"}]}></TabBar>
        <TabBar tabs={[{name: "Menu"},{name: "Messenger"},{name: "Notifications"},{name: "Account"}]}></TabBar>
    </div>)
}
