import "./style.css";

async function init() {
    const notificationPermissions = await Notification.requestPermission();

    switch (notificationPermissions) {
        case "granted": {
            console.log("Notification granted");
            break;
        }
        case "denied": {
            console.log("Notification denied");
            break;
        }
        default: {
            console.log("Default...");
        }
    }

    const notification = new Notification("www.lovestick.com", {
        body: "From James: Hi sandra, do not forget about... ",
        icon: "https://www.freeiconspng.com/thumbs/heart-icon/valentine-heart-icon-6.png"
    });

    notification.addEventListener("click", (e) => {
        window.parent.focus();
        notification.close();
    })
}

if ("Notification" in window) {
    init();
}