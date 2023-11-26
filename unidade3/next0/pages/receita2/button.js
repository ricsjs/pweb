export function Button() {

    function refresh() {
        window.location.reload();
    }

    return(
        <button onClick={refresh}>Tap top refresh</button>
    )
}