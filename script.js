window.onload = () => {
    let testEntityAdded = false;

    const el = document.querySelector("[gps-new-camera]");

    el.addEventListener("gps-camera-update-position", e => {
        if(!testEntityAdded) {
            alert(`Got first GPS position: on ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);
        }
        testEntityAdded = true;
    });
};
