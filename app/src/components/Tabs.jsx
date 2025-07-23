export function Tabs(){
    const tabs = ['All', 'Open', 'Completed']
    return (
        <nav>
            {tabs.map((tab, tabIndex) => {
                return (
                    <button key={tabIndex}
                    className="tab-button">
                        <h4>{tab} <span>(0)</span></h4>
                    </button>
                )
            })}
        </nav>
    )
}