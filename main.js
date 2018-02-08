var qrcode = new QRCode(document.getElementById("qrcode"), {
	width: 256,
    height: 256,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

function makeCode () {

	var input_text = document.getElementById("input-text");
	
	if (!input_text.value) {
		alert("Input a text");
		input_text.focus();
		return;
	}
	qrcode.clear(); 
	qrcode.makeCode(input_text.value);
}

makeCode();
