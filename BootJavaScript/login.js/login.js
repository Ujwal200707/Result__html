
        function login() {
            const username = document.getElementById('txtusername').value;
            const password = document.getElementById('txtpassword').value;

            if(username === "admin" && password === "1234") {
                alert("Login successful!");
            } else {
                alert("Invalid username or password");
            }
        }
