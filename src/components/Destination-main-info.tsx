export const DestinationMainInfo = ({selectedTab}) => {
    return (
        <div className="main-info__wrapper">
            <h1>{selectedTab.label}</h1>
            <p>{selectedTab.info}</p>
            <span></span>
            <div className="distant-wrapper">
            <h3>AVG. DISTANCE <br /> {selectedTab.dist}</h3>
            <h3>Est. travel time <br /> {selectedTab.travel}</h3>
            </div>
        </div>
    )
}