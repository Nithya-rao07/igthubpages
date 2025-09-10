document.querySelectorAll('#checklist input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            this.parentElement.style.textDecoration = 'line-through';
        } else {
            this.parentElement.style.textDecoration = 'none';
        }
    });
});
