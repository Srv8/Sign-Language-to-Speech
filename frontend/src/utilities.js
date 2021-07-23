// Define our labelmap
const synth = window.speechSynthesis;
const labelMap = {
    1: { name: 'Hello', color: 'red' },
    2: { name: 'Yes', color: 'yellow' },
    3: { name: 'Thank you', color: 'lime' },
    4: { name: 'I love you', color: 'purple' },
}

// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx) => {
    for (let i = 0; i <= boxes.length; i++) {
        if (boxes[i] && classes[i] && scores[i] > threshold) {
            // Extract variables
            //const [y, x, height, width] = boxes[i]
            const text = classes[i]
            const speech = [labelMap[text]['name']]
            console.log(speech)
                // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'

            // DRAW!!
            //ctx.beginPath()
            //ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i] * 100) / 100, x * imgWidth, y * imgHeight - 10)
            //ctx.rect(x * imgWidth, y * imgHeight, width * imgWidth / 2, height * imgHeight / 1.5)
            //ctx.stroke()

            //SPEECH
            speech.forEach(talk => {
                var toSpeak = new SpeechSynthesisUtterance(talk)
                toSpeak.onerror = e => {
                    console.error('Something went wrong')
                };
                synth.speak(toSpeak);
            });

        }
    }
}