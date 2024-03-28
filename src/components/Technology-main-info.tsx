export const TechnologyMainInfo = ({selectedTab}) => {
    return (
        <div className="technology-main-info__wrapper">
            <h3>THE TERMINOLOGY…</h3>
            <h1>{selectedTab.name}</h1>
            <p>{selectedTab.info}</p>
        </div>
    )
}