// Toggle dropdown visibility
document.querySelector('.custom-dropdown-btn').addEventListener('click', function() 
{
    this.parentElement.classList.toggle('show');
});

    // Close dropdown if clicked outside
window.onclick = function(event) 
{
    if (!event.target.matches('.custom-dropdown-btn')) 
    {
        var dropdowns = document.getElementsByClassName("custom-dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) 
        {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') 
            {
                openDropdown.style.display = 'none';
            }
        }
    }
};