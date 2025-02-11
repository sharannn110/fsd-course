function EventHandling(){
    function handleclick(){
        alert('button clicked');
    }
    return <button on click={handleclick} >click me</button>
}
export default EventHandling;