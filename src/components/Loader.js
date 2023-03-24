import './Loader.scss'

const Loader = ({ animation }) => {
    return (
        <div className={`loader ${animation ? "animation" : ""}`}>
            <span>Loading...</span>
            <img src={require('../img/WeatherIcons/loading.png')} />
        </div>
    )
}
export default Loader