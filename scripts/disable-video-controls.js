export const disableVideoControls = (ids) => {
    ids.forEach((id) => {
        let element = document.getElementById(id)
        if (element) element.controls = false;
    });
}