"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getEnvironmentConfig() {
    const mode = "development" || 'development';
    switch (mode) {
        case 'development': return {
            IS_DEV: true
        };
        case 'staging': return {
            IS_DEV: false
        };
        default: return {
            IS_DEV: true
        };
    }
}
exports.default = getEnvironmentConfig();
