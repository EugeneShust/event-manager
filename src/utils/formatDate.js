// Utility Module: Provides helper function to format dates.
function date() {
    return new Date().format('Y-m-d' + 'T' + 'h:i:s');
}

export { date };
