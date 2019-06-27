function getEnvironmentConfig() {
    const mode = process.env.NODE_ENV;
    switch(mode) {
        case 'development': return {
            IS_DEV: true
        }
        case 'staging': return {
            IS_DEV: false
        }
        default: return {
            IS_DEV: true
        }
    }
}

export default getEnvironmentConfig();