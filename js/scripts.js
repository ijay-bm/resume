const body = document.body,
	style1 = document.getElementById("style-1"),
	style2 = document.getElementById("style-2");

function onInput({ srcElement }) {
	if (srcElement.id == "style-1") {
		body.classList.add("style-1");
		body.classList.remove("style-2");
	} else {
		body.classList.remove("style-1");
		body.classList.add("style-2");
	}
}

// setTimeout(function () {
// 	style1.click();
// 	// style2.checked = !style2.checked;
// }, 1000);
