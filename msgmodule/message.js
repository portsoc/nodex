module.exports = {
    /*
     * @parameters message: a string to be reversed
     * @return a string
     */
    reverse: function(message) {
        return message.split("").reverse().join("");
    },

    /*
     * @parameters message: a string to be
     * padded with space between each character.
     * @return a string
     */
    addSpace: function(message) {
        return message.split("").join(" ");
    }

};

function x() {
    console.log("yo");
}
