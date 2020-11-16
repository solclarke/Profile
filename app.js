// Add and remove the Bootstrap 'active' class when each nav-item is clicked
$(".nav-item").on("click", function (e) {
  $(".nav-item").removeClass("active");
  $(this).addClass("active");
});

// On small devices - Collapses the navbar when each nav-item is clicked
$(".navbar-collapse").on("click", function (e) {
  $(".navbar-collapse").collapse("hide");
});

// Individual tab border and content:
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
	removeBorder();
	removeShow();
	// Add border to current tab
  this.classList.add('tab-border');
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);	// Add show class
  tabContentItem.classList.add('show');
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));