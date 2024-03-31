
export const CrewMainInfo = ({ selectedTab }: any) => {
    return (
        <div className="crew-main-info__wrapper">
            <h1>{selectedTab.name}</h1>
            <p>{selectedTab.info}</p>
        </div>
    )
}