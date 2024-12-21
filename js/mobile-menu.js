//*** SHOW MENU*/
 // Select the mobile menu, the menu button, and the close button
 let menuButton = document.getElementById('menuButton');
 let mobileMenu = document.getElementById('mobileMenu');
 let closeButton = document.getElementById('closeButton');

 // Toggle the mobile menu when the menu button is clicked
 menuButton.addEventListener('click', () => {
     mobileMenu.classList.toggle('hidden');
     closeButton.classList.remove('hidden');
     menuButton.classList.toggle('hidden');
 });

 // Close the mobile menu when the close button is clicked
 closeButton.addEventListener('click', () => {
     mobileMenu.classList.add('hidden');
     closeButton.classList.add('hidden'); 
     menuButton.classList.remove('hidden');
 });


        

       
        
