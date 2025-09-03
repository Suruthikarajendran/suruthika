<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clock</title>
    <style>
        body {
            background-color: rgb(8, 8, 8); 
            color: rgb(255, 0, 0);            
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;             
            margin: 0;
            font-family: Arial, sans-serif;
        }

        #clock {
           
    font-size: 3rem;
    text-align: center;
    padding: 20px 40px;
    background-color: rgb(12, 12, 12);
    border-radius: 10px;
    box-shadow: 0 0px 30px rgba(239, 5, 5, 0.5);

    }
    </style>
</head>
<body>
    <div id="clock">Loading...</div>

    <script>
        function updateClock() {
            const now = new Date();

            let hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const ampm = hours >= 12 ? 'pm' : 'am';

            hours = hours % 12;
            hours = hours ? hours : 12;

            const hh = String(hours).padStart(2, '0');
            const mm = String(minutes).padStart(2, '0');
            const ss = String(seconds).padStart(2, '0');

            const timeString = `${hh}:${mm}:${ss} ${ampm}`;
            document.getElementById("clock").innerText = timeString;
        }

        updateClock();
        setInterval(updateClock, 1000);
    </script>
</body>
</html>
