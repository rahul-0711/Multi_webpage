document.addEventListener('DOMContentLoaded', () => {
    // Editing image functionality
    const profilePic = document.getElementById('profile-pic');
    const profilePicInput = document.getElementById('profile-pic-input');

    function editImage() {
        profilePicInput.click();
    }

    profilePicInput.addEventListener('change', () => {
        const file = profilePicInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                profilePic.src = reader.result;
            };
            reader.readAsDataURL(file);
        }
    });

    window.editImage = editImage;

    // Editing field functionality
    function editField(fieldId) {
        const field = document.getElementById(fieldId);
        field.removeAttribute('readonly');
        field.focus();
        field.style.backgroundColor = '#fff';
    }

    window.editField = editField;

    // Save changes functionality
    function saveChanges() {
        const fields = ['name', 'email', 'phone', 'dob'];
        fields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            field.setAttribute('readonly', true);
            field.style.backgroundColor = '#E0BFE6';
        });
        alert('Changes saved!');
    }

    window.saveChanges = saveChanges;

    // Cancel changes functionality
    function cancelChanges() {
        const fields = ['name', 'email', 'phone', 'dob'];
        fields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            field.setAttribute('readonly', true);
            field.style.backgroundColor = '#E0BFE6';
            // Reset values to original (in a real application, you would reload the original data)
            if (fieldId === 'name') field.value = 'John Doe';
            if (fieldId === 'email') field.value = 'example@gmail.com';
            if (fieldId === 'phone') field.value = '9134837948';
            if (fieldId === 'dob') field.value = 'July 16, 1999';
        });
        alert('Changes canceled!');
    }

    window.cancelChanges = cancelChanges;
});
