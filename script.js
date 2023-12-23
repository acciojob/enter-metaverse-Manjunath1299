 function updateContent(){
            var statusElement = document.getElementById('status');

            // Change the tag to <h1>
            var h1Element = document.createElement('h1');
            h1Element.id = 'status';
            h1Element.textContent = 'Entered Metaverse';

            // Replace the <p> with the new <h1>
            statusElement.parentNode.replaceChild(h1Element, statusElement);
        }