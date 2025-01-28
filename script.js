//your JS code here. If required.
 function getSize() {
            const width = document.documentElement.clientWidth;
            const height = document.documentElement.clientHeight;
            document.getElementById('sizeInfo').innerHTML = `<h1>Width: ${width} and Height: ${height}</h1>`;
        }
        window.addEventListener("resize", getSize);