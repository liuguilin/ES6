const drawing = document.getElementById("drawing");

if (drawing) {
    const context = drawing.getContext("2d");
    /*
     * 绘制圆
     */
    // context.beginPath();
    // context.arc(100, 100, 99, 0, 2 * Math.PI, false);
    // //绘制外圆
    // context.arc(100, 100, 99, 0, 2 * Math.PI, false);
    // //绘制内圆
    // context.moveTo(194, 100);
    // context.arc(100, 100, 94, 0, 2 * Math.PI, false);

    // //变换原点
    // context.translate(100, 100);

    // //旋转表针
    // context.rotate(Math.PI);

    // //绘制分针
    // context.moveTo(0, 0);
    // context.lineTo(0, -80);

    // //绘制时针
    // context.moveTo(0, 0);
    // context.lineTo(-65, 0);

    // if (context.isPointInPath(50, 100)) {
    //     console.log("坐标上");
    // }
    // context.stroke();

    /*
     * 绘制矩形
     */
    // context.fillStyle = "#ff0000";
    // context.font = "blod 40px Arial";
    // context.fillText("200", 100, 20);
    // context.save();

    // context.fillStyle = "#00ff00";
    // context.translate(100, 20);
    // context.fillText("200", 0, 20);
    // context.save();

    // context.fillStyle = "#0000ff";
    // context.fillRect(0, 40, 100, 20);

    // context.restore();
    // context.fillRect(0, 80, 100, 20);

    // context.restore();
    // context.fillRect(100, 140, 100, 20);

    /*
     *绘制图像
     */
    // const image = document.images[0];
    // context.drawImage(image, 10, 10, 100, 100, 50, 20, 50, 50);

    /*
     *阴影
     */
    // context.shadowIffsetX = 5;
    // context.shadowIffsetY = 5;
    // context.shadowBlur = 10;
    // context.shadowColor = "rgba(0,0,0,0.5)";

    // context.fillStyle = "#ff0000";
    // context.fillRect(10, 10, 50, 50);

    // context.fillStyle = "rgba(0,0,255,1)";
    // context.fillRect(30, 30, 50, 50);

    /*
     * 渐变
     */
    // const gradient = context.createLinearGradient(30, 30, 70, 70); //渐变矩形
    // const gradient = context.createRadialGradient(55, 55, 10, 55, 55, 30); //径向渐变 同心圆
    // gradient.addColorStop(0, "white");
    // gradient.addColorStop(1, "black");
    // context.fillStyle = "#ff0000";
    // context.fillRect(10, 10, 50, 50);
    // context.fillStyle = gradient;
    // context.fillRect(30, 30, 50, 50);

    /*
     * 模式
     */
    // const image = document.images[0];
    // const pattern = context.createPattern(image, "repeat");
    // context.fillStyle = pattern;
    // context.fillRect(0, 0, 300, 300);
    const imageData = context.getImageData(10, 5, 50, 50);
    console.log(
        "imageData =",
        imageData.data[0],
        imageData.data[1],
        imageData.data[2],
        imageData.data[3]
    );
}
