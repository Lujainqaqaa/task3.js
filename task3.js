 // getElementById()
        let nameInput = document.getElementById("customerName");

        let orderSelect = document.getElementById("order");

        let button = document.getElementById("submitBtn");

        let result = document.getElementById("result");


        // getElementsByTagName()
        let labels = document.getElementsByTagName("label");

        console.log(labels);


        // getElementsByClassName()
        let container = document.getElementsByClassName("container");

        console.log(container);


        // querySelector()
        let heading = document.querySelector("h1");

        console.log(heading);


        // onclick
         // getElementById()
        let nameInput = document.getElementById("customerName");

        let orderSelect = document.getElementById("order");

        let button = document.getElementById("submitBtn");

        let result = document.getElementById("result");


        // getElementsByTagName()
        let labels = document.getElementsByTagName("label");

        console.log(labels);


        // getElementsByClassName()
        let container = document.getElementsByClassName("container");

        console.log(container);


        // querySelector()
        let heading = document.querySelector("h1");

        console.log(heading);


        // onclick
        function displayOrder() {

            let customerName = nameInput.value;

            let order = orderSelect.value;

            result.innerHTML =
                "Hello " + customerName + "! Your order is " + order + ".";

        }


        // onmouseover
        function changeColor() {

            button.style.backgroundColor = "red";

        }


        // onmouseout
        function returnColor() {

            button.style.backgroundColor = "blue";

        }



        // onmouseover
        function changeColor() {

            button.style.backgroundColor = "red";

        }


        // onmouseout
        function returnColor() {

            button.style.backgroundColor = "blue";

        }





   