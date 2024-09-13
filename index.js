var toggleButton = document.getElementById('togglebutton');
var skillsDiv = document.getElementById('skillsDiv');
if (toggleButton && skillsDiv) {
    // Set initial button text based on the initial visibility state of skillsDiv
    toggleButton.textContent = skillsDiv.style.display === 'none' ? 'Show Skills' : 'Hide Skills';
    toggleButton.addEventListener('click', function () {
        if (skillsDiv.style.display === 'none') {
            skillsDiv.style.display = 'block';
            toggleButton.textContent = 'Hide Skills';
        }
        else {
            skillsDiv.style.display = 'none';
            toggleButton.textContent = 'Show Skills';
        }
    });
}
else {
    console.error('Required elements are not found in the DOM.');
}
