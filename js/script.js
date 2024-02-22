// Browse dom elements
const $mainButton = document.querySelector(".main-button");
const $modal = document.querySelector(".modal");
const $modalButtonSubscribe = document.querySelector(".modal-button-subscribe");
const $modalButtonClose = document.querySelector(".modal-button-close");

// Show modal
$mainButton.onclick = function() {
    $modal.showModal();
}

// Close modal
$modalButtonSubscribe.onclick = function() {
    $modal.close();
}

// Close modal
$modalButtonClose.onclick = function() {
    $modal.close();
}