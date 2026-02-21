export function formatDate(date) {
    if (!date){
        return "N/A"
    }

    return new Date(date).toLocaleDateString()
}