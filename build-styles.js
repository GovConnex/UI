
function getStyleDictionaryConfig(theme) {
    return {
        "source": [
            `src/theming/tokens-style-dictionary/${theme}.json`
        ],
        "platforms": {
            "js": {
                "transformGroup": "js",
                "buildPath": `src/theming/tokens-output/`,
                "files": [{
                    "format": "json/nested",
                    "destination": `${theme}.json`,
                    "filter": {
                        "attributes": {"category": 'color'}
                    }
                }]
            },
        }
    };
}


['base', 'light', 'dark'].map(function (theme) {
    const StyleDictionary = require('style-dictionary').extend(getStyleDictionaryConfig(theme));
    StyleDictionary.buildPlatform('js');
});