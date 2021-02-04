// Initialises firebase

var config = _egoiwp.firebaseConfig;

firebase.initializeApp(config);
var messaging = firebase.messaging();
var database = firebase.database();

// On load register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/firebase-messaging-sw.js').then((registration) => {
            // Successfully registers service worker
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
            console.log(registration);
        })
            .then(() => {
                // Requests user browser permission
                return messaging.requestPermission();
            })
            .then(() => {
                // Gets token
                return messaging.getToken();
            })
            .then((token) => {
                console.log(token);
            })
            .catch((err) => {
                console.log('ServiceWorker registrationw failed: ', err);

            });
    });

    function writeUserData(id, browser, token, date) {
        firebase.database().ref('users/' + id).set({
            token: token,
            client: browser,
            created_at: date
        }, function (error) {
            if (error) {
                console.log(error);
            } else {
                console.log('ok');
            }
        });
    }

    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    function getBrowser() {
        return navigator ? navigator.userAgent.toLowerCase() : "other";
    }

}
