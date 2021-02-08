/*!
 *
 * E-goi - Email marketing platform
 *
 * JavaScript WebPush client
 *
 * @date 24-01-2018 11:00:01
 * @License Proprietary
 * @Version 1.0
 *
 * All rights reserved. 2018
 *
 */
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');

'use strict';
firebase.initializeApp({
    'messagingSenderId': '618087357750'
});

const messaging = firebase.messaging();


var egoiapp = {};

egoiapp.getNavigatorDetails = (function () {
    var module = {
        options: [],
        header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor],
        dataos: [
            { name: 'Windows Phone', returnName: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
            { name: 'Windows', returnName: 'Windows', value: 'Win', version: 'NT' },
            { name: 'iPhone', returnName: 'iPhone', value: 'iPhone', version: 'OS' },
            { name: 'iPad', returnName: 'iPad', value: 'iPad', version: 'OS' },
            { name: 'Kindle', returnName: 'Kindle', value: 'Silk', version: 'Silk' },
            { name: 'Android', returnName: 'Android', value: 'Android', version: 'Android' },
            { name: 'PlayBook', returnName: 'PlayBook', value: 'PlayBook', version: 'OS' },
            { name: 'BlackBerry', returnName: 'BlackBerry', value: 'BlackBerry', version: '/' },
            { name: 'Macintosh', returnName: 'MacOS', value: 'Mac', version: 'OS X' },
            { name: 'Linux', returnName: 'Linux', value: 'Linux', version: 'rv' },
            { name: 'Palm', returnName: 'Palm', value: 'Palm', version: 'PalmOS' }
        ],
        databrowser: [
            { name: 'Chrome', returnName: 'Chrome', value: 'Chrome', version: 'Chrome' },
            { name: 'Edge', returnName: 'Edge', value: 'Edge', version: 'Edge' },
            { name: 'Firefox', returnName: 'Firefox', value: 'Firefox', version: 'Firefox' },
            { name: 'Safari', returnName: 'Safari', value: 'Safari', version: 'Version' },
            { name: 'Internet Explorer', returnName: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
            { name: 'Opera', returnName: 'Opera', value: 'Opera', version: 'Opera' },
            { name: 'BlackBerry', returnName: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
            { name: 'Mozilla', returnName: 'Mozilla', value: 'Mozilla', version: 'Mozilla' }
        ],
        init: function () {
            var agent = this.header.join(' '),
                os = this.matchItem(agent, this.dataos),
                browser = this.matchItem(agent, this.databrowser),
                device = this.matchDevice();

            return { os: os, browser: browser, device: device };
        },
        matchDevice: function() {
            var device = 'desktop';
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
                device = 'mobile';
            }
            return device;
        },
        matchItem: function (string, data) {
            var i = 0,
                j = 0,
                html = '',
                regex,
                regexv,
                match,
                matches,
                version;

            for (i = 0; i < data.length; i += 1) {
                regex = new RegExp(data[i].value, 'i');
                match = regex.test(string);
                if (match) {
                    regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
                    matches = string.match(regexv);
                    version = '';
                    if (matches) { if (matches[1]) { matches = matches[1]; } }
                    if (matches) {
                        matches = matches.split(/[._]+/);
                        for (j = 0; j < matches.length; j += 1) {
                            if (j === 0) {
                                version += matches[j] + '.';
                            } else {
                                version += matches[j];
                            }
                        }
                    } else {
                        version = '0';
                    }
                    return {
                        name: data[i].returnName,
                        version: parseFloat(version)
                    };
                }
            }
            return { name: 'unknown', version: 0 };
        }
    };

    var e = module.init();

    return {
        browser: {
            name: e.browser.name,
            version: e.browser.version
        },
        os: {
            name: e.os.name,
            version: e.os.version,
        },
        device: e.device
    };
})();

messaging.setBackgroundMessageHandler(function (payload) {

    let title = "Egoi Web Push System";
    let actions = {};
    let options = {
        body: "Egoi Web Push Default Message",
        icon: "https://cdn-static.egoiapp2.com/img/egoi-default-icon.jpg",
        requireInteraction: false,
        tag: 'egoi-push',
        click_action: "https://www.e-goi.com"
    };

    if (payload !== undefined && payload.data !== undefined && payload.data.notification !== undefined) {

        payload.data.notification = JSON.parse(payload.data.notification);

        title = payload.data.notification.title !== undefined ? payload.data.notification.title : title;

        if (payload.data.egoiCustomData !== undefined) {
            payload.data.egoiCustomData = JSON.parse(payload.data.egoiCustomData);
            if(payload.data.egoiCustomData.actions !== undefined){
                actions = payload.data.egoiCustomData.actions;
            }
        }

        options = {
            body: payload.data.notification.body !== undefined ? payload.data.notification.body : options.body,
            icon: payload.data.notification.icon !== undefined ? payload.data.notification.icon : options.icon,
            requireInteraction: payload.data.egoiCustomData.requireInteraction !== undefined ? payload.data.egoiCustomData.requireInteraction : true,
            tag: payload.data.egoiCustomData.tag !== undefined ? payload.data.egoiCustomData.tag : 'egoi-push',
            click_action: payload.data.notification.click_action !== undefined ? payload.data.notification.click_action : options.click_action
        };

        if(actions.length > 0){
            options.actions = actions;
        }

        payload.data.egoiCustomData.browser = egoiapp.getNavigatorDetails.browser;
        payload.data.egoiCustomData.os = egoiapp.getNavigatorDetails.os;
        payload.data.egoiCustomData.device = egoiapp.getNavigatorDetails.device;

        // payload.data.egoiCustomData.location = {};

        options.data = {
            egoiCustomData: payload.data.egoiCustomData,
            notification_click: {
                click_action: options.click_action
            },
            webhook: payload.data.webhook !== undefined ? payload.data.webhook : ''
        };

        if(actions.length > 0){
            for (var k in actions){
                if (actions.hasOwnProperty(k)) {
                    if(actions[k].action == 'action1'){
                        options.data.notification_click.action1 = actions[k];
                    }
                    if(actions[k].action == 'action2'){
                        options.data.notification_click.action2 = actions[k];
                    }
                }
            }
        }
    }

    const trackData = {
        egoiCustomData: payload.data.egoiCustomData,
        event: "web_push_open",
        event_detail: ""
    };

    fetch(payload.data.webhook, {
        method: 'POST',
        body: JSON.stringify(trackData),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then(response => console.log('Success:', response))
    .catch(error => console.error('Error:', error));
    
    return self.registration.showNotification(title, options);
});


self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    let urlFinal = '';
    if(event.action == 'action1'){
        urlFinal = event.notification.data.notification_click.action1.link;
    } else if(event.action == 'action2'){
        urlFinal = event.notification.data.notification_click.action2.link;
    } else {
        urlFinal = event.notification.data.notification_click.click_action;
    }

    var trackData = {
        egoiCustomData: event.notification.data.egoiCustomData,
        event: "web_push_click",
        event_detail: urlFinal
    };


    fetch(event.notification.data.webhook, {
        method: 'POST',
        body: JSON.stringify(trackData),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then(response => {
        console.log('Success:', response.status)
        console.log('Success:', response)
    })
    .catch(error => console.error('Error:', error));

    event.waitUntil(clients.matchAll({
        type: "window"
    }).then(function(clientList) {
        for (var i = 0; i < clientList.length; i++) {
            var client = clientList[i];
            if (client.url == '/' && 'focus' in client)
                return client.focus();
        }
        if (clients.openWindow)
            return clients.openWindow(urlFinal);
    }));
});
