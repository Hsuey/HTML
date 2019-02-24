

            $(function(){
                var Chart = echarts.init($("#ch")[0]);
                var option = {
                   title: {
                       text: '动态数据',
                       subtext: '纯属虚构'
                   },
                   tooltip: {
                       trigger: 'axis',
                       axisPointer: {
                           type: 'cross',
                           label: {
                               backgroundColor: '#283b56'
                           }
                       }
                   },
                   legend: {
                       data:['学习注意力点数', '学习热情指数']
                   },
                   toolbox: {
                       show: true,
                       feature: {
                           dataView: {readOnly: false},
                           restore: {},
                           saveAsImage: {}
                       }
                   },
                   dataZoom: {
                       show: false,
                       start: 0,
                       end: 100
                   },
                   xAxis: [
                       {
                           type: 'category',
                           boundaryGap: true,
                           data: (function (){
                               var now = new Date();
                               var res = [];
                               var len = 10;
                               while (len--) {
                                   res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                                   now = new Date(now - 2000);
                               }
                               return res;
                           })()
                       },
                       {
                           type: 'category',
                           boundaryGap: true,
                           data: (function (){
                               var res = [];
                               var len = 10;
                               while (len--) {
                                   res.push(10 - len - 1);
                               }
                               return res;
                           })()
                       }
                   ],
                   yAxis: [
                       {
                           type: 'value',
                           scale: true,
                           name: '学习注意力点数',
                           max: 30,
                           min: 0,
                           boundaryGap: [0.2, 0.2]
                       },
                       {
                           type: 'value',
                           scale: true,
                           name: '学习热情指数',
                           max: 1200,
                           min: 0,
                           boundaryGap: [0.2, 0.2]
                       }
                   ],
                   series: [
                       {
                           name:'学习热情指数',
                           type:'bar',
                           xAxisIndex: 1,
                           yAxisIndex: 1,
                           data:(function (){
                               var res = [];
                               var len = 10;
                               while (len--) {
                                   res.push(Math.round(Math.random() * 1000));
                               }
                               return res;
                           })()
                       },
                       {
                           name:'学习注意力点数',
                           type:'line',
                           data:(function (){
                               var res = [];
                               var len = 0;
                               while (len < 10) {
                                   res.push((Math.random()*10 + 5).toFixed(1) - 0);
                                   len++;
                               }
                               return res;
                           })()
                       }
                   ]
               };
               
               var app = {
                 count: 11,
               }
               setInterval(function (){
                   axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
               
                   var data0 = option.series[0].data;
                   var data1 = option.series[1].data;
                   data0.shift();
                   data0.push(Math.round(Math.random() * 1000));
                   data1.shift();
                   data1.push((Math.random() * 10 + 5).toFixed(1) - 0);
               
                   option.xAxis[0].data.shift();
                   option.xAxis[0].data.push(axisData);
                   option.xAxis[1].data.shift();
                   option.xAxis[1].data.push(app.count++);
               
                   Chart.setOption(option);
               }, 2100);
            })
            
            $(function () {
                    // 基于准备好的dom，初始化echarts实例
                    //左边的图表
                    var leftChart = echarts.init($("#leftcharts")[0]);
                    var leftoption = {
                        color: ['#3398DB'],
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                            }
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis: [
                            {
                                type: 'category',
                                data: ['C语言', '程序设计', '绘画基础', '数媒实践', '数媒导论', '高数', '大学英语'],
                                axisTick: {
                                    alignWithLabel: true
                                }
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value'
                            }
                        ],
                        series: [
                            {
                                name: '一周学习时间',
                                type: 'bar',
                                barWidth: '60%',
                                data: [10, 15, 6, 18, 5, 6, 4]
                            }
                        ]
                    };
                    leftChart.setOption(leftoption);
        
                    //右边的图表
                    var rightChart = echarts.init($("#rightcharts")[0]);
                    var rightoption = {
                        angleAxis: {
                    type: 'category',
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    z: 10
                },
                radiusAxis: {
                },
                polar: {
                },
                series: [{
                    type: 'bar',
                    data: [1, 2, 1, 1, 3, 4, 2],
                    coordinateSystem: 'polar',
                    name: '娱乐',
                    stack: 'a'
                }, {
                    type: 'bar',
                    data: [8, 7, 6, 7, 6, 9, 12],
                    coordinateSystem: 'polar',
                    name: '休息',
                    stack: 'a'
                }, {
                    type: 'bar',
                    data: [10, 12, 12, 11, 9, 4, 3],
                    coordinateSystem: 'polar',
                    name: '学习',
                    stack: 'a'
                }],
                legend: {
                    show: true,
                    data: ['娱乐', '休息', '学习']
                }
            }; 
            rightChart.setOption(rightoption);
                });  

                