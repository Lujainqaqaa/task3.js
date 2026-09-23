 function changeStyle() {

            // Get elements
            let text = document.getElementById("text");

            let fontType = document.getElementById("fontType");

            let fontSize = document.getElementById("fontSize");

            let italic = document.getElementById("italic");

            let bold = document.getElementById("bold");

            let underline = document.getElementById("underline");


            // Change font type
            text.style.fontFamily = fontType.value;


            // Change font size
            text.style.fontSize = fontSize.value;


            // Italic
            if (italic.checked) {

                text.style.fontStyle = "italic";

            } else {

                text.style.fontStyle = "normal";

            }


            // Bold
            if (bold.checked) {

                text.style.fontWeight = "bold";

            } else {

                text.style.fontWeight = "normal";

            }


            // Underline
            if (underline.checked) {

                text.style.textDecoration = "underline";

            } else {

                text.style.textDecoration = "none";

            }

        }
