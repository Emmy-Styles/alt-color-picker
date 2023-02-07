import { ref } from "@vue/reactivity";

const ColorPickerComponent = () => {
    const colors = ["green", "blue", "red", "orange"];
    let message = ref("pick a color...");


    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (colors[randomNumber] === value) {
        message.value = `You win...[answer: ${colors[randomNumber]}]`;
        return;
    }

    message.value = `You lose [answer: ${colors[randomNumber]}]`;

    return { colors, message, matchColor };
};


export default ColorPickerComponent;