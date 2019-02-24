// {/* <script type="text/javascript"> */}
    //<!CDATA[
        var bodyBgs = [];
        bodyBgs[0] = "./assets/images/background/00.jpg";
        bodyBgs[1] = "./assets/images/background/01.jpg";
        bodyBgs[2] = "./assets/images/background/02.jpg";
        bodyBgs[3] = "./assets/images/background/03.jpg";
        bodyBgs[4] = "./assets/images/background/04.jpg";
        bodyBgs[5] = "./assets/images/background/05.jpg";
        bodyBgs[6] = "./assets/images/background/06.jpg";
        
        var randomBgIndex = Math.round( Math.random() * 6 );

    //输出随机的背景图
        document.write('<style>body{background:url(' + bodyBgs[randomBgIndex] + ') no-repeat 50% 0}</style>');
        document.body.style.backgroundSize="100% 100%";
        document.body.style.backgroundAttachment="fixed";
    //]]>
    // </script>