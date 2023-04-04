import backgroundCodes from "../Data/BackgroundCodes"

const backgroundType = (code, daytime) => {
    const type = backgroundCodes[code]

    if (daytime === true) {
        const weatherType = {
            code: code,
            type: type
        }
        return weatherType
    } else {
        if (code === 0 || code === 1) {
            const weatherType = {
                code: code,
                type: {
                    name: type.name,
                    img: "clear-night.jpg"
                }
            }
            return weatherType
        } else if (code === 2) {
            const weatherType = {
                code: code,
                type: {
                    name: type.name,
                    img: "partly-cloudy-night.jpg"
                }
            }
            return weatherType
        } else {
            const weatherType = {
                code: code,
                type: type
            }
            return weatherType
        }
    }
    
}
export default backgroundType;