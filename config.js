module.exports = {
    "source": ["src/pixel.tokens.json"],
    "platforms": {
        "css": {
            "transformGroup": "css",
            "buildPath": "dist/css/",
            "files": [
                {
                    "destination": "tokens.css",
                    "format": "css/variables",
                    "options": {
                        "outputReferences": true
                    }
                }
            ]
        },
        "scss": {
            "transformGroup": "scss",
            "buildPath": "dist/css/",
            "files": [
                {
                    "destination": "_tokens.scss",
                    "format": "scss/variables",
                    "options": {
                        "outputReferences": true
                    }
                }
            ]
        }
    }
};