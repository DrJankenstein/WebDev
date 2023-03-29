var popup = document.getElementById("modalBox");
var closeButton = document.getElementById("anyKey");
var center = document.getElementById("centerWrapper");
var toggleFlag = 0;

document.addEventListener("keydown", openBox);

console.log(popup);

function openBox()
{
	if (toggleFlag == 0)
	{
		popup.style.visibility = "visible";
		center.style.visibility = "hidden";
		toggleFlag = 1;
	}

	else
	{
		popup.style.visibility = "hidden";
		center.style.visibility = "visible";
	}
}
