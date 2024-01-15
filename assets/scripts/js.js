$(document).ready(function() {
    $('.accordion').on('click', function() {
        var content = $(this).find('.checkbox-group');
        content.toggleClass('active');
        
        var arrowIcon = this.querySelector('.accordion-arrow');
        if (arrowIcon.classList.contains('fa-chevron-down')) {
            arrowIcon.classList.remove('fa-chevron-down');
            arrowIcon.classList.add('fa-chevron-right');
        } else {
            arrowIcon.classList.remove('fa-chevron-right');
            arrowIcon.classList.add('fa-chevron-down');
        }
    });
});
