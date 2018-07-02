var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function () {
        // Setting the HTML illustration code
        var illustration = '<img id=\"i-f-g-i-z-illustration\" src=\"https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/zero/1x/ic_zero_inbox.png\" />';
        
        // Getting the Inbox Zero message parent
        var message = document.querySelector('.DVI7hd');

        // Checking against unavailability or already implemented illustration
        if (message == null || message.querySelector('#i-f-g-i-z-illustration') != null) {
            return;
        }

        // Implementing the illustration        
        message.style.textAlign = 'center';
        message.innerHTML = illustration;
    });
});

observer.observe(document.body, { attributes:true, subtree: true });
  