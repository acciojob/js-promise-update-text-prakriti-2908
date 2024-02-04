//your JS code here. If required.
  function delayedHello() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve('Hello, world!');
                }, 1000); // 1000 milliseconds = 1 second
            });
        }

        async function updateText() {
            try {
                const result = await delayedHello();
                document.getElementById('output').innerText = result;
            } catch (error) {
                console.error(error);
            }
        }

        // Call the function to update the text after the promise resolves
        updateText();