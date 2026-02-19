let qrcode = null;

    function generateQR() {
        const url = document.getElementById('url-input').value.trim();
        const container = document.getElementById('qrcode-container');
        const qrElement = document.getElementById('qrcode');

        if (!url) return;

        // Clear and show
        qrElement.innerHTML = "";
        container.classList.remove('hidden');

        // Generate
        qrcode = new QRCode(qrElement, {
            text: url,
            width: 220,
            height: 220,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
        }

        function downloadQR() {
            const img = document.querySelector('#qrcode img');
            if (img) {
                const link = document.createElement('a');
                link.href = img.src;
                link.download = 'my-qr-code.png';
                link.click();
            }
}