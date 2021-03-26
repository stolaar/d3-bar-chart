const config = {
    margin: function (margin) {
        return margin || {
            top: 20,
            right: 20,
            bottom: 30,
            left: 45
        }
    },
    barWidth: function (width) {
        return (width - this.margin().left) - this.margin().right
    },
    barHeight: function (height) {
        return height - this.margin().top - this.margin().bottom
    },
    bottom: function (height) {
        return height
    },
    yOffset: 6,
    primaryColor: "rgb(0,128,128)",
    axisColor: "darkgray",
    barBlockWidth: 20
}

export default config
