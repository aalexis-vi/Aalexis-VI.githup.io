/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);
  
    
    
 function showPopup(element) {
        const card = element.closest('.card-people');
        const popupTitle = card.getAttribute('data-popup-title');
        const popupText = card.getAttribute('data-popup-text');
        document.getElementById('popup-title').textContent = popupTitle;
        document.getElementById('popup-text').textContent = popupText;
        const popup = document.getElementById('popup-container');
        popup.style.display = 'flex';
        setTimeout(() => popup.classList.add('active'), 10);
    }

    function closePopup() {
        const popup = document.getElementById('popup-container');
        popup.classList.remove('active');
        setTimeout(() => popup.style.display = 'none', 300);
    }

    function followPerson() {
        alert('Following this person...');
    }

    function showPopup1(element) {
        showPopup(element);
    }

    function showPopup2(element) {
        showPopup(element);
    }

    function showPopup3(element) {
        showPopup(element);
    }

    function showPopup4(element) {
        showPopup(element);
    }

    function showPopup5(element) {
        showPopup(element);
    }

    function showPopup6(element) {
        showPopup(element);
    }
   function showPopup7(element) {
        showPopup(element);
    }

    function showPopup8(element) {
        showPopup(element);
    }

    function showPopup9(element) {
        showPopup(element);
    }

    function showPopup10(element) {
        showPopup(element);
    }

    function showPopup11(element) {
        showPopup(element);
    }

    function showPopup12(element) {
        showPopup(element);
    }
    function showPopup13(element) {
        showPopup(element);
    }
    
    window.onclick = function(event) {
        const popup = document.getElementById('popup-container');
        if (event.target === popup) {
            closePopup();
        }
    };
    
    //Truncate text
      function truncateParagraph(id, wordLimit) {
        const element = document.getElementById(id);
        const text = element.textContent;
        const words = text.split(' ');

        if (words.length > wordLimit) {
            const truncatedText = words.slice(0, wordLimit).join(' ') + '...';
            element.textContent = truncatedText;
        }
    }

    // Limitar cada párrafo a 15 palabras
    truncateParagraph('paragraph1', 15);
    truncateParagraph('paragraph2', 15);
    truncateParagraph('paragraph3', 15);
    truncateParagraph('paragraph4', 15);
    truncateParagraph('paragraph5', 15);
    truncateParagraph('paragraph6', 15);
    truncateParagraph('paragraph7', 15);
    truncateParagraph('paragraph8', 15);
    truncateParagraph('paragraph9', 15);
    truncateParagraph('paragraph10', 15);
    truncateParagraph('paragraph11', 15);
    truncateParagraph('paragraph12', 15);
    truncateParagraph('paragraph13', 15);
