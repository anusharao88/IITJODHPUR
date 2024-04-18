document.addEventListener("DOMContentLoaded", function() {
    const positionFilter = document.getElementById('position-filter');
    const membersGrid = document.getElementById('members-grid');

    // Function to filter members based on selected position
    function filterMembers() {
        const selectedPosition = positionFilter.value;
        const members = document.querySelectorAll('.member');

        members.forEach(member => {
            const position = member.dataset.position;

            if (selectedPosition === 'all' || position === selectedPosition) {
                member.style.display = 'block';
            } else {
                member.style.display = 'none';
            }
        });
    }

    // Event listener for filter change
    positionFilter.addEventListener('change', filterMembers);

    // Initial call to filter members
    filterMembers();
});
