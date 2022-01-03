// Functions here are unused either because it either:
// --- wasnt straight forward to include files from the same local host and therefore difficult to test 
// --- or the thing didnt look as good in execution

// This function displays cards that contain the cardFilterInput in their class name -->
function FilterCardsByClassTag(cardFilterInput) 
{		
	var cardContainer = document.getElementById('AllCards');
	var allCards = cardContainer.getElementsByClassName('card');

	for (var i = 0; i < allCards.length; i++) {
		if (allCards[i].classList.contains(cardFilterInput)) {
			allCards[i].style.display = "";
		} else {
			allCards[i].style.display = "none";
		}
	}
}


// This function is supposed to load in html files into another html file
// Reference: https://github.com/LexmarkWeb/csi.js/blob/master/src/csi.js and the overall git repo is https://github.com/LexmarkWeb/csi.js
window.onload = function() 
{
    var elements = document.getElementsByTagName('*');
    var i;
    for (i in elements) 
    {
        if (elements[i].hasAttribute && elements[i].hasAttribute('data-include')) 
        {
            fragment(elements[i], elements[i].getAttribute('data-include'));
        }
    }

    function fragment(el, url) 
    {
        var localTest = /^(?:file):/,
            xmlhttp = new XMLHttpRequest(),
            status = 0;

        xmlhttp.onreadystatechange = function() 
        {
            /* if we are on a local protocol, and we have response text, we'll assume things were sucessful */
            if (xmlhttp.readyState == 4) 
            {
                status = xmlhttp.status;
            }
            if (localTest.test(location.href) && xmlhttp.responseText) 
            {
                status = 200;
            }
            if (xmlhttp.readyState == 4 && status == 200) 
            {
                el.outerHTML = xmlhttp.responseText;
            }
        }

        try 
        { 
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
        } 
        catch(err) 
        {
            /* todo catch error */
        }
    }
}