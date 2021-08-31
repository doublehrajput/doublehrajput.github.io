if ("OTPCredential" in window) {
    const input = document.querySelector('input[autocomplete="one-time-code"]');
    const otpField = document.querySelector("#otp-field");

    const submit = e => { };

    window.addEventListener("DOMContentLoaded", e => {
        if (!input) return;
        const ac = new AbortController();
        const form = input.closest("form");
        if (form) {
            form.addEventListener("submit", e => {
                ac.abort();
            });
        }
        navigator.credentials
            .get({
                otp: { transport: ["sms"] },
                signal: ac.signal
            })
            .then(otp => {
                input.value = otp.code;
                if (form) {
                    // submit();
                }
            })
            .catch(err => {
                console.log(err);
            });
    });
}
