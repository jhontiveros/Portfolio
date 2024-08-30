export const disableVideoControls = (ids) => {
    ids.forEach((id) => {
        document.getElementById(id).controls = false;
    });
}