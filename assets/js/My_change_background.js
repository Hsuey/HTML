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
        bodyBgs[7] = "./assets/images/background/07.jpg";
        bodyBgs[8] = "./assets/images/background/08.jpg";
        bodyBgs[9] = "./assets/images/background/09.jpg";
        bodyBgs[10] = "./assets/images/background/10.jpg";
        bodyBgs[11] = "./assets/images/background/11.jpg";
        bodyBgs[12] = "./assets/images/background/12.jpg";
        bodyBgs[13] = "./assets/images/background/13.jpg";
        bodyBgs[14] = "./assets/images/background/14.jpg";
        bodyBgs[15] = "./assets/images/background/15.jpg";
        bodyBgs[16] = "./assets/images/background/16.jpg";
        bodyBgs[17] = "./assets/images/background/17.jpg";
        bodyBgs[18] = "./assets/images/background/18.jpg";
        bodyBgs[19] = "./assets/images/background/19.jpg";
        bodyBgs[20] = "./assets/images/background/20.jpg";
        bodyBgs[21] = "./assets/images/background/21.jpg";
        bodyBgs[22] = "./assets/images/background/22.jpg";
        bodyBgs[23] = "./assets/images/background/23.jpg";
        bodyBgs[24] = "./assets/images/background/24.jpg";
        bodyBgs[25] = "./assets/images/background/25.jpg";
        bodyBgs[26] = "./assets/images/background/26.jpg";
        
        var randomBgIndex = Math.round( Math.random() * 26 );

    //输出随机的背景图
        document.write('<style>body{background:url(' + bodyBgs[randomBgIndex] + ') no-repeat 50% 0}</style>');
        document.body.style.backgroundSize="100% 100%";
        document.body.style.backgroundAttachment="fixed";
    //]]>
    // </script>