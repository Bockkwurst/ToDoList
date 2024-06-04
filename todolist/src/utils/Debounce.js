const updateDebounceText = debounce((text) => {
    debounceText.textContext = text;
})


export default function debounce(cb, delay= 1000){
    let timeout;

    return (...args) => {
        clearTimeout(timeout);
        setTimeout(() => {
            cb(...args);
        }, delay);
    }
}