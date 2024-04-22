import { useState, useEffect } from "react"
import { Dimensions } from "react-native"


export default useOrientation = () => {
    const [screenInfo, setScreenInfo] = useState(Dimensions.get('screen'));

    useEffect(() => {
        const onChange = (result) => {
            setScreenInfo(result.screen);
        };

        dimensionHandler = Dimensions.addEventListener('change', onChange);

        // dimensionHandler =  Dimensions.removeEventListener('change', onChange)
        console.log(screenInfo)
        return () => dimensionHandler.remove(() => {onChange})
    }, []);

    return {
        ...screenInfo,
        isPortrait: screenInfo.height > screenInfo.width
    }
};