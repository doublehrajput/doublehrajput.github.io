if ('OTPCredential' in window) {
    window.addEventListener('DOMContentLoaded', e => {
        const input = document.querySelector('#otp');
        if (!input) return;
        const ac = new AbortController();
        navigator.credentials.get({
            otp: { transport: ['sms'] },
        }).then(otp => {
            alert(otp)
            input.value = otp.code;
        }).catch(err => {
            try {
                alert(typeof err)
                alert(JSON.stringify(err))
                alert(err);
            } catch (error) {
                alert(err)
            }
        });
    });
} else {
    alert("OTPCredential is not window")
}